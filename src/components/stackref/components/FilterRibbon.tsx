import React, { useEffect, useRef } from 'react';
import { Search, Tag, X } from 'lucide-react';
import { CATEGORY_FILTERS } from '../data/tools';
import type { ToolCategory } from '../types';

interface FilterRibbonProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  activeCategory: ToolCategory;
  onSelectCategory: (category: ToolCategory) => void;
  searchInputRef?: React.RefObject<HTMLInputElement | null>;
  totalMatches: number;
}

export const FilterRibbon: React.FC<FilterRibbonProps> = ({
  searchQuery,
  onSearchChange,
  activeCategory,
  onSelectCategory,
  searchInputRef,
  totalMatches
}) => {
  const internalRef = useRef<HTMLInputElement>(null);
  const effectiveRef = searchInputRef || internalRef;

  // Keyboard shortcut listener: ⌘K or Ctrl+K to focus search input
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        effectiveRef.current?.focus();
      }
      if (e.key === 'Escape' && document.activeElement === effectiveRef.current) {
        effectiveRef.current?.blur();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [effectiveRef]);

  return (
    <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full mt-2 mb-6">
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3 p-2 rounded-xl bg-[#1a1b20] border border-[#1E2230] shadow-md">
        {/* Search Bar with Kbd */}
        <div className="relative flex-1 min-w-[260px]">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8A91A5]" />
          <input
            ref={effectiveRef}
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="ツール名、カテゴリ、特典で検索 (Raycast, VPN, Editor...)"
            className="w-full pl-10 pr-20 py-2.5 rounded-lg bg-[#181B24] text-[#F3F4F8] text-sm placeholder:text-[#8A91A5] border border-[#1E2230] focus:border-[#7c5cfc] focus:outline-none focus:bg-[#1f1f24] transition-all"
          />
          <div className="absolute right-2.5 top-1/2 -translate-y-1/2 flex items-center gap-1.5">
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="p-1 text-[#8A91A5] hover:text-white transition-colors"
                type="button"
                aria-label="検索をクリア"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
            <kbd className="hidden sm:inline-flex items-center px-1.5 py-0.5 rounded bg-[#292a2e] text-[#8A91A5] font-mono-code text-[11px] border border-[#2E364F]">
              ⌘K
            </kbd>
          </div>
        </div>

        {/* Quick Filter Chips */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 lg:pb-0 scrollbar-none">
          {CATEGORY_FILTERS.map((chip) => {
            const isActive = activeCategory === chip.id;
            const isPerkHighlight = chip.id === 'perk-only';

            return (
              <button
                key={chip.id}
                onClick={() => onSelectCategory(chip.id as ToolCategory)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium font-mono-code whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 shrink-0 ${
                  isActive
                    ? 'bg-[#cabeff] text-[#1c0062] font-semibold shadow-md'
                    : isPerkHighlight
                    ? 'bg-[#181B24] text-[#F59E0B] hover:bg-[#1f1f24] border border-[#F59E0B]/30'
                    : 'bg-[#181B24] text-[#c9c4d8] hover:text-white hover:bg-[#1f1f24] border border-[#1E2230]'
                }`}
                type="button"
              >
                {isPerkHighlight && <Tag className="w-3 h-3 text-[#F59E0B]" />}
                <span>{chip.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active filter / Search results note if filtered */}
      {(searchQuery || activeCategory !== 'all') && (
        <div className="flex items-center justify-between mt-2.5 px-2 text-xs text-[#8A91A5]">
          <span>
            {totalMatches} 件のツールが見つかりました
            {searchQuery && <span className="text-[#cabeff]"> 「{searchQuery}」</span>}
          </span>
          <button
            onClick={() => {
              onSearchChange('');
              onSelectCategory('all');
            }}
            className="text-[#cabeff] hover:underline cursor-pointer"
            type="button"
          >
            フィルターをリセット
          </button>
        </div>
      )}
    </section>
  );
};
