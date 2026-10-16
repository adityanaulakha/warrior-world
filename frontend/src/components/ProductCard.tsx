import React, { useState } from 'react';
import { Heart, Check } from 'lucide-react';
import { Product } from '../types';
import { MotionCard } from './motion';

interface ProductCardProps {
  product: Product;
  isWishlisted: boolean;
  onToggleWishlist: (product: Product) => void;
  onQuickAdd: (product: Product, size: 'S' | 'M' | 'L' | 'XL' | 'XXL', color: string) => void;
  delay?: number;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  isWishlisted,
  onToggleWishlist,
  onQuickAdd,
  delay = 0,
}) => {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.name || 'Standard');
  const [addedSize, setAddedSize] = useState<string | null>(null);
  const [activeImage, setActiveImage] = useState(0);
  const [failed, setFailed] = useState<Record<number, boolean>>({});
  const [altReady, setAltReady] = useState(false);

  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
  const imgs = product.images;
  const starPercent = Math.max(0, Math.min(100, (product.rating / 5) * 100));

  const handleSelectSize = (size: 'S' | 'M' | 'L' | 'XL' | 'XXL', e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onQuickAdd(product, size, selectedColor);
    setAddedSize(size);
    window.setTimeout(() => setAddedSize(null), 1400);
  };

  return (
    <MotionCard data-product-card delay={delay} className="group relative mb-5 flex flex-col md:mb-8">
      <div className="relative mb-4 md:mb-[20px] bg-[#eeeeee] overflow-hidden">
        <div
          className="relative block w-full overflow-hidden pt-[125%]"
          onMouseEnter={() => {
            if (imgs.length > 1) setActiveImage(1);
          }}
          onMouseLeave={() => setActiveImage(0)}
        >
          {(() => {
            const showSecond = imgs.length > 1 && altReady && !failed[1] && (activeImage === 1 || Boolean(failed[0]));
            return imgs.map((src, index) => {
              if (failed[index]) return null;
              const visible = index === 0 ? !showSecond : showSecond && index === activeImage;
              return (
                <img
                  key={`${product.id}-${index}`}
                  src={src}
                  alt={index === 0 ? product.name : ''}
                  className={`pc-zoom absolute inset-0 h-full w-full object-cover ${
                    visible ? 'opacity-100' : 'opacity-0'
                  }`}
                  loading={index === 0 ? 'eager' : 'lazy'}
                  onLoad={() => {
                    if (index > 0) setAltReady(true);
                  }}
                  onError={() => setFailed((prev) => ({ ...prev, [index]: true }))}
                />
              );
            });
          })()}
          {failed[0] && !(imgs.length > 1 && altReady && !failed[1]) && (
            <span className="absolute inset-0 flex items-center justify-center bg-[#eeeeee]">
              <img src="/warrior-world-emblem.png" alt="" className="h-14 w-14 object-contain" />
            </span>
          )}
        </div>

        <div className="absolute top-2 left-2 md:top-4 md:left-4 z-10 flex flex-col items-start gap-1.5">
          {discount > 0 && <span className="bc-badge">Save {discount}%</span>}
          {product.isNew && <span className="bc-badge bc-badge-ink">New</span>}
          {product.isSharkTank && !product.isNew && (
            <span className="bc-badge bc-badge-ink">Shark Tank</span>
          )}
        </div>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist(product);
          }}
          className={`absolute top-2 right-2 md:top-4 md:right-4 z-10 flex h-[34px] w-[34px] items-center justify-center rounded-full transition-colors ${
            isWishlisted ? 'bg-[#121212] text-white' : 'bg-white/90 text-[#121212] hover:bg-white'
          }`}
          aria-label={isWishlisted ? `Remove ${product.name} from wishlist` : `Add ${product.name} to wishlist`}
          aria-pressed={isWishlisted}
        >
          <Heart className={`h-4 w-4 ${isWishlisted ? 'fill-current' : ''}`} strokeWidth={1.6} />
        </button>

        <div className="pc-sizes" aria-label={`Choose a size for ${product.name}`}>
          {product.sizes.map((size) => (
            <button
              key={size}
              type="button"
              onClick={(e) => handleSelectSize(size, e)}
              className={`flex h-[30px] min-w-[30px] items-center justify-center border px-1.5 text-xs transition-colors ${
                addedSize === size
                  ? 'border-[#121212] bg-[#121212] text-white'
                  : 'border-[rgba(72,79,86,0.25)] bg-white text-[#121212] hover:border-[#484f56]'
              }`}
              aria-label={`Add size ${size}`}
            >
              {addedSize === size ? <Check className="h-3.5 w-3.5" /> : size}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-1 flex-col">
        <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.1em] text-[#484f56]">
          {product.unit || product.category}
        </p>
        <h3 className="mb-1 text-[15px] font-medium uppercase leading-[1.5] text-[#121212]">
          {product.name}
        </h3>
        <p className="mb-1 text-[15px] font-normal tracking-[0.02em] text-[#cf2929]">
          <span className="sr-only">Sale price</span>
          ₹{product.price}
          {product.originalPrice > product.price && (
            <del className="ml-2.5 opacity-40">
              <span className="sr-only">Original price</span>
              ₹{product.originalPrice}
            </del>
          )}
        </p>
        <div
          className="bc-stars mt-1.5"
          style={{ ['--star-percent' as string]: `${starPercent}%` }}
          role="img"
          aria-label={`${product.rating} out of 5 stars`}
        />

        {product.colors.length > 0 && (
          <div className="relative mt-2.5 h-[18px] overflow-hidden">
            <p className="pc-swatch-label absolute inset-0 text-[13px] leading-[18px] text-[#484f56]/80">
              {selectedColor}
            </p>
            <div className="pc-swatches absolute inset-x-0 top-0 flex">
              {product.colors.slice(0, 5).map((color) => (
                <button
                  key={color.name}
                  type="button"
                  title={color.name}
                  aria-label={color.name}
                  aria-pressed={selectedColor === color.name}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedColor(color.name);
                  }}
                  className={`relative m-0 h-[18px] w-[18px] rounded-full p-[3px] ${
                    selectedColor === color.name ? 'shadow-[inset_0_0_0_1px_#121212]' : ''
                  }`}
                >
                  <span
                    className="absolute inset-[3px] rounded-full"
                    style={{
                      backgroundColor: color.hex,
                      boxShadow: color.hex.toLowerCase() === '#ffffff' ? 'inset 0 0 0 1px #e2e2e2' : undefined,
                    }}
                  />
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="mt-3 flex flex-wrap gap-1 md:hidden">
          {product.sizes.map((size) => (
            <button
              key={`m-${size}`}
              type="button"
              onClick={(e) => handleSelectSize(size, e)}
              className={`h-9 min-w-9 border px-2 text-xs ${
                addedSize === size
                  ? 'border-[#121212] bg-[#121212] text-white'
                  : 'border-[#e2e2e2] text-[#121212]'
              }`}
              aria-label={`Add size ${size}`}
            >
              {addedSize === size ? 'Added' : size}
            </button>
          ))}
        </div>
      </div>
    </MotionCard>
  );
};
