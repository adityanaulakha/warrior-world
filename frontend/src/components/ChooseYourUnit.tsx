import React from 'react';
import { BENTO_COLLECTIONS } from '../data/mockData';

interface ChooseYourUnitProps {
  onSelectCollection: (title: string) => void;
}

export const ChooseYourUnit: React.FC<ChooseYourUnitProps> = ({ onSelectCollection }) => {
  const lead = BENTO_COLLECTIONS.slice(0, 2);
  const rest = BENTO_COLLECTIONS.slice(2);

  const Tile = ({
    title,
    badge,
    tagline,
    image,
    tall = false,
  }: {
    title: string;
    badge: string;
    tagline: string;
    image: string;
    tall?: boolean;
  }) => (
    <button
      type="button"
      onClick={() => onSelectCollection(title)}
      className={`group relative overflow-hidden bg-[#121212] text-left ${tall ? 'min-h-[460px] md:min-h-[560px]' : 'min-h-[320px] md:min-h-[420px]'}`}
    >
      <img
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        loading="lazy"
      />
      <span className="absolute inset-0 bg-black/30 transition-colors group-hover:bg-black/40" />
      <span className="relative z-10 flex h-full min-h-[inherit] flex-col items-center justify-center px-6 text-center text-white">
        <span className="mb-3 text-[12px] uppercase tracking-[0.28em]">{badge}</span>
        <span className="bc-display max-w-[14ch] text-[2.5rem] leading-[0.92] md:text-[3.4rem]">{title}</span>
        <span className="mt-3 max-w-sm text-sm leading-relaxed text-white/85">{tagline}</span>
        <span className="bc-btn bc-btn-light mt-6">Explore</span>
      </span>
    </button>
  );

  return (
    <section id="collections-bento" aria-label="Choose your unit">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {lead.map((collection) => (
          <Tile
            key={collection.id}
            title={collection.title}
            badge={collection.badge}
            tagline={collection.tagline}
            image={collection.image}
            tall
          />
        ))}
      </div>
      <div className="grid grid-cols-1 gap-[3px] pt-[3px] md:grid-cols-3">
        {rest.map((collection) => (
          <Tile
            key={collection.id}
            title={collection.title}
            badge={collection.badge}
            tagline={collection.tagline}
            image={collection.image}
          />
        ))}
      </div>
    </section>
  );
};
