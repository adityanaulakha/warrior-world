import React, { useState } from 'react';
import { ArrowRight, Check, ExternalLink, Award, ShieldCheck, Play } from 'lucide-react';
import { BEST_SELLER_PRODUCTS } from '../data/mockData';
import { Product } from '../types';

interface SharkTankSpotlightProps {
  onShopSharkApproved: () => void;
  onQuickAdd?: (product: Product, size: 'S' | 'M' | 'L' | 'XL' | 'XXL', color: string) => void;
}

export const SharkTankSpotlight: React.FC<SharkTankSpotlightProps> = ({
  onShopSharkApproved,
  onQuickAdd,
}) => {
  const [activePhoto, setActivePhoto] = useState<'stage' | 'vineeta'>('stage');
  const sharkTankPicks = BEST_SELLER_PRODUCTS.filter((p) => p.isSharkTank).slice(0, 4);

  return (
    <section id="shark-tank" className="py-16 sm:py-24 bg-black text-white border-y border-neutral-900">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Top Headline & Official Seal */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 border-b border-neutral-800">
          <div>
            <div className="inline-flex items-center gap-3 bg-neutral-900 border border-neutral-800 px-3 py-1.5 mb-4">
              <img
                src="/shark-tank-india-logo.png"
                alt="Shark Tank India"
                className="h-4 w-auto object-contain brightness-200"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    'https://cdn.shopify.com/s/files/1/0693/7215/0016/files/shark_tank_india_5.png';
                }}
              />
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#C5A059] font-bold">
                Official Season 5 Investment • Episode 29
              </span>
            </div>

            <h2 className="editorial-title text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight leading-[0.95]">
              ₹75 Lakh Deal With Shark Vineeta Singh
            </h2>
            <p className="text-neutral-400 text-xs sm:text-sm lg:text-base mt-3 max-w-2xl font-normal leading-relaxed">
              Founders Uday, Keyur, Dharmin, Kapil & Jigar convinced the Sharks that military-grade 180 GSM combed cotton fashion at honest ₹399 factory pricing is India's next massive D2C phenomenon.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onShopSharkApproved}
              className="px-6 py-3.5 bg-[#C5A059] hover:bg-[#d8b56d] text-black font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-colors shadow-xl"
            >
              <span>Shop Pitch Range</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="https://www.youtube.com/results?search_query=warrior+world+shark+tank+india+season+5"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3.5 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-300 hover:text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-colors"
            >
              <Play className="w-3.5 h-3.5 fill-current text-[#C5A059]" />
              <span>Watch Broadcast</span>
            </a>
          </div>
        </div>

        {/* Magazine-Grade Spread: Photo Switcher + Shark Verdict */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-10 items-stretch">
          
          {/* Left Column: Official Broadcast Photography (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="relative aspect-[16/9] sm:aspect-[16/10] overflow-hidden border border-neutral-800 bg-neutral-950">
              <img
                src={activePhoto === 'stage' ? '/banners/shark-tank-stage-wide.png' : '/banners/shark-tank-vineeta-deal.png'}
                alt="Warrior World on Shark Tank India"
                className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-[1.01]"
              />

              {/* Photo Toggle Pills */}
              <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-black/80 backdrop-blur-xs p-1 border border-white/10 z-10 text-[10px] font-mono uppercase tracking-wider">
                <button
                  onClick={() => setActivePhoto('stage')}
                  className={`px-3 py-1 transition-colors ${activePhoto === 'stage' ? 'bg-white text-black font-bold' : 'text-neutral-400 hover:text-white'}`}
                >
                  The Pitch Stage
                </button>
                <button
                  onClick={() => setActivePhoto('vineeta')}
                  className={`px-3 py-1 transition-colors ${activePhoto === 'vineeta' ? 'bg-white text-black font-bold' : 'text-neutral-400 hover:text-white'}`}
                >
                  Vineeta Deal Moment
                </button>
              </div>

              {/* Location Tag */}
              <div className="absolute bottom-4 left-4 bg-black/80 px-2.5 py-1 border border-white/10 text-[10px] font-mono text-[#C5A059] uppercase tracking-wider">
                Sony TV & SonyLIV Arena
              </div>
            </div>

            {/* 4 Core Pitch Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-neutral-800 border border-neutral-800 mt-4">
              {[
                { label: 'Investment', val: '₹75,00,000' },
                { label: 'Valuation', val: '₹75 Crores' },
                { label: 'Wash Testing', val: '50+ Washes' },
                { label: 'Direct Pricing', val: 'Flat ₹399' },
              ].map((stat, i) => (
                <div key={i} className="p-4 bg-neutral-950">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-400">{stat.label}</div>
                  <div className="editorial-title text-xl sm:text-2xl text-white mt-0.5">{stat.val}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Vineeta Singh Quote & Vetted Standards (5 cols) */}
          <div className="lg:col-span-5 bg-neutral-950 border border-neutral-800 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <span className="editorial-eyebrow text-[#C5A059] block mb-4">
                The Shark's Verdict
              </span>

              <blockquote className="text-xl sm:text-2xl font-serif italic text-neutral-100 leading-relaxed mb-6">
                "Warrior World connects authentic national pride with unbeatable product quality at ₹399. You've solved the hardest equation in Indian fashion: exceptional durability at honest pricing."
              </blockquote>

              <div className="flex items-center gap-3 pt-4 border-t border-neutral-850">
                <div className="w-10 h-10 rounded-full bg-neutral-800 text-[#C5A059] flex items-center justify-center font-bold text-sm flex-shrink-0">
                  VS
                </div>
                <div>
                  <div className="text-sm font-bold text-white uppercase tracking-wider">Vineeta Singh</div>
                  <div className="text-xs text-neutral-400 font-mono">Co-Founder & CEO, SUGAR Cosmetics • Shark Tank S5</div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-850 space-y-3">
              <div className="flex items-start gap-3 text-xs text-neutral-300">
                <span className="text-[#C5A059] font-bold mt-0.5">✓</span>
                <span><strong>100% Surat In-House Manufacturing:</strong> Zero middlemen markups.</span>
              </div>
              <div className="flex items-start gap-3 text-xs text-neutral-300">
                <span className="text-[#C5A059] font-bold mt-0.5">✓</span>
                <span><strong>Japanese Pigment Formulations:</strong> Guaranteed fade-proof durability.</span>
              </div>
              <div className="flex items-start gap-3 text-xs text-neutral-300">
                <span className="text-[#C5A059] font-bold mt-0.5">✓</span>
                <span><strong>Pan-India Doorstep COD:</strong> Zero shipping friction across 19,000+ codes.</span>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Pitch Selection Product Tiles */}
        <div className="mt-12 pt-10 border-t border-neutral-900">
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="editorial-eyebrow text-neutral-500 block mb-1">Presented On Air</span>
              <h3 className="editorial-title text-2xl sm:text-3xl text-white">The Shark Tank Selection</h3>
            </div>
            <span className="text-xs font-mono text-[#C5A059] hidden sm:inline">100% Combed 180 GSM Cotton</span>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {sharkTankPicks.map((product) => (
              <div
                key={product.id}
                className="group bg-neutral-950 border border-neutral-850 hover:border-[#C5A059] transition-colors p-3.5 flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[3/4] overflow-hidden bg-neutral-900 mb-3">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2 left-2 bg-[#C5A059] text-black text-[9px] font-mono font-bold uppercase tracking-wider px-2 py-0.5">
                      Airtime Pitch
                    </div>
                  </div>

                  <h4 className="editorial-title text-lg text-white group-hover:text-[#C5A059] transition-colors line-clamp-1">
                    {product.name}
                  </h4>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="font-mono font-bold text-sm text-white">₹{product.price}</span>
                    <span className="font-mono text-xs text-neutral-500 line-through">₹{product.originalPrice}</span>
                  </div>
                </div>

                {onQuickAdd && (
                  <button
                    onClick={() => onQuickAdd(product, 'L', product.colors[0]?.name || 'Standard')}
                    className="mt-4 w-full py-2.5 bg-neutral-900 hover:bg-[#C5A059] hover:text-black text-white text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    Quick Add Size L
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
