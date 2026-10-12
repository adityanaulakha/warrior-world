import React, { useState } from 'react';
import { ArrowRight, Check, MapPin, Mail, ShieldCheck, Award, Truck, RotateCcw } from 'lucide-react';
import { InstagramIcon, YoutubeIcon, FacebookIcon, TwitterIcon } from './SocialIcons';

interface FooterProps {
  onOpenSearch: () => void;
}

const MENSWEAR_LINKS = [
  'All Cotton T-Shirts',
  'Pick Any 3 @ ₹999 Combos',
  'Prime Pique Polos',
  'Heavyweight Oversized Tees',
  '6-Pocket Ripstop Cargos',
  'Combat Joggers & Bottoms',
];

const REGIMENTAL_LINKS = [
  'Indian Army Infantry (INF-01)',
  'Indian Air Force & Garud (IAF-02)',
  'Navy & MARCOS Commando (MAR-03)',
  'Patriotic Tiranga Series (PAT-04)',
  'Special Frontier Forces (SFF-05)',
  'Kargil Heritage Archive',
];

const HERITAGE_LINKS = [
  'Shark Tank S5 Pitch Story',
  'Deal With Shark Vineeta Singh',
  '50+ Industrial Wash Testing',
  'Surat In-House Manufacturing',
  '180 GSM Combed Cotton Standard',
  'Direct-From-Factory Pricing',
];

const SERVICE_LINKS = [
  'Track Your Consignment',
  'Free Doorstep Exchange Policy',
  '7-Day No-Questions Return',
  'Cash on Delivery Terms',
  'Menswear Size Calculator',
  'WhatsApp Support Concierge',
];

