# プロジェクト構造

## ルートディレクトリ

- `astro.config.mjs` - React、Tailwind、markdownプラグインを含むAstro設定
- `tsconfig.json` - 厳密モードとパスエイリアスを含むTypeScript設定
- `package.json` - Bunで管理される依存関係
- `bun.lock` - 再現可能なビルドのためのロックファイル

## ソース構造 (`src/`)

### ページ (`src/pages/`)
- `index.astro` - メインランディングページ
- `404.astro` - エラーページ
- `ogp.astro` - Open Graph画像生成
- `projects/` - 個別プロジェクトのmarkdownファイル（例：`2sv6d4c8.md`）

### コンポーネント (`src/components/`)
- **メインコンポーネント**: `About.astro`、`Introduce.astro`、`Project.astro`、`Skill.astro`
- **ユーティリティコンポーネント**: `IconCard.astro`、`PDFViewer.tsx`
- **アニメーション** (`animations/`): コンポーネント名で整理
  - `FallingText/` - 物理ベースのテキストアニメーション
  - `ShinyText/` - グラデーションテキスト効果
  - `SplitText/` - テキスト分割アニメーション
  - `StarBorder/` - アニメーション境界効果

### レイアウト (`src/layouts/`)
- 一貫したページ構造のためのベースレイアウトコンポーネント

### ライブラリ (`src/lib/`)
- `project.ts` - プロジェクトデータ管理と色ユーティリティ
- `langColor.ts` - プログラミング言語の色マッピング
- `util.ts` - アイコンと技術カテゴリ化ヘルパー

### スタイル (`src/styles/`)
- `global.css` - Tailwindインポートとカスタムアニメーションを含むグローバルスタイル
- `typography.css` - タイポグラフィ専用スタイル

## コンテンツ & アセット

### パブリック (`public/`)
- 静的アセット：画像、PDF、favicon
- ルートURLから直接アクセス可能

### Remark (`remark/`)
- `plugins.ts` - Markdown処理設定

## パスエイリアス

- `@lib/*` → `src/lib/*`
- `@components/*` → `src/components/*`
- `@layouts/*` → `src/layouts/*`
- `@styles/*` → `src/styles/*`

## 命名規則

- **Astroコンポーネント**: `.astro`拡張子付きPascalCase
- **Reactコンポーネント**: `.tsx`拡張子付きPascalCase
- **ユーティリティ**: `.ts`拡張子付きcamelCase
- **スタイル**: `.css`拡張子付きkebab-case
- **プロジェクトID**: 8文字の英数字文字列

## コンポーネント構成

- 関連するアニメーションを専用フォルダにグループ化
- コンポーネント固有のロジックをコンポーネントの近くに配置
- propsにはTypeScriptインターフェースを使用
- 継承よりもコンポジションを優先