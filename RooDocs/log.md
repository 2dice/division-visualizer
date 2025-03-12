# 作業記録 (log.md)

## Step 1 (2025/03/10)

- Viteのプロジェクト作成コマンド：`npm create vite@latest division-visualizer --template react`
- JavaScriptを選択したこと
- 依存関係のインストールコマンド：`npm install`
- 開発サーバーの起動コマンド：`npm run dev`
- ブラウザでの表示確認：`http://localhost:5173/`
- 今後の留意点：
  - 特に問題なく完了したが、`notes.md`の終了時手順を忘れないようにする。

## Step 2 (2025/03/10)

- `vite.config.js`に`base`と`build.outDir`の設定を追加
  - `base`: `./`
  - `build.outDir`: `docs`
- `package.json`に`homepage`プロパティを追加
  - `homepage`: `https://2dice.github.io/division-visualizer/`
- GitHubリポジトリにpush
  - `git remote add origin https://github.com/2dice/division-visualizer.git`
  - `git branch main`
  - `git checkout main`
  - `git add .`
  - `git commit --amend -m "Step 2: GitHub Pagesへのデプロイ設定\n\n- vite.config.jsにbaseとbuild.outDirの設定を追加\n- package.jsonにhomepageプロパティを追加\n- npm run buildを実行し、docsフォルダを作成"`
  - `git pull origin main`
  - `git push origin main`
- `npm run build`を実行し、`docs`フォルダを作成
- 今後の留意点：
  - GitHub Pagesの設定は、push後に行う必要がある。
  - `build`を忘れないようにする。
  - commitをまとめる際は`--amend`を使う。

## Step 3 (2025/03/11)

- ESLintとPrettierのインストールに成功。
- `eslint.config.js`を作成し、ESLintの設定を行った。
  - `eslint-plugin-react`の警告を解消するため、`settings.react.version`にReactのバージョンを指定した。
- `.prettierrc.json`を作成し、Prettierの設定を行った。
- `package.json`に`lint`と`format`のスクリプトを追加。
  - `predev`と`prebuild`を追加し、`dev`と`build`の前に自動的にlintとformatが実行されるように設定。
- `.eslintignore`ファイルを作成したが、ESLint v9では非推奨のため、`eslint.config.js`の`ignores`プロパティで無視するファイルを指定した。

## Step 4 (2025/03/11)

- Playwrightのインストールと基本的なテストの実行に成功。
  - 既存のプロジェクトにPlaywrightを導入するため、`npm install -D @playwright/test`を実行。
  - `npx playwright install`を実行し、必要なブラウザをインストール。
  - `npx playwright install-deps`を実行し、依存関係をインストール。
  - `playwright.config.js`と`global-setup.js`を手動で作成したが、`process.env`の扱いに関する問題が発生。
  - `npm init playwright@latest`を実行し、Playwrightの設定ファイルを自動生成。
  - `tests/example.spec.js`は自動生成されたものを上書きせず、以前に作成したものを利用。
  - `npm run dev`でローカルサーバーを起動し、`npx playwright test`でテストを実行できることを確認。
  - `index.html`の`<title>`タグを`割り算学習アプリ`に変更。
  - `eslint.config.js`を修正し、`playwright.config.js`に対してNode.js環境を、`tests/**/*.js`と`tests-examples/**/*.js`に対してブラウザ環境を有効にする設定を追加。
- 今後の留意点：
  - `eslint.config.js`の設定を適切に行い、ESLintのエラーが出ないようにする。
  - Playwrightのテストケースを拡充し、様々なケースをテストできるようにする。

## Step 5 (2025/03/12)

- `useState`フックを使って、現在選択されているタブの状態を管理した。
- タブのUIを`button`要素で表現し、`onClick`イベントで`activeTab`を更新するようにした。
- 現在選択されているタブに応じて、表示内容を切り替えるようにした。
- Playwrightを使って、タブの表示と切り替えに関するテストを実装した。
- テスト実行時にエラーが発生した場合、エラーメッセージをよく読み、原因を特定して修正した。
- 今後の留意点：
  - スライダーコンポーネントを実装した後、異なるタブ間でスライダーの値が保持されないことを確認するテストを追加する必要がある。
  - タブのUIやコンテンツは仮実装なので、`design.md`に従って詳細を実装する必要がある。
  - `notes.md`の各ステップ終了時の作業を実施する。
