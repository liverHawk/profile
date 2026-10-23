export type ToolCategory = 'all' | 'productivity' | 'security' | 'devtools' | 'cloud' | 'perk-only';

export interface Tool {
  id: string;
  name: string;
  category: ToolCategory;
  categoryLabel: string;
  subCategory?: string;
  badge?: string;
  badgeColor?: 'primary' | 'secondary' | 'tertiary' | 'amber';
  tagline: string;
  description: string;
  rating: number;
  ratingLabel?: string;
  perkTitle: string;
  perkDetail: string;
  perkBadgeText?: string;
  referralCode?: string;
  referralUrl: string;
  ctaText: string;
  ctaVariant?: 'primary' | 'secondary' | 'outline';
  isSpotlight?: boolean;
  iconType: 'terminal' | 'shield' | 'code' | 'prompt' | 'checklist' | 'database' | 'key' | 'cloud';
  features?: string[];
  specs?: { label: string; value: string }[];
  howToRedeem?: string[];
  curatorNotes?: string;
  savingsEstimate?: string;
}

export interface StatMetric {
  label: string;
  value: string;
  subtext: string;
  subtextIcon?: string;
  colorClass?: string;
}

export interface DealSubmission {
  toolName: string;
  category: ToolCategory;
  websiteUrl: string;
  referralCode: string;
  perkDescription: string;
  submitterHandle: string;
}
