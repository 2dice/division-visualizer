# 作業記録 (log.md)

## Step 1 (2025/03/10)
-   Viteのプロジェクト作成コマンド：`npm create vite@latest division-visualizer --template react`
-   JavaScriptを選択したこと
-   依存関係のインストールコマンド：`npm install`
-   開発サーバーの起動コマンド：`npm run dev`
-   ブラウザでの表示確認：`http://localhost:5173/`
-   今後の留意点：
    -   特に問題なく完了したが、`notes.md`の終了時手順を忘れないようにする。
    
## Step 2 (2025/03/11)
    
-   `vite.config.js`に`base`と`build.outDir`の設定を追加
    -   `base`: `./`
    -   `build.outDir`: `docs`
-   `package.json`に`homepage`プロパティを追加
    -   `homepage`: `https://2dice.github.io/division-visualizer/`
-   GitHubリポジトリにpush
    -   `git remote add origin https://github.com/2dice/division-visualizer.git`
    -   `git branch main`
    -   `git checkout main`
    -   `git add .`
    -   `git commit --amend -m "Step 2: GitHub Pagesへのデプロイ設定\n\n- vite.config.jsにbaseとbuild.outDirの設定を追加\n- package.jsonにhomepageプロパティを追加\n- npm run buildを実行し、docsフォルダを作成"`
    -   `git pull origin main`
    -   `git push origin main`
-   `npm run build`を実行し、`docs`フォルダを作成
-   今後の留意点：
    -   GitHub Pagesの設定は、push後に行う必要がある。
    -   `build`を忘れないようにする。
    -   commitをまとめる際は`--amend`を使う。
