import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

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
  const total = HERO_BANNERS.length;

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

  return (
    <section
      className="hero-stage relative bg-[#121212] text-white"
      aria-roledescription="carousel"
      aria-label="Featured campaigns"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={(e) => { touchStartX.current = e.targetTouches[0].clientX; }}
      onTouchMove={(e) => { touchEndX.current = e.targetTouches[0].clientX; }}
      onTouchEnd={() => {
        if (touchStartX.current - touchEndX.current > 50) nextSlide();
        if (touchStartX.current - touchEndX.current < -50) prevSlide();
      }}
    >
      <div className="relative aspect-[1024/437] w-full overflow-hidden">
        {HERO_BANNERS.map((banner, index) => {
          const isActive = index === current;
          return (
            <button
              key={banner.id}
              type="button"
              className={`absolute inset-0 h-full w-full transition-opacity duration-700 ${
                isActive ? 'z-10 opacity-100' : 'z-0 opacity-0'
              }`}
              onClick={() => openSlide(index)}
              aria-label={banner.title}
              tabIndex={isActive ? 0 : -1}
            >
              <img
                src={banner.image}
                alt=""
                className="h-full w-full object-cover object-center"
                loading={index === 0 ? 'eager' : 'lazy'}
                fetchPriority={index === 0 ? 'high' : 'auto'}
              />
            </button>
          );
        })}

        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); prevSlide(); }}
          className="hero-arrow absolute left-3 top-1/2 z-20 -translate-y-1/2 md:left-10"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); nextSlide(); }}
          className="hero-arrow absolute right-3 top-1/2 z-20 -translate-y-1/2 md:right-10"
          aria-label="Next slide"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        <div className="absolute bottom-5 left-0 z-20 flex w-full items-center justify-center gap-3">
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

        <button
          type="button"
          onClick={() => setIsPaused((paused) => !paused)}
          className="hero-arrow absolute bottom-4 right-4 z-20 h-9 w-9"
          aria-label={isPaused ? 'Play slideshow' : 'Pause slideshow'}
          aria-pressed={isPaused}
        >
          {isPaused ? <Play className="h-3.5 w-3.5" /> : <Pause className="h-3.5 w-3.5" />}
        </button>
      </div>
      <p className="sr-only" aria-live="polite">
        {HERO_BANNERS[current].title}
      </p>
    </section>
  );
};
