# 設計書 (design.md)

## 1. 概要

- **目的**: 割り算の視覚的アプローチによる多面的理解を促進する。
- **対象ユーザー**: 小学3年生の子供。
- **概要**: 割り算の概念を多様な方法で視覚的に表現し、楽しく学べる教育Webアプリ。
- **ホスティング**: GitHub Pagesを利用して公開。

## 2. 機能要件

### 各タブの機能詳細

#### グループ分けタブ

- **目的**: 割り算をグループ分けで視覚化し、等分する概念を伝える。
- **機能**:
  - 2つのスライダーで割られる数（1〜50）と割る数（1〜10）を入力。
  - スライダーの操作に応じて、割られる数の分のオブジェクト（ボール）を表示。
  - オブジェクトは割る数ごとに自動的にグループ分けされ、まとまりとして表示。
  - 例：12 ÷ 3 の場合、12個のボールを4個ずつ3グループに分割して表示。
  - スライダー操作時には、オブジェクトが滑らかなアニメーションで再配置され、グループ分けが変化する様子を視覚的に表現。
  - 余りがある場合は、最後に分けきれないオブジェクトを「余り」として強調しまとめて表示。

#### 等分タブ

- **目的**: 割り算を一つの図形の等分割で視覚化する。
- **機能**:
  - 2つのスライダーで割られる数（1〜50）と割る数（1〜10）を入力。
  - 1つの大きな図形（円）を「割る数」に応じて実線で等分割して表示。
  - 割られる数の分だけ等分の位置に点線を表示し、割る数で割る線は実線で表す。
  - 例：10 ÷ 2 の場合、円を2等分し、各分割部分に「5」の数を表示（計10個分が2等分されたことを意味する）。10分割する点線と2分割する実線が引かれる。
  - 割り切れない場合は余りを異なる色で表示し、「割り切れない部分」を視覚的に示す。
  - 余りの部分にも余りの数字を表示。
  - スライダー操作時に割る数が変化すると、図形の分割数や割り切れる・割り切れない状態がリアルタイムで更新される。

#### 数直線タブ

- **目的**: 割り算を数直線上のジャンプで視覚化する。
- **機能**:
  - 2つのスライダーで割られる数（1〜50）と割る数（1〜10）を入力。
  - 0から「割られる数」までの数直線を表示。
  - 「割る数」の間隔でマーカーを配置し、0からスタートして「割られる数」地点まで何回ジャンプすればよいのかを視覚的に示す。
  - ジャンプはキャラクターの移動アニメーションと弧線で表し、ジャンプの回数を数字で表示する。
  - 例：15 ÷ 5の場合、0-5-10-15の位置にマーカーを置き、3回ジャンプで15に到達することを確認できる。
  - 割り切れない場合は「余りの部分」を示すため、最後のマーカーから終点を突き抜けて点線の弧線で表す。
  - 例：12 ÷ 5の場合、0, 5, 10の位置にマーカーを置き、10から15に向けて点線の弧線を引き、キャラクターは10で停止。10から12までの距離を余りとして数字で表示する。12から15までの数直線は薄い線で表示する。

### 共通機能

- 初期値として「グループ分け表示」で12÷3=4を設定。
- 「(割られる数) ÷ (割る数) = (答え)」の式がスライダーに合わせて自動更新される。
- 子供向けの直感的で視覚的なUIを設計。
- アニメーションを動的に実行し、結果を自動表示。
- 保存機能は不要。

## 3. UI設計

### 全体レイアウト

- 画面上部にタブメニューを配置し、各モード（グループ分け、等分、数直線）を切り替え可能にする。
- メインエリアには、選択されたタブに応じた可視化コンテンツを表示する。
- 画面下部には、割られる数と割る数を設定するためのスライダーを配置する。
- スライダーの上には、計算式(割られる数) ÷ (割る数) = (答え)を表示する。

### 各タブのUI詳細

#### グループ分けタブ

- メインエリアに、割られる数に応じた数のオブジェクト（例：ボール）を表示する。
- オブジェクトは、割る数分のグループにグループ化して配置する。
- 余りがある場合は、オブジェクトをまとめて表示し、「余り」のラベルを付ける

#### 等分タブ

- メインエリアに、大きな円を表示する。
- 円は、割る数に応じて実線で等分割される。
- 割られる数に応じて、点線を表示する。
- 余りがある場合は、余りの部分を異なる色で表示し、「余り」のラベルと数字を付ける。

#### 数直線タブ

- メインエリアに、0から割られる数までの数直線を表示する。
- 割る数の間隔でマーカーを表示する。
- キャラクターが数直線上をジャンプするアニメーションを表示する。
- ジャンプの回数を数字で表示する。
- 余りがある場合は、最後のマーカーから伸びる点線の弧線と、余りの数字を表示する。点線の終点までの数直線は薄い線で表示する。

### レスポンシブ対応

- タブレット端末を意識したレイアウトとする。
- スライダーやボタンは、タッチ操作しやすい大きさと間隔にする。
- 縦向き・横向きの両方の画面方向に対応する。

### 配色、デザイン

- 子供向けに、明るく親しみやすい配色とする。
- 各タブにはテーマカラーを設定する。
- 数直線タブには、キャラクターを登場させる。
- グループ分けのオブジェクト、等分タブの円、数直線のマーカーなどは、視認性の高い色を使用する。
- 余りは、異なる色で強調表示する。

## 4. 技術設計

### 技術スタック

- **プラットフォーム**: Webアプリとして構築し、GitHub Pagesで公開。
- **主要フレームワーク**:
  - React.js: コンポーネントベースのUI管理。
