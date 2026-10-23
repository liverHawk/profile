import React, { useState } from 'react';
import {
  X,
  Star,
  ExternalLink,
  Copy,
  Check,
  ShieldCheck,
  Gift,
  CheckCircle2,
  Terminal,
  Zap,
  Bookmark
} from 'lucide-react';
import type { Tool } from '../types';

interface ToolDetailDrawerProps {
  tool: Tool | null;
  onClose: () => void;
  onCopyCode: (code: string, toolName: string) => void;
  onBookmarkToggle?: (toolId: string) => void;
  isBookmarked?: boolean;
}

export const ToolDetailDrawer: React.FC<ToolDetailDrawerProps> = ({
  tool,
  onClose,
  onCopyCode,
  onBookmarkToggle,
  isBookmarked
}) => {
  const [copied, setCopied] = useState(false);

  if (!tool) return null;

  const handleCopy = () => {
    if (!tool.referralCode) return;
    onCopyCode(tool.referralCode, tool.name);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
      />

      {/* Drawer Container */}
      <div className="fixed inset-y-0 right-0 max-w-xl w-full bg-[#0F1117] border-l border-[#1E2230] shadow-2xl flex flex-col z-10 overflow-y-auto">
        {/* Top Header */}
        <div className="sticky top-0 bg-[#0F1117]/95 backdrop-blur-md p-5 border-b border-[#1E2230] flex items-center justify-between z-20">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded font-mono-code text-[11px] font-semibold uppercase bg-[#292a2e] text-[#cabeff]">
              {tool.categoryLabel}
            </span>
            <span className="text-xs text-[#8A91A5]">Tool Deep Dive</span>
          </div>

          <div className="flex items-center gap-2">
            {onBookmarkToggle && (
              <button
                onClick={() => onBookmarkToggle(tool.id)}
                className={`p-2 rounded-lg border transition-colors cursor-pointer ${
                  isBookmarked
                    ? 'bg-[#F59E0B]/20 text-[#F59E0B] border-[#F59E0B]/40'
                    : 'bg-[#181B24] text-[#8A91A5] hover:text-white border-[#1E2230]'
                }`}
                title="ブックマーク"
                type="button"
              >
                <Bookmark className="w-4 h-4" />
              </button>
            )}

            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-[#181B24] text-[#8A91A5] hover:text-white hover:bg-[#1f1f24] border border-[#1E2230] transition-colors cursor-pointer"
              type="button"
              aria-label="閉じる"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 flex flex-col gap-6">
          {/* Main Title & Rating */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {tool.name}
              </h2>
              <div className="flex items-center gap-1 bg-[#1a1b20] px-2.5 py-1 rounded-lg border border-[#1E2230]">
                <Star className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
                <span className="font-mono-code text-xs font-semibold text-white">
                  {tool.rating.toFixed(1)}
                </span>
              </div>
            </div>
            <p className="text-sm text-[#cabeff] font-medium leading-relaxed">
              {tool.tagline}
            </p>
          </div>

          {/* Exclusive Perk Highlight Box */}
          <div className="p-4 rounded-xl bg-gradient-to-br from-[#1a1b20] to-[#121317] border border-[#7c5cfc]/30 shadow-lg flex flex-col gap-2.5">
            <div className="flex items-center gap-2 text-[#F59E0B]">
              <Gift className="w-5 h-5 text-[#F59E0B]" />
              <span className="font-mono-code text-xs uppercase font-bold tracking-wider">
                限定紹介プログラム特典
              </span>
            </div>
            <h4 className="text-sm sm:text-base font-semibold text-white">
              {tool.perkTitle}
            </h4>
            <p className="text-xs text-[#c9c4d8] leading-relaxed">
              {tool.perkDetail}
            </p>

            {tool.savingsEstimate && (
              <div className="mt-1 pt-2 border-t border-[#1E2230] flex items-center justify-between text-xs font-mono-code">
                <span className="text-[#8A91A5]">推定ユーザー節約額:</span>
                <span className="text-[#26e19a] font-bold">{tool.savingsEstimate}</span>
              </div>
            )}
          </div>

          {/* Referral Code Row if present */}
          {tool.referralCode && (
            <div className="flex flex-col gap-2 p-3.5 rounded-xl bg-[#181B24] border border-[#1E2230]">
              <span className="text-xs text-[#8A91A5] font-mono-code uppercase">
                専用紹介コード / パラメータ:
              </span>
              <div className="flex items-center justify-between gap-2">
                <code className="font-mono-code text-sm text-[#26e19a] bg-[#0d0e12] px-3 py-1.5 rounded-lg border border-[#26e19a]/20 truncate flex-1">
                  {tool.referralCode}
                </code>
                <button
                  onClick={handleCopy}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono-code font-semibold transition-colors cursor-pointer shrink-0 ${
                    copied
                      ? 'bg-[#26e19a] text-[#002112]'
                      : 'bg-[#292a2e] hover:bg-[#343439] text-white border border-[#2E364F]'
                  }`}
                  type="button"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>コピー完了</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>コードをコピー</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          )}

          {/* Curator Notes */}
          {tool.curatorNotes && (
            <div className="p-4 rounded-xl bg-[#181B24] border border-[#1E2230] flex flex-col gap-2">
              <div className="flex items-center gap-1.5 text-[#a4e7ff] text-xs font-mono-code uppercase font-semibold">
                <Zap className="w-3.5 h-3.5 text-[#00d2fe]" />
                <span>運営者による実務レビュー</span>
              </div>
              <p className="text-xs sm:text-sm text-[#c9c4d8] leading-relaxed">
                {tool.curatorNotes}
              </p>
            </div>
          )}

          {/* Core Features */}
          {tool.features && tool.features.length > 0 && (
            <div className="flex flex-col gap-2.5">
              <h3 className="text-sm font-semibold text-white font-display">
                主な特徴・機能
              </h3>
              <ul className="flex flex-col gap-2">
                {tool.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-[#c9c4d8]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#26e19a] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Specs Table */}
          {tool.specs && tool.specs.length > 0 && (
            <div className="flex flex-col gap-2.5">
              <h3 className="text-sm font-semibold text-white font-display">
                スペック & 検証情報
              </h3>
              <div className="divide-y divide-[#1E2230] rounded-xl bg-[#181B24] border border-[#1E2230] text-xs overflow-hidden">
                {tool.specs.map((spec, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3">
                    <span className="text-[#8A91A5] font-mono-code">{spec.label}</span>
                    <span className="text-white font-medium text-right">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* How to Redeem Steps */}
          {tool.howToRedeem && tool.howToRedeem.length > 0 && (
            <div className="flex flex-col gap-2.5">
              <h3 className="text-sm font-semibold text-white font-display">
                特典の適用・利用手順
              </h3>
              <ol className="flex flex-col gap-2">
                {tool.howToRedeem.map((step, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-lg bg-[#181B24] border border-[#1E2230] text-xs text-[#c9c4d8]"
                  >
                    <span className="w-5 h-5 rounded-full bg-[#7c5cfc]/20 text-[#cabeff] font-mono-code font-bold flex items-center justify-center shrink-0 text-[11px]">
                      {idx + 1}
                    </span>
                    <span className="leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          )}

          {/* Verification stamp */}
          <div className="flex items-center gap-2 p-3 rounded-lg bg-[#121317] border border-[#26e19a]/20 text-xs text-[#26e19a]">
            <ShieldCheck className="w-4 h-4 shrink-0" />
            <span>StackRef 検証基準: 実務使用 100時間以上 & 有効リンク確認済み</span>
          </div>
        </div>

        {/* Bottom CTA Sticky Bar */}
        <div className="sticky bottom-0 bg-[#0F1117] p-5 border-t border-[#1E2230] flex items-center gap-3">
          <a
            href={tool.referralUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#cabeff] hover:bg-[#947dff] text-[#1c0062] font-semibold text-sm transition-all shadow-lg"
          >
            <span>{tool.ctaText} (公式サイトへ)</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};
