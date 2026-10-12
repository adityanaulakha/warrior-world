import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ChooseYourUnitProps {
  onSelectCollection: (title: string) => void;
}

const COLLECTIONS = [
  {
    id: 'military',
    name: 'Indian Army Infantry',
    tagline: 'Frontline heritage & combat durability',
    img: 'https://warriorworld.in/cdn/shop/files/109-green_c102bb94-bd4f-4d0e-9c91-aceedc2c9929.jpg?v=1755499634&width=800',
    count: '95 Styles',
    code: 'INF-01',
  },
  {
    id: 'airforce',
    name: 'Air Force & Garud',
    tagline: 'Touch the sky with glory • Aerodynamic graphics',
    img: 'https://warriorworld.in/cdn/shop/files/109-blue_e41dc366-1149-4f72-9a63-33c40287535c.jpg?v=1755499634&width=800',
    count: '60 Styles',
    code: 'IAF-02',
  },
  {
    id: 'navy',
    name: 'Navy & MARCOS Commando',
    tagline: 'Deep sea maritime defense & elite tactical insignia',
    img: 'https://warriorworld.in/cdn/shop/files/109-navy-blue_546decaa-3a97-40fb-a70d-ae70b10905e3.jpg?v=1755499635&width=800',
    count: '48 Styles',
    code: 'MAR-03',
  },
  {
    id: 'patriotic',
    name: 'Tiranga Patriotic Series',
    tagline: 'Subtle national accents & sacred saffron-white-green motifs',
    img: 'https://images.unsplash.com/photo-1556821840-3a63f15732ce?auto=format&fit=crop&w=800&q=80',
    count: '42 Styles',
    code: 'PAT-04',
  },
];

export const ChooseYourUnit: React.FC<ChooseYourUnitProps> = ({ onSelectCollection }) => {
  return (
    <section id="collections-bento" className="py-16 sm:py-24 bg-[#0A0A0A] text-white border-y border-neutral-900">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-6 border-b border-neutral-850">
          <div>
            <span className="editorial-eyebrow text-[#C5A059] block mb-2">
              Regimental Armed Forces Archive
            </span>
            <h2 className="editorial-title text-4xl sm:text-5xl lg:text-6xl text-white">
              Choose Your Unit
            </h2>
          </div>

          <button
            onClick={() => onSelectCollection('All Collections')}
            className="self-start sm:self-auto flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-300 hover:text-white transition-colors group"
          >
            <span>View All Armed Units</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Clean Editorial Unit Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {COLLECTIONS.map((col) => (
            <div
              key={col.id}
              onClick={() => onSelectCollection(col.name)}
              className="group relative bg-neutral-950 border border-neutral-850 hover:border-[#C5A059] transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              {/* Image Container */}
              <div className="relative aspect-[3/4] overflow-hidden bg-neutral-900">
                <img
                  src={col.img}
                  alt={col.name}
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://picsum.photos/seed/${col.id}/600/750`;
                  }}
                />
                
                {/* Tactical Code Tag */}
                <div className="absolute top-3 left-3 bg-black/90 border border-neutral-800 px-2.5 py-1 text-[10px] font-mono font-bold tracking-widest text-[#C5A059]">
                  {col.code}
                </div>

                <div className="absolute top-3 right-3 bg-black/90 border border-neutral-800 px-2 py-1 text-[10px] font-mono text-neutral-400">
                  {col.count}
                </div>
              </div>

              {/* Card Meta */}
              <div className="p-5 border-t border-neutral-850 bg-neutral-950 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="editorial-title text-2xl text-white group-hover:text-[#C5A059] transition-colors leading-tight">
                    {col.name}
                  </h3>
                  <p className="text-xs text-neutral-400 mt-1 leading-relaxed line-clamp-2 font-normal">
                    {col.tagline}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-neutral-900 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-neutral-400 group-hover:text-white transition-colors">
                  <span>Enter Archive</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
