import React from 'react';
import { Check, ShieldCheck, ArrowRight, Award } from 'lucide-react';

interface TransparencyBoxProps {
  onOpenReviewPolicy: () => void;
}

export const TransparencyBox: React.FC<TransparencyBoxProps> = ({
  onOpenReviewPolicy
}) => {
  return (
    <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 w-full">
      <div className="relative overflow-hidden p-6 sm:p-8 rounded-2xl bg-[#0F1117] border border-[#1E2230] shadow-xl">
        {/* Visual Accent Top Stripe */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#7c5cfc] via-[#00d2fe] to-[#26e19a]" />

        <div className="flex flex-col md:flex-row gap-8 items-start justify-between">
          {/* Main Disclosure Text */}
          <div className="flex flex-col gap-3 max-w-2xl">
            <div className="flex items-center gap-2 text-[#F59E0B]">
              <ShieldCheck className="w-5 h-5 text-[#F59E0B]" />
              <h3 className="font-display text-xl font-bold text-[#F3F4F8] tracking-tight">
                紹介リンクについて（透明性とアフィリエイト明記）
              </h3>
            </div>

            <p className="text-sm text-[#c9c4d8] leading-relaxed">
              当ページに掲載されているリンクは、紹介プログラム（リファラル・アフィリエイト）を含んでいます。訪問者様が当ハブ経由でご登録・ご購入いただいた場合、
              <strong className="text-white font-semibold underline decoration-[#26e19a]/40 underline-offset-4">
                ユーザー様に限定特典（無料期間延長や特別割引）が即時適用され
              </strong>
              、同時に運営者にもサービス維持のための紹介報酬が発生することがあります。
            </p>

            <p className="text-xs text-[#8A91A5] leading-relaxed">
              ※掲載しているすべてのツールは、運営者が日頃のコーディング、インフラ運用、情報セキュリティで実際に有料課金・検証し、「本当に他者にも推奨できる」と確信したもののみを厳選しています。提携料目的での無差別な掲載は一切行っていません。
            </p>
          </div>

          {/* Curator Standards Sidebar Box */}
          <div className="flex flex-col gap-3 p-5 rounded-xl bg-[#1a1b20] border border-[#1E2230] min-w-[280px] w-full md:w-auto shrink-0 shadow-sm">
            <div className="flex items-center gap-1.5 text-[#8A91A5] font-mono-code text-[11px] uppercase tracking-wider">
              <Award className="w-3.5 h-3.5 text-[#26e19a]" />
              <span>Curator Standards</span>
            </div>

            <ul className="flex flex-col gap-2 text-xs text-[#c9c4d8]">
              <li className="flex items-center gap-2 text-[#26e19a]">
                <Check className="w-4 h-4 text-[#26e19a] shrink-0" />
                <span className="text-[#F3F4F8]">実務使用実績 100時間以上</span>
              </li>
              <li className="flex items-center gap-2 text-[#26e19a]">
                <Check className="w-4 h-4 text-[#26e19a] shrink-0" />
                <span className="text-[#F3F4F8]">紹介特典の動作・有効性確認済み</span>
              </li>
              <li className="flex items-center gap-2 text-[#26e19a]">
                <Check className="w-4 h-4 text-[#26e19a] shrink-0" />
                <span className="text-[#F3F4F8]">悪質サブスクリプション排除</span>
              </li>
            </ul>

            <div className="pt-2 mt-1 border-t border-[#1E2230]">
              <button
                onClick={onOpenReviewPolicy}
                className="inline-flex items-center gap-1.5 font-mono-code text-xs text-[#cabeff] hover:text-white transition-colors cursor-pointer group"
                type="button"
              >
                <span>運営者レビュー方針を読む</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
