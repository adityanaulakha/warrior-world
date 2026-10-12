import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-2 select-none">
      {/* Tooltip bubble */}
      {showTooltip && (
        <div className="relative bg-white text-neutral-900 border border-neutral-200 p-3 rounded-2xl shadow-xl max-w-xs text-xs animate-in fade-in duration-200">
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="absolute top-1.5 right-1.5 text-neutral-400 hover:text-black p-0.5"
            aria-label="Dismiss chat tip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="text-[10px] text-neutral-500 font-semibold uppercase mb-0.5">
            Need Help?
          </div>
          <p className="text-neutral-700 pr-3 leading-snug">
            Chat with us on WhatsApp for size advice and combo order queries.
          </p>
          <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-white border-r border-b border-neutral-200 rotate-45" />
        </div>
      )}

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/917043460760?text=Hello%20WarriorWorld%20Team!%20I%20have%20a%20query%20about%20your%20Shark%20Tank%20apparel."
        target="_blank"
        rel="noopener noreferrer"
        className="w-13 h-13 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all group"
        aria-label="WhatsApp Support"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 text-white fill-current" />
      </a>
    </div>
  );
};
