import React from 'react';
import { ProductCard } from './ProductCard';
import { SectionHeading } from './SectionHeading';
import { Product } from '../types';
import { FRESH_DEPLOYMENT_FEATURE, FRESH_DEPLOYMENT_PRODUCTS } from '../data/mockData';

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
    <section id="fresh-deployment" className="bc-section bg-white">
      <div className="bc-wrap">
        <SectionHeading
          eyebrow={FRESH_DEPLOYMENT_FEATURE.badge}
          title="Fresh deployment"
          description={FRESH_DEPLOYMENT_FEATURE.tagline}
          action={FRESH_DEPLOYMENT_FEATURE.ctaText}
          onAction={onShopDrop}
        />
        <p className="mb-6 text-[13px] uppercase tracking-[0.14em] text-[#484f56]">
          {FRESH_DEPLOYMENT_FEATURE.stats}
        </p>
        <div className="grid grid-cols-2 gap-x-3 md:grid-cols-4 md:gap-x-5">
          {FRESH_DEPLOYMENT_PRODUCTS.map((product) => (
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
    </section>
  );
};
