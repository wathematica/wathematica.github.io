// 開催情報・ポスター・スライド写真の編集はこのファイルで行います。パスはrikoten.htmlからの相対パスです。
window.rikotenData = {
  "event": {
    "date": "2026年11月7日(土)・8日(日)",
    "location": "早稲田大学 西早稲田キャンパス",
    "room": "61号館 201教室",
    "mapUrl": "https://maps.app.goo.gl/RoK8euUiiM5MRu5o7?g_st=ic",
    "mapEmbedUrl": "https://maps.google.com/maps?cid=13458019536465550818&hl=ja&z=18&output=embed"
  },
  "posters": [
    {
      "id": "poincare",
      "title": "ユークリッドの第五公準とPoincaré上半平面モデル",
      "category": "数学",
      "description": "高校までで扱っていた幾何は平行線に関するユークリッドの第五公準を認めたユークリッド幾何上で行われていました。本ポスターではユークリッドの第五公準を紹介した上でそれが成り立たないような幾何モデルを紹介します。",
      "image": "./assets/posters/poincare-1.webp",
      "pdf": "./poster/【理工展ポスター】宮坂明宏_ユークリッドの第五公準とPoincaré上半平面モデル.pdf",
      "sample": false,
      "sourcePdfs": [
        "./poster/【理工展ポスター】宮坂明宏_ユークリッドの第五公準とPoincaré上半平面モデル.pdf",
        "./poster/ユークリッドの第五公準とPoincaré上半平面モデル.pdf"
      ],
      "stars": 1
    },
    {
      "id": "integral",
      "title": "積分による関数の捉え方について",
      "category": "数学",
      "description": "測度論の立場で、実数値関数をその積分から眺めることにより、関数の新たな解釈を考えます。少し別の話題にも触れます。",
      "image": "./assets/posters/integral-1.webp",
      "pdf": "./poster/【理工展ポスター】石田卓_積分による関数の捉え方について.pdf",
      "sample": false,
      "sourcePdfs": [
        "./poster/【理工展ポスター】石田卓_積分による関数の捉え方について.pdf"
      ],
      "stars": 1
    },
    {
      "id": "riemann",
      "title": "“本質的な”多価関数とRiemann面",
      "category": "数学",
      "description": "解析関数が抱く関数の多価性を“本質的”なものと考え，前提知識を高校数学に限定しながら，それが生じる原理を解き明かす。その多価性を解消するアイデアとしてのRiemann面も紹介する。",
      "image": "./assets/posters/riemann-1.webp",
      "pdf": "./poster/【理工展ポスター】鈴木健人_“本質的な”多価関数とRiemann面.pdf#page=1",
      "sample": false,
      "sourcePdfs": [
        "./poster/【理工展ポスター】鈴木健人_“本質的な”多価関数とRiemann面.pdf"
      ],
      "parts": [
        {
          "label": "1枚目",
          "image": "./assets/posters/riemann-1.webp",
          "pdf": "./poster/【理工展ポスター】鈴木健人_“本質的な”多価関数とRiemann面.pdf#page=1"
        },
        {
          "label": "2枚目",
          "image": "./assets/posters/riemann-2.webp",
          "pdf": "./poster/【理工展ポスター】鈴木健人_“本質的な”多価関数とRiemann面.pdf#page=2"
        }
      ],
      "stars": 1
    },
    {
      "id": "dynamics",
      "title": "数論力学系への招待(Zsigmondyの定理とその力学系version)",
      "category": "数学",
      "description": "数論力学系とは何なのかを紹介した後に, Zsigmondyの定理の力学系版を考察する. 高校生でも理解できるが, 数学徒も楽しめるはずである, たぶん.",
      "image": "./assets/posters/dynamics-1.webp",
      "pdf": "./poster/[理工展ポスター]松本隼斗_数論力学系への招待(Zsigmondyの定理とその力学系version).pdf",
      "sample": false,
      "sourcePdfs": [
        "./poster/[理工展ポスター]松本隼斗_数論力学系への招待(Zsigmondyの定理とその力学系version).pdf"
      ],
      "stars": 1
    },
    {
      "id": "convergence",
      "title": "図形の収束の定式化",
      "category": "数学",
      "description": "距離空間における点列の収束はε-N論法で定義されますが、「図形」全体の集合に距離を入れることで同様にして図形の列の収束が定式化できることを紹介します。",
      "image": "./assets/posters/convergence-1.webp",
      "pdf": "./poster/【理工展ポスター】瀬川周平_図形の収束の定式化.pdf",
      "sample": false,
      "sourcePdfs": [
        "./poster/【理工展ポスター】瀬川周平_図形の収束の定式化.pdf"
      ],
      "stars": 3
    },
    {
      "id": "fractional",
      "title": "0.5回微分の解析学",
      "category": "数学",
      "description": "函数のFourier像側での挙動を考察することにより、分数冪の微分作用素を定義します。また、Hölder連続性との関係も考えます。",
      "image": "./assets/posters/fractional-1.webp",
      "pdf": "./poster/【理工展ポスター】瀬川周平_0.5回微分の解析学.pdf",
      "sample": false,
      "sourcePdfs": [
        "./poster/【理工展ポスター】瀬川周平_0.5回微分の解析学.pdf"
      ],
      "stars": 2
    },
    {
      "id": "schwartz",
      "title": "Schwartz超函数とは何だろうか",
      "category": "数学",
      "description": "所謂Diracのデルタを数学的に厳密に扱う方法の1つであるSchwartz超函数論のアイデアや、弱微分とそのPDEへの応用を紹介します。キーワードは「部分積分」です。",
      "image": "./assets/posters/schwartz-1.webp",
      "pdf": "./poster/【理工展ポスター】瀬川周平_Schwartz超函数とは何だろうか.pdf",
      "sample": false,
      "sourcePdfs": [
        "./poster/【理工展ポスター】瀬川周平_Schwartz超函数とは何だろうか.pdf"
      ],
      "stars": 3
    },
    {
      "id": "bmo",
      "title": "BMO-Sobolev空間での函数不等式",
      "category": "数学",
      "description": "弱微分がBMO空間に属すると定義をした空間で、通常のSobolev空間において成立する不等式の類似が定式化できることを紹介します。",
      "image": "./assets/posters/bmo-1.webp",
      "pdf": "./poster/【理工展ポスター】瀬川周平_BMO-Sobolev空間での函数不等式.pdf",
      "sample": false,
      "sourcePdfs": [
        "./poster/【理工展ポスター】瀬川周平_BMO-Sobolev空間での函数不等式.pdf"
      ],
      "stars": 3
    },
    {
      "id": "hilbert",
      "title": "ヒルベルト第19問題について",
      "category": "数学",
      "description": "1900年に提起された変分問題の解の正則性に関する問いを出発点に、De GiorgiとNashによる歴史的な解決と、その背後にある楕円型偏微分方程式の理論を紹介します。",
      "image": "./assets/posters/hilbert-1.webp",
      "pdf": "./poster/[理工展ポスター]林拓磨_ヒルベルト19問題について.pdf",
      "sample": false,
      "sourcePdfs": [
        "./poster/[理工展ポスター]林拓磨_ヒルベルト19問題について.pdf"
      ],
      "stars": 3
    },
    {
      "id": "harmonic",
      "title": "閉Riemann多様体上の調和形式",
      "category": "数学",
      "description": "Riemann幾何学は，高次元の曲がった空間である「Riemann多様体」という対象を扱う分野です。多様体にRiemann計量が与えられると、調和形式という概念が定義されますが、これがかなりおもろいことを紹介します。",
      "image": "./assets/posters/harmonic-1.webp",
      "pdf": "./poster/【理工展ポスター】加藤信吾_閉Riemann多様体上の調和形式.pdf",
      "sample": false,
      "sourcePdfs": [
        "./poster/【理工展ポスター】加藤信吾_閉Riemann多様体上の調和形式.pdf"
      ],
      "stars": 3
    },
    {
      "id": "derived",
      "title": "最短で定義する導来圏",
      "category": "数学",
      "description": "アーベル圏と呼ばれる特別な構造をもつ圏に対して定義される導来圏というものを出来る限り最短で定義します。",
      "image": "./assets/posters/derived-1.webp",
      "pdf": "./poster/【理工展ポスター】 貴志_友 最短で定義する導来圏.pdf",
      "sample": false,
      "sourcePdfs": [
        "./poster/【理工展ポスター】 貴志_友 最短で定義する導来圏.pdf"
      ],
      "stars": 3
    },
    {
      "id": "spin-ice",
      "title": "スピンアイスの物性～創発する磁気モノポール～",
      "category": "物理",
      "description": "N極やS極単体の磁荷は素粒子としては発見されていませんが、スピンアイスという磁性体の中にはそれが存在するかのように見えるということについて解説します。",
      "image": "./assets/posters/spin-ice-1.webp",
      "pdf": "./poster/【理工展ポスター】西澤侑司_スピンアイスの物性～創発するモノポール～.pdf",
      "sample": false,
      "sourcePdfs": [
        "./poster/【理工展ポスター】西澤侑司_スピンアイスの物性～創発するモノポール～.pdf"
      ],
      "stars": 2
    },
    {
      "id": "wkb",
      "title": "WKB解析",
      "category": "物理",
      "description": "本ポスターでは，量子力学などで導入されるWKB近似の数学的なバックグラウンドを見ていく。特に，WKB解析で肝となるBorel総和法を定義し，シュレーディンガー方程式の場合に適用する。",
      "image": "./assets/posters/wkb-1.webp",
      "pdf": "./poster/【理工展ポスター】張ヶ谷紀子_WKB解析_1.pdf#page=1",
      "sample": false,
      "sourcePdfs": [
        "./poster/【理工展ポスター】張ヶ谷紀子_WKB解析_1.pdf",
        "./poster/【理工展ポスター】張ヶ谷紀子_WKB解析_2.pdf",
        "./poster/【理工展ポスター】張ヶ谷紀子_WKB解析_3.pdf"
      ],
      "parts": [
        {
          "label": "1枚目",
          "image": "./assets/posters/wkb-1.webp",
          "pdf": "./poster/【理工展ポスター】張ヶ谷紀子_WKB解析_1.pdf#page=1"
        },
        {
          "label": "2枚目",
          "image": "./assets/posters/wkb-2.webp",
          "pdf": "./poster/【理工展ポスター】張ヶ谷紀子_WKB解析_1.pdf#page=2"
        },
        {
          "label": "3枚目",
          "image": "./assets/posters/wkb-3.webp",
          "pdf": "./poster/【理工展ポスター】張ヶ谷紀子_WKB解析_1.pdf#page=3"
        }
      ],
      "stars": 3
    },
    {
      "id": "higher-form",
      "title": "高次対称性",
      "category": "物理",
      "description": "高次対称性とは線演算子などの高次元演算子に作用する対称性です。本ポスターでは4次元 Maxwell 理論の高次対称性を紹介し、さらに電気・磁気1次対称性の mixed ’t Hooft anomaly とその物理的意味を紹介します。",
      "image": "./assets/posters/higher-form-1.webp",
      "pdf": "./poster/【理工展ポスター】杉野颯太＿higher-form_1.pdf",
      "sample": false,
      "sourcePdfs": [
        "./poster/【理工展ポスター】杉野颯太＿higher-form_1.pdf",
        "./poster/【理工展ポスター】杉野颯太_higher-form_2.pdf",
        "./poster/【理工展ポスター】杉野颯太_higher-form_3.pdf"
      ],
      "parts": [
        {
          "label": "1枚目",
          "image": "./assets/posters/higher-form-1.webp",
          "pdf": "./poster/【理工展ポスター】杉野颯太＿higher-form_1.pdf"
        },
        {
          "label": "2枚目",
          "image": "./assets/posters/higher-form-2.webp",
          "pdf": "./poster/【理工展ポスター】杉野颯太_higher-form_2.pdf"
        },
        {
          "label": "3枚目",
          "image": "./assets/posters/higher-form-3.webp",
          "pdf": "./poster/【理工展ポスター】杉野颯太_higher-form_3.pdf"
        }
      ],
      "stars": 3
    },
    {
      "id": "anomaly",
      "title": "アノマリー",
      "category": "物理",
      "description": "アノマリーとは古典論で成り立つ対称性が量子論で非自明な形で破れる現象です。本ポスターでは、3種類のアノマリーを紹介し、分配関数の変換性、local counterterm、anomaly inflow、RG flow との関係について説明します。",
      "image": "./assets/posters/anomaly-1.webp",
      "pdf": "./poster/【理工展ポスター】杉野颯太_anomaly_1.pdf",
      "sample": false,
      "sourcePdfs": [
        "./poster/【理工展ポスター】杉野颯太_anomaly_1.pdf",
        "./poster/【理工展ポスター】杉野颯太_anomaly_2.pdf"
      ],
      "parts": [
        {
          "label": "1枚目",
          "image": "./assets/posters/anomaly-1.webp",
          "pdf": "./poster/【理工展ポスター】杉野颯太_anomaly_1.pdf"
        },
        {
          "label": "2枚目",
          "image": "./assets/posters/anomaly-2.webp",
          "pdf": "./poster/【理工展ポスター】杉野颯太_anomaly_2.pdf"
        }
      ],
      "stars": 3
    },
    {
      "id": "black-hole",
      "title": "ブラックホールの情報喪失問題",
      "category": "物理",
      "description": "ブラックホールの情報喪失問題は、量子重力理論の構築に向けた重要な示唆を与えてくれます。本ポスターでは、その基礎とパラドックスについて説明します。",
      "image": "./assets/posters/black-hole-1.webp",
      "pdf": "./poster/【理工展ポスター】久田流源_BH情報喪失問題_1.pdf",
      "sample": false,
      "sourcePdfs": [
        "./poster/【理工展ポスター】久田流源_BH情報喪失問題_1.pdf",
        "./poster/【理工展ポスター】久田流源_BH情報喪失問題_2.pdf"
      ],
      "parts": [
        {
          "label": "1枚目",
          "image": "./assets/posters/black-hole-1.webp",
          "pdf": "./poster/【理工展ポスター】久田流源_BH情報喪失問題_1.pdf"
        },
        {
          "label": "2枚目",
          "image": "./assets/posters/black-hole-2.webp",
          "pdf": "./poster/【理工展ポスター】久田流源_BH情報喪失問題_2.pdf"
        }
      ],
      "stars": 3
    },
    {
      "id": "cp-symmetry",
      "title": "CP対称性の破れ",
      "category": "物理",
      "description": "CP対称性の基本概念を概観した上で素粒子標準模型においてなぜクォークが3世代必要なのか、CP破れの機構を解説します。",
      "image": "./assets/posters/cp-symmetry-1.webp",
      "pdf": "./poster/【理工展ポスター】久田流源_CP対称性の破れ.pdf",
      "sample": false,
      "sourcePdfs": [
        "./poster/【理工展ポスター】久田流源_CP対称性の破れ.pdf"
      ],
      "stars": 3
    },
    {
      "id": "ryu-takayanagi",
      "title": "笠-高柳公式、使ってみた",
      "category": "物理",
      "description": "量子論のもつれは、時空の幾何から計算できる!? 本ポスターでは、AdS₃/CFT₂対応を舞台に、笠–高柳公式を実際に使ってエンタングルメントエントロピーを計算します。さらに、CFT側で得られる結果と比較することで、量子論と重力理論を結ぶ不思議な対応を確かめます。",
      "image": "./assets/posters/ryu-takayanagi-1.webp",
      "pdf": "./poster/【理工展ポスター】輕部和_笠-高柳公式、使ってみた.pdf",
      "sample": false,
      "sourcePdfs": [
        "./poster/【理工展ポスター】輕部和_笠-高柳公式、使ってみた.pdf"
      ],
      "stars": 3
    },
    {
      "id": "quasiparticle",
      "title": "拡張準粒子理論入門",
      "category": "化学",
      "description": "多電子系では、電子間の相互作用によって電子の運動を厳密に記述することが難しい。そこで、相互作用の効果を取り込んだ粒子である「準粒子」を用いる。本ポスターでは拡張準粒子理論について、自己エネルギーを用いた準粒子方程式の導出を解説する。",
      "image": "./assets/posters/quasiparticle-1.webp",
      "pdf": "./poster/【理工展ポスター】福島沙也佳_拡張準粒子理論入門.pdf",
      "sample": false,
      "sourcePdfs": [
        "./poster/【理工展ポスター】福島沙也佳_拡張準粒子理論入門.pdf"
      ],
      "stars": 2
    },
    {
      "id": "deep-learning",
      "title": "深層学習入門",
      "category": "情報",
      "description": "昨今話題になっている生成AIの大元の仕組みであるtransformerについてニューラルネットワークから発展させて紹介します。",
      "image": "./assets/posters/deep-learning-1.webp",
      "pdf": "./poster/【理工展ポスター】伊藤温翔_深層学習入門_1.pdf",
      "sample": false,
      "sourcePdfs": [
        "./poster/【理工展ポスター】伊藤温翔_深層学習入門_1.pdf",
        "./poster/【理工展ポスター】伊藤温翔_深層学習入門_2.pdf",
        "./poster/【理工展ポスター】伊藤温翔_深層学習入門_3.pdf"
      ],
      "parts": [
        {
          "label": "1枚目",
          "image": "./assets/posters/deep-learning-1.webp",
          "pdf": "./poster/【理工展ポスター】伊藤温翔_深層学習入門_1.pdf"
        },
        {
          "label": "2枚目",
          "image": "./assets/posters/deep-learning-2.webp",
          "pdf": "./poster/【理工展ポスター】伊藤温翔_深層学習入門_2.pdf"
        },
        {
          "label": "3枚目",
          "image": "./assets/posters/deep-learning-3.webp",
          "pdf": "./poster/【理工展ポスター】伊藤温翔_深層学習入門_3.pdf"
        }
      ],
      "stars": 2
    },
    {
      "id": "diffusion",
      "title": "拡散モデルの数理",
      "category": "情報",
      "description": "AIはどうやって画像を生成するのか？その手法の1つが｢拡散モデル｣であり, ｢壊して直す｣学習をする. 砂嵐から画像が生まれるしくみを，確率微分方程式（SDE）の世界まで一気に辿る．",
      "image": "./assets/posters/diffusion-1.webp",
      "pdf": "./poster/【理工展ポスター】藤田隼輔_拡散モデルの数理.pdf",
      "sample": false,
      "sourcePdfs": [
        "./poster/【理工展ポスター】藤田隼輔_拡散モデルの数理.pdf"
      ],
      "stars": 2
    },
    {
      "id": "iwasawa",
      "title": "線型代数から理解する岩澤類数公式",
      "category": "数学",
      "stars": 2,
      "description": "岩澤類数公式を大学 1 年生でもすんなりわかるように環論・加群論・体論の言葉をできるだけ避け，線型代数の言葉で紹介する．",
      "image": "./assets/posters/iwasawa-1.webp",
      "pdf": "./poster/【理工展ポスター】井芹海斗_線型代数から理解する岩澤類数公式_1.pdf",
      "sample": false,
      "sourcePdfs": [
        "./poster/【理工展ポスター】井芹海斗_線型代数から理解する岩澤類数公式_1.pdf",
        "./poster/【理工展ポスター】井芹海斗_線型代数から理解する岩澤類数公式_2.pdf",
        "./poster/【理工展ポスター】井芹海斗_線型代数から理解する岩澤類数公式_3.pdf",
        "./poster/【理工展ポスター】井芹海斗_線型代数から理解する岩澤類数公式_4.pdf"
      ],
      "parts": [
        {
          "label": "1枚目",
          "image": "./assets/posters/iwasawa-1.webp",
          "pdf": "./poster/【理工展ポスター】井芹海斗_線型代数から理解する岩澤類数公式_1.pdf"
        },
        {
          "label": "2枚目",
          "image": "./assets/posters/iwasawa-2.webp",
          "pdf": "./poster/【理工展ポスター】井芹海斗_線型代数から理解する岩澤類数公式_2.pdf"
        },
        {
          "label": "3枚目",
          "image": "./assets/posters/iwasawa-3.webp",
          "pdf": "./poster/【理工展ポスター】井芹海斗_線型代数から理解する岩澤類数公式_3.pdf"
        },
        {
          "label": "4枚目",
          "image": "./assets/posters/iwasawa-4.webp",
          "pdf": "./poster/【理工展ポスター】井芹海斗_線型代数から理解する岩澤類数公式_4.pdf"
        }
      ]
    },
    {
      "id": "baibain",
      "title": "バイバインをかけた饅頭は何時間後にブラックホールになるか",
      "category": "物理",
      "stars": 1,
      "description": "ドラえもんの秘密道具の一つに５分ごとに物の個数を2倍にする「バイバイン」がある。これをかけた饅頭は増え続けて星になり…いずれ果てしない重さになるであろう。これは重い天体の果てであるブラックホールになるであろうか！！",
      "image": "./assets/posters/baibain-1.webp",
      "pdf": "./poster/【理工展ポスター】北野圭一_バイバイン_1.pdf",
      "sample": false,
      "sourcePdfs": [
        "./poster/【理工展ポスター】北野圭一_バイバイン_1.pdf",
        "./poster/【理工展ポスター】北野圭一_バイバイン_2.pdf"
      ],
      "parts": [
        {
          "label": "1枚目",
          "image": "./assets/posters/baibain-1.webp",
          "pdf": "./poster/【理工展ポスター】北野圭一_バイバイン_1.pdf",
          "stars": 1
        },
        {
          "label": "2枚目",
          "image": "./assets/posters/baibain-2.webp",
          "pdf": "./poster/【理工展ポスター】北野圭一_バイバイン_2.pdf",
          "stars": 2
        }
      ]
    },
    {
      "id": "origami",
      "title": "おりがみ",
      "category": "数学",
      "stars": 1,
      "description": "折り紙の展開図に含まれる多角形の分布を調べ, それを説明するモデルを作ろうと試み, シミュレーションで確かめました. 試みが成功したかはポスターをご覧ください.",
      "image": "./assets/posters/origami-1.webp",
      "pdf": "./poster/【理工展ポスター】奥茉佑子_おりがみ.pdf",
      "sample": false,
      "sourcePdfs": [
        "./poster/【理工展ポスター】奥茉佑子_おりがみ.pdf"
      ]
    },
    {
      "id": "boolean-model",
      "title": "ブール値モデル",
      "category": "数学",
      "stars": 2,
      "description": "論理式の真理値としてブール代数の値をとる構造を紹介します。",
      "image": "./assets/posters/boolean-model-1.webp",
      "pdf": "./poster/【理工展ポスター】笹原悠平_ブール値モデル.pdf",
      "sample": false,
      "sourcePdfs": [
        "./poster/【理工展ポスター】笹原悠平_ブール値モデル.pdf"
      ]
    },
    {
      "id": "transformer-scaling",
      "title": "Transformerの基本的なスケーリング則",
      "category": "情報",
      "stars": 2,
      "description": "言語モデルのサイズ学習データ量、計算量を増やすと予測損失が近似的にべき乗で減少することが知られています。この関係を元に限られた計算資源のもとでの最適なサイズとデータ量について解説をしていきます。",
      "image": "./assets/posters/transformer-scaling-1.webp",
      "pdf": "./poster/【理工展ポスター】鳥山伊織_Transformerの基本的なスケーリング則.pdf",
      "sample": false,
      "sourcePdfs": [
        "./poster/【理工展ポスター】鳥山伊織_Transformerの基本的なスケーリング則.pdf"
      ]
    },
    {
      "id": "complex-linear-ode",
      "title": "複素領域における線形微分方程式",
      "category": "数学",
      "stars": 3,
      "description": "複素領域上の正則関数係数の線形微分方程式について、ベクトル束の接続やD加群との関係を含む基本的な事実を紹介します。",
      "image": "./assets/posters/complex-linear-ode-1.webp",
      "pdf": "./poster/【理工展ポスター】田嶋広輝_複素領域における線形微分方程式_1.pdf",
      "sample": false,
      "sourcePdfs": [
        "./poster/【理工展ポスター】田嶋広輝_複素領域における線形微分方程式_1.pdf",
        "./poster/【理工展ポスター】田嶋広輝_複素領域における線形微分方程式_2.pdf",
        "./poster/【理工展ポスター】田嶋広輝_複素領域における線形微分方程式_3.pdf"
      ],
      "parts": [
        {
          "label": "1枚目",
          "image": "./assets/posters/complex-linear-ode-1.webp",
          "pdf": "./poster/【理工展ポスター】田嶋広輝_複素領域における線形微分方程式_1.pdf"
        },
        {
          "label": "2枚目",
          "image": "./assets/posters/complex-linear-ode-2.webp",
          "pdf": "./poster/【理工展ポスター】田嶋広輝_複素領域における線形微分方程式_2.pdf"
        },
        {
          "label": "3枚目",
          "image": "./assets/posters/complex-linear-ode-3.webp",
          "pdf": "./poster/【理工展ポスター】田嶋広輝_複素領域における線形微分方程式_3.pdf"
        }
      ]
    }
  ],
  "slides": [
    {
      "src": "./poster/pictures/IMG_4437.jpg",
      "alt": "去年の展示会場で、数式やWathematicaの文字が描かれた黒板",
      "width": 5712,
      "height": 4284,
      "position": "center"
    },
    {
      "src": "./poster/pictures/IMG_4433.jpg",
      "alt": "去年の展示会場で黒板の数式を書きながら説明する様子",
      "width": 5712,
      "height": 4284,
      "position": "center"
    },
    {
      "src": "./poster/pictures/IMG_2510.jpg",
      "alt": "去年の展示会場で撮影したメンバーの集合写真",
      "width": 4032,
      "height": 3024,
      "position": "center"
    }
  ],
  "publication": {
    "postersPublic": false
  }
};
