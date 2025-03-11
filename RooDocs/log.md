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
