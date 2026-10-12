import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { ProductCard } from './ProductCard';
import { Product } from '../types';
import { BEST_SELLER_PRODUCTS } from '../data/mockData';

interface BestSellersProps {
  wishlistIds: Set<string>;
  onToggleWishlist: (product: Product) => void;
  onQuickAdd: (product: Product, size: 'S' | 'M' | 'L' | 'XL' | 'XXL', color: string) => void;
}

const TABS = ['All Items', 'Shark Tank Picks', 'T-Shirts', 'Polos', 'Winterwear', 'Bottoms'];

export const BestSellers: React.FC<BestSellersProps> = ({
  wishlistIds,
  onToggleWishlist,
  onQuickAdd,
}) => {
  const [activeTab, setActiveTab] = useState('All Items');

  const filtered =
    activeTab === 'All Items'
      ? BEST_SELLER_PRODUCTS
      : activeTab === 'Shark Tank Picks'
      ? BEST_SELLER_PRODUCTS.filter((p) => p.isSharkTank)
      : activeTab === 'Winterwear'
      ? BEST_SELLER_PRODUCTS.filter((p) => p.category === 'Winter')
      : BEST_SELLER_PRODUCTS.filter((p) => p.category === activeTab);

  return (
    <section id="best-sellers-section" className="py-16 sm:py-24 bg-white border-b border-neutral-200/70">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-6 border-b border-neutral-200">
          <div>
            <span className="editorial-eyebrow text-[#C5A059] block mb-2">
              Field-Tested Provenance
            </span>
            <h2 className="editorial-title text-4xl sm:text-5xl lg:text-6xl text-black">
              Most Wanted Drops
            </h2>
          </div>

          <button className="hidden sm:flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-900 hover:text-[#C5A059] transition-colors group">
            <span>Explore All 120+ Products</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Minimalist Editorial Tabs */}
        <div className="flex items-center gap-2 mb-10 overflow-x-auto no-scrollbar border-b border-neutral-200 pb-3">
          {TABS.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-shrink-0 px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                  isActive
                    ? 'bg-black text-white shadow-xs'
                    : 'text-neutral-500 hover:text-black hover:bg-neutral-100'
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-5">
          {filtered.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isWishlisted={wishlistIds.has(product.id)}
              onToggleWishlist={onToggleWishlist}
              onQuickAdd={onQuickAdd}
            />
          ))}
        </div>

        {/* Mobile View All */}
        <div className="mt-10 sm:hidden text-center">
          <button className="w-full py-4 bg-black text-white text-xs font-bold uppercase tracking-wider">
            Explore All 120+ Products
          </button>
        </div>
      </div>
    </section>
  );
};
