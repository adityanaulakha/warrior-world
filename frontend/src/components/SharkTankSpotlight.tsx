import React, { useState } from 'react';
import { Play } from 'lucide-react';
import { BEST_SELLER_PRODUCTS } from '../data/mockData';
import { Product } from '../types';
import { SectionHeading } from './SectionHeading';
import { CountUp, Reveal } from './motion';
import { FrameImage } from './FrameImage';

interface SharkTankSpotlightProps {
  onShopSharkApproved: () => void;
  onQuickAdd?: (product: Product, size: 'S' | 'M' | 'L' | 'XL' | 'XXL', color: string) => void;
}

const PHOTOS = [
  { id: 'stage', label: 'The pitch stage', src: '/banners/shark-tank-stage-wide.png' },
  { id: 'vineeta', label: 'Vineeta deal moment', src: '/banners/shark-tank-vineeta-deal.png' },
] as const;

const STATS: {
  label: string;
  count?: number;
  prefix?: string;
  suffix?: string;
  indian?: boolean;
  text?: string;
}[] = [
  { label: 'Investment', count: 7500000, prefix: '₹', indian: true },
  { label: 'Valuation', count: 75, prefix: '₹', suffix: ' Crores' },
  { label: 'Wash testing', count: 50, suffix: '+ washes' },
  { label: 'Direct pricing', text: 'Flat ₹399' },
];

export const SharkTankSpotlight: React.FC<SharkTankSpotlightProps> = ({
  onShopSharkApproved,
  onQuickAdd,
}) => {
  const [activePhoto, setActivePhoto] = useState<(typeof PHOTOS)[number]['id']>('stage');
  const photo = PHOTOS.find((item) => item.id === activePhoto) ?? PHOTOS[0];
  const sharkTankPicks = BEST_SELLER_PRODUCTS.filter((product) => product.isSharkTank).slice(0, 4);

  return (
    <section id="shark-tank" className="bc-section bg-white">
      <div className="bc-wrap">
        <SectionHeading
          eyebrow="Official Season 5 investment · Episode 29"
          title="₹75 lakh with Vineeta Singh"
          description="Founders Uday, Keyur, Dharmin, Kapil and Jigar pitched military-grade 180 GSM combed cotton at honest ₹399 factory pricing."
          action="Shop the pitch range"
          onAction={onShopSharkApproved}
        />

        <div className="bg-[#121212]">
          <img
            src={photo.src}
            alt="Warrior World on Shark Tank India"
            className="bc-frame"
          />
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-3">
          {PHOTOS.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActivePhoto(item.id)}
              className={`bc-text-link ${activePhoto === item.id ? '' : 'opacity-60'}`}
              aria-pressed={activePhoto === item.id}
            >
              {item.label}
            </button>
          ))}
          <a
            href="https://www.youtube.com/results?search_query=warrior+world+shark+tank+india+season+5"
            target="_blank"
            rel="noopener noreferrer"
            className="bc-text-link"
          >
            <Play className="mr-1 h-3.5 w-3.5" />
            Watch broadcast
          </a>
        </div>

        <dl className="mt-8 grid grid-cols-2 border-y border-[#E2E2E2] md:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="border-[#E2E2E2] px-2 py-5 md:px-4 md:[&:not(:last-child)]:border-r">
              <dt className="text-[12px] uppercase tracking-[0.14em] text-[#484f56]">{stat.label}</dt>
              <dd className="mt-1 text-xl font-semibold text-[#121212] md:text-2xl">
                {stat.count != null ? (
                  <CountUp
                    to={stat.count}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    indian={stat.indian}
                  />
                ) : (
                  stat.text
                )}
              </dd>
            </div>
          ))}
        </dl>

        <Reveal>
        <figure className="mx-auto max-w-[830px] px-2 py-12 text-center md:py-16">
          <blockquote className="text-[1.35rem] font-normal leading-[1.35] text-[#121212] md:text-[2.125rem]">
            “Warrior World connects authentic national pride with unbeatable product quality at ₹399. You've solved the hardest equation in Indian fashion: exceptional durability at honest pricing.”
          </blockquote>
          <figcaption className="mt-5 text-sm text-[#484f56]">
            — Vineeta Singh, Co-Founder and CEO, SUGAR Cosmetics · Shark Tank S5
          </figcaption>
        </figure>
        </Reveal>

        <div className="grid grid-cols-2 gap-x-3 md:grid-cols-4 md:gap-x-5">
          {sharkTankPicks.map((product) => (
            <article key={product.id} className="mb-6">
              <div className="relative mb-4 overflow-hidden bg-[#eeeeee] pt-[125%]">
                <FrameImage src={product.images[0]} alt={product.name} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
                <span className="bc-badge absolute left-2 top-2 md:left-4 md:top-4">Shark Tank</span>
              </div>
              <h3 className="text-[15px] font-medium uppercase leading-snug text-[#121212]">{product.name}</h3>
              <p className="mt-1 text-[15px] tracking-[0.02em] text-[#cf2929]">
                ₹{product.price}
                <del className="ml-2 opacity-40">₹{product.originalPrice}</del>
              </p>
              {onQuickAdd && (
                <button
                  type="button"
                  className="bc-btn mt-3"
                  onClick={() => onQuickAdd(product, 'L', product.colors[0]?.name || 'Standard')}
                >
                  Add size L
                </button>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
