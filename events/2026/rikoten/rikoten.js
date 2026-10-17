(() => {
  "use strict";
  const menu = document.querySelector('.hamburger');
  const navigation = document.querySelector('.header__navigation');
  const setMenu = (open) => {
    menu.classList.toggle('is-active', open);
    navigation.classList.toggle('is-open', open);
    menu.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-label', open ? 'メニューを閉じる' : 'メニューを開く');
  };
  menu.addEventListener('click', () => setMenu(menu.getAttribute('aria-expanded') !== 'true'));
  navigation.addEventListener('click', (event) => { if (event.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') { setMenu(false); menu.focus(); }
  });
  window.matchMedia('(min-width: 700px)').addEventListener('change', () => setMenu(false));

  const data = window.rikotenData;
  if (!data) {
    document.getElementById('poster-count').textContent = 'ポスター情報を読み込めませんでした。再読み込みしてください。';
    return;
  }
  for (const field of ['date', 'location', 'room']) {
    document.getElementById(`event-${field}`).textContent = data.event[field];
  }
  document.getElementById('venue-map').src = data.event.mapEmbedUrl || `https://maps.google.com/maps?q=${encodeURIComponent(data.event.location)}&output=embed`;
  const sampleNotice = document.getElementById('sample-notice');
  if (sampleNotice) sampleNotice.hidden = !data.posters.some(poster => poster.sample);
  const postersPublic = data.publication?.postersPublic === true;
  const publicationNotice = document.getElementById('publication-notice');
  if (publicationNotice) publicationNotice.hidden = postersPublic;
  const grid = document.getElementById('poster-grid');
  const filters = document.getElementById('filters');
  const element = (tag, className, text) => {
    const node = document.createElement(tag);
    node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  };
  const dialog = document.getElementById('pdf-preview');
  dialog.hidden = !postersPublic;
  const viewerPages = document.getElementById('pdf-preview-pages');
  const viewerStatus = document.getElementById('pdf-preview-status');
  const viewerParts = document.getElementById('pdf-preview-parts');
  const viewerDownload = document.getElementById('pdf-preview-download');
  let pdfModule;
  let loadingTask;
  let renderTask;
  let renderVersion = 0;
  let opener;
  const stopRendering = () => {
    renderVersion++;
    renderTask?.cancel();
    renderTask = undefined;
    loadingTask?.destroy();
    loadingTask = undefined;
  };
  const setDownload = (link, pdf) => {
    const url = new URL(pdf, document.baseURI);
    url.hash = '';
    link.href = url.href;
    link.download = decodeURIComponent(url.pathname.split('/').pop());
  };
  const renderPDF = async (poster, parts, index) => {
    stopRendering();
    const version = renderVersion;
    const part = parts[index];
    const label = part.label || `${index + 1}枚目`;
    setDownload(viewerDownload, part.pdf);
    viewerParts.querySelectorAll('button').forEach((button, i) => button.setAttribute('aria-pressed', String(i === index)));
    viewerPages.replaceChildren();
    viewerPages.scrollTop = 0;
    viewerPages.setAttribute('aria-busy', 'true');
    viewerStatus.textContent = 'PDFを読み込んでいます…';
    try {
      // プレビューを開くまでPDF.jsもPDF本体も読み込みません。
      pdfModule ||= import('./vendor/pdfjs/pdf.mjs');
      const pdfjs = await pdfModule;
      if (version !== renderVersion) return;
      pdfjs.GlobalWorkerOptions.workerSrc = new URL('./vendor/pdfjs/pdf.worker.mjs', document.baseURI).href;
      const pdfURL = new URL(part.pdf, document.baseURI);
      const initialPage = Math.max(1, Number(new URLSearchParams(pdfURL.hash.slice(1)).get('page')) || 1);
      pdfURL.hash = '';
      const resources = new URL('./vendor/pdfjs/', document.baseURI).href;
      loadingTask = pdfjs.getDocument({ url: pdfURL.href, cMapUrl: resources + 'cmaps/', cMapPacked: true, standardFontDataUrl: resources + 'standard_fonts/', wasmUrl: resources + 'wasm/', iccUrl: resources + 'iccs/' });
      const pdf = await loadingTask.promise;
      if (version !== renderVersion) return;
      for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber++) {
        const page = await pdf.getPage(pageNumber);
        if (version !== renderVersion) return;
        const pageElement = element('div', 'pdf-rendered-page');
        pageElement.dataset.page = pageNumber;
        const canvas = element('canvas', '');
        canvas.setAttribute('role', 'img');
        canvas.setAttribute('aria-label', `${poster.title}・${parts.length > 1 ? label + '・' : ''}PDF ${pageNumber}ページ目。テキストを読む場合はPDFをダウンロードしてください。`);
        const baseViewport = page.getViewport({ scale: 1 });
        const displayWidth = Math.max(240, Math.min(1100, viewerPages.clientWidth - 40));
        const viewport = page.getViewport({ scale: displayWidth / baseViewport.width * Math.min(window.devicePixelRatio || 1, 1.5) });
        canvas.width = Math.ceil(viewport.width);
        canvas.height = Math.ceil(viewport.height);
        pageElement.append(element('p', 'pdf-page-number', `${pageNumber} / ${pdf.numPages}`), canvas);
        viewerPages.append(pageElement);
        renderTask = page.render({ canvasContext: canvas.getContext('2d'), viewport });
        await renderTask.promise;
        if (version !== renderVersion) return;
      }
      viewerStatus.textContent = `${parts.length > 1 ? label + ' · ' : ''}全${pdf.numPages}ページ`;
      viewerPages.setAttribute('aria-busy', 'false');
      const selectedPage = viewerPages.querySelector(`[data-page="${initialPage}"]`);
      if (selectedPage) viewerPages.scrollTop = Math.max(0, selectedPage.offsetTop - 16);
    } catch (error) {
      if (version !== renderVersion) return;
      console.error('PDFプレビューの読み込みに失敗しました:', error);
      viewerStatus.textContent = 'プレビューを表示できませんでした。「ダウンロード」をご利用ください。';
      viewerPages.setAttribute('aria-busy', 'false');
    }
  };
  const openPreview = (poster, parts, index, trigger) => {
    if (!postersPublic) return;
    opener = trigger;
    document.getElementById('pdf-preview-title').textContent = poster.title;
    viewerParts.replaceChildren();
    viewerParts.hidden = parts.length <= 1;
    parts.forEach((part, i) => {
      const button = element('button', 'filter', part.label || `${i + 1}枚目`);
      button.type = 'button';
      button.addEventListener('click', () => renderPDF(poster, parts, i));
      viewerParts.append(button);
    });
    dialog.showModal();
    document.body.classList.add('preview-open');
    renderPDF(poster, parts, index);
  };
  document.getElementById('pdf-preview-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (event) => {
    const rect = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) dialog.close();
  });
  dialog.addEventListener('close', () => {
    stopRendering();
    viewerPages.replaceChildren();
    document.body.classList.remove('preview-open');
    opener?.focus({ preventScroll: true });
  });
  const cards = data.posters.map((poster) => {
    // parts は表示順の配列。従来の image / pdf だけのデータも利用できます。
    const parts = poster.parts?.length ? poster.parts : [{ image: poster.image, pdf: poster.pdf }];
    const card = element('article', 'poster-card');
    card.dataset.category = poster.category;
    card.dataset.stars = [1, 2, 3].includes(poster.stars) ? poster.stars : '';
    card.id = poster.id;
    const main = element(postersPublic ? 'button' : 'div', 'poster-main');
    let selectedIndex = 0;
    if (postersPublic) {
      main.type = 'button';
      main.setAttribute('aria-haspopup', 'dialog');
      main.setAttribute('aria-controls', 'pdf-preview');
      main.addEventListener('click', () => openPreview(poster, parts, selectedIndex, main));
    } else {
      card.classList.add('poster-card-unpublished');
    }
    const preview = element('span', 'poster-preview');
    const image = element('img', '');
    image.width = 600; image.height = 800;
    image.loading = 'lazy'; image.decoding = 'async';
    preview.append(image);
    const body = element('span', 'poster-body');
    const meta = element('span', 'poster-meta');
    meta.append(element('span', '', poster.category), element('span', '', poster.sample ? 'SAMPLE / 仮' : parts.length > 1 ? `全${parts.length}枚` :''));
    const link = element('span', 'poster-link');
    const linkText = element('span', '');
    link.append(linkText, element('span', 'pdf-note', 'ページ内で表示'));
    const title = element(postersPublic ? 'span' : 'h3', 'poster-title', poster.title);
    title.id = `${poster.id}-title`;
    card.setAttribute('aria-labelledby', title.id);
    const level = element('span', 'poster-level');
    const levelText = { 1: '高校生向け', 2: '学部1・2年生向け', 3: '学部3年生以上向け' };
    const stars = element('span', 'poster-stars', levelText[poster.stars] ? '★'.repeat(poster.stars) : '');
    stars.setAttribute('role', 'img');
    stars.setAttribute('aria-label', levelText[poster.stars] || '対象の目安：未設定');
    level.append(stars);
    body.append(meta, level, title, element('span', 'poster-description', poster.description));
    if (postersPublic) {
      body.append(link);
      main.append(preview, body);
    } else {
      main.append(body);
    }
    card.append(main);
    if (!postersPublic) {
      grid.append(card);
      return card;
    }
    const actions = element('div', 'poster-file-actions pdf-actions');
    const downloadFile = element('a', 'download-button', 'ダウンロード');
    actions.append(downloadFile);
    const buttons = [];
    const selectPart = (index) => {
      const part = parts[index];
      const label = part.label || `${index + 1}枚目`;
      image.src = part.image;
      image.alt = `${poster.title}のプレビュー${parts.length > 1 ? `（${label}／全${parts.length}枚）` : ''}${poster.sample ? '（表示確認用）' : ''}`;
      selectedIndex = index;
      setDownload(downloadFile, part.pdf);
      downloadFile.setAttribute('aria-label', `${poster.title}のPDFをダウンロード`);
      main.setAttribute('aria-label', `${poster.title}${poster.sample ? '（仮ポスター）' : ''}${parts.length > 1 ? `・${label}` : ''}のPDFをページ内でプレビュー`);
      linkText.textContent = parts.length > 1 ? `${label}をプレビュー →` : '';
      buttons.forEach((button, buttonIndex) => button.setAttribute('aria-pressed', String(buttonIndex === index)));
    };
    if (parts.length > 1) {
      const controls = element('div', 'poster-pages');
      controls.setAttribute('role', 'group');
      controls.setAttribute('aria-label', `${poster.title}のプレビューを切り替え`);
      controls.append(element('span', 'poster-pages-label', 'プレビュー'));
      parts.forEach((part, index) => {
        const button = element('button', 'poster-page', part.label || `${index + 1}枚目`);
        button.type = 'button';
        button.setAttribute('aria-pressed', 'false');
        button.setAttribute('aria-label', `${part.label || `${index + 1}枚目`}を表示`);
        button.addEventListener('click', () => selectPart(index));
        buttons.push(button);
        controls.append(button);
      });
      card.append(controls);
    }
    card.append(actions);
    selectPart(0);
    grid.append(card);
    return card;
  });
  const categories = [...new Set(['すべて', '数学', '物理', '化学', '情報', ...data.posters.map(poster => poster.category)])];
  const starFilters = document.getElementById('star-filters');
  const starOptions = [
    { value: 'all', label: 'すべて' },
    { value: '1', label: '★', name: '星1つ：高校生向け' },
    { value: '2', label: '★★', name: '星2つ：学部1・2年生向け' },
    { value: '3', label: '★★★', name: '星3つ：学部3年生以上向け' }
  ];
  if (cards.some(card => !card.dataset.stars)) starOptions.push({ value: '', label: '未設定' });
  let selectedCategory = 'すべて';
  let selectedStars = 'all';
  const originalOrder = new Map(cards.map((card, index) => [card, index]));
  const updatePosters = () => {
    let count = 0;
    cards.forEach(card => {
      card.hidden = (selectedCategory !== 'すべて' && card.dataset.category !== selectedCategory)
        || (selectedStars !== 'all' && card.dataset.stars !== selectedStars);
      if (!card.hidden) count++;
    });
    filters.querySelectorAll('button').forEach(button => button.setAttribute('aria-pressed', String(button.textContent === selectedCategory)));
    starFilters?.querySelectorAll('button').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.stars === selectedStars)));
    const orderedCards = [...cards].sort((a, b) => {
      // 星の少ない順に固定し、未設定は末尾に置きます。
      if (Boolean(a.dataset.stars) !== Boolean(b.dataset.stars)) return a.dataset.stars ? -1 : 1;
      const difference = Number(a.dataset.stars) - Number(b.dataset.stars);
      if (difference) return difference;
      return originalOrder.get(a) - originalOrder.get(b);
    });
    orderedCards.forEach(card => grid.append(card));
    const levelLabel = selectedStars === 'all' ? '対象：すべて' : selectedStars ? '★'.repeat(Number(selectedStars)) : '対象：未設定';
    document.getElementById('poster-count').textContent = `${selectedCategory} / ${levelLabel} / ${count}件`;
    document.getElementById('empty-message').hidden = count > 0;
  };
  categories.forEach(category => {
    const button = element('button', 'filter', category);
    button.type = 'button';
    button.setAttribute('aria-pressed', 'false');
    button.addEventListener('click', () => { selectedCategory = category; updatePosters(); });
    filters.append(button);
  });
  starOptions.forEach(option => {
    const button = element('button', 'filter', option.label);
    button.type = 'button';
    button.dataset.stars = option.value;
    button.setAttribute('aria-pressed', 'false');
    if (option.name) { button.setAttribute('aria-label', option.name); button.title = option.name; }
    button.addEventListener('click', () => { selectedStars = option.value; updatePosters(); });
    starFilters?.append(button);
  });
  filters.hidden = false;
  if (starFilters) starFilters.hidden = false;
  updatePosters();
})();
