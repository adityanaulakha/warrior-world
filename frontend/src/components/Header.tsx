import React, { useState, useEffect, useRef } from 'react';
import { Search, Heart, ShoppingBag, User, Menu, X, ChevronDown, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

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

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
  onOpenSearch,
  onSelectCategory,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMega, setActiveMega] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMegaEnter = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setActiveMega(true);
  };

  const handleMegaLeave = () => {
    closeTimeout.current = setTimeout(() => setActiveMega(false), 120);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-neutral-200/90 shadow-[0_2px_12px_rgba(0,0,0,0.04)]'
            : 'bg-[#FAFAF8] border-b border-neutral-200/60'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`grid grid-cols-2 lg:grid-cols-[240px_1fr_240px] items-center transition-all duration-300 ${
              isScrolled ? 'h-16' : 'h-20'
            }`}
          >
            {/* Left Column: Mobile Menu Toggle + Brand Logo */}
            <div className="flex items-center justify-start gap-3 sm:gap-4">
              <button
                className="lg:hidden flex items-center justify-center w-10 h-10 -ml-2 text-neutral-900 hover:text-neutral-600 transition-colors"
                onClick={() => setMobileOpen(true)}
                aria-label="Open mobile menu"
              >
                <Menu className="w-5 h-5" strokeWidth={1.5} />
              </button>

              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="group flex items-center transition-transform duration-300 hover:scale-[1.01]"
              >
                {!logoError ? (
                  <img
                    src="/warrior-world-logo.png"
                    alt="Warrior World Clothing"
                    className={`w-auto object-contain transition-all duration-300 ${
                      isScrolled ? 'h-7 sm:h-8' : 'h-8 sm:h-9'
                    }`}
                    onError={() => setLogoError(true)}
                  />
                ) : (
                  <div className="flex items-center gap-1.5">
                    <span className="font-heading font-black text-xl sm:text-2xl text-neutral-950 tracking-wider">
                      WARRIORWORLD
                    </span>
                    <span className="w-2 h-2 bg-[#C5A059]" />
                  </div>
                )}
              </a>
            </div>

            {/* Middle Column: Perfectly Centered Navigation Headings */}
            <nav className="hidden lg:flex items-center justify-center gap-6 xl:gap-8 h-full">
              {/* Shop All Flyout */}
              <div
                className="relative h-full flex items-center"
                onMouseEnter={handleMegaEnter}
                onMouseLeave={handleMegaLeave}
              >
                <button
                  className={`inline-flex items-center gap-1.5 text-[12px] xl:text-[13px] font-bold uppercase tracking-[0.08em] transition-colors py-1 ${
                    activeMega
                      ? 'text-neutral-950'
                      : 'text-neutral-700 hover:text-neutral-950'
                  }`}
                >
                  <span>Shop All</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      activeMega ? 'rotate-180 text-neutral-950' : 'text-neutral-400'
                    }`}
                    strokeWidth={1.75}
                  />
                </button>
              </div>

              <button
                onClick={() => onSelectCategory('Military')}
                className="inline-flex items-center text-[12px] xl:text-[13px] font-bold uppercase tracking-[0.08em] text-neutral-700 hover:text-neutral-950 transition-colors py-1"
              >
                Regiments
              </button>

              <button
                onClick={() => onSelectCategory('Combos')}
                className="inline-flex items-center text-[12px] xl:text-[13px] font-bold uppercase tracking-[0.08em] text-neutral-700 hover:text-neutral-950 transition-colors py-1"
              >
                Combos
              </button>

              <button
                onClick={() => onSelectCategory('Bottoms')}
                className="inline-flex items-center text-[12px] xl:text-[13px] font-bold uppercase tracking-[0.08em] text-neutral-700 hover:text-neutral-950 transition-colors py-1"
              >
                Tactical Bottoms
              </button>

              <button
                onClick={() => onSelectCategory('New Arrivals')}
                className="inline-flex items-center text-[12px] xl:text-[13px] font-bold uppercase tracking-[0.08em] text-neutral-700 hover:text-neutral-950 transition-colors py-1"
              >
                New Drops
              </button>

              <button
                onClick={() => onSelectCategory('Shark Tank Special')}
                className="inline-flex items-center text-[12px] xl:text-[13px] font-bold uppercase tracking-[0.08em] text-neutral-900 hover:text-[#8B6B23] transition-colors py-1"
              >
                Shark Tank S5
              </button>
            </nav>

            {/* Right Column: Clean Utilities (Search, Wishlist, Bag) */}
            <div className="flex items-center justify-end gap-2 sm:gap-3">
              {/* Minimal Search Button */}
              <button
                onClick={onOpenSearch}
                className="hidden sm:flex items-center gap-2.5 px-3 py-1.5 border border-neutral-200 bg-white hover:border-neutral-400 text-neutral-500 hover:text-neutral-900 text-xs font-mono transition-colors group"
                aria-label="Search store"
              >
                <Search className="w-3.5 h-3.5 text-neutral-400 group-hover:text-neutral-950 transition-colors" />
                <span className="hidden md:inline text-[11px] uppercase tracking-wider text-neutral-400">Search</span>
                <kbd className="hidden lg:inline text-[9px] bg-neutral-100 text-neutral-500 px-1 py-0.5 border border-neutral-200">
                  ⌘K
                </kbd>
              </button>

              {/* Mobile Search Icon */}
              <button
                onClick={onOpenSearch}
                className="sm:hidden flex items-center justify-center w-9 h-9 text-neutral-800 hover:text-neutral-950 transition-colors"
                aria-label="Search"
              >
                <Search className="w-4 h-4" strokeWidth={1.5} />
              </button>

              {/* Wishlist */}
              <button
                onClick={onOpenWishlist}
                className="relative flex items-center justify-center w-9 h-9 text-neutral-800 hover:text-neutral-950 transition-colors"
                aria-label={`Wishlist (${wishlistCount})`}
              >
                <Heart className="w-4 h-4" strokeWidth={1.75} />
                {wishlistCount > 0 && (
                  <span className="absolute top-1 right-0.5 min-w-[15px] h-[15px] px-0.5 bg-neutral-950 text-white text-[9px] font-mono font-bold flex items-center justify-center leading-none">
                    {wishlistCount}
                  </span>
                )}
              </button>

              {/* Cart Drawer Trigger */}
              <button
                onClick={onOpenCart}
                className="relative flex items-center gap-2 pl-2.5 pr-3 py-1.5 bg-neutral-950 hover:bg-neutral-800 text-white transition-colors"
                aria-label={`Bag (${cartCount})`}
              >
                <ShoppingBag className="w-3.5 h-3.5 text-[#C5A059]" strokeWidth={2} />
                <span className="text-xs font-bold font-mono tracking-wider">
                  {cartCount}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Minimalist Editorial Mega Menu */}
        {activeMega && (
          <div
            className="absolute top-full left-0 right-0 bg-white border-t border-neutral-200 shadow-xl z-50 animate-in fade-in slide-in-from-top-1 duration-150"
            onMouseEnter={handleMegaEnter}
            onMouseLeave={handleMegaLeave}
          >
            <div className="max-w-[1440px] mx-auto px-6 lg:px-8 py-8">
              <div className="grid grid-cols-12 gap-8">
                {/* 3 Nav Columns (8 cols) */}
                <div className="col-span-8 grid grid-cols-3 gap-6 border-r border-neutral-100 pr-6">
                  {MEGA_CATEGORIES.map((cat) => (
                    <div key={cat.heading}>
                      <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#C5A059] mb-3 pb-1 border-b border-neutral-100">
                        {cat.heading}
                      </p>
                      <ul className="space-y-2">
                        {cat.links.map((link) => (
                          <li key={link.name}>
                            <button
                              onClick={() => {
                                setActiveMega(false);
                                onSelectCategory(link.name);
                              }}
                              className="group flex items-baseline justify-between w-full text-left py-1 text-xs text-neutral-600 hover:text-neutral-950 transition-colors"
                            >
                              <span className="group-hover:translate-x-0.5 transition-transform font-medium">
                                {link.name}
                              </span>
                              <span className="text-[9px] font-mono text-neutral-400 group-hover:text-[#C5A059] transition-colors">
                                {link.tag}
                              </span>
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Right Promo Card (4 cols) */}
                <div className="col-span-4 flex flex-col justify-between bg-neutral-50 p-5 border border-neutral-200/70">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[9px] font-mono font-bold uppercase tracking-widest bg-neutral-950 text-white px-2 py-0.5">
                        Shark Tank S5 Exclusive
                      </span>
                      <span className="text-[10px] font-mono text-[#8B6B23] font-bold">
                        Pick Any 3 @ ₹999
                      </span>
                    </div>
                    <h4 className="font-heading font-black text-sm text-neutral-950 tracking-tight leading-snug">
                      Signature 180 GSM Combed Cotton Drop
                    </h4>
                    <p className="text-neutral-600 text-[11px] mt-1 leading-relaxed">
                      Mix and match tactical army graphics, pure bio-washed comfort, and 50+ wash durability.
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-neutral-200 flex items-center justify-between">
                    <button
                      onClick={() => {
                        setActiveMega(false);
                        onSelectCategory('Combos');
                      }}
                      className="text-xs font-bold uppercase tracking-wider text-neutral-950 hover:text-[#C5A059] flex items-center gap-1.5 transition-colors"
                    >
                      <span>Build Your Combo</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-[10px] font-mono text-neutral-400">Free COD Pan-India</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-neutral-950/70 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileOpen(false)}
          />

          <div className="fixed inset-y-0 left-0 w-full max-w-xs bg-white text-neutral-950 shadow-2xl flex flex-col justify-between overflow-y-auto">
            {/* Drawer Header */}
            <div>
              <div className="flex items-center justify-between p-5 border-b border-neutral-200">
                <img
                  src="/warrior-world-logo.png"
                  alt="Warrior World"
                  className="h-7 w-auto object-contain"
                  onError={() => setLogoError(true)}
                />
                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-8 h-8 flex items-center justify-center text-neutral-600 hover:text-neutral-950"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Shark Tank Mobile Callout */}
              <div className="p-4 bg-neutral-900 text-white flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img
                    src="/shark-tank-india-logo.png"
                    alt="Shark Tank India"
                    className="h-3.5 w-auto brightness-200"
                  />
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#C5A059] font-bold">
                    Season 5 Deal Winner
                  </span>
                </div>
                <button
                  onClick={() => {
                    setMobileOpen(false);
                    onSelectCategory('Shark Tank Special');
                  }}
                  className="text-[10px] font-bold uppercase tracking-wider text-white underline underline-offset-2"
                >
                  Shop
                </button>
              </div>

              {/* Links List */}
              <div className="p-4 space-y-1">
                {[
                  { label: 'Shop All Products', cat: 'Shop All' },
                  { label: 'Pick Any 3 @ ₹999 Combos', cat: 'Combos' },
                  { label: 'Regimental Units (Army, IAF, Navy)', cat: 'Military' },
                  { label: 'Tactical Cargo Pants & Bottoms', cat: 'Bottoms' },
                  { label: 'New Arrivals / Fresh Deployments', cat: 'New Arrivals' },
                  { label: 'Shark Tank Pitch Collection', cat: 'Shark Tank Special' },
                ].map((item) => (
                  <button
                    key={item.label}
                    onClick={() => {
                      setMobileOpen(false);
                      onSelectCategory(item.cat);
                    }}
                    className="w-full text-left py-3 px-3 text-xs font-bold uppercase tracking-wider text-neutral-800 hover:bg-neutral-100 hover:text-neutral-950 transition-colors border-b border-neutral-100 flex items-center justify-between"
                  >
                    <span>{item.label}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-neutral-400" />
                  </button>
                ))}
              </div>
            </div>

            {/* Drawer Footer */}
            <div className="p-5 border-t border-neutral-200 bg-neutral-50 text-xs text-neutral-600 space-y-2">
              <div className="flex items-center gap-2 text-neutral-900 font-bold uppercase tracking-wider text-[11px]">
                <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
                <span>50+ Wash Tested Pure Cotton</span>
              </div>
              <p className="text-[10px] text-neutral-500">Free Cash on Delivery across 19,000+ Indian Pincodes</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
