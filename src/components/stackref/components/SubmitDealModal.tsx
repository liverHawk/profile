import React, { useState } from 'react';
import { X, Sparkles, Send, CheckCircle2 } from 'lucide-react';
import type { ToolCategory, DealSubmission } from '../types';

interface SubmitDealModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (submission: DealSubmission) => void;
}

export const SubmitDealModal: React.FC<SubmitDealModalProps> = ({
  isOpen,
  onClose,
  onSubmit
}) => {
  const [toolName, setToolName] = useState('');
  const [category, setCategory] = useState<ToolCategory>('devtools');
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [referralCode, setReferralCode] = useState('');
  const [perkDescription, setPerkDescription] = useState('');
  const [submitterHandle, setSubmitterHandle] = useState('');
  const [verifiedTested, setVerifiedTested] = useState(false);
  const [error, setError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!toolName.trim()) {
      setError('ツール名を入力してください');
      return;
    }
    if (!websiteUrl.trim() || !websiteUrl.startsWith('http')) {
      setError('有効な紹介URL (https://...) を入力してください');
      return;
    }
    if (!perkDescription.trim()) {
      setError('特典内容（例: $50クレジット付与、無料期間延長など）を入力してください');
      return;
    }
    if (!verifiedTested) {
      setError('運営者ポリシー（実務検証済みであること）への同意が必要です');
      return;
    }

    setError('');
    onSubmit({
      toolName: toolName.trim(),
      category,
      websiteUrl: websiteUrl.trim(),
      referralCode: referralCode.trim(),
      perkDescription: perkDescription.trim(),
      submitterHandle: submitterHandle.trim() || '@anonymous_dev'
    });

    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      onClose();
      // Reset form
      setToolName('');
      setWebsiteUrl('');
      setReferralCode('');
      setPerkDescription('');
      setVerifiedTested(false);
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-lg bg-[#0F1117] border border-[#1E2230] rounded-2xl shadow-2xl p-6 z-10">
        <div className="flex items-start justify-between pb-4 border-b border-[#1E2230]">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-[#7c5cfc]/20 text-[#cabeff]">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display text-xl font-bold text-white">
                Submit Referral Deal
              </h3>
              <p className="text-xs text-[#8A91A5]">
                推薦ツールと限定特典コードの新規登録申請
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

        {isSuccess ? (
          <div className="py-12 flex flex-col items-center justify-center gap-3 text-center">
            <div className="w-14 h-14 rounded-full bg-[#26e19a]/20 text-[#26e19a] flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="font-display text-lg font-bold text-white">
              申請を受け付けました！
            </h4>
            <p className="text-xs text-[#c9c4d8] max-w-sm">
              キュレーターによる動作検証と紹介特典の有効性テスト後、StackRefカタログに掲載されます。
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-4 text-xs">
            {error && (
              <div className="p-2.5 rounded-lg bg-[#ffdad6]/10 border border-[#ffb4ab]/30 text-[#ffb4ab]">
                {error}
              </div>
            )}

            <div>
              <label className="block text-[#c9c4d8] font-mono-code mb-1">
                ツール名 *
              </label>
              <input
                type="text"
                value={toolName}
                onChange={(e) => setToolName(e.target.value)}
                placeholder="例: Resend, Tailscale, Neon..."
                className="w-full px-3 py-2 rounded-lg bg-[#181B24] border border-[#1E2230] text-white focus:outline-none focus:border-[#7c5cfc]"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[#c9c4d8] font-mono-code mb-1">
                  カテゴリ *
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value as ToolCategory)}
                  className="w-full px-3 py-2 rounded-lg bg-[#181B24] border border-[#1E2230] text-white focus:outline-none focus:border-[#7c5cfc]"
                >
                  <option value="productivity">生産性・ランチャー</option>
                  <option value="security">セキュリティ & VPN</option>
                  <option value="devtools">開発者ツール</option>
                  <option value="cloud">AI / クラウド</option>
                </select>
              </div>

              <div>
                <label className="block text-[#c9c4d8] font-mono-code mb-1">
                  紹介コード (任意)
                </label>
                <input
                  type="text"
                  value={referralCode}
                  onChange={(e) => setReferralCode(e.target.value)}
                  placeholder="例: ref/XYZ123"
                  className="w-full px-3 py-2 rounded-lg bg-[#181B24] border border-[#1E2230] text-white focus:outline-none focus:border-[#7c5cfc]"
                />
              </div>
            </div>

            <div>
              <label className="block text-[#c9c4d8] font-mono-code mb-1">
                紹介用URL (公式サイトまたはリファラルリンク) *
              </label>
              <input
                type="url"
                value={websiteUrl}
                onChange={(e) => setWebsiteUrl(e.target.value)}
                placeholder="https://..."
                className="w-full px-3 py-2 rounded-lg bg-[#181B24] border border-[#1E2230] text-white focus:outline-none focus:border-[#7c5cfc]"
              />
            </div>

            <div>
              <label className="block text-[#c9c4d8] font-mono-code mb-1">
                限定特典・割引内容 *
              </label>
              <textarea
                value={perkDescription}
                onChange={(e) => setPerkDescription(e.target.value)}
                placeholder="例: 初月無料トライアル＋APIリクエスト枠増量"
                rows={2}
                className="w-full px-3 py-2 rounded-lg bg-[#181B24] border border-[#1E2230] text-white focus:outline-none focus:border-[#7c5cfc]"
              />
            </div>

            <div>
              <label className="block text-[#c9c4d8] font-mono-code mb-1">
                推薦者のお名前 / GitHubハンドル
              </label>
              <input
                type="text"
                value={submitterHandle}
                onChange={(e) => setSubmitterHandle(e.target.value)}
                placeholder="@developer_handle"
                className="w-full px-3 py-2 rounded-lg bg-[#181B24] border border-[#1E2230] text-white focus:outline-none focus:border-[#7c5cfc]"
              />
            </div>

            <div className="flex items-start gap-2 pt-1">
              <input
                type="checkbox"
                id="verifiedCheck"
                checked={verifiedTested}
                onChange={(e) => setVerifiedTested(e.target.checked)}
                className="mt-0.5 rounded bg-[#181B24] border-[#1E2230] text-[#7c5cfc] focus:ring-0 cursor-pointer"
              />
              <label
                htmlFor="verifiedCheck"
                className="text-[11px] text-[#8A91A5] leading-snug cursor-pointer"
              >
                自身で実際に有料課金・実務使用し、紹介特典の動作が確認されたツールであることを宣誓します。
              </label>
            </div>

            <div className="pt-2 flex items-center justify-end gap-2 border-t border-[#1E2230]">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-lg bg-[#181B24] hover:bg-[#1f1f24] text-[#c9c4d8] transition-colors cursor-pointer"
              >
                キャンセル
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded-lg bg-[#cabeff] hover:bg-[#947dff] text-[#1c0062] font-semibold flex items-center gap-1.5 transition-colors cursor-pointer shadow-md"
              >
                <Send className="w-3.5 h-3.5" />
                <span>申請を送信する</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
