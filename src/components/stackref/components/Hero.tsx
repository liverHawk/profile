import React from 'react';
import { CheckCircle2, ShieldCheck, Zap, Sparkles } from 'lucide-react';
import { STAT_METRICS } from '../data/tools';

export const Hero: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Subtle Ambient Glow Orbs */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[360px] bg-gradient-to-b from-[#7c5cfc]/15 via-[#00d2fe]/10 to-transparent blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-96 -left-48 w-[420px] h-[420px] bg-[#947dff]/10 blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-[800px] -right-48 w-[460px] h-[460px] bg-[#00d2fe]/10 blur-[160px] pointer-events-none -z-10" />

      {/* Hero Content Section */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-6 w-full">
        <div className="flex flex-col gap-4">
          {/* Overline Tag */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#292a2e] text-[#26e19a] font-mono-code text-[11px] uppercase tracking-wider border border-[#26e19a]/20">
              <span className="w-1.5 h-1.5 rounded-full bg-[#26e19a] animate-pulse" />
              Verified Developer Perks • 厳選紹介リンクハブ
            </span>
            <span className="inline-flex px-2.5 py-1 rounded-full bg-[#1f1f24] text-[#8A91A5] font-mono-code text-[11px] border border-[#1E2230]">
              2025 Edition
            </span>
            <span className="hidden md:inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#1f1f24] text-[#F59E0B] font-mono-code text-[11px] border border-[#F59E0B]/20">
              <Sparkles className="w-3 h-3" />
              直近更新特典あり
            </span>
          </div>

          {/* Main Title */}
          <div className="flex flex-col gap-2 max-w-4xl">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[56px] leading-tight sm:leading-[64px] font-bold text-[#F3F4F8] tracking-tight">
              Curated Tech Stack <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#cabeff] via-[#a4e7ff] to-[#26e19a]">
                & Exclusive Referral Perks
              </span>
            </h1>
            <p className="text-base sm:text-lg text-[#c9c4d8] max-w-2xl mt-1 leading-relaxed">
              実際に毎日の開発・執筆・運用で愛用している生産性ツールやセキュリティ、クラウドサービスの紹介リンク＆限定割引・無料トライアル特典をまとめています。
            </p>
          </div>

          {/* Metric Stat Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-2 mt-2 max-w-3xl">
            {STAT_METRICS.map((metric, index) => (
              <div
                key={index}
                className="flex flex-col p-4 rounded-xl bg-[#0F1117] border border-[#1E2230] shadow-sm hover:border-[#2E364F] transition-colors"
              >
                <span className="font-mono-code text-[11px] text-[#8A91A5] uppercase tracking-wider">
                  {metric.label}
                </span>
                <span
                  className={`font-display text-2xl sm:text-3xl font-semibold mt-0.5 tracking-tight ${
                    metric.colorClass || 'text-white'
                  }`}
                >
                  {metric.value}
                </span>
                <span className="text-xs text-[#8A91A5] mt-1 flex items-center gap-1 truncate">
                  {metric.subtextIcon && (
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#26e19a] shrink-0" />
                  )}
                  {metric.subtext}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
