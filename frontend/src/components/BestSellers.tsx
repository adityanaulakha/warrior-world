import React, { useState } from 'react';
import { ProductCard } from './ProductCard';
import { SectionHeading } from './SectionHeading';
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
  const [showAll, setShowAll] = useState(false);

  const filtered =
    activeTab === 'All Items'
      ? BEST_SELLER_PRODUCTS
      : activeTab === 'Shark Tank Picks'
      ? BEST_SELLER_PRODUCTS.filter((p) => p.isSharkTank)
      : activeTab === 'Winterwear'
      ? BEST_SELLER_PRODUCTS.filter((p) => p.category === 'Winter')
      : BEST_SELLER_PRODUCTS.filter((p) => p.category === activeTab);

  const visible = showAll ? filtered : filtered.slice(0, 8);

  return (
    <section id="best-sellers-section" className="bc-section bg-white">
      <div className="bc-wrap">
        <SectionHeading
          eyebrow="Field-tested provenance"
          title="Most wanted"
          description="180 GSM bio-washed combed cotton, flat ₹399, and the prints that made the Shark Tank pitch."
          action={showAll ? 'Show less' : 'Shop all'}
          onAction={() => setShowAll((open) => !open)}
        />

        <div className="mb-6 flex gap-5 overflow-x-auto no-scrollbar border-b border-[#E2E2E2]" role="tablist" aria-label="Filter most wanted">
          {TABS.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => {
                  setActiveTab(tab);
                  setShowAll(false);
                }}
                className={`shrink-0 border-b-2 pb-3 text-[15px] transition-colors ${
                  isActive ? 'border-[#121212] font-medium text-[#121212]' : 'border-transparent text-[#484f56] hover:text-[#121212]'
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {visible.length === 0 ? (
          <div className="py-10 text-center">
            <p className="text-[15px] text-[#484f56]">Combat bottoms are in the fieldwear edit.</p>
            <button
              type="button"
              className="bc-text-link mt-4"
              onClick={() => document.getElementById('tactical-bottoms')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Shop tactical bottoms
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-x-3 md:grid-cols-4 md:gap-x-5">
            {visible.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                isWishlisted={wishlistIds.has(product.id)}
                onToggleWishlist={onToggleWishlist}
                onQuickAdd={onQuickAdd}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
