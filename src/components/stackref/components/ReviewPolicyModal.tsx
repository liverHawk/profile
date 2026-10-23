import React from 'react';
import { X, ShieldCheck, Check, HeartHandshake, Eye, Award } from 'lucide-react';

interface ReviewPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReviewPolicyModal: React.FC<ReviewPolicyModalProps> = ({
  isOpen,
  onClose
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-[#0F1117] border border-[#1E2230] rounded-2xl shadow-2xl p-6 sm:p-8 z-10 max-h-[90vh] overflow-y-auto">
        <div className="flex items-start justify-between pb-4 border-b border-[#1E2230]">
          <div className="flex items-center gap-2.5">
            <div className="p-2.5 rounded-xl bg-[#26e19a]/15 text-[#26e19a]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                StackRef 運営者レビュー方針 & 検証基準
              </h3>
              <p className="text-xs text-[#8A91A5] font-mono-code">
                Editorial Transparency & Curator Standards (2025 Edition)
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#8A91A5] hover:text-white rounded-lg hover:bg-[#1f1f24] transition-colors cursor-pointer"
            type="button"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-6 flex flex-col gap-6 text-sm text-[#c9c4d8] leading-relaxed">
          {/* Mission */}
          <div className="flex flex-col gap-2">
            <h4 className="font-display text-base font-semibold text-white flex items-center gap-2">
              <Award className="w-4 h-4 text-[#cabeff]" />
              1. 掲載の絶対条件：「自己実用ツール」のみを推薦
            </h4>
            <p>
              StackRef に掲載されているすべてのプロダクトは、運営者が日頃の受託開発、個人SaaS開発、インフラ保守、セキュリティ監査業務で
              <strong className="text-white">実際に実務で有料課金し、100時間以上本番環境で酷使したもの</strong>
              に限定しています。
            </p>
            <p className="text-xs text-[#8A91A5]">
              「使ったことがないが提携料が高いから載せる」「宣伝依頼のメールが来たから紹介する」といった商業的掲載は創設以来一切排除しています。
            </p>
          </div>

          {/* Verification Criteria */}
          <div className="p-4 rounded-xl bg-[#181B24] border border-[#1E2230] flex flex-col gap-3">
            <h5 className="font-mono-code text-xs uppercase font-bold text-[#26e19a] tracking-wider flex items-center gap-1.5">
              <Check className="w-4 h-4" />
              厳格な3大キュレーション基準
            </h5>
            <ul className="flex flex-col gap-2.5 text-xs">
              <li className="flex items-start gap-2">
                <span className="font-bold text-[#cabeff] shrink-0">01. 実務稼働実績:</span>
                <span>本番ワークフローに組み込まれ、業務上の効率化やセキュリティ強化が客観的に証明されていること。</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-[#00d2fe] shrink-0">02. 特典の確実な動作:</span>
                <span>紹介リンクやプロモコードを経由した際、ユーザー側に明示されたトライアル延長やクレジット付与が確実に適用されることをテスト済みであること。</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-[#26e19a] shrink-0">03. 悪質サブスクリプションの排除:</span>
                <span>解約導線が不透明なサービス、過度な自動更新トラップを持つツールは審査で即座に除外します。</span>
              </li>
            </ul>
          </div>

          {/* Affiliate Disclosure & Win-Win */}
          <div className="flex flex-col gap-2">
            <h4 className="font-display text-base font-semibold text-white flex items-center gap-2">
              <HeartHandshake className="w-4 h-4 text-[#00d2fe]" />
              2. 紹介プログラム（リファラル）の仕組みと透明性
            </h4>
            <p>
              当サイトのリンクを通じてツールを登録・購読された場合、
              <strong className="text-white">ユーザー様に追加費用が発生することは一切ありません</strong>。
              むしろ、公式の紹介パートナー枠や限定プロモコードによって、公式サイト直接登録よりも長い無料期間や追加クレジットがユーザー様に付与されます。
            </p>
            <p>
              同時に、運営者側にもサーバー運用費・検証端末費用を賄うための紹介手数料が一部還元される場合があります。これにより完全独立型の検証レビューを継続することが可能となっています。
            </p>
          </div>

          {/* Link Validity check */}
          <div className="flex flex-col gap-2">
            <h4 className="font-display text-base font-semibold text-white flex items-center gap-2">
              <Eye className="w-4 h-4 text-[#F59E0B]" />
              3. リンクの健全性・定期巡回テスト
            </h4>
            <p className="text-xs">
              紹介リンク切れやキャンペーン終了による無効化を防ぐため、定期的な死活チェックを実施しています。万が一動作しない紹介リンクを発見された場合は、フッターの「Submit Referral Deal」または各種フィードバック窓口よりお知らせください。
            </p>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-[#1E2230] flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-[#cabeff] hover:bg-[#947dff] text-[#1c0062] font-semibold text-sm transition-colors cursor-pointer"
            type="button"
          >
            理解して閉じる
          </button>
        </div>
      </div>
    </div>
  );
};
