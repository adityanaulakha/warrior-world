import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { InstagramIcon, YoutubeIcon, FacebookIcon, TwitterIcon } from './SocialIcons';

interface FooterProps {
  onOpenSearch: () => void;
}

const YEAR = new Date().getFullYear();

const COLUMNS = [
  {
    title: 'Shop',
    href: '#best-sellers-section',
    links: [
      'All Cotton T-Shirts',
      'Pick Any 3 @ ₹999 Combos',
      'Prime Pique Polos',
      'Heavyweight Oversized Tees',
      '6-Pocket Ripstop Cargos',
      'Combat Joggers & Bottoms',
    ],
  },
  {
    title: 'Units',
    href: '#collections-bento',
    links: [
      'Indian Army Infantry (INF-01)',
      'Indian Air Force & Garud (IAF-02)',
      'Navy & MARCOS Commando (MAR-03)',
      'Patriotic Tiranga Series (PAT-04)',
      'Special Frontier Forces (SFF-05)',
      'Kargil Heritage Archive',
    ],
  },
  {
    title: 'Brand',
    href: '#shark-tank',
    links: [
      'Shark Tank S5 Pitch Story',
      'Deal With Shark Vineeta Singh',
      '50+ Industrial Wash Testing',
      'Surat In-House Manufacturing',
      '180 GSM Combed Cotton Standard',
      'Direct-From-Factory Pricing',
    ],
  },
  {
    title: 'Help',
    href: '#',
    links: [
      'Track Your Consignment',
      'Free Doorstep Exchange Policy',
      '7-Day No-Questions Return',
      'Cash on Delivery Terms',
      'Menswear Size Calculator',
      'WhatsApp Support Concierge',
    ],
  },
];

export const Footer: React.FC<FooterProps> = ({ onOpenSearch }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [openColumn, setOpenColumn] = useState<string | null>(null);

  const handleSubscribe = (event: React.FormEvent) => {
    event.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#121212] text-white">
      <div className="bc-wrap py-12 md:py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <img
                src="/warrior-world-logo.png"
                alt="Warrior World"
                className="h-9 w-auto object-contain brightness-0 invert"
              />
            </a>
            <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-white/80">
              India&apos;s first army-inspired menswear label. 180 GSM combed cotton, fade-resistant prints, and direct-from-factory shipping across 19,000+ Indian pincodes.
            </p>
            <ul className="mt-5 flex items-center gap-1">
              {[
                { icon: InstagramIcon, href: 'https://instagram.com/warriorworld.in', label: 'Instagram' },
                { icon: YoutubeIcon, href: 'https://www.youtube.com/results?search_query=warrior+world+shark+tank+india', label: 'YouTube' },
                { icon: FacebookIcon, href: 'https://warriorworld.in', label: 'Facebook' },
                { icon: TwitterIcon, href: 'https://warriorworld.in', label: 'X' },
              ].map(({ icon: Icon, href, label }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="inline-flex h-11 w-11 items-center justify-center text-white transition-opacity hover:opacity-60"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-0 md:col-span-8 md:grid-cols-2 md:gap-8 lg:col-span-5">
            {COLUMNS.map((column) => {
              const isOpen = openColumn === column.title;
              return (
                <div key={column.title} className="border-t border-[#444444] md:border-0">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between py-4 text-left text-sm font-semibold uppercase tracking-[0.1em] md:pointer-events-none md:py-0 md:pb-5"
                    aria-expanded={isOpen}
                    onClick={() => setOpenColumn(isOpen ? null : column.title)}
                  >
                    {column.title}
                    <span className="text-lg leading-none md:hidden" aria-hidden="true">{isOpen ? '–' : '+'}</span>
                  </button>
                  <ul className={`${isOpen ? 'block pb-4' : 'hidden'} md:block`}>
                    {column.links.map((link) => (
                      <li key={link} className="mb-1.5">
                        <a
                          href={column.href}
                          onClick={(event) => {
                            if (column.title === 'Help') {
                              event.preventDefault();
                              if (link === 'Menswear Size Calculator') onOpenSearch();
                            }
                          }}
                          className="text-[15px] leading-8 text-white transition-colors hover:text-[#cecece]"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <div className="lg:col-span-3">
            <p className="text-sm font-semibold uppercase tracking-[0.1em]">Priority drop access</p>
            <p className="mt-3 text-[15px] leading-relaxed text-white/80">
              Secret combo coupons and early invitations to the next drop.
            </p>
            {subscribed ? (
              <p className="mt-4 flex items-center gap-2 text-sm text-white">
                <Check className="h-4 w-4" />
                You&apos;re on the list.
              </p>
            ) : (
              <form onSubmit={handleSubscribe} className="relative mt-4">
                <label htmlFor="footer-email" className="sr-only">Email</label>
                <input
                  id="footer-email"
                  type="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Email"
                  className="h-[52px] w-full border border-[#444444] bg-transparent px-4 pr-12 text-white placeholder:text-white/50 focus:border-white focus:outline-none"
                />
                <button type="submit" className="absolute bottom-0 right-0 flex h-[52px] w-10 items-center justify-center text-white" aria-label="Subscribe">
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            )}
            <p className="mt-6 text-sm text-white/70">Facility: Surat, Gujarat · support@warriorworld.in</p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-[#444444] pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-[13px] text-white/60">© {YEAR} Warrior World. All rights reserved.</p>
          <ul className="flex flex-wrap gap-2">
            {['UPI', 'VISA', 'MASTERCARD', 'RUPAY', 'COD'].map((badge) => (
              <li key={badge} className="border border-[#444444] px-2 py-1 text-[10px] tracking-[0.08em] text-white/80">
                {badge}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};
