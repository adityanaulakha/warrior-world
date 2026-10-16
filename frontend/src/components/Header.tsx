import React, { useEffect, useRef, useState } from 'react';
import { Search, Heart, ShoppingBag, Menu, X, ChevronDown } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
  wishlistCount: number;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  onOpenSearch: () => void;
  onSelectCategory: (category: string) => void;
}

const MEGA_CATEGORIES = [
  {
    heading: 'Core Essentials',
    links: [
      { name: 'All T-Shirts', tag: 'Best Seller' },
      { name: '180 GSM Bio-Washed', tag: 'Pure Cotton' },
      { name: 'Heavyweight Oversized', tag: 'Drop Shoulder' },
      { name: 'Prime Polos', tag: '240 GSM Pique' },
      { name: 'Full Sleeve Henley', tag: 'Ribbed Cuffs' },
    ],
  },
  {
    heading: 'Combat Bottoms',
    links: [
      { name: '6-Pocket Cargo Pants', tag: 'Ripstop' },
      { name: 'Tactical Parachute Pants', tag: 'Adjustable Hem' },
      { name: 'Field Combat Joggers', tag: 'Stretch Twill' },
      { name: 'Multi-Pocket Chinos', tag: 'Heavy Duty' },
      { name: 'Combat Shorts', tag: 'Utility Pockets' },
    ],
  },
  {
    heading: 'Regimental Units',
    links: [
      { name: 'Indian Army Infantry', tag: 'INF-01' },
      { name: 'Air Force & Garud', tag: 'IAF-02' },
      { name: 'Navy & MARCOS Commando', tag: 'MAR-03' },
      { name: 'Patriotic Tiranga Series', tag: 'PAT-04' },
      { name: 'Special Frontier Force', tag: 'SFF-05' },
    ],
  },
];

const NAV = [
  { label: 'Regiments', category: 'Military' },
  { label: 'Combos', category: 'Combos' },
  { label: 'Bottoms', category: 'Bottoms' },
  { label: 'New', category: 'New Arrivals' },
  { label: 'Shark Tank', category: 'Shark Tank Special' },
];

