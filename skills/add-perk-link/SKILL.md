---
name: add-perk-link
description: >
  Standard operating procedure, schema validation rules, and code patterns for
  curating, verifying, and adding new developer tools, referral links, and exclusive
  perks to the StackRef platform (src/components/stackref/data/tools.ts). Use whenever the user wants to
  add a new referral deal, tool link, or update existing partner perks.
---

# Add Perk Link Skill — StackRef Curator Guide

This skill guides you through the process of adding, verifying, categorizing, and formatting new developer tools and exclusive referral perks in StackRef.

--------------------------------------------------------------------------------

## 1. Curator Standards & Verification Checklist

Before adding any link to the codebase, verify that the submission adheres to the **StackRef Curator Standards**:

1. **実務使用実績 (Hands-on Experience)**: The curator or submitter has actively used the tool in production or daily engineering workflows for $\ge 50$ hours (recommended $\ge 100$ hours).
2. **紹介特典の有効性 (Active Perk Guarantee)**:
   - The link or referral code must offer a tangible user benefit (extended free trial, signup bonus credits, discounted tiers, or priority workspace access) over standard direct registration.
   - The landing URL must automatically apply the discount or display the bonus banner.
3. **安全・信頼性 (Safety & Subscription Hygiene)**:
   - Prohibit dark-pattern subscription services or difficult cancellation flows.
   - Clean referral parameters: Avoid nested redirects, cloaked tracking domains, or malicious affiliate networks.
4. **カテゴリ整合性 (Category Fit)**:
   - Must belong to modern software engineering, cloud architecture, system security, or developer productivity.

--------------------------------------------------------------------------------

## 2. Tool Data Schema (`src/components/stackref/types/index.ts`)

Every tool added to `src/components/stackref/data/tools.ts` must satisfy the `Tool` interface:

```typescript
export interface Tool {
  id: string;                      // Unique lowercase slug (e.g., 'resend', 'docker')
  name: string;                    // Brand/Product display name (e.g., 'Resend')
  category: ToolCategory;          // 'productivity' | 'security' | 'devtools' | 'cloud'
  categoryLabel: string;           // Japanese category label
  subCategory?: string;            // Uppercase technical label (e.g., 'EMAIL FOR DEVELOPERS')
  badge?: string;                  // Top ribbon badge (e.g., '無料枠拡張', 'Proプラン割引')
  badgeColor?: 'primary' | 'secondary' | 'tertiary' | 'amber';
  tagline: string;                 // 1-sentence value proposition
  description: string;             // 2-3 sentence overview of why developers love it
  rating: number;                  // 1.0 - 5.0 (e.g., 4.8)
  ratingLabel?: string;            // Display score (e.g., '4.8 / 5.0 (開発者推奨)')
  perkTitle: string;               // Headline of exclusive benefit (e.g., '特典: 3,000通/月 無料枠増量')
  perkDetail: string;              // Terms or redemption detail (e.g., '即時反映・永続適用')
  perkBadgeText?: string;          // Short chip text (e.g., '無料クレジット')
  referralCode?: string;           // Optional coupon token (e.g., 'ref/DEV3000')
  referralUrl: string;             // Verified referral or landing URL
  ctaText: string;                 // Outcome-focused button label (e.g., 'Resendを無料で始める')
  ctaVariant?: 'primary' | 'secondary' | 'outline';
  isSpotlight?: boolean;           // true for Top Editor's Perks; false for Active Grid
  iconType: 'terminal' | 'shield' | 'code' | 'prompt' | 'checklist' | 'database' | 'key' | 'cloud';
  savingsEstimate?: string;        // Estimated value (e.g., '$20 / 月')
  features?: string[];             // Array of 3-5 core feature bullet points
  specs?: { label: string; value: string }[]; // Key specs (Platform, Pricing, Stack)
  howToRedeem?: string[];          // Step-by-step instructions (1, 2, 3)
  curatorNotes?: string;           // Personal engineering evaluation note
}
```

--------------------------------------------------------------------------------

## 3. Category & Label Taxonomy

