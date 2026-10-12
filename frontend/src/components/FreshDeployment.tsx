import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ProductCard } from './ProductCard';
import { Product } from '../types';
import { FRESH_DEPLOYMENT_PRODUCTS, FRESH_DEPLOYMENT_FEATURE } from '../data/mockData';

interface FreshDeploymentProps {
  wishlistIds: Set<string>;
  onToggleWishlist: (product: Product) => void;
  onQuickAdd: (product: Product, size: 'S' | 'M' | 'L' | 'XL' | 'XXL', color: string) => void;
  onShopDrop: () => void;
}

export const FreshDeployment: React.FC<FreshDeploymentProps> = ({
  wishlistIds,
  onToggleWishlist,
  onQuickAdd,
  onShopDrop,
}) => {
  return (
    <section id="fresh-deployment" className="py-16 sm:py-24 bg-white border-t border-neutral-150">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-6 border-b border-neutral-200">
          <div>
            <span className="editorial-eyebrow text-[#C5A059] block mb-2">
              Latest Archive Release • Siachen Drop
            </span>
            <h2 className="editorial-title text-4xl sm:text-5xl lg:text-6xl text-black">
              Fresh Deployments
            </h2>
          </div>

          <button
            onClick={onShopDrop}
            className="self-start sm:self-auto flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-900 hover:text-[#C5A059] transition-colors group"
          >
            <span>View All New Releases</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Full-width Promotional Banner */}
        <div
          onClick={onShopDrop}
          className="mb-10 border border-neutral-200 overflow-hidden group cursor-pointer bg-neutral-100"
        >
          <img
            src="/banners/new-arrivals-collection.png"
            alt="Warrior World New Arrivals Collection - Prime Polo, Linen Shirt, Cargo Pants"
            className="w-full h-auto object-cover group-hover:scale-[1.01] transition-transform duration-500"
          />
        </div>

        {/* Feature Hero + Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
          
          {/* Editorial Spotlight Card */}
          <div
            className="lg:col-span-2 group relative overflow-hidden bg-neutral-950 text-white cursor-pointer flex flex-col justify-end p-6 sm:p-8 border border-neutral-800"
            onClick={onShopDrop}
            style={{ minHeight: '440px' }}
          >
            <img
              src={FRESH_DEPLOYMENT_FEATURE.image}
              alt={FRESH_DEPLOYMENT_FEATURE.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-80 group-hover:opacity-90"
              loading="lazy"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://picsum.photos/seed/freshfeature/600/800';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            
            <div className="relative z-10">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#C5A059] bg-black/80 px-2 py-1 inline-block mb-3 border border-white/10">
                {FRESH_DEPLOYMENT_FEATURE.badge}
              </span>
              <h3 className="editorial-title text-3xl sm:text-4xl text-white tracking-tight leading-none mb-2">
                {FRESH_DEPLOYMENT_FEATURE.title}
              </h3>
              <p className="text-neutral-300 text-xs sm:text-sm mb-6 line-clamp-2 leading-relaxed font-normal">
                {FRESH_DEPLOYMENT_FEATURE.tagline}
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-white/20">
                <span className="text-white/60 text-xs font-mono">{FRESH_DEPLOYMENT_FEATURE.stats}</span>
                <span className="text-xs font-bold uppercase tracking-wider text-white group-hover:text-[#C5A059] flex items-center gap-1 transition-colors">
                  {FRESH_DEPLOYMENT_FEATURE.ctaText} <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>

          {/* Product Cards Grid */}
          <div className="lg:col-span-3 grid grid-cols-2 gap-4">
            {FRESH_DEPLOYMENT_PRODUCTS.slice(0, 4).map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                isWishlisted={wishlistIds.has(product.id)}
                onToggleWishlist={onToggleWishlist}
                onQuickAdd={onQuickAdd}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
