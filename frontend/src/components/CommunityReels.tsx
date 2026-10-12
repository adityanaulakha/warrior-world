import React from 'react';
import { ArrowRight } from 'lucide-react';
import { InstagramIcon } from './SocialIcons';

const REELS = [
  { id: 'r1', img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80', likes: '12.4K', handle: '@warrior_vibes' },
  { id: 'r2', img: 'https://images.unsplash.com/photo-1529635946583-5d7fe1efa9b0?auto=format&fit=crop&w=600&q=80', likes: '8.9K', handle: '@army_style' },
  { id: 'r3', img: 'https://images.unsplash.com/photo-1506634572416-48cdfe7de167?auto=format&fit=crop&w=600&q=80', likes: '15.2K', handle: '@patriot.looks' },
  { id: 'r4', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80', likes: '9.7K', handle: '@warrior.style' },
  { id: 'r5', img: 'https://images.unsplash.com/photo-1550614000-4895a10e1bfd?auto=format&fit=crop&w=600&q=80', likes: '6.3K', handle: '@desi_warrior' },
];

export const CommunityReels: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-white border-t border-neutral-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-[11px] font-bold text-neutral-500 uppercase tracking-widest">
                Real Warriors In Action
              </span>
              <span className="w-1 h-1 rounded-full bg-neutral-300" />
              <span className="text-[11px] font-semibold text-neutral-900 uppercase tracking-wider">
                @warriorworld.in
              </span>
            </div>
            <h2 className="font-heading font-black text-2xl sm:text-3xl text-neutral-950 tracking-tight">
              Community Field Manual
            </h2>
          </div>

          <a
            href="https://instagram.com/warriorworld.in"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border border-neutral-900 text-xs font-bold uppercase tracking-wider text-neutral-950 hover:bg-neutral-950 hover:text-white transition-colors self-start sm:self-auto"
          >
            <InstagramIcon className="w-3.5 h-3.5" />
            <span>Join 180K+ On Instagram</span>
          </a>
        </div>

        {/* Reel Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {REELS.map((reel) => (
            <div
              key={reel.id}
              className="group relative overflow-hidden bg-neutral-100 cursor-pointer border border-neutral-200"
              style={{ aspectRatio: '4/5' }}
            >
              <img
                src={reel.img}
                alt={`Community post by ${reel.handle}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://picsum.photos/seed/${reel.id}/400/500`;
                }}
              />
              <div className="absolute inset-0 bg-neutral-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <InstagramIcon className="w-7 h-7 text-white" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-neutral-950/90 via-neutral-950/40 to-transparent">
                <p className="text-white text-xs font-bold font-mono tracking-tight">{reel.handle}</p>
                <p className="text-neutral-400 text-[10px] font-mono mt-0.5">{reel.likes} likes</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
