import React, { useState } from 'react';
import {
  Star,
  Terminal,
  Shield,
  Gift,
  Copy,
  Check,
  ArrowRight,
  Info
} from 'lucide-react';
import type { Tool } from '../types';

interface SpotlightSectionProps {
  tools: Tool[];
  onOpenDetail: (tool: Tool) => void;
  onCopyCode: (code: string, toolName: string) => void;
}

export const SpotlightSection: React.FC<SpotlightSectionProps> = ({
  tools,
  onOpenDetail,
  onCopyCode
}) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (tool: Tool) => {
    if (!tool.referralCode) return;
    onCopyCode(tool.referralCode, tool.name);
    setCopiedId(tool.id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2200);
  };

  const spotlightTools = tools.filter((t) => t.isSpotlight);

  if (spotlightTools.length === 0) return null;

  return (
    <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-4 w-full">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Star className="w-5 h-5 text-[#cabeff] fill-[#cabeff]" />
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#F3F4F8] tracking-tight">
            Top Editor's Perks
          </h2>
          <span className="text-[#8A91A5] text-xs sm:text-sm ml-2 hidden sm:inline">
            筆者が毎日稼働させている2大コアツール
          </span>
        </div>
        <span className="font-mono-code text-[11px] sm:text-xs text-[#26e19a] flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#26e19a]" />
          特典コード即時適用
        </span>
      </div>

      {/* 2-Column Spotlight Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-10">
        {spotlightTools.map((tool) => {
          const isRaycast = tool.id === 'raycast';
          const isCopied = copiedId === tool.id;

          return (
            <article
              key={tool.id}
              className="relative flex flex-col justify-between p-6 rounded-2xl bg-[#0F1117] border border-[#1E2230] shadow-xl hover:border-[#2E364F] hover:shadow-[0_0_24px_rgba(124,92,252,0.15)] transition-all duration-300 group overflow-hidden"
            >
              {/* Background Accent Glow */}
              <div
                className={`absolute inset-0 pointer-events-none rounded-2xl ${
                  isRaycast
                    ? 'bg-gradient-to-br from-[#7c5cfc]/10 via-transparent to-transparent'
                    : 'bg-gradient-to-br from-[#00d2fe]/10 via-transparent to-transparent'
                }`}
              />

              <div className="relative flex flex-col gap-4">
                {/* Header Row */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3.5">
                    <div className="w-14 h-14 rounded-xl bg-[#292a2e] border border-[#2E364F] flex items-center justify-center p-2 shadow-sm group-hover:scale-105 transition-transform shrink-0">
                      {isRaycast ? (
                        <Terminal className="w-8 h-8 text-[#cabeff]" />
                      ) : (
                        <Shield className="w-8 h-8 text-[#00d2fe]" />
                      )}
                    </div>
                    <div className="flex flex-col min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span
                          className={`px-2 py-0.5 rounded font-mono-code text-[11px] font-semibold uppercase ${
                            isRaycast
                              ? 'bg-[#292a2e] text-[#cabeff]'
                              : 'bg-[#292a2e] text-[#00d2fe]'
                          }`}
                        >
                          {tool.badge}
                        </span>
                        <span className="px-2 py-0.5 rounded bg-[#1f1f24] text-[#c9c4d8] font-mono-code text-[11px]">
                          {tool.subCategory}
                        </span>
                      </div>
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-[#F3F4F8] mt-1 tracking-tight">
                        {tool.name}
                      </h3>
                    </div>
                  </div>

                  {/* Rating Badge */}
                  <div className="flex flex-col items-end shrink-0">
                    <div className="flex items-center text-[#F59E0B]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
                      ))}
                    </div>
                    <span className="font-mono-code text-[11px] text-[#8A91A5] mt-0.5">
                      {tool.ratingLabel}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-[#c9c4d8] leading-relaxed">
                  {tool.description}
                </p>

                {/* Exclusive Perk Ribbon */}
                <div className="p-3 rounded-xl bg-[#1f1f24] border border-[#2E364F]/60 flex items-start gap-2.5 shadow-sm">
                  <Gift className="w-5 h-5 text-[#F59E0B] shrink-0 mt-0.5" />
                  <div className="flex flex-col">
                    <span className="text-xs sm:text-sm font-semibold text-[#F3F4F8] leading-snug">
                      {tool.perkTitle}
                    </span>
                    <span className="font-mono-code text-[11px] text-[#8A91A5] mt-0.5">
                      {tool.perkDetail}
                    </span>
                  </div>
                </div>

                {/* Referral Code Row */}
                {tool.referralCode && (
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2 p-2.5 rounded-xl bg-[#1a1b20] border border-[#1E2230]">
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="font-mono-code text-[11px] text-[#8A91A5] uppercase shrink-0">
                        Referral:
                      </span>
                      <code
                        className={`font-mono-code text-xs px-2.5 py-1 rounded truncate border ${
                          isRaycast
                            ? 'bg-[#181B24] text-[#26e19a] border-[#26e19a]/20'
                            : 'bg-[#181B24] text-[#00d2fe] border-[#00d2fe]/20'
                        }`}
                      >
                        {tool.referralCode}
                      </code>
                    </div>

                    <button
                      onClick={() => handleCopy(tool)}
                      className={`flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono-code transition-colors cursor-pointer shrink-0 ${
                        isCopied
                          ? 'bg-[#292a2e] text-[#26e19a] border border-[#26e19a]/40 font-semibold'
                          : 'bg-[#181B24] hover:bg-[#1f1f24] text-[#F3F4F8] border border-[#1E2230]'
                      }`}
                      type="button"
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-[#26e19a]" />
                          <span>コピー完了!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-[#8A91A5]" />
                          <span>コードをコピー</span>
                        </>
                      )}
                    </button>
                  </div>
                )}
              </div>

              {/* Bottom Action CTA & Detail Specs Trigger */}
              <div className="relative pt-4 mt-2 flex flex-col sm:flex-row items-center gap-2.5">
                <a
                  href={tool.referralUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-display text-sm font-semibold transition-all shadow-md group-hover:scale-[1.01] ${
                    isRaycast
                      ? 'bg-[#cabeff] text-[#1c0062] hover:bg-[#947dff]'
                      : 'bg-[#00d2fe] text-[#001f28] hover:bg-[#a4e7ff]'
                  }`}
                >
                  <span>{tool.ctaText}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>

                {/* Details Button */}
                <button
                  onClick={() => onOpenDetail(tool)}
                  className="w-full sm:w-auto px-4 py-3 rounded-xl bg-[#181B24] hover:bg-[#1f1f24] text-[#c9c4d8] hover:text-white border border-[#1E2230] text-xs font-medium flex items-center justify-center gap-1.5 whitespace-nowrap transition-colors cursor-pointer"
                  type="button"
                  title="詳細スペックと解説を見る"
                >
                  <Info className="w-3.5 h-3.5 text-[#8A91A5]" />
                  <span>解説・スペック</span>
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
