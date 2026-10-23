import type { Tool } from '../types';

export const INITIAL_TOOLS: Tool[] = [
  // Top Editor's Perks (Spotlight)
  {
    id: 'raycast',
    name: 'Raycast Pro / Team',
    category: 'productivity',
    categoryLabel: '生産性・ランチャー',
    subCategory: '生産性・ユーティリティ',
    badge: '愛用中 / DAILY DRIVER',
    badgeColor: 'primary',
    tagline: 'Macの究極ランチャー。AI統合、カスタムスクリプト、ウィンドウ管理、クリップボード履歴を一元化。',
    description: 'Macの究極ランチャー。AI統合、カスタムスクリプト、ウィンドウ管理、クリップボード履歴を一元化。日々の作業効率が劇的に跳ね上がります。',
    rating: 4.9,
    ratingLabel: '4.9 / 5.0 (必須級)',
    perkTitle: '🎁 紹介リンク経由でRaycast Proトライアル期間延長 & 限定機能アンロック',
    perkDetail: '公式アフィリエイト連携特典 / サブスクリプション利用時に自動適用',
    perkBadgeText: 'トライアル延長',
    referralCode: 'via=hawkpurple',
    referralUrl: 'https://raycast.com/?via=hawkpurple',
    ctaText: '特典付きでRaycastを始める',
    ctaVariant: 'primary',
    isSpotlight: true,
    iconType: 'terminal',
    savingsEstimate: '$20 / 年',
    features: [
      'GPT-4o / Claude 3.5 Sonnet によるAIクイックアシスタント',
      '無制限クリップボード履歴とスニペット展開機能',
      'カスタム拡張機能（Raycast Store）から1,000以上の拡張を導入可能',
      'ウィンドウのリサイズと画面分割をショートカットキーで瞬時制御',
      'チーム共有スニペットとコマンド同期'
    ],
    specs: [
      { label: 'プラットフォーム', value: 'macOS 12.0+ (Apple Silicon & Intel), Windows Beta' },
      { label: '価格体系', value: '基本無料 / Pro $8/月〜 / Team $12/月〜' },
      { label: '検証ステータス', value: '2025年最新動作確認済み (リンク有効)' },
      { label: '推薦度', value: 'Sランク (全Mac開発者必携)' }
    ],
    howToRedeem: [
      '「特典付きでRaycastを始める」ボタンをクリックして公式サイトへアクセスします。',
      'Raycastをダウンロード・インストールし、アカウントを作成します。',
      '紹介パラメータ（via=hawkpurple）が自動検出され、Proプランの無料トライアル延長枠が付与されます。',
      '設定 > AI または Extensions からすべての機能をお試しいただけます。'
    ],
    curatorNotes: '筆者が毎日の開発環境で最も起動回数の多いユーティリティ。SpotlightやAlfredからの乗り換えで、特にクリップボード履歴検索とAIインライン変換の速さは一度使うと元に戻れません。'
  },
  {
    id: 'proton',
    name: 'Proton Unlimited / VPN',
    category: 'security',
    categoryLabel: 'セキュリティ & VPN',
    subCategory: 'セキュリティ & VPN',
    badge: 'プライバシー最優先 / PRIVACY FIRST',
    badgeColor: 'secondary',
    tagline: 'スイス拠点の最高峰暗号化エコシステム。強固なログなしVPN、暗号化メール、パスワードマネージャー。',
    description: 'スイス拠点の最高峰暗号化エコシステム。強固なログなしVPN、暗号化メール、パスワードマネージャーまで安全性を妥協しない全方位ガード。',
    rating: 4.9,
    ratingLabel: '4.9 / 5.0 (スイス基準)',
    perkTitle: '🛡️ 限定紹介リンク特典: 1ヶ月無料トライアル / 初年度割引特典適用',
    perkDetail: 'Proton Mail, VPN, Pass, Driveの全スイートに対応',
    perkBadgeText: '初年度割引＋無料枠',
    referralCode: 'ref/0Z3T3YE0',
    referralUrl: 'https://pr.tn/ref/0Z3T3YE0',
    ctaText: '限定特典でProtonを登録する',
    ctaVariant: 'secondary',
    isSpotlight: true,
    iconType: 'shield',
    savingsEstimate: '$48 / 初年度',
    features: [
      '厳格なスイス連邦データ保護法に基づくゼロログ・エンドツーエンド暗号化',
      'NetShield広告＆トラッカーブロッカー内蔵の高速VPN (10Gbps+)',
      'Proton Mailのカスタムドメイン対応＆使い捨てエイリアス無制限',
      'Proton Pass による安全な二要素認証トークン自動入力',
      'Proton Drive の暗号化クラウドストレージ (最大500GB+)'
    ],
    specs: [
      { label: '管轄国', value: 'スイス (ジュネーブ) - 14 Eyes非加盟' },
      { label: '対応環境', value: 'macOS, Windows, Linux, iOS, Android, CLI, WireGuard' },
      { label: '同時接続数', value: '最大10台同時接続' },
      { label: '監査実績', value: 'オープンソース & 独立第三者機関による完全監査済' }
    ],
    howToRedeem: [
      '「限定特典でProtonを登録する」ボタンをクリックします。',
      '紹介コード（ref/0Z3T3YE0）が適用された特別ランディングページが表示されます。',
      '新規アカウントを登録し、プランを選択すると限定割引およびトライアル特典が即座に反映されます。'
    ],
    curatorNotes: '公衆Wi-Fiでの開発時や海外カンファレンス参加時の必須インフラ。WireGuard接続の高速性とキルスイッチの信頼性、そしてProton Mailとの統合管理は最高水準です。'
  },

  // Active Tech Stack Perks (Grid Cards)
  {
    id: 'perplexity',
    name: 'Perplexity AI / Pro',
    category: 'cloud',
    categoryLabel: 'AI / クラウド',
    subCategory: 'AI SEARCH & RESEARCH',
    badge: '限定紹介リンク',
    badgeColor: 'primary',
    tagline: '学術研究から日常の技術調査まで一瞬で回答をソース付きで導く対話型AI検索。',
    description: '学術研究から日常の技術調査まで一瞬で回答をソース付きで導く対話型AI検索エンジン。Proプランでは最新モデルの切り替えや複数ファイルのディープリサーチが可能。',
    rating: 4.9,
    perkTitle: '🎁 紹介リンク特典: Perplexity Pro $10割引',
    perkDetail: '初回Pro登録時に自動適用される紹介クレジット',
    perkBadgeText: '$10割引特典',
    referralUrl: 'https://pplx.ai/toshiyuki-takakura',
    ctaText: '特典付きでPerplexityを始める',
    iconType: 'prompt',
    savingsEstimate: '$10',
    features: [
      '最新Web情報と信頼性の高いソース引用をリアルタイム統合',
      'Claude 3.5 Sonnet, GPT-4o, Sonar Largeなど最新モデルの選択',
      '無制限のファイルアップロード解析・マルチモーダル検索',
      'コレクション機能による調査テーマ別のプロンプト・回答整理'
    ],
    specs: [
      { label: 'プラットフォーム', value: 'Web, macOS, iOS, Android, Chrome Extension' },
      { label: '価格体系', value: '基本無料 / Pro $20/月 (紹介コードで$10引)' },
      { label: '検証ステータス', value: 'リンク有効・動作確認済み' }
    ],
    howToRedeem: [
      '「特典付きでPerplexityを始める」ボタンをクリックして紹介リンクへアクセスします。',
      'アカウントを作成し、Proプランへのアップグレード画面で$10の割引が適用されます。'
    ],
    curatorNotes: '論文リサーチや技術スタックの選定調査において不可欠なツール。回答の根拠となるURLが明確に表示されるため、裏付け取りが劇的に短縮されます。'
  },
  {
    id: 'merlin',
    name: 'Merlin AI',
    category: 'productivity',
    categoryLabel: '生産性・ランチャー',
    subCategory: 'ALL-IN-ONE AI ASSISTANT',
    badge: '年間$60割引特典',
    badgeColor: 'amber',
    tagline: 'Web上のあらゆる場所で使えるAIチャット・要約拡張プラットフォーム。',
    description: 'ブラウザ拡張機能として動作し、あらゆるWebサイト上でGPT-4やClaudeを呼び出せるAIアシスタント。YouTube動画要約や論文サマリーも瞬時に生成。',
    rating: 4.8,
    perkTitle: '🎁 限定コード入力で年間$60オフ',
    perkDetail: '特別プロモーションコードで年間サブスクリプションを割引',
    perkBadgeText: '年間$60オフ',
    referralCode: 'MERLIN20',
    referralUrl: 'https://www.getmerlin.in/?tap_a=141224-287fba&ref=zwi0ode',
    ctaText: '特典付きでMerlin AIを始める',
    iconType: 'terminal',
    savingsEstimate: '$60 / 年',
    features: [
      'Gmail, LinkedIn, X, GitHub上で直接AIプロンプトを実行',
      'YouTube動画や長いPDFドキュメントをワンクリックで要約',
      'GPT-4o, Claude 3.5 Sonnet, Gemini 1.5 Proなどの最新LLMに対応',
      'Webチャットボットとブラウザ拡張機能のシームレスな同期'
    ],
    specs: [
      { label: '対応環境', value: 'Chrome, Edge, Firefox, Web, iOS, Android' },
      { label: '特典コード', value: 'MERLIN20 (年間$60割引)' },
      { label: '検証ステータス', value: '提携アフィリエイト・割引コード有効' }
    ],
    howToRedeem: [
      '「特典付きでMerlin AIを始める」ボタンをクリックして公式サイトにアクセスします。',
      'アカウント登録およびプラン購入画面でクーポンコード「MERLIN20」を入力・適用します。',
      '年間サブスクリプションから$60が割引されます。'
    ],
    curatorNotes: 'Web閲覧中にCmd+MでどこからでもAIを呼び出せる快適さが魅力。YouTubeの解説動画をテキストで素早く斜め読みしたい時に重宝しています。'
  },
  {
    id: 'cursor',
    name: 'Cursor',
    category: 'devtools',
    categoryLabel: '開発者ツール',
    subCategory: 'AI CODE EDITOR',
    badge: '無料クレジット付与',
    badgeColor: 'amber',
    tagline: '次世代AIコードエディタ。Claude 3.5 Sonnet / GPT-4oと超高速ペアプログラミング。',
    description: '次世代AIコードエディタ。Claude 3.5 Sonnet / GPT-4oと超高速ペアプログラミング。リポジトリ全体のコンテキスト理解が驚異的。',
    rating: 4.8,
    perkTitle: '特典: Proプラン枠適用',
    perkDetail: '即時反映・Fast Requests枠付与',
    perkBadgeText: '無料クレジット付与',
    referralUrl: 'https://cursor.com',
    ctaText: '無料トライアルを開始',
    iconType: 'code',
    savingsEstimate: '$20相当',
    features: [
      'VS Code完全互換で全拡張機能・テーマを1秒でインポート',
      'Cmd+Kによるインラインコード生成＆編集',
      'Cmd+Lによるリポジトリ全体を考慮したチャット相談',
      'Cursor Composerによるマルチファイル同時自動修正'
    ],
    specs: [
      { label: 'ベース', value: 'VS Code Fork' },
      { label: '利用可能モデル', value: 'Claude 3.5 Sonnet, GPT-4o, Cursor-Small' },
      { label: 'プライバシーモード', value: 'コード学習オプトアウト完全対応' }
    ],
    howToRedeem: [
      'Cursor公式サイトからエディタをダウンロードします。',
      '初回起動時にGitHubまたはGoogleアカウントでログインします。',
      '新規登録ボーナスとしてProプランの高速AIリクエスト枠が即時付与されます。'
    ],
    curatorNotes: '従来のCopilotとは一線を画す「コードベース全体の理解度」。Composer機能による複数ファイルにまたがるリファクタリングは開発速度を2倍以上に引き上げます。'
  },
  {
    id: 'warp',
    name: 'Warp',
    category: 'devtools',
    categoryLabel: '開発者ツール',
    subCategory: 'MODERN TERMINAL',
    badge: 'チーム機能無料特典',
    badgeColor: 'tertiary',
    tagline: 'AIコマンド補完とチーム共有が可能な次世代GPU高速ターミナル。',
    description: 'AIコマンド補完とチーム共有が可能な次世代GPU高速ターミナル。過去コマンドのブロック化と自然言語からのコマンド生成が極めて快適。',
    rating: 4.7,
    perkTitle: '特典: 招待ワークスペース解放',
    perkDetail: '連携済・Warp Driveチーム共有枠',
    perkBadgeText: 'チーム機能無料特典',
    referralUrl: 'https://warp.dev',
    ctaText: 'Warpをダウンロード',
    iconType: 'prompt',
    savingsEstimate: '$12 / 月',
    features: [
      'Rust & Metal/DirectX によるGPUレンダリングの滑らかな描画',
      'コマンドと出力を独立したブロックとして操作・コピー・共有可能',
      'Warp AI: 自然言語でシェルスクリプトやGitコマンドを瞬時生成',
      'Warp Drive: よく使うパラメータ付きコマンドをチームで一元管理'
    ],
    specs: [
      { label: '言語', value: 'Rust' },
      { label: '対応OS', value: 'macOS, Linux (Ubuntu/Debian/Arch/Fedora), Windows Beta' },
      { label: 'シェル互換性', value: 'zsh, bash, fish 完全対応' }
    ],
    howToRedeem: [
      '公式サイトよりWarpをインストールします。',
      '招待リンク経由でアカウントを作成すると、チーム共同作業用ワークスペース機能が自動解放されます。'
    ],
    curatorNotes: '過去の複雑なDockerコマンドやKubernetesのログ取得コマンドを自然言語でサクッと引き出せるため、ターミナル操作のストレスがゼロになります。'
  },
  {
    id: 'linear',
    name: 'Linear',
    category: 'productivity',
    categoryLabel: '生産性・ランチャー',
    subCategory: 'ISSUE TRACKER',
    badge: 'スタンダード特別枠',
    badgeColor: 'secondary',
    tagline: '美しく洗練された開発チーム向けタスク管理。キーボード駆動で圧倒的なレスポンス。',
    description: '美しく洗練された開発チーム向けタスク管理。キーボード駆動で圧倒的なレスポンス速度。GitHub / GitLabとの双方向同期が完璧。',
    rating: 4.9,
    perkTitle: '特典: 招待チーム枠アクセス',
    perkDetail: '限定枠・サイクル自動化機能有効化',
    perkBadgeText: 'スタンダード特別枠',
    referralUrl: 'https://linear.app',
    ctaText: '招待枠で利用開始',
    iconType: 'checklist',
    savingsEstimate: '$8 / 月 / ユーザー',
    features: [
      'すべての操作がキーボードショートカットで完結するマイクロ秒UI',
      'GitHub PRと自動連動したイシューの進行管理とマージクローズ',
      'スプリント計画を自動化するCycles & Triageエンジン',
      'Slack / Discord / Figma とのリアルタイム双方向連携'
    ],
    specs: [
      { label: 'レスポンス速度', value: 'オフラインファースト・ローカルキャッシュ同期' },
      { label: '連携サービス', value: 'GitHub, GitLab, Sentry, Zendesk, Zapier' }
    ],
    howToRedeem: [
      'リンク先から新規ワークスペースをセットアップします。',
      '招待枠経由で無料枠のメンバー上限および履歴無制限アクセスが付与されます。'
    ],
    curatorNotes: 'Jiraの重さに苦しんでいるすべてのエンジニアに薦めたいツール。UIの美しさとキーボード操作の心地よさが段違いです。'
  },
  {
    id: 'supabase',
    name: 'Supabase',
    category: 'cloud',
    categoryLabel: 'AI / クラウド',
    subCategory: 'CLOUD BACKEND',
    badge: '開発者プロトタイプ枠',
    badgeColor: 'tertiary',
    tagline: 'Postgresベースのモダンバックエンド。認証、リアルタイム、Edge Functions。',
    description: 'Postgresベースのモダンバックエンド。認証、リアルタイムリスナー、Edge Functions、ベクターストアを即座にプロビジョニング。',
    rating: 4.8,
    perkTitle: '特典: 無料プロジェクト枠上限拡張',
    perkDetail: '無料枠増量・pgvector即時利用可',
    perkBadgeText: '開発者プロトタイプ枠',
    referralUrl: 'https://supabase.com',
    ctaText: '無料で始める',
    iconType: 'database',
    savingsEstimate: '$25 / 月',
    features: [
      'フルマネージド専用 PostgreSQL データベース',
      'Row Level Security (RLS) を統合したセキュアなユーザー認証',
      'PostgreSQLのWALを購読するリアルタイムWebSocketブロードキャスト',
      'pgvector 拡張によるAIエンベディング・セマンティック検索'
    ],
    specs: [
      { label: 'コアDB', value: 'PostgreSQL 15+' },
      { label: 'デプロイ速度', value: '約2分でグローバルDB起動' },
      { label: 'クライアントライブラリ', value: 'TypeScript, Python, Go, Swift, Flutter' }
    ],
    howToRedeem: [
      '公式サイトで新規プロジェクトを作成します。',
      '開発者プロトタイプ枠が適用され、2つの無料アクティブプロジェクトが利用可能になります。'
    ],
    curatorNotes: 'Firebaseの良さとリレーショナルSQLの強靭さを完璧に融合したバックエンド。特にpgvectorによるAIアプリ開発の手軽さは最高です。'
  },
  {
    id: '1password',
    name: '1Password',
    category: 'security',
    categoryLabel: 'セキュリティ & VPN',
    subCategory: 'PASSWORD MANAGER',
    badge: '14日間無料体験',
    badgeColor: 'secondary',
    tagline: '個人および開発チームのための定番パスワードマネージャー。SSHキー・シークレット連携。',
    description: '個人および開発チームのための定番パスワードマネージャー。SSHキー管理、CLI連携、シークレット共有まで開発ワークフローにシームレスに組み込み。',
    rating: 4.8,
    perkTitle: '特典: ファミリー / チームトライアル',
    perkDetail: '特典即時・Developer Tools解放',
    perkBadgeText: '14日間無料体験',
    referralUrl: 'https://1password.com',
    ctaText: '特典を利用',
    iconType: 'key',
    savingsEstimate: '$36 / 年',
    features: [
      '1Password CLI (`op`) による環境変数やAPIシークレットの安全なインジェクション',
      'Touch ID / Windows Hello と連携したSSHキーの秘密鍵管理とコミット署名',
      'ファミリーおよび開発チーム間での安全な認証情報ボルト共有',
      'Watchtower による侵害されたパスワードや脆弱な資格情報の警告'
    ],
    specs: [
      { label: '暗号化方式', value: 'AES-256-GCM + 128-bit Secret Key' },
      { label: '開発者連携', value: '1Password SSH Agent, CLI, VS Code Extension, GitHub Actions' }
    ],
    howToRedeem: [
      '「特典を利用」をクリックして1Passwordの特典ページへ移動します。',
      'アカウント作成時に14日間のフルアクセス無料体験が即時有効化されます。'
    ],
    curatorNotes: '開発者の秘密鍵管理とGitコミット署名を指紋認証で安全に行えるSSH Agent機能がとにかく素晴らしい。`.env`に生キーを書く時代を終わらせてくれます。'
  },
  {
    id: 'cloudflare',
    name: 'Cloudflare & Fly.io',
    category: 'cloud',
    categoryLabel: 'AI / クラウド',
    subCategory: 'EDGE COMPUTE & CDN',
    badge: 'スタートアップ枠',
    badgeColor: 'primary',
    tagline: '世界中に分散デプロイ可能なモダンエッジクラウド。ゼロレイテンシのWorkers稼働。',
    description: '世界中に分散デプロイ可能なモダンエッジクラウド。ゼロレイテンシでのWorker稼働、DDoS保護、Dockerコンテナの即時グローバル展開。',
    rating: 4.8,
    perkTitle: '特典: 開発クレジット提供リンク',
    perkDetail: 'アクティブ・無料枠無制限アクセス',
    perkBadgeText: 'スタートアップ枠',
    referralUrl: 'https://cloudflare.com',
    ctaText: '詳細を見る',
    iconType: 'cloud',
    savingsEstimate: '$50+ クレジット',
    features: [
      'Cloudflare Workers / Pages によるグローバルエッジサーバーレス実行',
      'エンタープライズ級の無料DDoS保護とDNSルーティング（1.1.1.1）',
      'Fly.ioによるDockerコンテナのユーザー至近リージョン即時起動',
      'R2 Object Storage: イーグレス（下り転送量）無料のS3互換ストレージ'
    ],
    specs: [
      { label: 'グローバル拠点', value: '世界300都市以上' },
      { label: 'コールドスタート', value: '< 5ms (V8 Isolateアーキテクチャ)' },
      { label: '転送料金', value: 'R2 ストレージ egress無料' }
    ],
    howToRedeem: [
      '「詳細を見る」よりCloudflareおよびFly.ioの開発者ハブに登録します。',
      '無料枠で毎日100,000回以上のWorkerリクエストおよび3台のFly.ioコンテナが即時利用可能です。'
    ],
    curatorNotes: '個人開発やSaaSの初動インフラとして最強の組み合わせ。特にCloudflare R2の転送料金無料とPagesのGit連携デプロイ速度は圧倒的です。'
  },
  {
    id: 'wise',
    name: 'Wise',
    category: 'productivity',
    categoryLabel: '生産性・ランチャー',
    subCategory: 'FINTECH & GLOBAL PAYMENTS',
    badge: '初回送金手数料無料',
    badgeColor: 'tertiary',
    tagline: '実際の為替レートと低手数料で世界中へ送金・受取。海外SaaS決済や外貨受取に必須の金融インフラ。',
    description: '隠れた為替手数料なしのミッドマーケットレートで、世界160カ国・40通貨以上へ即時送金。海外クラウドサービスのドル決済やフリーランスの外貨受取・デビットカード決済に最適。',
    rating: 4.9,
    ratingLabel: '4.9 / 5.0 (国際送金デファクト)',
    perkTitle: '🎁 紹介特典: 最大75,000円（£500相当）までの送金手数料が無料',
    perkDetail: '紹介リンク経由の新規登録で初回送金手数料無料クーポンが自動適用',
    perkBadgeText: '送金手数料無料',
    referralCode: 'invite/dic/takakurat2',
    referralUrl: 'https://wise.com/invite/dic/takakurat2',
    ctaText: '特典付きでWiseを始める',
    iconType: 'key',
    savingsEstimate: '最大¥7,500相当',
    features: [
      '銀行の最大数分の一の格安手数料＆実際の為替レート（ミッドマーケットレート）',
      '世界40通貨以上を同一口座内で即時両替・保有できるマルチカレンシー口座',
      '海外SaaS（AWS, OpenAI等）のドル決済に対応したWiseデビットカード',
      '米ドル、ユーロ、英ポンドなどの現地銀行口座情報（ルーティング番号/IBAN）を取得可能'
    ],
    specs: [
      { label: '対応通貨', value: '40以上の通貨を保有・両替、160カ国以上へ送金' },
      { label: '送金手数料', value: 'ミッドマーケットレート（上乗せ為替手数料ゼロ）' },
      { label: '規制・認可', value: '英国FCA、関東財務局（資金移動業者）など各国の金融当局に登録' }
    ],
    howToRedeem: [
      '「特典付きでWiseを始める」ボタンをクリックして紹介リンクからWise公式サイトを開きます。',
      'メールアドレスまたはGoogleアカウント等で新規会員登録（無料）を行います。',
      '初回送金手続き時に、最大75,000円（または£500相当）までの送金手数料無料クーポンが自動的に適用されます。'
    ],
    curatorNotes: '海外発のSaaS決済や海外クライアントとの外貨取引・国際送金において、日本のメガバンクやPayPalの手数料と比べ圧倒的なコストパフォーマンスを誇ります。Wiseデビットカードでのドル決済も重宝しています。'
  }
];

export const CATEGORY_FILTERS = [
  { id: 'all', label: 'すべて (All)' },
  { id: 'productivity', label: '生産性・ランチャー' },
  { id: 'security', label: 'セキュリティ & VPN' },
  { id: 'devtools', label: '開発者ツール' },
  { id: 'cloud', label: 'AI / クラウド' },
  { id: 'perk-only', label: '限定特典あり', isHighlight: true }
] as const;

export const STAT_METRICS = [
  {
    label: '掲載ツール数',
    value: '15+',
    subtext: '動作確認済み',
    subtextIcon: 'check_circle',
    colorClass: 'text-tertiary-base'
  },
  {
    label: '累計ユーザー節約額',
    value: '$300+',
    subtext: '相当の限定特典',
    colorClass: 'text-secondary-base'
  },
  {
    label: '最新更新日',
    value: '本日',
    subtext: 'リンク有効性検査済',
    colorClass: 'text-primary-base'
  },
  {
    label: '推薦ポリシー',
    value: '100%',
    subtext: '自己実用ツールのみ',
    colorClass: 'text-tertiary-base'
  }
];
