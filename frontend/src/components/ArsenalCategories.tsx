import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ArsenalCategoriesProps {
  onSelectCategory: (name: string) => void;
}

const DEPARTMENTS = [
  {
    name: 'T-Shirts',
    subtitle: 'Bio-Washed Combed Cotton 180 GSM',
    count: '240+ Styles',
    code: 'DEP-01',
    img: 'https://warriorworld.in/cdn/shop/files/109-black_789dd3ce-30d0-4080-85f6-3cbd932abbee.jpg?v=1755499634&width=800',
  },
  {
    name: 'Tactical Bottoms',
    subtitle: '6-Pocket Ripstop Cargos & Joggers',
    count: '35+ Styles',
    code: 'DEP-02',
    img: 'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Prime Polos',
    subtitle: '240 GSM Combed Jacquard Pique',
    count: '70+ Styles',
    code: 'DEP-03',
    img: 'https://warriorworld.in/cdn/shop/files/polo.png?v=1776155472&width=800',
  },
  {
    name: 'Heavy Streetwear',
    subtitle: 'Drop Shoulder & Boxy Graphic Drops',
    count: '95+ Styles',
    code: 'DEP-04',
    img: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80',
  },
];

export const ArsenalCategories: React.FC<ArsenalCategoriesProps> = ({ onSelectCategory }) => {
  return (
    <section id="arsenal-section" className="py-16 sm:py-24 bg-white border-b border-neutral-200/70">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-6 border-b border-neutral-200">
          <div>
            <span className="editorial-eyebrow text-[#C5A059] block mb-2">
              Departments & Capsules
            </span>
            <h2 className="editorial-title text-4xl sm:text-5xl lg:text-6xl text-black">
              The Arsenal
            </h2>
          </div>

          <button
            onClick={() => onSelectCategory('All')}
            className="self-start sm:self-auto flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-900 hover:text-[#C5A059] transition-colors group"
          >
            <span>Explore Entire Archive (400+ Styles)</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 4 Full-Height Department Visual Portals */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {DEPARTMENTS.map((dept) => (
            <div
              key={dept.name}
              onClick={() => onSelectCategory(dept.name)}
              className="group relative aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] overflow-hidden bg-neutral-950 cursor-pointer border border-neutral-200 hover:border-black transition-all duration-500"
            >
              {/* Image with smooth zoom */}
              <img
                src={dept.img}
                alt={dept.name}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://picsum.photos/seed/${dept.code}/600/800`;
                }}
              />

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

              {/* Tactical Code Pill */}
              <div className="absolute top-4 left-4 z-10">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#C5A059] bg-black/80 px-2 py-1 border border-white/10 backdrop-blur-xs font-bold">
                  {dept.code}
                </span>
              </div>

              <div className="absolute top-4 right-4 z-10">
                <span className="font-mono text-[10px] text-white/70 bg-black/60 px-2 py-1">
                  {dept.count}
                </span>
              </div>

              {/* Bottom Meta */}
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 z-10">
                <h3 className="editorial-title text-2xl sm:text-3xl text-white group-hover:text-[#C5A059] transition-colors leading-none mb-1">
                  {dept.name}
                </h3>
                <p className="text-neutral-300 text-xs font-normal line-clamp-1 mb-4">
                  {dept.subtitle}
                </p>

                <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white group-hover:translate-x-1 transition-transform">
                  <span>Enter Collection</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C5A059]" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
