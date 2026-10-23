import React from 'react';
import {
  Code2,
  Terminal,
  CheckSquare,
  Database,
  KeyRound,
  Cloud,
  Zap,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import type { Tool } from '../types';

interface TechStackGridProps {
  tools: Tool[];
  onOpenDetail: (tool: Tool) => void;
}

export const TechStackGrid: React.FC<TechStackGridProps> = ({
  tools,
  onOpenDetail
}) => {
  const gridTools = tools.filter((t) => !t.isSpotlight);

  const renderIcon = (type: Tool['iconType'], color: string) => {
    const className = `w-5 h-5 ${color}`;
    switch (type) {
      case 'code':
        return <Code2 className={className} />;
      case 'prompt':
        return <Terminal className={className} />;
      case 'checklist':
        return <CheckSquare className={className} />;
      case 'database':
        return <Database className={className} />;
      case 'key':
        return <KeyRound className={className} />;
      case 'cloud':
        return <Cloud className={className} />;
      default:
        return <Code2 className={className} />;
    }
  };

  const getBadgeStyle = (badgeColor?: Tool['badgeColor']) => {
    switch (badgeColor) {
      case 'amber':
        return 'text-[#F59E0B] border-[#F59E0B]/30';
      case 'secondary':
        return 'text-[#00d2fe] border-[#00d2fe]/30';
      case 'tertiary':
        return 'text-[#26e19a] border-[#26e19a]/30';
      case 'primary':
      default:
        return 'text-[#cabeff] border-[#cabeff]/30';
    }
  };

  const getIconColor = (id: string) => {
    switch (id) {
      case 'cursor':
        return 'text-[#cabeff]';
      case 'warp':
        return 'text-[#00d2fe]';
      case 'linear':
        return 'text-[#cabeff]';
      case 'supabase':
        return 'text-[#26e19a]';
      case '1password':
        return 'text-[#00d2fe]';
      case 'cloudflare':
        return 'text-[#cabeff]';
      case 'wise':
        return 'text-[#26e19a]';
      default:
        return 'text-[#cabeff]';
    }
  };

  return (
    <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-6 w-full">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-6">
        <div className="flex flex-col gap-1">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#F3F4F8] tracking-tight">
            Active Tech Stack Perks
          </h2>
          <p className="text-sm text-[#c9c4d8]">
            開発環境・チームコラボレーション・クラウドインフラの厳選リファラル
          </p>
        </div>
        <div className="hidden md:flex items-center gap-1.5 text-[#8A91A5] font-mono-code text-xs">
          <Zap className="w-4 h-4 text-[#26e19a]" />
          <span>全リンク紹介ボーナス自動有効化</span>
        </div>
      </div>

      {/* Grid of Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" id="toolsGrid">
        {gridTools.map((tool) => (
          <article
            key={tool.id}
            onClick={() => onOpenDetail(tool)}
            className="group flex flex-col justify-between p-5 rounded-2xl bg-[#0F1117] border border-[#1E2230] shadow-sm hover:border-[#2E364F] hover:shadow-[0_8px_24px_rgba(0,0,0,0.6)] transition-all duration-200 cursor-pointer"
          >
            <div className="flex flex-col gap-3">
              {/* Card Top: Icon & Badge */}
              <div className="flex items-start justify-between">
                <div className="w-10 h-10 rounded-xl bg-[#292a2e] border border-[#2E364F] flex items-center justify-center p-2 shadow-sm group-hover:scale-105 transition-transform">
                  {renderIcon(tool.iconType, getIconColor(tool.id))}
                </div>
                <span
                  className={`px-2.5 py-0.5 rounded font-mono-code text-[11px] font-medium bg-[#1f1f24] border ${getBadgeStyle(
                    tool.badgeColor
                  )}`}
                >
                  {tool.badge}
                </span>
              </div>

              {/* SubCategory & Title */}
              <div>
                <span className="font-mono-code text-[11px] text-[#8A91A5] uppercase tracking-wider">
                  {tool.subCategory}
                </span>
                <h3 className="font-display text-lg font-bold text-[#F3F4F8] mt-0.5 flex items-center justify-between">
                  <span>{tool.name}</span>
                  <ChevronRight className="w-4 h-4 text-[#8A91A5] opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
              </div>

              {/* Description */}
              <p className="text-sm text-[#c9c4d8] leading-relaxed line-clamp-3">
                {tool.description}
              </p>

              {/* Perk Status Strip */}
              <div className="py-1.5 px-2.5 rounded-lg bg-[#1a1b20] border border-[#1E2230] font-mono-code text-[11px] text-[#8A91A5] flex items-center justify-between">
                <span className="truncate pr-1">{tool.perkTitle}</span>
                <span
                  className={`shrink-0 font-medium ${
                    tool.id === 'warp'
                      ? 'text-[#00d2fe]'
                      : 'text-[#26e19a]'
                  }`}
                >
                  {tool.perkDetail.split('・')[0]}
                </span>
              </div>
            </div>

            {/* Bottom Direct CTA */}
            <div className="pt-4 mt-2">
              <a
                href={tool.referralUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="w-full flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#181B24] text-[#F3F4F8] hover:bg-[#1f1f24] hover:text-white border border-[#1E2230] hover:border-[#7c5cfc]/50 font-mono-code text-xs font-semibold transition-all shadow-sm"
              >
                <span>{tool.ctaText}</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#8A91A5]" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
