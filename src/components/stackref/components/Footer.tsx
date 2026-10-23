import React, { useState } from 'react';
import { ShieldCheck, Check, Sparkles, Send } from 'lucide-react';
import type { ToolCategory } from '../types';

interface FooterProps {
  onSelectCategory: (category: ToolCategory) => void;
  onOpenReviewPolicy: () => void;
  onOpenSubmit: () => void;
  onShowToast: (message: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectCategory,
  onOpenReviewPolicy,
  onOpenSubmit,
  onShowToast
}) => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@') || !email.includes('.')) {
      setError('有効なメールアドレスを入力してください');
      return;
    }
    setError('');
    setIsSubscribed(true);
    onShowToast('📧 Perks Dispatch への登録が完了しました！限定特典をお届けします。');
  };

  return (
    <footer className="w-full bg-[#0d0e12] border-t border-[#1E2230] mt-12">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Brand & Disclosure Column */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <img
                src="https://lh3.googleusercontent.com/aida/AEtjO1WEmsjEuuoiAaFapo6MNjMAtda6lPF2LblGv4UPZTas1UVQCI1osg91FrbYv3eObbBFZT7WH1rKLByjACTJh6K8sivBZhxDDPWVJ2VKosiy2JWmtVLGsu9gO44hCwcRFVPn_2dZuDXNtNLtZIs6rHdOhvgTz87PKB1EurBtX7Ke0afnLz94AHEjyDUHob-Zg8kuBsw-dmfsvYlxzMECQgGoYxBGJyPmSAi5eFMiAzpG0iBORh_pUBfTUwM"
                alt="StackRef Logo"
                className="h-7 w-auto object-contain"
              />
              <span className="font-display text-xl font-bold text-[#F3F4F8] tracking-tight">
                StackRef
              </span>
            </div>

            <p className="text-sm text-[#c9c4d8] max-w-md leading-relaxed">
              A curated index of elite developer perks, verified tool coupons, cloud allowances, and engineering infrastructure discounts.
            </p>

            <div className="p-4 rounded-xl bg-[#1a1b20] border border-[#1E2230] max-w-md shadow-sm">
              <div className="flex items-center gap-1.5 mb-1 text-[#00d2fe]">
                <ShieldCheck className="w-4 h-4 text-[#00d2fe]" />
                <span className="font-mono-code text-[11px] uppercase font-semibold tracking-wider">
                  Affiliate Disclosure
                </span>
              </div>
              <p className="text-xs text-[#8A91A5] leading-relaxed">
                We may earn a commission from links on this page. All tools are personally tested and recommended.
              </p>
            </div>
          </div>

          {/* Directory Column */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h3 className="font-display text-base font-semibold text-[#F3F4F8] mb-1">
              Directory
            </h3>
            <nav className="flex flex-col gap-2 text-sm text-[#c9c4d8]">
              <button
                onClick={() => {
                  onSelectCategory('all');
                  window.scrollTo({ top: 380, behavior: 'smooth' });
                }}
                className="text-left text-[#cabeff] font-medium hover:underline cursor-pointer"
                type="button"
              >
                Featured Deals
              </button>
              <button
                onClick={() => {
                  onSelectCategory('productivity');
                  window.scrollTo({ top: 380, behavior: 'smooth' });
                }}
                className="text-left hover:text-white transition-colors cursor-pointer"
                type="button"
              >
                Productivity & Workspaces
              </button>
              <button
                onClick={() => {
                  onSelectCategory('security');
                  window.scrollTo({ top: 380, behavior: 'smooth' });
                }}
                className="text-left hover:text-white transition-colors cursor-pointer"
                type="button"
              >
                Security, VPN & Privacy
              </button>
              <button
                onClick={() => {
                  onSelectCategory('devtools');
                  window.scrollTo({ top: 380, behavior: 'smooth' });
                }}
                className="text-left hover:text-white transition-colors cursor-pointer"
                type="button"
              >
                Developer Infrastructure
              </button>
              <button
                onClick={() => {
                  onSelectCategory('cloud');
                  window.scrollTo({ top: 380, behavior: 'smooth' });
                }}
                className="text-left hover:text-white transition-colors cursor-pointer"
                type="button"
              >
                AI Models & Cloud Compute
              </button>
              <button
                onClick={onOpenReviewPolicy}
                className="text-left hover:text-[#cabeff] transition-colors cursor-pointer flex items-center gap-1"
                type="button"
              >
                <span>About & Verification Method</span>
              </button>
            </nav>
          </div>

          {/* Newsletter Dispatch Column */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <h3 className="font-display text-base font-semibold text-[#F3F4F8]">
              Get Perks Dispatch
            </h3>
            <p className="text-sm text-[#c9c4d8] leading-relaxed">
              Receive weekly verified high-tier developer credits and private discount drops before expiration.
            </p>

            {isSubscribed ? (
              <div className="p-3.5 rounded-xl bg-[#1f1f24] border border-[#26e19a]/40 text-[#26e19a] text-xs flex items-center gap-2">
                <Check className="w-4 h-4 text-[#26e19a] shrink-0" />
                <span>購読登録完了！週次で最新の開発者特典をお届けします。</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 w-full">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError('');
                  }}
                  placeholder="developer@domain.com"
                  className="px-3.5 py-2.5 rounded-xl bg-[#181B24] border border-[#1E2230] text-sm text-[#F3F4F8] placeholder:text-[#8A91A5] focus:outline-none focus:border-[#7c5cfc] flex-1"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-[#cabeff] hover:bg-[#947dff] text-[#1c0062] font-semibold text-sm whitespace-nowrap transition-colors cursor-pointer shadow-md"
                >
                  Subscribe
                </button>
              </form>
            )}

            {error && <span className="text-xs text-[#ffb4ab]">{error}</span>}

            <div className="flex items-center gap-1.5 text-[#8A91A5] text-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-[#26e19a]" />
              <span>Zero spam. Direct one-click unsubscribe anytime.</span>
            </div>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-6 border-t border-[#1E2230] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#8A91A5]">
          <p>© 2025 StackRef Inc. Engineered for modern developers and builders.</p>
          <div className="flex items-center gap-6">
            <button
              onClick={onOpenReviewPolicy}
              className="hover:text-white transition-colors cursor-pointer"
              type="button"
            >
              Privacy Policy
            </button>
            <button
              onClick={onOpenReviewPolicy}
              className="hover:text-white transition-colors cursor-pointer"
              type="button"
            >
              Terms of Service
            </button>
            <button
              onClick={onOpenSubmit}
              className="text-[#F59E0B] hover:text-[#F59E0B]/80 font-medium transition-colors cursor-pointer flex items-center gap-1"
              type="button"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Submit Referral Deal</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
