import React from 'react';
import { ArrowRight, Bed } from 'lucide-react';

interface HomeBedsheetProps {
  onExploreBedsheets: (chip: string) => void;
}

const BEDSHEETS = [
  { unit: 'Army Regimental', count: '14 Designs', img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80' },
  { unit: 'Air Force Jet', count: '10 Designs', img: 'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=600&q=80' },
  { unit: 'Navy Maritime', count: '8 Designs', img: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=600&q=80' },
  { unit: 'Wildlife Bengal', count: '12 Designs', img: 'https://images.unsplash.com/photo-1586022045477-9f51dcfe45b9?auto=format&fit=crop&w=600&q=80' },
  { unit: 'Patriotic Tiranga', count: '9 Designs', img: 'https://images.unsplash.com/photo-1612965607446-25e1332775ae?auto=format&fit=crop&w=600&q=80' },
  { unit: 'Himalayan Ridge', count: '11 Designs', img: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=600&q=80' },
];

export const HomeBedsheets: React.FC<HomeBedsheetProps> = ({ onExploreBedsheets }) => {
  return (
    <section id="home-collection" className="py-16 sm:py-24 bg-neutral-900 text-white border-t border-neutral-800">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-6 border-b border-neutral-800">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-[11px] font-bold text-[#C5A059] uppercase tracking-widest">
                Home Decor Capsule
              </span>
              <span className="w-1 h-1 rounded-full bg-neutral-700" />
              <span className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider">
                Glace Cotton Double Bedsheets
              </span>
            </div>
            <h2 className="font-heading font-black text-2xl sm:text-4xl text-white tracking-tight">
              Regimental Bedsheet Collection
            </h2>
            <p className="text-neutral-400 text-xs sm:text-sm mt-1">
              King & Double Bed Fit • All Designs Flat ₹999 with 2 Free Pillow Covers Included
            </p>
          </div>

          <button
            onClick={() => onExploreBedsheets('All')}
            className="self-start sm:self-auto flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-300 hover:text-white transition-colors group"
          >
            <span>View All Bedsheets</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Clean 6-Tile Bedsheet Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mb-8">
          {BEDSHEETS.map((b) => (
            <button
              key={b.unit}
              onClick={() => onExploreBedsheets(b.unit)}
              className="group text-left bg-neutral-950 border border-neutral-800 hover:border-[#C5A059] transition-colors overflow-hidden flex flex-col"
            >
              <div className="relative aspect-square overflow-hidden bg-neutral-900">
                <img
                  src={b.img}
                  alt={`${b.unit} bedsheet design`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://picsum.photos/seed/${b.unit}sheet/300/300`;
                  }}
                />
                <div className="absolute top-2 right-2 bg-neutral-950/90 border border-neutral-800 px-2 py-0.5 text-[9px] font-mono text-[#C5A059] font-bold">
                  ₹999 FLAT
                </div>
              </div>

              <div className="p-3 border-t border-neutral-800 bg-neutral-950 flex-grow">
                <h4 className="font-heading font-bold text-xs sm:text-sm text-white group-hover:text-[#C5A059] transition-colors line-clamp-1">
                  {b.unit}
                </h4>
                <p className="text-[10px] text-neutral-500 font-mono mt-0.5">{b.count}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Feature Banner Card */}
        <div className="p-6 sm:p-8 bg-neutral-950 border border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-neutral-900 border border-neutral-800 text-[#C5A059] flex items-center justify-center flex-shrink-0">
              <Bed className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#C5A059]">
                  Limited Suite Offer
                </span>
                <span className="text-[10px] bg-white/10 px-2 py-0.5 text-neutral-300 font-mono">
                  2 Pillow Covers Included
                </span>
              </div>
              <h3 className="font-heading font-bold text-base sm:text-lg text-white mt-1">
                90x100 Inch Ultra Soft Glace Cotton Double Bed Sheets
              </h3>
              <p className="text-xs text-neutral-400 mt-0.5">
                Wrinkle-free finish • Color fast guaranteed • High thread count weave
              </p>
            </div>
          </div>

          <button
            onClick={() => onExploreBedsheets('All')}
            className="w-full md:w-auto px-6 py-3 bg-white hover:bg-neutral-200 text-neutral-950 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 flex-shrink-0 transition-colors"
          >
            <span>Shop Bedsheets @ ₹999</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
