import React, { useState } from 'react';
import { Search, Menu, X, Shield, Sparkles, User } from 'lucide-react';
import type { ToolCategory } from '../types';

interface HeaderProps {
  activeCategory: ToolCategory;
  onSelectCategory: (category: ToolCategory) => void;
  onOpenSearch: () => void;
  onOpenAbout: () => void;
  onOpenSubmit: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeCategory,
  onSelectCategory,
  onOpenSearch,
  onOpenAbout,
  onOpenSubmit
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showUserTooltip, setShowUserTooltip] = useState(false);

  const navItems: { label: string; category: ToolCategory | 'about' }[] = [
    { label: 'Featured', category: 'all' },
    { label: 'Productivity', category: 'productivity' },
    { label: 'Security & VPN', category: 'security' },
    { label: 'Dev Tools', category: 'devtools' },
    { label: 'AI & Cloud', category: 'cloud' },
    { label: 'About', category: 'about' }
  ];

  const handleNavClick = (item: { label: string; category: ToolCategory | 'about' }) => {
    if (item.category === 'about') {
      onOpenAbout();
    } else {
      onSelectCategory(item.category);
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-[#0F1117]/90 backdrop-blur-xl border-b border-[#1E2230] shadow-[0_4px_24px_rgba(0,0,0,0.5)]">
      <div className="h-16 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Brand Zone */}
        <div className="flex items-center gap-6">
          <button
            onClick={() => onSelectCategory('all')}
            className="flex items-center gap-2.5 group focus:outline-none"
            type="button"
          >
            <img
              src="https://lh3.googleusercontent.com/aida/AEtjO1WEmsjEuuoiAaFapo6MNjMAtda6lPF2LblGv4UPZTas1UVQCI1osg91FrbYv3eObbBFZT7WH1rKLByjACTJh6K8sivBZhxDDPWVJ2VKosiy2JWmtVLGsu9gO44hCwcRFVPn_2dZuDXNtNLtZIs6rHdOhvgTz87PKB1EurBtX7Ke0afnLz94AHEjyDUHob-Zg8kuBsw-dmfsvYlxzMECQgGoYxBGJyPmSAi5eFMiAzpG0iBORh_pUBfTUwM"
              alt="StackRef Logo"
              className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
            />
            <span className="font-display text-xl font-bold text-white tracking-tight">
              StackRef
            </span>
            <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full bg-[#1f1f24] text-[#26e19a] font-mono-code text-[11px] font-medium border border-[#26e19a]/20">
              Curated Perks
            </span>
          </button>

          {/* Navigation Links (Desktop) */}
          <nav className="hidden xl:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive =
                item.category !== 'about' && activeCategory === item.category;

              return (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-[#947dff] text-[#1c0062] font-semibold shadow-sm'
                      : 'text-[#c9c4d8] hover:text-white hover:bg-[#1f1f24]'
                  }`}
                  type="button"
                >
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* Back to Profile Link */}
          <a
            href="/"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#181B24] hover:bg-[#1f1f24] text-[#c9c4d8] hover:text-white text-xs font-medium border border-[#1E2230] hover:border-[#7c5cfc]/50 transition-colors"
          >
            <span>← Profile</span>
          </a>

          {/* Quick Submit CTA */}
          <button
            onClick={onOpenSubmit}
            className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#181B24] hover:bg-[#1f1f24] text-[#F3F4F8] text-xs font-medium border border-[#1E2230] hover:border-[#7c5cfc]/50 transition-colors"
            type="button"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span>紹介案件を投稿</span>
          </button>

          {/* Search Bar Button */}
          <button
            onClick={onOpenSearch}
            className="flex items-center gap-3 px-3 py-1.5 rounded-lg bg-[#181B24] text-[#8A91A5] hover:text-white hover:bg-[#1f1f24] border border-[#1E2230] transition-colors shadow-sm cursor-pointer"
            type="button"
            title="ツールや特典を検索 (⌘K)"
          >
            <div className="flex items-center gap-1.5">
              <Search className="w-4 h-4 text-[#8A91A5]" />
              <span className="text-xs hidden sm:inline text-[#8A91A5]">
                Search perks, tools...
              </span>
            </div>
            <kbd className="hidden md:inline-flex items-center px-1.5 py-0.5 rounded bg-[#1f1f24] font-mono-code text-[11px] text-[#8A91A5] border border-[#2E364F]">
              ⌘K
            </kbd>
          </button>

          {/* User Profile Avatar with Status */}
          <div className="relative">
            <button
              onClick={() => setShowUserTooltip(!showUserTooltip)}
              className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#7c5cfc] to-[#947dff] flex items-center justify-center text-white shadow-md hover:ring-2 hover:ring-[#7c5cfc]/50 transition-all cursor-pointer"
              type="button"
              aria-label="User Account"
            >
              <User className="w-4 h-4 text-white" />
            </button>

            {showUserTooltip && (
              <div className="absolute right-0 mt-2 w-64 p-3 rounded-xl bg-[#181B24] border border-[#1E2230] shadow-2xl z-50 text-xs">
                <div className="flex items-center gap-2 pb-2 border-b border-[#1E2230]">
                  <div className="w-7 h-7 rounded-full bg-[#7c5cfc]/20 text-[#cabeff] flex items-center justify-center font-bold">
                    SR
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-white font-medium truncate">Developer VIP Pass</span>
                    <span className="text-[#8A91A5] text-[10px] flex items-center gap-1">
                      <Shield className="w-3 h-3 text-[#26e19a]" /> 特典優先利用中
                    </span>
                  </div>
                </div>
                <div className="pt-2 text-[#c9c4d8] space-y-1 text-[11px]">
                  <p>全リンクのアフィリエイト紹介ボーナスが自動適用されます。</p>
                  <button
                    onClick={() => {
                      setShowUserTooltip(false);
                      onOpenSubmit();
                    }}
                    className="w-full mt-2 py-1.5 px-2 rounded bg-[#7c5cfc] hover:bg-[#6342E8] text-white font-medium text-center transition-colors"
                  >
                    あなたのリファラルを掲載する
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg bg-[#181B24] text-[#c9c4d8] hover:text-white"
            type="button"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden px-4 pt-2 pb-4 bg-[#0F1117] border-b border-[#1E2230] space-y-1 shadow-2xl">
          <a
            href="/"
            className="w-full block px-3 py-2 rounded-lg text-sm font-medium text-[#cabeff] hover:bg-[#1f1f24] transition-colors"
          >
            ← Profile に戻る
          </a>
          {navItems.map((item) => {
            const isActive =
              item.category !== 'about' && activeCategory === item.category;

            return (
              <button
                key={item.label}
                onClick={() => handleNavClick(item)}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-[#947dff] text-[#1c0062]'
                    : 'text-[#c9c4d8] hover:text-white hover:bg-[#1f1f24]'
                }`}
                type="button"
              >
                {item.label}
              </button>
            );
          })}
          <div className="pt-2 border-t border-[#1E2230]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSubmit();
              }}
              className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-[#F59E0B] hover:bg-[#1f1f24] flex items-center gap-2"
              type="button"
            >
              <Sparkles className="w-4 h-4" />
              <span>紹介案件を投稿する (Submit Deal)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
