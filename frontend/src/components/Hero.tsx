import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Award, ShieldCheck, Truck, RotateCcw } from 'lucide-react';

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
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [current, isPaused]);

  const handleBannerClick = (index: number) => {
    const banner = HERO_BANNERS[index];
    if (banner.id === 'combos') {
      onShopCombos();
    } else if (banner.id === 'new-arrivals') {
      onShopNewArrivals();
    } else {
      const el = document.getElementById(banner.link.replace('#', ''));
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className="relative bg-black text-white overflow-hidden select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={(e) => { touchStartX.current = e.targetTouches[0].clientX; }}
      onTouchMove={(e) => { touchEndX.current = e.targetTouches[0].clientX; }}
      onTouchEnd={() => {
        if (touchStartX.current - touchEndX.current > 50) nextSlide();
        if (touchStartX.current - touchEndX.current < -50) prevSlide();
      }}
    >
      {/* Banner Viewport — Aspect Ratio Matches 1024x437 Image Ratio */}
      <div className="relative w-full aspect-[1024/437] max-h-[680px] min-h-[220px] sm:min-h-[340px] overflow-hidden bg-black">
        {HERO_BANNERS.map((banner, index) => {
          const isActive = index === current;
          return (
            <div
              key={banner.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out cursor-pointer ${
                isActive ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
              }`}
              onClick={() => handleBannerClick(index)}
            >
              {/* Clean, Full-Color Artwork Banner with Zero Obstructing Text or Buttons */}
              <img
                src={banner.image}
                alt={banner.title}
                className="w-full h-full object-cover object-center"
                loading={index === 0 ? 'eager' : 'lazy'}
              />
            </div>
          );
        })}

        {/* Carousel Navigation Arrows */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            prevSlide();
          }}
          className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-11 sm:h-11 bg-black/50 hover:bg-black/90 text-white border border-white/20 flex items-center justify-center backdrop-blur-xs transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            nextSlide();
          }}
          className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-11 sm:h-11 bg-black/50 hover:bg-black/90 text-white border border-white/20 flex items-center justify-center backdrop-blur-xs transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* Minimal Bar Indicators */}
        <div className="absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 bg-black/50 backdrop-blur-xs px-3 py-1.5 border border-white/10 rounded-full">
          {HERO_BANNERS.map((_, i) => (
            <button
              key={i}
              onClick={(e) => {
                e.stopPropagation();
                setCurrent(i);
              }}
              className={`h-1.5 transition-all duration-300 rounded-full ${
                i === current ? 'w-6 bg-[#C5A059]' : 'w-2 bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Trust & Proof Bar below slides */}
      <div className="bg-neutral-950 border-y border-neutral-900 py-3.5 px-4 sm:px-6">
        <div className="max-w-[1440px] mx-auto flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-neutral-400">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-[#C5A059]" />
            <span className="uppercase tracking-wider text-neutral-300">Shark Tank India Season 5 Winner</span>
          </div>

          <div className="hidden md:flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
            <span className="uppercase tracking-wider">50+ Industrial Washes Tested</span>
          </div>

          <div className="hidden sm:flex items-center gap-2">
            <Truck className="w-4 h-4 text-[#C5A059]" />
            <span className="uppercase tracking-wider">Free Cash on Delivery Across India</span>
          </div>

          <div className="flex items-center gap-2">
            <RotateCcw className="w-4 h-4 text-[#C5A059]" />
            <span className="uppercase tracking-wider">7-Day Free Doorstep Exchanges</span>
          </div>
        </div>
      </div>
    </section>
  );
};
