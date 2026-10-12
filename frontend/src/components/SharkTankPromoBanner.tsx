import React, { useState } from 'react';
import { ArrowRight, Award, ShieldCheck, Check } from 'lucide-react';

interface SharkTankPromoBannerProps {
  onShopSharkCollection: () => void;
}

export const SharkTankPromoBanner: React.FC<SharkTankPromoBannerProps> = ({
  onShopSharkCollection,
}) => {
  const [activeBanner, setActiveBanner] = useState<'deal' | 'founders'>('deal');

  return (
    <section className="py-8 sm:py-12 bg-neutral-900 text-white border-y border-neutral-800">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Strip with Credibility */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-6 pb-6 border-b border-neutral-800/80">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-white/5 border border-white/10 p-2.5 flex items-center justify-center flex-shrink-0">
              <img
                src="/shark-tank-india-logo.png"
                alt="Shark Tank India"
                className="w-full h-full object-contain brightness-200 contrast-125"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://cdn.shopify.com/s/files/1/0693/7215/0016/files/shark_tank_india_5.png';
                }}
              />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-bold tracking-widest uppercase bg-[#C5A059] text-neutral-950 px-2 py-0.5">
                  Shark Tank India Season 5
                </span>
                <span className="text-xs text-neutral-400 font-mono hidden sm:inline">
                  Streaming on SonyLIV
                </span>
              </div>
              <h2 className="font-heading font-black text-2xl sm:text-3xl text-white tracking-tight">
                Backed by Shark Vineeta Singh
              </h2>
              <p className="text-xs sm:text-sm text-neutral-400 mt-0.5">
                ₹75 Lakh deal secured for India's fastest growing military streetwear label.
              </p>
            </div>
          </div>

          {/* Toggle between views */}
          <div className="flex items-center border border-neutral-800 bg-neutral-950 p-1 self-start md:self-auto text-xs font-bold uppercase tracking-wider">
            <button
              onClick={() => setActiveBanner('deal')}
              className={`px-4 py-2 transition-colors ${
                activeBanner === 'deal'
                  ? 'bg-white text-neutral-950'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              The Pitch Stage
            </button>
            <button
              onClick={() => setActiveBanner('founders')}
              className={`px-4 py-2 transition-colors ${
                activeBanner === 'founders'
                  ? 'bg-white text-neutral-950'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Founders & Vineeta
            </button>
          </div>
        </div>

        {/* High-Impact Visual Banner Container */}
        <div
          onClick={onShopSharkCollection}
          className="group relative overflow-hidden border border-neutral-800 bg-neutral-950 cursor-pointer"
        >
          {activeBanner === 'deal' ? (
            <img
              src="/banners/shark-tank-stage-wide.png"
              alt="Warrior World on Shark Tank India Season 5 Arena Pitch"
              className="w-full h-auto object-cover group-hover:scale-[1.01] transition-transform duration-500"
              loading="eager"
            />
          ) : (
            <img
              src="/banners/shark-tank-vineeta-deal.png"
              alt="Warrior World Founders & Shark Vineeta Singh Winning Moment"
              className="w-full h-auto object-cover group-hover:scale-[1.01] transition-transform duration-500"
              loading="eager"
            />
          )}

          {/* Hover CTA Bar */}
          <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onShopSharkCollection();
              }}
              className="px-5 sm:px-6 py-3 bg-white text-neutral-950 hover:bg-[#C5A059] text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center gap-2 shadow-2xl transition-colors"
            >
              <span>Shop Featured Capsule</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Under-banner editorial metrics strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-neutral-800 mt-4 border border-neutral-800">
          {[
            {
              val: '₹75,00,000',
              label: 'Secured Investment',
              sub: 'Vineeta Singh (SUGAR)',
            },
            {
              val: '50+ Washes',
              label: 'Field Tested Durability',
              sub: 'Zero crack pigment prints',
            },
            {
              val: '₹399 Starting',
              label: 'Direct-To-Consumer',
              sub: 'In-house Surat manufacturing',
            },
            {
              val: '5,00,000+',
              label: 'Active Customers',
              sub: 'Across 19,000+ pincodes',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 bg-neutral-950 flex flex-col justify-between"
            >
              <div className="font-heading font-black text-lg sm:text-xl text-white tracking-tight">
                {item.val}
              </div>
              <div className="mt-1">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#C5A059]">
                  {item.label}
                </div>
                <div className="text-[10px] text-neutral-500 mt-0.5">
                  {item.sub}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
