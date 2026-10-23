/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useMemo } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FilterRibbon } from './components/FilterRibbon';
import { SpotlightSection } from './components/SpotlightSection';
import { TechStackGrid } from './components/TechStackGrid';
import { TransparencyBox } from './components/TransparencyBox';
import { Footer } from './components/Footer';
import { ToolDetailDrawer } from './components/ToolDetailDrawer';
import { SubmitDealModal } from './components/SubmitDealModal';
import { ReviewPolicyModal } from './components/ReviewPolicyModal';
import { Toast } from './components/Toast';
import { INITIAL_TOOLS } from './data/tools';
import type { Tool, ToolCategory, DealSubmission } from './types';

export default function App() {
  const [tools, setTools] = useState<Tool[]>(INITIAL_TOOLS);
  const [activeCategory, setActiveCategory] = useState<ToolCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTool, setSelectedTool] = useState<Tool | null>(null);
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  const [isReviewPolicyModalOpen, setIsReviewPolicyModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>([]);

  const searchInputRef = useRef<HTMLInputElement>(null);

  // Filter tools based on category and search query
  const filteredTools = useMemo(() => {
    return tools.filter((tool) => {
      // Category match
      let matchesCategory = true;
      if (activeCategory === 'all') {
        matchesCategory = true;
      } else if (activeCategory === 'perk-only') {
        matchesCategory = Boolean(tool.referralCode || tool.perkTitle);
      } else {
        matchesCategory = tool.category === activeCategory;
      }

      // Search match
      let matchesSearch = true;
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const searchableText = [
          tool.name,
          tool.description,
          tool.tagline,
          tool.categoryLabel,
          tool.subCategory || '',
          tool.perkTitle,
          tool.perkDetail,
          tool.referralCode || ''
        ]
          .join(' ')
          .toLowerCase();

        matchesSearch = searchableText.includes(query);
      }

      return matchesCategory && matchesSearch;
    });
  }, [tools, activeCategory, searchQuery]);

  // Handle clipboard copy with fallback
  const handleCopyCode = (code: string, toolName: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(code).then(
        () => {
          setToastMessage(`コード「${code}」をコピーしました！${toolName}登録時にご利用ください。`);
        },
        () => {
          fallbackCopy(code, toolName);
        }
      );
    } else {
      fallbackCopy(code, toolName);
    }
  };

  const fallbackCopy = (text: string, toolName: string) => {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-9999px';
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand('copy');
      setToastMessage(`コード「${text}」をコピーしました！${toolName}登録時にご利用ください。`);
    } catch {
      setToastMessage(`コード「${text}」の手動選択をお願いします`);
    }
    document.body.removeChild(textArea);
  };

  // Handle new deal submission
  const handleSubmitDeal = (submission: DealSubmission) => {
    const newTool: Tool = {
      id: `custom-${Date.now()}`,
      name: submission.toolName,
      category: submission.category,
      categoryLabel:
        submission.category === 'productivity'
          ? '生産性・ランチャー'
          : submission.category === 'security'
          ? 'セキュリティ & VPN'
          : submission.category === 'devtools'
          ? '開発者ツール'
          : 'AI / クラウド',
      subCategory: 'COMMUNITY SUBMISSION',
      badge: '審査中 / 検証枠',
      badgeColor: 'amber',
      tagline: submission.perkDescription,
      description: `${submission.submitterHandle} により推薦された開発者特典です。運営者によるリンク有効性確認中。`,
      rating: 4.8,
      ratingLabel: '4.8 (推薦受付)',
      perkTitle: `特典: ${submission.perkDescription}`,
      perkDetail: '紹介リンク経由で即時適用',
      referralCode: submission.referralCode || undefined,
      referralUrl: submission.websiteUrl,
      ctaText: `${submission.toolName} を確認`,
      iconType: 'code',
      curatorNotes: `${submission.submitterHandle} さんからの推薦案件です。`,
      specs: [
        { label: '推薦者', value: submission.submitterHandle },
        { label: 'ステータス', value: 'コミュニティ申請受理済み' }
      ]
    };

    setTools((prev) => [newTool, ...prev]);
    setToastMessage(`🎉 「${submission.toolName}」の紹介申請を受け付けました！`);
  };

  // Handle bookmark toggle
  const handleBookmarkToggle = (toolId: string) => {
    setBookmarkedIds((prev) => {
      const isBookmarked = prev.includes(toolId);
      const next = isBookmarked ? prev.filter((id) => id !== toolId) : [...prev, toolId];
      setToastMessage(
        isBookmarked ? 'ブックマークを解除しました' : '特典をブックマークに追加しました！'
      );
      return next;
    });
  };

  const handleOpenSearch = () => {
    searchInputRef.current?.focus();
    searchInputRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <div className="min-h-screen bg-[#07080B] text-[#e3e2e8] flex flex-col font-sans">
      {/* Header */}
      <Header
        activeCategory={activeCategory}
        onSelectCategory={(cat) => {
          setActiveCategory(cat);
          setSearchQuery('');
        }}
        onOpenSearch={handleOpenSearch}
        onOpenAbout={() => setIsReviewPolicyModalOpen(true)}
        onOpenSubmit={() => setIsSubmitModalOpen(true)}
      />

      {/* Main Content (Offset for fixed Header) */}
      <main className="w-full pt-16 flex-1 flex flex-col">
        {/* Hero Section */}
        <Hero />

        {/* Filter & Search Command Ribbon */}
        <FilterRibbon
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          searchInputRef={searchInputRef}
          totalMatches={filteredTools.length}
        />

        {/* Spotlight Picks (Raycast & Proton) */}
        {filteredTools.some((t) => t.isSpotlight) && (
          <SpotlightSection
            tools={filteredTools}
            onOpenDetail={setSelectedTool}
            onCopyCode={handleCopyCode}
          />
        )}

        {/* Active Tech Stack Perks (Cursor, Warp, Linear, Supabase, 1Password, Cloudflare & Fly.io) */}
        {filteredTools.some((t) => !t.isSpotlight) ? (
          <TechStackGrid
            tools={filteredTools}
            onOpenDetail={setSelectedTool}
          />
        ) : (
          filteredTools.length === 0 && (
            <div className="max-w-[1280px] mx-auto px-4 py-16 text-center">
              <p className="text-base text-[#8A91A5]">
                一致するツールが見つかりませんでした。
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                }}
                className="mt-3 px-4 py-2 rounded-lg bg-[#181B24] border border-[#1E2230] text-sm text-[#cabeff] hover:bg-[#1f1f24] transition-colors cursor-pointer"
                type="button"
              >
                すべてのツールを表示
              </button>
            </div>
          )
        )}

        {/* Creator Note & Full Transparency Box */}
        <TransparencyBox
          onOpenReviewPolicy={() => setIsReviewPolicyModalOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer
        onSelectCategory={(cat) => {
          setActiveCategory(cat);
          setSearchQuery('');
        }}
        onOpenReviewPolicy={() => setIsReviewPolicyModalOpen(true)}
        onOpenSubmit={() => setIsSubmitModalOpen(true)}
        onShowToast={setToastMessage}
      />

      {/* Tool Detail Slide-Over Drawer */}
      <ToolDetailDrawer
        tool={selectedTool}
        onClose={() => setSelectedTool(null)}
        onCopyCode={handleCopyCode}
        onBookmarkToggle={handleBookmarkToggle}
        isBookmarked={selectedTool ? bookmarkedIds.includes(selectedTool.id) : false}
      />

      {/* Submit Deal Modal */}
      <SubmitDealModal
        isOpen={isSubmitModalOpen}
        onClose={() => setIsSubmitModalOpen(false)}
        onSubmit={handleSubmitDeal}
      />

      {/* Review Policy & Transparency Modal */}
      <ReviewPolicyModal
        isOpen={isReviewPolicyModalOpen}
        onClose={() => setIsReviewPolicyModalOpen(false)}
      />

      {/* Toast Notification */}
      <Toast
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />
    </div>
  );
}