| Category Key | Japanese Category Label (`categoryLabel`) | Typical Subcategories (`subCategory`) | Icon Suggestions (`iconType`) |
| :--- | :--- | :--- | :--- |
| `productivity` | 生産性・ランチャー | `MODERN WORKSPACE`, `ISSUE TRACKER`, `UTILITY` | `terminal`, `checklist` |
| `security` | セキュリティ & VPN | `PRIVACY & ENCRYPTION`, `PASSWORD MANAGER`, `ZERO TRUST` | `shield`, `key` |
| `devtools` | 開発者ツール | `AI CODE EDITOR`, `MODERN TERMINAL`, `API CLIENT` | `code`, `prompt` |
| `cloud` | AI / クラウド | `CLOUD BACKEND`, `EDGE COMPUTE & CDN`, `DATABASE` | `database`, `cloud` |

--------------------------------------------------------------------------------

## 4. Step-by-Step Procedure to Add a New Link

### Step 1: Prepare the Tool Object
Gather the tool's verified data:
- Tested Referral URL (e.g., `https://resend.com/?via=yourhandle`)
- Referral Code / Token (if applicable)
- Concrete Perk & Discount description
- 3-5 Features and Technical Specs
- 1-2 sentence curator personal note

### Step 2: Edit `src/components/stackref/data/tools.ts`
Import or append the new item into the `INITIAL_TOOLS` array:

```typescript
{
  id: 'resend',
  name: 'Resend',
  category: 'cloud',
  categoryLabel: 'AI / クラウド',
  subCategory: 'EMAIL FOR DEVELOPERS',
  badge: '開発枠無料増量',
  badgeColor: 'tertiary',
  tagline: 'React Emailと統合されたモダン開発者向けトランザクションメール配信基盤。',
  description: 'Reactコンポーネントで美しいメールテンプレートを構築・配信。高い到達率とミリ秒単位のWebhookレスポンスが魅力。',
  rating: 4.8,
  ratingLabel: '4.8 / 5.0 (推奨)',
  perkTitle: '特典: 新規登録で追加配信枠＋Fast Domain認証',
  perkDetail: '即時反映・開発者枠',
  referralCode: 'via=hawkstack',
  referralUrl: 'https://resend.com/?via=hawkstack',
  ctaText: 'Resendで配信を始める',
  iconType: 'cloud',
  savingsEstimate: '$20相当',
  features: [
    'React Email によるJSXベースの型安全なメール制作',
    'SPF, DKIM, DMARC のワンクリック自動DNS構成',
    '超高速API (平均レイテンシ < 200ms)',
    'リアルタイムオープン率・バウンス追跡Webhook'
  ],
  specs: [
    { label: 'SDK対応', value: 'Node.js, Python, Ruby, Go, REST API' },
    { label: '到達率', value: '専用IPプール・SPF/DKIM標準' }
  ],
  howToRedeem: [
    '紹介リンクをクリックしてResend公式サイトを開きます。',
    'GitHubアカウントでサインアップします。',
    'APIキーを発行すると、開発者枠の無料配信クレジットが自動付与されます。'
  ],
  curatorNotes: 'メールテンプレートの作成においてHTMLテーブルの苦行から開発者を解放してくれた名作ツール。Next.jsやRemixとの親和性が抜群です。'
}
```

### Step 3: Verify Metric Counter
If adding high-value perks, update `STAT_METRICS` in `src/components/stackref/data/tools.ts`:
- `掲載ツール数`: Update value (e.g., `15+`)
- `累計ユーザー節約額`: Update estimated total value (e.g., `$300+`)

### Step 4: Verification & Compilation
Run `bun run build` in the `main` directory to ensure there are no syntax errors, missing properties, or invalid category keys.

--------------------------------------------------------------------------------

## 5. Anti-Patterns to Avoid
- ❌ Do not add generic link shorteners (`bit.ly`, `tinyurl`) which trigger security warnings.
- ❌ Do not omit the `howToRedeem` or `specs` sections, as they power the interactive Tool Detail Drawer.
- ❌ Do not invent fake tools or unverifiable discounts; every deal must be tested.
