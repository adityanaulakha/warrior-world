import React from 'react';
import { SectionHeading } from './SectionHeading';

interface ComboBannerProps {
  onBuildCombo: (count: number) => void;
}

const TIERS = [
  {
    count: 3,
    price: 999,
    original: 1797,
    saving: 798,
    title: 'Pick any 3 tees',
    subtitle: 'Bio-washed combed cotton, 180 GSM',
    perItem: '₹333 / tee',
    badge: 'Shark Tank deal',
  },
  {
    count: 3,
    price: 999,
    original: 2097,
    saving: 1098,
    title: 'Pick any 3 polos',
    subtitle: 'Textured jacquard and pique weave',
    perItem: '₹333 / polo',
    badge: 'Trending',
  },
  {
    count: 5,
    price: 1499,
    original: 2995,
    saving: 1496,
    title: 'Squad pack, 5 tees',
    subtitle: 'Mix any regimental drops and sizes',
    perItem: '₹299 / tee',
    badge: 'Maximum value',
  },
];

export const ComboBanner: React.FC<ComboBannerProps> = ({ onBuildCombo }) => {
  return (
    <section id="combos-section" className="bc-section bg-[#f7f7f7]">
      <div className="bc-wrap">
        <SectionHeading
          eyebrow="Factory direct multi-buy"
          title="Buy more, save more"
          description="Mix military prints, colours, and sizes. Free COD and 7-day doorstep exchanges across India."
          action="Build a 3-pack"
          onAction={() => onBuildCombo(3)}
        />
      </div>

      <button
        type="button"
        onClick={() => onBuildCombo(3)}
        className="block w-full overflow-hidden bg-[#121212]"
        aria-label="Mega combo deals, pick any 3 at ₹999"
      >
        <img
          src="/banners/combos-pick-any-3.png"
          alt="Warrior World combo deals, pick any 3 at ₹999"
          className="mx-auto h-auto max-h-[520px] w-full object-cover object-center"
        />
      </button>

      <div className="bc-wrap pt-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {TIERS.map((tier) => (
            <article key={tier.title} className="flex flex-col justify-between bg-white p-6">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#cf2929]">{tier.badge}</p>
                <h3 className="mt-3 text-[1.75rem] font-semibold leading-tight text-[#121212]">{tier.title}</h3>
                <p className="mt-2 text-[15px] text-[#484f56]">{tier.subtitle}</p>
                <p className="mt-5 text-[15px] tracking-[0.02em] text-[#cf2929]">
                  <span className="text-[2rem] font-semibold leading-none">₹{tier.price}</span>
                  <del className="ml-2 opacity-40">₹{tier.original}</del>
                </p>
                <p className="mt-2 text-sm text-[#484f56]">Save ₹{tier.saving} · {tier.perItem}</p>
              </div>
              <button type="button" className="bc-btn mt-6 self-start" onClick={() => onBuildCombo(tier.count)}>
                Select {tier.count} pack
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
