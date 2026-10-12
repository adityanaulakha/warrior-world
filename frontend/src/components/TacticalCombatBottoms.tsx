import React from 'react';
import { ArrowRight, ShieldCheck, Layers } from 'lucide-react';

interface TacticalCombatBottomsProps {
  onExploreBottoms: (style: string) => void;
}

const BOTTOMS = [
  {
    name: '6-Pocket Ripstop Cargo',
    colorway: 'Olive Combat Drab',
    price: '₹999',
    originalPrice: '₹1,999',
    spec: '280 GSM Cotton Ripstop',
    img: 'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Stealth Tactical Parachute',
    colorway: 'Carbon Black',
    price: '₹1,099',
    originalPrice: '₹2,199',
    spec: 'Bungee Cinch Ankle Hem',
    img: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Field Combat Cargo Jogger',
    colorway: 'Desert Khaki',
    price: '₹999',
    originalPrice: '₹1,899',
    spec: 'Heavy Stretch Twill',
    img: 'https://images.unsplash.com/photo-1479064555552-3ef4979f8908?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Multi-Pocket Fatigue Chino',
    colorway: 'Navy MARCOS Edition',
    price: '₹999',
    originalPrice: '₹1,999',
    spec: 'Reinforced Tool Loops',
    img: 'https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Tiger-Stripe Tactical BDU',
    colorway: 'Woodland Jungle Camo',
    price: '₹1,199',
    originalPrice: '₹2,399',
    spec: 'Bar-Tacked Stress Points',
    img: 'https://images.unsplash.com/photo-1506634572416-48cdfe7de167?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Water-Repellent Commando Jogger',
    colorway: 'Slate Gunmetal Grey',
    price: '₹1,099',
    originalPrice: '₹2,099',
    spec: 'Quick-Dry Tech Weave',
    img: 'https://images.unsplash.com/photo-1542272604-780c96856592?auto=format&fit=crop&w=600&q=80',
  },
];

export const TacticalCombatBottoms: React.FC<TacticalCombatBottomsProps> = ({ onExploreBottoms }) => {
  return (
    <section id="tactical-bottoms" className="py-16 sm:py-24 bg-neutral-900 text-white border-t border-neutral-800">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-6 border-b border-neutral-800">
          <div>
            <span className="editorial-eyebrow text-[#C5A059] block mb-2">
              Tactical Fieldwear • 280 GSM Cotton
            </span>
            <h2 className="editorial-title text-4xl sm:text-5xl lg:text-6xl text-white">
              Tactical Cargos & Combat Bottoms
            </h2>
            <p className="text-neutral-400 text-xs sm:text-sm mt-1 font-normal">
              Engineered Ripstop Cotton • 6 Heavy Utility Pockets • Reinforced Knees & Bar-Tack Stitching
            </p>
          </div>

          <button
            onClick={() => onExploreBottoms('All')}
            className="self-start sm:self-auto flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-300 hover:text-white transition-colors group"
          >
            <span>View All Combat Bottoms (35+ Styles)</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 6-Tile Menswear Cargo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mb-8">
          {BOTTOMS.map((item) => (
            <button
              key={item.name}
              onClick={() => onExploreBottoms(item.name)}
              className="group text-left bg-neutral-950 border border-neutral-800 hover:border-[#C5A059] transition-colors overflow-hidden flex flex-col"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-neutral-900">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://picsum.photos/seed/${item.name.replace(/\s+/g, '')}/400/500`;
                  }}
                />
                <div className="absolute top-2 right-2 bg-neutral-950/90 border border-neutral-800 px-2 py-0.5 text-[9px] font-mono text-[#C5A059] font-bold">
                  {item.price}
                </div>
                <div className="absolute bottom-2 left-2 right-2">
                  <span className="block text-[9px] font-mono uppercase bg-neutral-950/80 backdrop-blur-xs text-neutral-300 px-1.5 py-0.5 truncate">
                    {item.spec}
                  </span>
                </div>
              </div>

              <div className="p-3 border-t border-neutral-800 bg-neutral-950 flex-grow flex flex-col justify-between">
                <div>
                  <h4 className="editorial-title text-base text-white group-hover:text-[#C5A059] transition-colors line-clamp-1">
                    {item.name}
                  </h4>
                  <p className="text-[10px] text-neutral-400 mt-0.5 line-clamp-1">{item.colorway}</p>
                </div>
                <div className="flex items-baseline gap-1.5 mt-2 pt-2 border-t border-neutral-900">
                  <span className="font-mono font-bold text-xs text-white">{item.price}</span>
                  <span className="text-[10px] text-neutral-500 line-through font-mono">{item.originalPrice}</span>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Feature Spec Banner Card */}
        <div className="p-6 sm:p-8 bg-neutral-950 border border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-neutral-900 border border-neutral-800 text-[#C5A059] flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#C5A059]">
                  Military Ripstop Construction
                </span>
                <span className="text-[10px] bg-white/10 px-2 py-0.5 text-neutral-300 font-mono">
                  6 Heavy Utility Pockets
                </span>
              </div>
              <h3 className="editorial-title text-xl sm:text-2xl text-white mt-1">
                Engineered for Unrestricted Field Mobility & Durability
              </h3>
              <p className="text-xs text-neutral-400 mt-0.5 font-normal">
                Bar-tacked stress points • High-gauge YKK metal zippers • Pre-shrunk cotton twill blend
              </p>
            </div>
          </div>

          <button
            onClick={() => onExploreBottoms('All')}
            className="w-full md:w-auto px-6 py-3.5 bg-white hover:bg-neutral-200 text-neutral-950 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 flex-shrink-0 transition-colors"
          >
            <span>Shop Combat Bottoms @ ₹999</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
