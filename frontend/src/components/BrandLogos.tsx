import React from 'react';

export const BrandLogos: React.FC = () => {
  return (
    <section className="py-10 bg-neutral-50 border-y border-neutral-200">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-6">
          <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest font-mono">
            Featured In National Media & Backed by Industry Leaders
          </p>
        </div>

        {/* Clean Logo Strip */}
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 lg:gap-16 opacity-85 hover:opacity-100 transition-opacity">
          
          {/* Shark Tank India */}
          <div className="flex items-center gap-3 py-1.5 px-3 bg-white border border-neutral-200">
            <img
              src="/shark-tank-india-logo.png"
              alt="Shark Tank India"
              className="h-6 sm:h-7 w-auto object-contain"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://cdn.shopify.com/s/files/1/0693/7215/0016/files/shark_tank_india_5.png';
              }}
            />
            <div className="text-left">
              <div className="text-[10px] font-black uppercase tracking-wider text-neutral-950">
                Season 5 Deal Winner
              </div>
              <div className="text-[9px] text-neutral-500 font-mono">
                Vineeta Singh Investment
              </div>
            </div>
          </div>

          {/* SonyLIV */}
          <div className="text-neutral-900 font-heading font-black text-xl tracking-tight">
            Sony<span className="text-[#C5A059]">LIV</span>
          </div>

          {/* Economic Times */}
          <div className="font-serif italic font-bold text-base text-neutral-800 tracking-tight">
            The Economic Times
          </div>

          {/* YourStory */}
          <div className="font-heading font-black text-base text-neutral-800 tracking-tight">
            YOUR<span className="text-neutral-500 font-normal">STORY</span>
          </div>

          {/* Inc42 */}
          <div className="font-heading font-black text-lg text-neutral-800 tracking-tight">
            Inc<span className="text-[#C5A059]">42</span>
          </div>

          {/* Startup India */}
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-700">
            #StartupIndia Verified
          </div>

        </div>

      </div>
    </section>
  );
};