export const Footer: React.FC<FooterProps> = ({ onOpenSearch }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-black text-white border-t border-neutral-900 selection:bg-neutral-800 selection:text-white">
      
      {/* Top Editorial Row: Brand Logo, Manifesto & VIP Insider Input */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-12 border-b border-neutral-900">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          
          {/* Brand Identity & Mission (7 cols) */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-4 mb-4">
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-block"
              >
                <img
                  src="/warrior-world-logo.png"
                  alt="Warrior World Clothing"
                  className="h-8 sm:h-10 w-auto object-contain brightness-0 invert"
                />
              </a>

              <div className="h-6 w-px bg-neutral-800 hidden sm:block" />

              <div className="hidden sm:flex items-center gap-2 px-2.5 py-1 bg-neutral-900/90 border border-neutral-800 text-[10px] font-mono text-[#C5A059] uppercase tracking-wider">
                <img
                  src="/shark-tank-india-logo.png"
                  alt="Shark Tank India"
                  className="h-3.5 w-auto object-contain brightness-200"
                />
                <span>Season 5 Deal Winner</span>
              </div>
            </div>

            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed max-w-xl">
              India's first authentic army-inspired menswear label. Precision knitted with 180 GSM combed cotton, formulated with Japanese fade-proof screen inks, and shipped direct-from-factory across 19,000+ Indian postal pincodes.
            </p>
          </div>

          {/* Minimalist VIP Drop Registry (5 cols) */}
          <div className="lg:col-span-5 bg-neutral-950 p-6 border border-neutral-850">
            <p className="text-[10px] font-mono uppercase tracking-widest text-[#C5A059] mb-1 font-bold">
              Priority Drop Access
            </p>
            <p className="text-xs text-neutral-300 font-medium mb-3">
              Receive secret combo coupons & early drop invitations.
            </p>

            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 bg-neutral-900 border border-neutral-800 px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#C5A059] font-mono transition-colors"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 bg-white hover:bg-[#C5A059] text-neutral-950 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors flex-shrink-0"
                >
                  <span>Join</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            ) : (
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-neutral-900 px-3 py-2 border border-neutral-800">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>You're on the priority manifest. Check your inbox!</span>
              </div>
            )}
          </div>

        </div>
      </div>

      {/* Main 4-Column Navigation Grid */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Col 1: Menswear */}
          <div>
            <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#C5A059] mb-4 pb-1 border-b border-neutral-900">
              Shop Menswear
            </p>
            <ul className="space-y-2.5">
              {MENSWEAR_LINKS.map((link) => (
                <li key={link}>
                  <a
                    href="#best-sellers-section"
                    className="text-xs text-neutral-400 hover:text-white transition-colors block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 2: Regimental Units */}
          <div>
            <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#C5A059] mb-4 pb-1 border-b border-neutral-900">
              Regimental Units
            </p>
            <ul className="space-y-2.5">
              {REGIMENTAL_LINKS.map((link) => (
                <li key={link}>
                  <a
                    href="#collections-bento"
                    className="text-xs text-neutral-400 hover:text-white transition-colors block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Brand & Factory */}
          <div>
            <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#C5A059] mb-4 pb-1 border-b border-neutral-900">
              Brand & Provenance
            </p>
            <ul className="space-y-2.5">
              {HERITAGE_LINKS.map((link) => (
                <li key={link}>
                  <a
                    href="#shark-tank"
                    className="text-xs text-neutral-400 hover:text-white transition-colors block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Concierge & Support */}
          <div>
            <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#C5A059] mb-4 pb-1 border-b border-neutral-900">
              Client Concierge
            </p>
            <ul className="space-y-2.5">
              {SERVICE_LINKS.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="text-xs text-neutral-400 hover:text-white transition-colors block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-4 border-t border-neutral-900 space-y-2 text-[11px] text-neutral-500 font-mono">
              <div className="flex items-center gap-2">
                <MapPin className="w-3 h-3 text-[#C5A059]" />
                <span>Facility: Surat, Gujarat, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3 h-3 text-[#C5A059]" />
                <span>support@warriorworld.in</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Full-width Certification Strip */}
      <div className="border-y border-neutral-900 bg-neutral-950 py-4">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4 text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
            <div className="flex items-center gap-2">
              <Award className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Shark Tank India S5 Deal Winner</span>
            </div>
            <span className="text-neutral-800 hidden sm:inline">•</span>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>50+ Wash Colorfast Tested</span>
            </div>
            <span className="text-neutral-800 hidden sm:inline">•</span>
            <div className="flex items-center gap-2">
              <Truck className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Free COD Across 19,000+ Pincodes</span>
            </div>
            <span className="text-neutral-800 hidden sm:inline">•</span>
            <div className="flex items-center gap-2">
              <RotateCcw className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>7-Day Doorstep Returns</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Copyright, Socials, Payments */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-500 font-mono">
          
          {/* Copyright */}
          <div className="flex items-center gap-3">
            <span>© {new Date().getFullYear()} WARRIOR WORLD. ALL RIGHTS RESERVED.</span>
            <span className="text-neutral-800">•</span>
            <span className="text-neutral-400">DESIGNED FOR PATRIOTS</span>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {[
              { icon: InstagramIcon, href: 'https://instagram.com/warriorworld.in', label: 'Instagram' },
              { icon: YoutubeIcon, href: '#', label: 'YouTube' },
              { icon: FacebookIcon, href: '#', label: 'Facebook' },
              { icon: TwitterIcon, href: '#', label: 'X' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-7 h-7 bg-neutral-900 hover:bg-[#C5A059] hover:text-neutral-950 flex items-center justify-center text-neutral-400 transition-colors"
              >
                <Icon className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>

          {/* Payment Badges */}
          <div className="flex items-center gap-1.5">
            {['UPI', 'VISA', 'MASTERCARD', 'RUPAY', 'COD'].map((badge) => (
              <span
                key={badge}
                className="px-2 py-0.5 border border-neutral-900 bg-neutral-950 text-neutral-500 text-[9px] font-mono tracking-wider"
              >
                {badge}
              </span>
            ))}
          </div>

        </div>
      </div>

    </footer>
  );
};