- **技術スタック**:
  - **Vite**: 高速ビルドツールとして使用
  - **HTML5, CSS3, JavaScript**: アプリケーションの基本構築。
  - **React.js**: インタラクティブなUIの構築。
  - **Canvas API**: グラフィックやアニメーション描画。(必要に応じて)
  - **SVG**: 図形やグラフの描画。(必要に応じて)
  - **GitHub Pages**: デプロイ環境。
  - **npm**: パッケージ管理。
- **動作環境**: 最新のブラウザ（Chrome, Firefox, Edge）で動作。

### アーキテクチャ設計

- コンポーネントベースでUIを構築する。
- 主要なコンポーネント：
  - `App`: アプリケーション全体のルートコンポーネント。タブの切り替え、スライダー、計算式の表示などを管理。
  - `Tabs`: タブの切り替えロジックを担当するコンポーネント。
  - `GroupDivisionTab`: グループ分けタブのコンテンツを表示するコンポーネント。
  - `EqualDivisionTab`: 等分タブのコンテンツを表示するコンポーネント。
  - `NumberLineDivisionTab`: 数直線タブのコンテンツを表示するコンポーネント。
  - `GroupDivision`: グループ分けタブの可視化部分を担当するコンポーネント。
  - `EqualDivision`: 等分タブの可視化部分を担当するコンポーネント。
  - `NumberLine`: 数直線タブの可視化部分を担当するコンポーネント。
  - `Slider`: 割られる数と割る数を設定するためのスライダーコンポーネント。

### 状態管理

- 状態管理は、Reactの`useState`フックを使用する。
- 各コンポーネントが持つ状態：
  - `App`: 割られる数、割る数、現在選択されているタブ
  - `GroupDivisionTab`, `EqualDivisionTab`, `NumberLineDivisionTab`: 自身の表示に必要なデータ（計算結果など）

### データフロー

1.  ユーザーが`Slider`コンポーネントで割られる数または割る数を変更する。
2.  `Slider`コンポーネントが`App`コンポーネントにイベントを通知する。
3.  `App`コンポーネントが`useState`で管理している割られる数または割る数の状態を更新する。
4.  状態の更新により、`App`コンポーネントが再描画される。
5.  `App`コンポーネントは、新しい状態の値と計算結果をpropsとして、現在選択されているタブのコンポーネント(`GroupDivisionTab`, `EqualDivisionTab`, `NumberLineDivisionTab`のいずれか)に渡す。
6.  タブのコンポーネントは、propsとして受け取った値に基づいて、自身の表示を更新する。
    - `GroupDivisionTab`, `EqualDivisionTab`, `NumberLineDivisionTab`は、propsとして受け取った値に基づいて、`GroupDivision`, `EqualDivision`, `NumberLine`コンポーネントに適切なpropsを渡して描画する。
7.  アニメーションが必要な場合は、`useEffect`フックを使用してアニメーションを実行する。

### データ構造

- 各コンポーネントで必要なデータは、propsで親コンポーネントから渡す。
- 必要に応じて、オブジェクトや配列などのデータ構造を使用する。

## 5. UI/UX設計

### グループ分けタブ

- **初期表示**: 12個のオブジェクト（例：ボール）が表示され、4個ずつ3つのグループに分けられている。スライダーの初期値は、割られる数：12、割る数：3。
- **スライダー操作**: スライダーを動かすと、オブジェクトの数とグループ分けがリアルタイムに変化する。
- **余りの表示**: 余りがある場合は、オブジェクトがグループから外れて表示される。

### 等分タブ

- **初期表示**: 円が表示され、3等分されている。割られる数に応じて点線が表示される（例：12÷3の場合は点線が12等分の位置に表示され、実線が3等分の位置に表示される。）。スライダーの初期値は、割られる数：12、割る数：3。
- **スライダー操作**: スライダーを動かすと、円の分割数と各部分の数字が変化する。
- **余りの表示**: 余りがある場合は、円の一部が異なる色で表示され、余りの数字が表示される。

### 数直線タブ

- **初期表示**: 0から12までの数直線が表示され、0, 3, 6, 9, 12の位置にマーカーが配置されている。キャラクターが0の位置にいる。スライダーの初期値は、割られる数：12、割る数：3。
- **スライダー操作**: スライダーを動かすと、数直線の長さ、マーカーの位置、キャラクターのジャンプ回数が変化する。
- **余りの表示**: 余りがある場合は、最後のジャンプから次の区切りまで点線が表示され、キャラクターは最後のマーカーで停止する。余りの数字が表示される。12÷5であれば、10から15の位置まで点線が表示される。12から15までの数直線は薄い線で数直線を表示する。

## 6. その他

### アクセシビリティ

- コントラスト比: テキストと背景色が適切なコントラスト比を持つように設計。
- タッチエリア: ボタンやスライダーのタッチ領域を拡大し、誤操作を防ぐ。
- ARIA属性: スクリーンリーダーに対応するため、`aria-label`を適切に付与。

### テスト

- E2EテストにPlaywrightを使用する。
- 各タブの表示、スライダーの操作、計算結果の表示などをテストする。
- 開発中は、Playwrightのデバッグ機能を利用して、問題点を早期に発見する。

### 開発ツール

- コードエディタ: Visual Studio Code (推奨)。
- 品質管理:
  - ESLint: コード品質チェック。
  - Prettier: コードフォーマット。
- テストツール:
  - Playwright: E2Eテストツール。アプリの動作を自動化し、タブの切り替えやインタラクションを検証。
- デバッグ:
  - 各開発ステップでテストツールを使ってデバッグ
  - テストツールで確認できない部分はChromeの開発者ツールを利用。
