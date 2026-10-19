import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { useReducedMotion } from 'framer-motion';
import { Magnetic } from './motion';

interface HeroProps {
  onShopNewArrivals: () => void;
  onShopCombos: () => void;
}

type HeroBanner = {
  id: string;
  title: string;
  image: string;
  link: string;
};

const HERO_BANNERS: HeroBanner[] = [
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

const MOBILE_BANNERS: HeroBanner[] = [
  {
    id: 'airforce',
    title: 'Airforce Fighter Jet Drop',
    image: '/banners/mobile/airforce-fighter-jet-mobile.jpg',
    link: '#collections-bento',
  },
  {
    id: 'combos',
    title: 'Mega Combo Deals - Buy 3 @ ₹999',
    image: '/banners/mobile/combos-pick-any-3-mobile.jpg',
    link: '#combos-section',
  },
];

const dotClass = (active: boolean) =>
  `h-2.5 w-2.5 rounded-full border border-white transition-colors ${active ? 'bg-white' : 'bg-transparent'}`;

export const Hero: React.FC<HeroProps> = ({ onShopNewArrivals, onShopCombos }) => {
  const [desktopIndex, setDesktopIndex] = useState(0);
  const [mobileIndex, setMobileIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const swipeStart = useRef({ x: 0, y: 0 });
  const blockClickUntil = useRef(0);
  const reduce = useReducedMotion();
  const desktopTotal = HERO_BANNERS.length;
  const mobileTotal = MOBILE_BANNERS.length;
  const desktopActive = HERO_BANNERS[desktopIndex];
  const mobileActive = MOBILE_BANNERS[mobileIndex];

  const nextDesktop = () => setDesktopIndex((prev) => (prev + 1) % desktopTotal);
  const prevDesktop = () => setDesktopIndex((prev) => (prev - 1 + desktopTotal) % desktopTotal);
  const nextMobile = () => setMobileIndex((prev) => (prev + 1) % mobileTotal);
  const prevMobile = () => setMobileIndex((prev) => (prev - 1 + mobileTotal) % mobileTotal);

  useEffect(() => {
    if (isPaused) return;
    const timer = window.setInterval(() => {
      setDesktopIndex((prev) => (prev + 1) % desktopTotal);
    }, 5000);
    return () => window.clearInterval(timer);
  }, [isPaused, desktopTotal]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setMobileIndex((prev) => (prev + 1) % mobileTotal);
    }, 5000);
    return () => window.clearInterval(timer);
  }, [mobileTotal]);

  const openBanner = (banner: HeroBanner) => {
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

  const pauseForDesktopHover = () => {
    if (window.matchMedia('(min-width: 768px)').matches) setIsPaused(true);
  };

  return (
    <section
      className={`hero-stage w-full bg-[#121212] text-white ${isPaused ? 'is-paused' : ''}`}
      aria-roledescription="carousel"
      aria-label="Featured campaigns"
      onMouseEnter={pauseForDesktopHover}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="hidden w-full md:block">
        <div
          className="relative aspect-[1024/437] w-full overflow-hidden"
          onTouchStart={(e) => { touchStartX.current = e.targetTouches[0].clientX; }}
          onTouchMove={(e) => { touchEndX.current = e.targetTouches[0].clientX; }}
          onTouchEnd={() => {
            if (touchStartX.current - touchEndX.current > 50) nextDesktop();
            if (touchStartX.current - touchEndX.current < -50) prevDesktop();
          }}
        >
          {HERO_BANNERS.map((banner, index) => {
            const isActive = index === desktopIndex;
            return (
              <button
                key={banner.id}
                type="button"
                className={`hero-slide absolute inset-0 h-full w-full ${isActive ? 'is-active' : ''}`}
                onClick={() => openBanner(banner)}
                aria-label={banner.title}
                tabIndex={isActive ? 0 : -1}
              >
                <img
                  src={banner.image}
                  alt=""
                  aria-hidden="true"
                  className="hero-bleed-blur"
                />
                <img
                  src={banner.image}
                  alt=""
                  className="hero-bleed-art"
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
              onClick={(e) => { e.stopPropagation(); prevDesktop(); }}
              className="hero-arrow"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
          </Magnetic>
          <Magnetic className="absolute right-4 top-1/2 z-20 -mt-[21px] hidden md:block">
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); nextDesktop(); }}
              className="hero-arrow"
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </Magnetic>

          <div className="absolute bottom-4 left-0 z-20 hidden w-full md:flex md:justify-center">
            <div className="flex items-center justify-center gap-2.5">
              {HERO_BANNERS.map((banner, index) => (
                <button
                  key={banner.id}
                  type="button"
                  onClick={() => setDesktopIndex(index)}
                  className={dotClass(index === desktopIndex)}
                  aria-label={`Show ${banner.title}`}
                  aria-current={index === desktopIndex}
                />
              ))}
            </div>
          </div>

          <div className="absolute bottom-3 right-3 z-20 hidden md:block">
            <button
              type="button"
              onClick={() => setIsPaused((paused) => !paused)}
              className="hero-arrow h-9 w-9"
              aria-label={isPaused ? 'Play slideshow' : 'Pause slideshow'}
              aria-pressed={isPaused}
            >
              {isPaused ? <Play className="h-3.5 w-3.5" /> : <Pause className="h-3.5 w-3.5" />}
            </button>
          </div>

          {!reduce && <div key={desktopIndex} className="hero-progress" aria-hidden="true" />}
        </div>
        <p className="sr-only" aria-live="polite">
          {desktopActive.title}
        </p>
      </div>

      <div className="bg-black md:hidden">
        <div className="px-4 pb-3 pt-4">
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-white/70">Campaign</p>
          <h2 className="bc-display mt-1 text-[2.6rem] text-white">{mobileActive.title}</h2>
        </div>
        <div
          className="relative aspect-[4/5] w-full overflow-hidden"
          onTouchStart={(e) => {
            const point = e.changedTouches[0];
            swipeStart.current = { x: point.clientX, y: point.clientY };
          }}
          onTouchEnd={(e) => {
            const point = e.changedTouches[0];
            const dx = point.clientX - swipeStart.current.x;
            const dy = point.clientY - swipeStart.current.y;
            if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
              if (dx < 0) nextMobile();
              else prevMobile();
              blockClickUntil.current = Date.now() + 350;
            }
          }}
          onClickCapture={(event) => {
            if (Date.now() < blockClickUntil.current) {
              event.preventDefault();
              event.stopPropagation();
            }
          }}
        >
          {MOBILE_BANNERS.map((banner, index) => {
            const isActive = index === mobileIndex;
            return (
              <button
                key={banner.id}
                type="button"
                className={`hero-slide absolute inset-0 h-full w-full ${isActive ? 'is-active' : ''}`}
                onClick={() => openBanner(banner)}
                aria-label={banner.title}
                tabIndex={isActive ? 0 : -1}
              >
                <img
                  src={banner.image}
                  alt=""
                  className="hero-bleed-art"
                  loading={index === 0 ? 'eager' : 'lazy'}
                  fetchPriority={index === 0 ? 'high' : 'auto'}
                />
              </button>
            );
          })}

          <div className="absolute bottom-4 left-0 z-20 flex w-full justify-center">
            <div className="flex items-center justify-center gap-2.5">
              {MOBILE_BANNERS.map((banner, index) => (
                <button
                  key={banner.id}
                  type="button"
                  onClick={() => setMobileIndex(index)}
                  className={dotClass(index === mobileIndex)}
                  aria-label={`Show ${banner.title}`}
                  aria-current={index === mobileIndex}
                />
              ))}
            </div>
          </div>
          <p className="sr-only" aria-live="polite">
            {mobileActive.title}
          </p>
        </div>
      </div>
    </section>
  );
};
