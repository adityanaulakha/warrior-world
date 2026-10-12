import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

interface ComboBannerProps {
  onBuildCombo: (count: number) => void;
}

const TIERS = [
  {
    count: 3,
    price: 999,
    original: 1797,
    saving: 798,
    title: 'PICK ANY 3 TEES',
    subtitle: 'Bio-Washed Combed Cotton 180 GSM',
    perItem: '₹333 / tee',
    badge: 'Shark Tank Deal',
    highlight: true,
  },
  {
    count: 3,
    price: 999,
    original: 2097,
    saving: 1098,
    title: 'PICK ANY 3 POLOS',
    subtitle: 'Textured Jacquard & Pique Weave',
    perItem: '₹333 / polo',
    badge: 'Trending',
    highlight: false,
  },
  {
    count: 5,
    price: 1499,
    original: 2995,
    saving: 1496,
    title: 'SQUAD PACK (5 TEES)',
    subtitle: 'Mix Any Regimental Drops & Sizes',
    perItem: '₹299 / tee',
    badge: 'Maximum Value',
    highlight: false,
  },
];

export const ComboBanner: React.FC<ComboBannerProps> = ({ onBuildCombo }) => {
  return (
    <section id="combos-section" className="py-16 sm:py-24 bg-[#0A0A0A] text-white border-y border-neutral-900">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-6 border-b border-neutral-850">
          <div>
            <span className="editorial-eyebrow text-[#C5A059] block mb-2">
              Factory Direct Multi-Buy
            </span>
            <h2 className="editorial-title text-4xl sm:text-5xl lg:text-6xl text-white">
              Buy More, Save More
            </h2>
          </div>
          <p className="text-neutral-400 text-xs sm:text-sm max-w-md font-normal leading-relaxed">
            Mix and match your choice of military prints, colors, and sizes. Free COD & 7-day hassle-free doorstep exchanges across India.
          </p>
        </div>

        {/* Full-bleed Promotional Widescreen Banner */}
        <div
          onClick={() => onBuildCombo(3)}
          className="mb-10 border border-neutral-800 overflow-hidden group cursor-pointer bg-neutral-950"
        >
          <img
            src="/banners/combos-pick-any-3.png"
            alt="Warrior World Combo Deals - Pick Any 3 @ ₹999"
            className="w-full h-auto object-cover group-hover:scale-[1.01] transition-transform duration-500"
          />
        </div>

        {/* Tier Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {TIERS.map((tier) => (
            <div
              key={tier.title}
              className={`relative p-6 sm:p-7 bg-neutral-950 border transition-all duration-300 flex flex-col justify-between ${
                tier.highlight
                  ? 'border-[#C5A059] ring-1 ring-[#C5A059]/40'
                  : 'border-neutral-800 hover:border-neutral-600'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">
                    Tier {tier.count}
                  </span>
                  <span
                    className={`text-[9px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 ${
                      tier.highlight
                        ? 'bg-[#C5A059] text-black'
                        : 'bg-white/10 text-neutral-300'
                    }`}
                  >
                    {tier.badge}
                  </span>
                </div>

                <h3 className="editorial-title text-2xl text-white mb-1">
                  {tier.title}
                </h3>
                <p className="text-xs text-neutral-400 mb-6 font-normal">
                  {tier.subtitle}
                </p>

                {/* Price Display */}
                <div className="mb-2">
                  <div className="flex items-baseline gap-2">
                    <span className="editorial-title text-4xl text-white">
                      ₹{tier.price}
                    </span>
                    <span className="text-sm text-neutral-500 line-through font-mono">
                      ₹{tier.original}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs font-bold text-emerald-400 font-mono">
                      Save ₹{tier.saving}
                    </span>
                    <span className="text-neutral-500 text-xs">•</span>
                    <span className="text-xs text-neutral-400 font-mono">
                      {tier.perItem}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onBuildCombo(tier.count)}
                className={`w-full mt-6 py-3 px-4 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors ${
                  tier.highlight
                    ? 'bg-[#C5A059] hover:bg-[#d8b56d] text-black font-extrabold'
                    : 'bg-white hover:bg-neutral-200 text-black'
                }`}
              >
                <span>Select {tier.count} Pack</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
