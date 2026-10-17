(() => {
  'use strict';
  const carousel = document.getElementById('hero-slideshow');
  const slides = window.rikotenData?.slides;
  if (!carousel || !slides?.length) return;
  const track = carousel.querySelector('.hero-slideshow-track');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let index = 0;
  let visible = true;
  let timer;
  const photos = slides.map((slide, i) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'hero-slide';
    wrapper.setAttribute('role', 'group');
    wrapper.setAttribute('aria-roledescription', 'スライド');
    wrapper.setAttribute('aria-label', `${i + 1} / ${slides.length}`);
    wrapper.setAttribute('aria-hidden', String(i !== 0));
    const img = i === 0 ? track.querySelector('img') : document.createElement('img');
    img.src = slide.src;
    img.alt = slide.alt;
    img.width = slide.width || 2880;
    img.height = slide.height || 2160;
    img.decoding = 'async';
    if (i > 0) img.loading = 'lazy';
    img.style.objectFit = slide.fit || 'cover';
    img.style.objectPosition = slide.position || 'center 65%';
    wrapper.append(img);
    return wrapper;
  });
  track.replaceChildren(...photos);
  const canPlay = () => !reducedMotion.matches && !document.hidden && visible && slides.length > 1;
  const schedule = () => {
    clearTimeout(timer);
    if (canPlay()) timer = setTimeout(nextPhoto, 5000);
  };
  const nextPhoto = async () => {
    const next = (index + 1) % slides.length;
    const img = photos[next].querySelector('img');
    // 読み込みを待ってから切り替え、低速回線でも空白を表示しません。
    img.loading = 'eager';
    try { await img.decode(); } catch { schedule(); return; }
    if (!canPlay()) return;
    index = next;
    track.style.transform = `translateX(-${index * 100}%)`;
    photos.forEach((photo, i) => photo.setAttribute('aria-hidden', String(i !== index)));
    schedule();
  };
  document.addEventListener('visibilitychange', schedule);
  reducedMotion.addEventListener('change', schedule);
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(entries => { visible = entries[0].isIntersecting; schedule(); }).observe(carousel);
  }
  schedule();
})();