const MOBILE_LINKS = [
  { label: 'Shop all', cat: 'Shop All' },
  { label: 'Pick any 3 @ ₹999', cat: 'Combos' },
  { label: 'Regiments', cat: 'Military' },
  { label: 'Tactical bottoms', cat: 'Bottoms' },
  { label: 'New arrivals', cat: 'New Arrivals' },
  { label: 'Shark Tank collection', cat: 'Shark Tank Special' },
];

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
  onOpenSearch,
  onSelectCategory,
}) => {
  const [activeMega, setActiveMega] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileOpen(false);
        setActiveMega(false);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const handleMegaEnter = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setActiveMega(true);
  };

  const handleMegaLeave = () => {
    closeTimeout.current = setTimeout(() => setActiveMega(false), 140);
  };

  const iconBtn = 'relative inline-flex h-11 w-11 items-center justify-center text-[#121212] transition-opacity hover:opacity-60';

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#E2E2E2] bg-white">
      <div className="mx-auto grid min-h-[60px] w-full max-w-[1440px] grid-cols-[auto_1fr_auto] items-center px-[15px] lg:min-h-[80px] lg:grid-cols-[1fr_auto_1fr] lg:px-[40px]">
        <div className="flex min-w-0 items-center justify-start">
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center text-[#121212] lg:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
          >
            <Menu className="h-5 w-5" strokeWidth={1.5} />
          </button>

          <nav className="hidden min-w-0 items-center lg:flex" aria-label="Primary">
            <div
              className="relative flex h-full items-center"
              onMouseEnter={handleMegaEnter}
              onMouseLeave={handleMegaLeave}
            >
              <button
                type="button"
                className="bc-nav-link"
                aria-expanded={activeMega}
                onClick={() => setActiveMega((open) => !open)}
              >
                Shop
                <ChevronDown className={`h-3.5 w-3.5 transition-transform ${activeMega ? 'rotate-180' : ''}`} />
              </button>
            </div>
            {NAV.map((item) => (
              <button
                key={item.label}
                type="button"
                className="bc-nav-link"
                onClick={() => onSelectCategory(item.category)}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="justify-self-center"
          aria-label="Warrior World home"
        >
          {!logoError ? (
            <img
              src="/warrior-world-logo.png"
              alt="Warrior World"
              className="h-8 w-auto max-w-[148px] object-contain sm:h-9 sm:max-w-[180px]"
              onError={() => setLogoError(true)}
            />
          ) : (
            <span className="text-lg font-semibold uppercase tracking-[0.08em] text-[#121212]">Warrior World</span>
          )}
        </a>

        <div className="flex items-center justify-end">
          <button type="button" onClick={onOpenSearch} className={iconBtn} aria-label="Search">
            <Search className="h-[18px] w-[18px]" strokeWidth={1.6} />
          </button>
          <button
            type="button"
            onClick={onOpenWishlist}
            className={`${iconBtn} hidden sm:inline-flex`}
            aria-label={`Wishlist, ${wishlistCount} items`}
          >
            <Heart className="h-[18px] w-[18px]" strokeWidth={1.6} />
            {wishlistCount > 0 && (
              <span className="absolute right-1 top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#121212] px-1 text-[9px] font-semibold text-white">
                {wishlistCount}
              </span>
            )}
          </button>
          <button type="button" onClick={onOpenCart} className={iconBtn} aria-label={`Bag, ${cartCount} items`}>
            <ShoppingBag className="h-[18px] w-[18px]" strokeWidth={1.6} />
            <span className="absolute right-1 top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#121212] px-1 text-[9px] font-semibold text-white">
              {cartCount}
            </span>
          </button>
        </div>
      </div>

      {activeMega && (
        <div
          className="absolute left-0 right-0 top-full z-50 hidden border-t border-[#E2E2E2] bg-white shadow-[0_18px_40px_rgba(0,0,0,0.06)] lg:block"
          onMouseEnter={handleMegaEnter}
          onMouseLeave={handleMegaLeave}
        >
          <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-8 px-[40px] py-8">
            <div className="col-span-8 grid grid-cols-3 gap-8">
              {MEGA_CATEGORIES.map((cat) => (
                <div key={cat.heading}>
                  <p className="mb-3 text-[13px] font-semibold uppercase tracking-[0.08em] text-[#121212]">
                    {cat.heading}
                  </p>
                  <ul className="space-y-1">
                    {cat.links.map((link) => (
                      <li key={link.name}>
                        <button
                          type="button"
                          onClick={() => {
                            setActiveMega(false);
                            onSelectCategory(link.name);
                          }}
                          className="flex w-full items-baseline justify-between py-1 text-left text-[15px] text-[#484f56] transition-colors hover:text-[#121212]"
                        >
                          <span>{link.name}</span>
                          <span className="text-[11px] uppercase tracking-[0.08em] text-[#484f56]/70">{link.tag}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="col-span-4 flex flex-col justify-between bg-[#f7f7f7] p-6">
              <div>
                <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#cf2929]">
                  Shark Tank S5
                </p>
                <h3 className="text-2xl font-semibold leading-tight text-[#121212]">Pick any 3 @ ₹999</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-[#484f56]">
                  Mix tactical prints, colours, and sizes in 180 GSM bio-washed combed cotton.
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  setActiveMega(false);
                  onSelectCategory('Combos');
                }}
                className="bc-text-link mt-6 self-start"
              >
                Build your combo
              </button>
            </div>
          </div>
        </div>
      )}

      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-black/40"
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute inset-y-0 left-0 flex w-[min(100%,360px)] flex-col bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-[#E2E2E2] px-4 py-3">
              <img src="/warrior-world-logo.png" alt="" className="h-7 w-auto object-contain" />
              <button type="button" onClick={() => setMobileOpen(false)} className="inline-flex h-11 w-11 items-center justify-center" aria-label="Close menu">
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto px-2 py-2" aria-label="Mobile">
              {MOBILE_LINKS.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => {
                    setMobileOpen(false);
                    onSelectCategory(item.cat);
                  }}
                  className="flex w-full items-center justify-between border-b border-[#E2E2E2] px-3 py-4 text-left text-[17px] font-medium text-[#121212]"
                >
                  {item.label}
                </button>
              ))}
            </nav>
            <div className="flex gap-2 border-t border-[#E2E2E2] p-4">
              <button type="button" className="bc-btn-line bc-btn flex-1" onClick={() => { setMobileOpen(false); onOpenSearch(); }}>
                Search
              </button>
              <button type="button" className="bc-btn flex-1" onClick={() => { setMobileOpen(false); onOpenWishlist(); }}>
                Wishlist ({wishlistCount})
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
