import React, { useEffect } from 'react';
import { CheckCircle2, X } from 'lucide-react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClose();
    }, 3200);
    return () => clearTimeout(timer);
  }, [message, onClose]);

  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-md animate-in fade-in slide-in-from-bottom-5 duration-200">
      <div className="flex items-center gap-3 p-4 rounded-xl bg-[#181B24] border border-[#26e19a]/40 text-white shadow-2xl backdrop-blur-lg">
        <CheckCircle2 className="w-5 h-5 text-[#26e19a] shrink-0" />
        <span className="text-xs sm:text-sm font-medium leading-snug flex-1">
          {message}
        </span>
        <button
          onClick={onClose}
          className="p-1 text-[#8A91A5] hover:text-white rounded transition-colors"
          type="button"
          aria-label="Dismiss"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
