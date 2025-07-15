# Design Document

## Overview

個人的な趣味や好きなものを紹介するカジュアルなプロフィール機能を既存のAstroポートフォリオサイトに追加します。この機能は、技術的なポートフォリオとは別の、よりパーソナルな一面を表現するためのページとして設計されます。既存のデザインシステムとの一貫性を保ちながら、個人的な内容に適した温かみのある表現を取り入れます。

## Architecture

### ページ構造
```
/personal または /about-me
├── 推し・好きな人セクション
├── エンターテイメントセクション  
├── ライフスタイルセクション
├── 価値観・座右の銘セクション
└── ナビゲーション（メインサイトとの行き来）
```

### 技術スタック
- **フレームワーク**: Astro 5.9.0（既存と同じ）
- **スタイリング**: Tailwind CSS 4.1.8（既存と同じ）
- **アニメーション**: GSAP 3.13.0（既存のアニメーションコンポーネントを活用）
- **アイコン**: Lucide React + Iconify（既存と同じ）
- **データ管理**: TypeScriptインターフェースとローカルデータ

## Components and Interfaces

### 1. メインページコンポーネント
**PersonalProfile.astro**
- 既存のIntroduce.astroと同様のタブ構造
- 4つのメインセクション（推し、エンタメ、ライフスタイル、価値観）
- レスポンシブデザイン対応

### 2. セクション別コンポーネント

#### FavoritePersons.astro（推しセクション）
```typescript
interface FavoritePerson {
  id: string;
  name: string;
  category: 'idol' | 'actor' | 'singer' | 'youtuber' | 'other';
  image?: string;
  description: string;
  favoritePoints: string[];
  group?: string;
}
```

#### Entertainment.astro（エンタメセクション）
```typescript
interface EntertainmentItem {
  id: string;
  title: string;
  type: 'music' | 'movie' | 'anime' | 'drama' | 'book';
  artist?: string;
  rating: number; // 1-5
  review: string;
  image?: string;
  releaseYear?: number;
  genre?: string[];
}
```

#### Lifestyle.astro（ライフスタイルセクション）
```typescript
interface LifestyleItem {
  id: string;
  name: string;
  category: 'food' | 'cafe' | 'place' | 'hobby';
  image?: string;
  description: string;
  rating: number; // 1-5
  location?: string;
  tags: string[];
}
```

#### Values.astro（価値観セクション）
```typescript
interface ValueItem {
  id: string;
  quote: string;
  source?: string;
  category: 'motto' | 'inspiration' | 'philosophy' | 'favorite-words';
  explanation: string;
  background?: string;
}
```

### 3. 共通UIコンポーネント

#### PersonalCard.astro
- 推し、エンタメ、ライフスタイルアイテム用の統一カードデザイン
- ホバーエフェクトとアニメーション
- 評価表示（星評価）
- タグ表示機能

#### QuoteCard.astro
- 価値観・座右の銘専用のカードデザイン
- 美しいタイポグラフィ
- 引用符デザイン
- 背景グラデーション

### 4. データ管理

#### personalData.ts
```typescript
// 各セクションのデータを管理
export const favoritePersons: FavoritePerson[] = [...];
export const entertainmentItems: EntertainmentItem[] = [...];
export const lifestyleItems: LifestyleItem[] = [...];
export const valueItems: ValueItem[] = [...];

// フィルタリング・検索機能
export function getPersonsByCategory(category: string): FavoritePerson[];
export function getEntertainmentByType(type: string): EntertainmentItem[];
export function getLifestyleByCategory(category: string): LifestyleItem[];
export function getValuesByCategory(category: string): ValueItem[];
```

## Data Models

### カテゴリ分類システム
```typescript
// 推しカテゴリ
type PersonCategory = 'idol' | 'actor' | 'singer' | 'youtuber' | 'other';

// エンタメタイプ
type EntertainmentType = 'music' | 'movie' | 'anime' | 'drama' | 'book';

// ライフスタイルカテゴリ
type LifestyleCategory = 'food' | 'cafe' | 'place' | 'hobby';

// 価値観カテゴリ
type ValueCategory = 'motto' | 'inspiration' | 'philosophy' | 'favorite-words';
```

### 評価システム
```typescript
interface Rating {
  score: number; // 1-5の評価
  displayType: 'stars' | 'hearts' | 'numbers';
}
```

