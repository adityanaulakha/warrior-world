import React from 'react';
import { SectionHeading } from './SectionHeading';

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
    img: 'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Stealth Tactical Parachute',
    colorway: 'Carbon Black',
    price: '₹1,099',
    originalPrice: '₹2,199',
    spec: 'Bungee Cinch Ankle Hem',
    img: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Field Combat Cargo Jogger',
    colorway: 'Desert Khaki',
    price: '₹999',
    originalPrice: '₹1,899',
    spec: 'Heavy Stretch Twill',
    img: 'https://images.unsplash.com/photo-1479064555552-3ef4979f8908?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Multi-Pocket Fatigue Chino',
    colorway: 'Navy MARCOS Edition',
    price: '₹999',
    originalPrice: '₹1,999',
    spec: 'Reinforced Tool Loops',
    img: 'https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Tiger-Stripe Tactical BDU',
    colorway: 'Woodland Jungle Camo',
    price: '₹1,199',
    originalPrice: '₹2,399',
    spec: 'Bar-Tacked Stress Points',
    img: 'https://images.unsplash.com/photo-1506634572416-48cdfe7de167?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Water-Repellent Commando Jogger',
    colorway: 'Slate Gunmetal Grey',
    price: '₹1,099',
    originalPrice: '₹2,099',
    spec: 'Quick-Dry Tech Weave',
    img: 'https://images.unsplash.com/photo-1542272604-780c96856592?auto=format&fit=crop&w=800&q=80',
  },
];

export const TacticalCombatBottoms: React.FC<TacticalCombatBottomsProps> = ({ onExploreBottoms }) => {
  return (
    <section id="tactical-bottoms" className="bc-section bg-white">
      <div className="bc-wrap">
        <SectionHeading
          eyebrow="Tactical fieldwear · 280 GSM cotton"
          title="Combat bottoms"
          description="Engineered ripstop cotton, 6 heavy utility pockets, reinforced knees, and bar-tack stitching."
          action="View all combat bottoms"
          onAction={() => onExploreBottoms('All')}
        />

        <div className="grid grid-cols-2 gap-x-3 md:grid-cols-3 md:gap-x-5">
          {BOTTOMS.map((item) => (
            <button
              key={item.name}
              type="button"
              onClick={() => onExploreBottoms(item.name)}
              className="group mb-6 text-left md:mb-8"
            >
              <span className="relative mb-4 block overflow-hidden bg-[#eeeeee] pt-[125%]">
                <img
                  src={item.img}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </span>
              <span className="mb-2 block text-[11px] uppercase tracking-[0.1em] text-[#484f56]">{item.spec}</span>
              <span className="mb-1 block text-[15px] font-medium uppercase leading-snug text-[#121212]">{item.name}</span>
              <span className="mb-1 block text-sm text-[#484f56]">{item.colorway}</span>
              <span className="text-[15px] tracking-[0.02em] text-[#cf2929]">
                {item.price}
                <del className="ml-2 opacity-40">{item.originalPrice}</del>
              </span>
            </button>
          ))}
        </div>

        <div className="mt-2 flex flex-col items-start justify-between gap-4 border-t border-[#E2E2E2] pt-6 md:flex-row md:items-center">
          <p className="max-w-xl text-[15px] text-[#484f56]">
            Military ripstop construction. Bar-tacked stress points, high-gauge metal zippers, and a pre-shrunk cotton twill blend.
          </p>
          <button type="button" className="bc-btn" onClick={() => onExploreBottoms('All')}>
            Shop combat bottoms @ ₹999
          </button>
        </div>
      </div>
    </section>
  );
};
