import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { useReducedMotion } from 'framer-motion';
import { Magnetic } from './motion';

interface HeroProps {
  onShopNewArrivals: () => void;
  onShopCombos: () => void;
}

const HERO_BANNERS = [
  {
    id: 'airforce',
    title: 'Airforce Fighter Jet Drop',
    image: '/banners/airforce-fighter-jet.png',
    link: '#collections-bento',
  },
  {
    id: 'shark-tank-stage',
    title: 'Shark Tank India S5 Arena Pitch',
    image: '/banners/shark-tank-stage-wide.png',
    link: '#shark-tank',
  },
  {
    id: 'combos',
    title: 'Mega Combo Deals - Buy 3 @ ₹999',
    image: '/banners/combos-pick-any-3.png',
    link: '#combos-section',
  },
  {
    id: 'new-arrivals',
    title: 'New Arrivals Collection',
    image: '/banners/new-arrivals-collection.png',
    link: '#fresh-deployment',
  },
  {
    id: 'vineeta-deal',
    title: 'Shark Vineeta Singh Deal Winner',
    image: '/banners/shark-tank-vineeta-deal.png',
    link: '#shark-tank',
  },
];

export const Hero: React.FC<HeroProps> = ({ onShopNewArrivals, onShopCombos }) => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const reduce = useReducedMotion();
  const total = HERO_BANNERS.length;
  const active = HERO_BANNERS[current];

  const nextSlide = () => setCurrent((prev) => (prev + 1) % total);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + total) % total);

  useEffect(() => {
    if (isPaused) return;
    const timer = window.setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 5000);
    return () => window.clearInterval(timer);
  }, [isPaused, total]);

  const openSlide = (index: number) => {
    const banner = HERO_BANNERS[index];
    if (banner.id === 'combos') {
      onShopCombos();
      return;
    }
    if (banner.id === 'new-arrivals') {
      onShopNewArrivals();
      return;
    }
    const el = document.getElementById(banner.link.replace('#', ''));
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const dots = (
    <div className="flex items-center justify-center gap-2.5">
      {HERO_BANNERS.map((banner, index) => (
        <button
          key={banner.id}
          type="button"
          onClick={() => setCurrent(index)}
          className={`h-2.5 w-2.5 rounded-full border border-white transition-colors ${
            index === current ? 'bg-white' : 'bg-transparent'
          }`}
          aria-label={`Show ${banner.title}`}
          aria-current={index === current}
        />
      ))}
    </div>
  );

  return (
    <section
      className={`hero-stage bg-white text-white ${isPaused ? 'is-paused' : ''}`}
      aria-roledescription="carousel"
      aria-label="Featured campaigns"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="bc-wrap py-3 md:py-6">
        <div className="bg-[#121212]">
          <div className="px-4 pb-1 pt-4 md:hidden">
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-white/65">Campaign</p>
            <p className="bc-display mt-1 text-[2rem] leading-[0.92] text-white">{active.title}</p>
          </div>

          <div
            className="relative aspect-[1024/437] w-full overflow-hidden"
            onTouchStart={(e) => { touchStartX.current = e.targetTouches[0].clientX; }}
            onTouchMove={(e) => { touchEndX.current = e.targetTouches[0].clientX; }}
            onTouchEnd={() => {
              if (touchStartX.current - touchEndX.current > 50) nextSlide();
              if (touchStartX.current - touchEndX.current < -50) prevSlide();
            }}
          >
            {HERO_BANNERS.map((banner, index) => {
              const isActive = index === current;
              return (
                <button
                  key={banner.id}
                  type="button"
                  className={`hero-slide absolute inset-0 h-full w-full ${isActive ? 'is-active' : ''}`}
                  onClick={() => openSlide(index)}
                  aria-label={banner.title}
                  tabIndex={isActive ? 0 : -1}
                >
                  <img
                    src={banner.image}
                    alt=""
                    className="h-full w-full object-contain object-center"
                    loading={index === 0 ? 'eager' : 'lazy'}
                    fetchPriority={index === 0 ? 'high' : 'auto'}
                  />
                </button>
              );
            })}

            <div className="hero-grain" aria-hidden="true" />

            <Magnetic className="absolute left-4 top-1/2 z-20 -mt-[21px] hidden md:block">
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                className="hero-arrow"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
            </Magnetic>
            <Magnetic className="absolute right-4 top-1/2 z-20 -mt-[21px] hidden md:block">
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                className="hero-arrow"
                aria-label="Next slide"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </Magnetic>

            <div className="absolute bottom-4 left-0 z-20 hidden w-full md:flex md:justify-center">
              {dots}
            </div>

            <button
              type="button"
              onClick={() => setIsPaused((paused) => !paused)}
              className="hero-arrow absolute bottom-3 right-3 z-20 hidden h-9 w-9 md:inline-flex"
              aria-label={isPaused ? 'Play slideshow' : 'Pause slideshow'}
              aria-pressed={isPaused}
            >
              {isPaused ? <Play className="h-3.5 w-3.5" /> : <Pause className="h-3.5 w-3.5" />}
            </button>

            {!reduce && <div key={current} className="hero-progress" aria-hidden="true" />}
          </div>

          <div className="flex items-center justify-between gap-2 px-2 py-2 md:hidden">
            <button
              type="button"
              onClick={prevSlide}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/50 text-white"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            {dots}
            <button
              type="button"
              onClick={nextSlide}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/50 text-white"
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => setIsPaused((paused) => !paused)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/50 text-white"
              aria-label={isPaused ? 'Play slideshow' : 'Pause slideshow'}
              aria-pressed={isPaused}
            >
              {isPaused ? <Play className="h-3.5 w-3.5" /> : <Pause className="h-3.5 w-3.5" />}
            </button>
          </div>
        </div>
      </div>
      <p className="sr-only" aria-live="polite">
        {active.title}
      </p>
    </section>
  );
};
