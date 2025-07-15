# 技術スタック

## フレームワーク & ビルドシステム

- **Astro 5.9.0** - コンポーネントアイランドアーキテクチャを持つ静的サイトジェネレーター
- **Bun** - パッケージマネージャーとランタイム（npm/yarnより推奨）
- **TypeScript** - パスエイリアスを含む厳密な設定
- **Vite** - ビルドツールと開発サーバー

## フロントエンド技術

- **React 19.1.0** - インタラクティブコンポーネントとアニメーション用
- **Tailwind CSS 4.1.8** - タイポグラフィプラグイン付きユーティリティファーストCSSフレームワーク
- **GSAP 3.13.0** - アニメーションライブラリ
- **Matter.js 0.20.0** - インタラクティブアニメーション用2D物理エンジン
- **Lucide React** - アイコンライブラリ
- **React Icons** - 追加アイコンセット

## コンテンツ処理

- **Remark/Rehype** - Markdownプロセシングパイプライン
  - GitHub Flavored Markdownサポート
  - KaTeXによる数式レンダリング
  - カスタムGitHubスタイルフォーマット

## アイコンシステム

- **Astro Icon** - アイコン統合
- **Iconify** - アイコンコレクション（devicon、simple-icons、mdi）

## よく使うコマンド

```bash
# 開発
bun run dev

# 本番用ビルド
bun run build

# 本番ビルドのプレビュー
bun run preview

# 新しいiconifyアイコンセットのインストール
bun i -D @iconify-json/[アイコンセット名]
```

## 開発ノート

- Bunを主要パッケージマネージャーとして使用
- 新しいファイルはTypeScriptを優先
- Astroのコンポーネントアイランドパターンに従う
- パスエイリアスを使用（@lib、@components、@layouts、@styles）
- アニメーションはパフォーマンスとアクセシビリティを重視