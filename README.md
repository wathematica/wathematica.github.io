# Wathematica公式サイトの設計について

## 目次

1. はじめに
2. 要点
3. Webサイトの構成
4. HTMLに関して
5. デザインに関して
6. メモ
7. 更新履歴

## はじめに

これはWathematica公式サイトの仕様を説明した文書です．引き継ぎがうまくいかなかったとしても，最低限の情報をWebサイトから直接閲覧できるようにするのが目的です．ただし，このページは誰でも閲覧できてしまうので，セキュリティに関わることは書いていません．

## 要点

- HTML/CSS/JSの言語機能を利用する基準は，サポートしているブラウザのシェアが[90％以上であるかどうか](https://caniuse.com/ciu/about)とした
- ロゴとファビコンのフォントは[STIX Two Text](https://www.stixfonts.org/)を利用した
- CSSの命名規則は[MindBEMding](https://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/)を採用した
- `/index.html`と`/seminar.html`にはJavaScriptが含まれている．`seminar.html`のJavaScriptを正常に動作させるには，各ゼミの`data-ruby`属性に読み仮名を指定する必要がある

## Webサイトの構成

以下に，このWebサイトを構成するファイルを示します．

### HTMLファイル

| ファイル        | 役割         |
| --------------- | ------------ |
| `/_readme.html` | このページ   |
| `/index.html`   | トップページ |
| `/seminar.html` | ゼミ紹介     |

### CSSファイル

| ファイル                     | 役割                                                                                                               |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| `/ress.css`                  | [リセットCSS](https://en.wikipedia.org/wiki/Reset_style_sheet) （[ress](https://github.com/filipelinhares/ress/)） |
| `/common.css`                | ページ間で共通する要素（ヘッダー，フッターなど）に関わるスタイルを定義するCSS                                      |
| `/index.css`，`/seminar.css` | 各ページにおいてのみ利用されるスタイルを定義するCSS                                                                |

### 画像ファイル

| ファイル                       | 役割                                                |
| ------------------------------ | --------------------------------------------------- |
| `/favicon.png`，`/favicon.svg` | [ファビコン](https://ja.wikipedia.org/wiki/Favicon) |
| `/figure/logo.svg`             | Wathematicaのロゴ（白）                             |
| `/figure/heroheader.webp`      | `/index.html`の上部にある画像                       |
| `/figure/background.webp`      | ヘッダーとフッターの背景画像                        |
| `/seminar/**.*`                | 各ゼミに関わる画像                                  |

## HTMLに関して

`/index.html`と`/seminar.html`にはJavaScriptが含まれています．`/index.html`のJavaScriptは，ソースコード中にあるゼミからランダムに4つ選び出し，他のゼミを表示しないようにします．`/seminar.html`のJavaScriptは，ゼミを辞書順にソートします．これらのJavaScriptは，取り除いてもレイアウトに影響しません．

なお，`/seminar.html`のソートを正しく機能させるには，各ゼミの`data-ruby`属性に読み仮名を指定する必要があります（読み仮名が無ければ「ん」が指定されたとみなします）．この例を以下に示します．

```html
<li class="seminar seminarlist__item" data-ruby="しんごうしょりぜみ">
  <div class="seminar__info">
    <div class="seminar__name">信号処理ゼミ</div>
    <ul class="taglist">
      <li class="taglist__item">LTIシステム</li>
      <li class="taglist__item">周波数解析</li>
      <li class="taglist__item">DSP</li>
      <li class="taglist__item">統計モデル</li>
    </ul>
  </div>
  <details class="seminar__detail">
    <summary>詳細</summary>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </details>
</li>
```

## デザインに関して

ロゴとファビコンのフォントは[STIX Two Text](https://www.stixfonts.org/)です（ロゴは[カーニング](https://ja.wikipedia.org/wiki/カーニング)されています）．[Inkscape](https://inkscape.org/)で編集可能なファイルが[`/assets/favicon.inkscape.svg`](./assets/favicon.inkscape.svg)と[`/assets/logo.inkscape.svg`](./assets/logo.inkscape.svg)にあります．

クラスの命名規則は[BEM](https://en.bem.info/methodology/)（正確には[MindBEMding](https://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/)）にしたがっています．

## メモ

### アクセシビリティについて

- [JIS X 8341-3:2016 達成基準 早見表（レベルA & AA）](https://waic.jp/resource/jis-x-8341-3-2016/)と[WCAG 2.0 解説書](https://waic.jp/docs/UNDERSTANDING-WCAG20/Overview.html)に，アクセシビリティに関する注意事項が列記されています
- [Google ChromeのEmulate vision deficiencies](https://developer.chrome.com/blog/new-in-devtools-83/#vision-deficiencies)で色覚異常をシミュレーションできます
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)でアクセシビリティを数値化できます

### 画像について

MDN Web Docsによると，[画像はWebP形式にすると良い](https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types#choosing_an_image_format)ようです．[Squoosh](https://squoosh.app/)というWebアプリを使うと，画像をWebP形式へと変換し，さらに，ファイルサイズを小さくできます．

以前はWebP形式をサポートするブラウザが少なかったため，JPEG形式やPNG形式などを使う必要がありました．しかし，WebP形式をサポートしているブラウザのシェアは，いまや[90％を超えています](https://caniuse.com/webp)．

### `/seminar.html`のJavaScriptについて

`/seminar.html`のソートは[`Intl.Collator()`](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator)という言語機能を使っています．これを使うと，文字列どうしの順序を比較できます．

```javascript
const list = ["き", "酢", "か", "可", "な", "かき"];
const collator = new Intl.Collator("ja-JP");
list.sort(collator.compare);
console.log(list);
// desirable output: ["か", "かき", "き", "な", "可", "酢"]
// real output     : ["か", "かき", "き", "な", "可", "酢"]
```

上の例を見ると分かるんですが，`Intl.Collator()`は漢字に対しても順序をつけてくれます．なので，実はゼミの読み仮名に漢字を使っても，`/seminar.html`のJavaScriptは動作します．

それでもゼミの読みをひらがなで指定する仕様にした理由は，この順序がしばしば期待通りにならないからです．次の例を見てください．

```javascript
const list = ["生麦", "生田", "生活", "差", "奈"];
const collator = new Intl.Collator("ja-JP");
list.sort(collator.compare);
console.log(list);
// desirable output: ["生田", "差", "生活", "奈", "生麦"]
// real output     : ["差", "生活", "生田", "生麦", "奈"]
```
