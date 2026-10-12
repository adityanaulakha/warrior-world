import React from 'react';
import { Smartphone, Apple } from 'lucide-react';

export const AppDownloadStrip: React.FC = () => {
  return (
    <section className="py-8 bg-neutral-900 text-white border-t border-neutral-800">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-neutral-800 border border-neutral-700 flex items-center justify-center flex-shrink-0 text-white">
              <Smartphone className="w-5 h-5 text-[#C5A059]" />
            </div>
            <div>
              <p className="font-heading font-bold text-sm sm:text-base text-white tracking-tight">
                Warrior World Mobile Experience
              </p>
              <p className="text-neutral-400 text-xs mt-0.5">
                Exclusive app-only drops, early access, and one-tap checkout
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#"
              className="flex items-center gap-3 px-4 py-2 bg-neutral-950 border border-neutral-800 hover:border-neutral-600 transition-colors"
            >
              <Apple className="w-5 h-5 text-white" />
              <div className="text-left">
                <div className="text-[9px] uppercase tracking-wider text-neutral-400 leading-none">Download on the</div>
                <div className="text-xs font-bold text-white mt-0.5">App Store</div>
              </div>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-4 py-2 bg-neutral-950 border border-neutral-800 hover:border-neutral-600 transition-colors"
            >
              <span className="text-sm font-bold text-[#C5A059]">▶</span>
              <div className="text-left">
                <div className="text-[9px] uppercase tracking-wider text-neutral-400 leading-none">Get it on</div>
                <div className="text-xs font-bold text-white mt-0.5">Google Play</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
