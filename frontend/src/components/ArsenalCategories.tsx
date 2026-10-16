import React from 'react';
import { ARSENAL_CATEGORIES } from '../data/mockData';

interface ArsenalCategoriesProps {
  onSelectCategory: (name: string) => void;
}

const titleCase = (value: string) =>
  value
    .toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

export const ArsenalCategories: React.FC<ArsenalCategoriesProps> = ({ onSelectCategory }) => {
  const featuredNames = new Set(['Crew neck', 'BOTTOM WEAR']);
  const featured = ARSENAL_CATEGORIES.filter((category) => featuredNames.has(category.name));
  const rest = ARSENAL_CATEGORIES.filter((category) => !featuredNames.has(category.name)).slice(0, 4);

  return (
    <section id="arsenal-section" className="bg-white" aria-label="Shop by category">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {featured.map((category) => (
          <button
            key={category.name}
            type="button"
            onClick={() => onSelectCategory(category.name)}
            className="group relative min-h-[420px] overflow-hidden bg-[#121212] text-left md:min-h-[560px]"
          >
            <img
              src={category.image}
              alt=""
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              loading="lazy"
            />
            <span className="absolute inset-0 bg-black/25 transition-colors group-hover:bg-black/35" />
            <span className="relative z-10 flex h-full min-h-[420px] flex-col items-center justify-center px-6 text-center text-white md:min-h-[560px]">
              <span className="mb-3 text-[12px] font-medium uppercase tracking-[0.28em]">
                {category.itemCount} styles
              </span>
              <span className="text-[2rem] font-semibold leading-none md:text-[2.5rem]">
                {titleCase(category.name)}
              </span>
              <span className="bc-btn bc-btn-light mt-6">Shop now</span>
            </span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-[3px] bg-white pt-[3px] md:grid-cols-4">
        {rest.map((category) => (
          <button
            key={category.name}
            type="button"
            onClick={() => onSelectCategory(category.name)}
            className="group relative aspect-[4/5] overflow-hidden bg-[#121212] text-left"
          >
            <img
              src={category.image}
              alt=""
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              loading="lazy"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
            <span className="absolute bottom-5 left-4 right-4 z-10 text-white">
              <span className="block text-[11px] uppercase tracking-[0.18em]">{category.badge}</span>
              <span className="mt-1 block text-xl font-semibold md:text-2xl">{titleCase(category.name)}</span>
            </span>
          </button>
        ))}
      </div>
    </section>
  );
};