## Error Handling

### データ検証
- 必須フィールドの検証
- 評価値の範囲チェック（1-5）
- 画像URLの有効性確認
- カテゴリの有効性確認

### フォールバック処理
- 画像が読み込めない場合のプレースホルダー表示
- データが空の場合の「まだ追加されていません」メッセージ
- カテゴリフィルターで結果が0件の場合の表示

### エラー表示
```typescript
interface ErrorState {
  hasError: boolean;
  message: string;
  type: 'warning' | 'error' | 'info';
}
```

## Testing Strategy

### 単体テスト
- データ取得関数のテスト
- フィルタリング機能のテスト
- 評価計算ロジックのテスト

### 統合テスト
- コンポーネント間の連携テスト
- タブ切り替え機能のテスト
- レスポンシブデザインのテスト

### ビジュアルテスト
- 各セクションの表示確認
- ダーク/ライトモードでの表示確認
- 異なる画面サイズでの表示確認

## Design System Integration

### 色彩設計
```css
/* 個人プロフィール専用の色彩 */
:root {
  --personal-primary: #f472b6; /* ピンク系 - 親しみやすさ */
  --personal-secondary: #a78bfa; /* パープル系 - 創造性 */
  --personal-accent: #fbbf24; /* イエロー系 - 楽しさ */
  --personal-warm: #f97316; /* オレンジ系 - 温かみ */
}
```

### タイポグラフィ
- 既存のSpace Groteskフォントを継続使用
- 個人的な内容に適した柔らかい表現
- 日本語コンテンツ用のNoto Sansとの組み合わせ

### アニメーション
- 既存のGSAPアニメーションコンポーネントを活用
- SplitTextアニメーションでセクションタイトル
- カードホバーエフェクト
- スムーズなタブ切り替え

### レイアウト
```css
/* 既存のレイアウトパターンを踏襲 */
.personal-container {
  @apply max-w-6xl mx-auto md:px-2 px-6 pt-12 pb-6;
}

.personal-section {
  @apply bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 transition-all hover:shadow-xl;
}

.personal-grid {
  @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6;
}
```

## Navigation Integration

### メインナビゲーション拡張
```typescript
// 既存のナビゲーションに個人プロフィールリンクを追加
interface NavigationItem {
  label: string;
  href: string;
  icon?: string;
  isPersonal?: boolean;
}

const navigationItems: NavigationItem[] = [
  { label: 'ホーム', href: '/' },
  { label: 'プロジェクト', href: '/#projects' },
  { label: 'スキル', href: '/#skills' },
  { label: 'プロフィール', href: '/#about' },
  { label: '個人的なこと', href: '/personal', isPersonal: true }, // 新規追加
];
```

### パンくずナビゲーション
```astro
<!-- PersonalProfile.astro内 -->
<nav class="mb-8">
  <ol class="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
    <li><a href="/" class="hover:text-blue-600">ホーム</a></li>
    <li>></li>
    <li class="text-gray-800 dark:text-gray-200">個人的なこと</li>
  </ol>
</nav>
```

## Responsive Design

### ブレークポイント戦略
```css
/* 既存のTailwindブレークポイントを使用 */
/* sm: 640px, md: 768px, lg: 1024px, xl: 1280px */

.personal-grid {
  /* モバイル: 1列 */
  @apply grid-cols-1;
  
  /* タブレット: 2列 */
  @apply md:grid-cols-2;
  
  /* デスクトップ: 3列 */
  @apply lg:grid-cols-3;
}

.personal-card {
  /* モバイルでのカードサイズ調整 */
  @apply w-full;
  
  /* タブレット以上でのホバーエフェクト */
  @apply md:hover:scale-105 md:transition-transform;
}
```

### モバイル最適化
- タッチフレンドリーなボタンサイズ
- スワイプ可能なカードスライダー（モバイル時）
- 縦向き表示での読みやすさ重視

## Performance Considerations

### 画像最適化
```typescript
// 画像の遅延読み込みとサイズ最適化
interface OptimizedImage {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
  placeholder?: string;
}
```

### データ読み込み戦略
- 初期表示時は最初のタブのみ読み込み
- タブ切り替え時の遅延読み込み
- 画像の段階的読み込み

### バンドルサイズ最適化
- 必要なコンポーネントのみインポート
- 既存のアニメーションライブラリを再利用
- CSSの重複排除