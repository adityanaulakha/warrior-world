import React from 'react';
import { SHARK_TANK_PRESS } from '../data/mockData';
import { RevealText } from './motion';

const PRESS_IMAGES = [
  '/banners/shark-tank-stage-wide.png',
  '/banners/shark-tank-vineeta-deal.png',
  '/banners/airforce-fighter-jet.png',
];

const MENTIONS = ['Shark Tank India', 'SonyLIV', 'The Economic Times', 'YourStory', 'Inc42', 'Startup India'];

export const BrandLogos: React.FC = () => {
  const stories = SHARK_TANK_PRESS.slice(0, 3);

  return (
    <section id="press-section" className="bc-section bg-[#f7f7f7]">
      <div className="bc-wrap">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="bc-kicker">Latest</p>
            <RevealText text="In the press" className="bc-h2 !leading-[0.95]" />
          </div>
          <button
            type="button"
            className="bc-text-link self-start"
            onClick={() => document.getElementById('shark-tank')?.scrollIntoView({ behavior: 'smooth' })}
          >
            The Shark Tank story
          </button>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {stories.map((story, index) => (
            <article key={story.headline}>
              <button
                type="button"
                className="block w-full overflow-hidden bg-[#121212] text-left"
                onClick={() => document.getElementById('shark-tank')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <img src={PRESS_IMAGES[index]} alt="" className="aspect-[16/10] w-full object-cover" loading="lazy" />
              </button>
              <p className="mt-4 text-[11px] uppercase tracking-[0.16em] text-[#9a9a9a]">{story.date}</p>
              <h3 className="mt-2 text-[1.25rem] font-semibold leading-snug text-[#121212]">{story.headline}</h3>
              <p className="mt-2 text-sm text-[#484f56]">{story.outlet}</p>
              <button
                type="button"
                className="bc-text-link mt-3"
                onClick={() => document.getElementById('shark-tank')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {story.linkText}
              </button>
            </article>
          ))}
        </div>

        <div className="mt-12 border-t border-[#E2E2E2] pt-6">
          <p className="mb-4 text-center text-[11px] uppercase tracking-[0.22em] text-[#484f56]">Featured in</p>
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {MENTIONS.map((name) => (
              <li key={name} className="text-[13px] font-medium uppercase tracking-[0.12em] text-[#121212]/80">
                {name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
