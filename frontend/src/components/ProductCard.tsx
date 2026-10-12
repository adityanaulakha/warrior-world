import React, { useState } from 'react';
import { Heart, Star, Check } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  isWishlisted: boolean;
  onToggleWishlist: (product: Product) => void;
  onQuickAdd: (product: Product, size: 'S' | 'M' | 'L' | 'XL' | 'XXL', color: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  isWishlisted,
  onToggleWishlist,
  onQuickAdd,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.name || 'Standard');
  const [addedSize, setAddedSize] = useState<string | null>(null);

  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
  const imgs = product.images;
  const primaryImg = imgs[0];
  const secondaryImg = imgs.length > 1 ? imgs[1] : imgs[0];

  const handleSelectSize = (size: 'S' | 'M' | 'L' | 'XL' | 'XXL', e: React.MouseEvent) => {
    e.stopPropagation();
    onQuickAdd(product, size, selectedColor);
    setAddedSize(size);
    setTimeout(() => setAddedSize(null), 1500);
  };

  return (
    <div
      className="group relative flex flex-col bg-[#FAFAF8] overflow-hidden cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] bg-[#F0EDE6] overflow-hidden select-none">
        {/* Primary Image */}
        <img
          src={primaryImg}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isHovered && imgs.length > 1 ? 'opacity-0 scale-[1.02]' : 'opacity-100 scale-100'
          }`}
          loading="lazy"
          onError={(e) => {
            (e.target as HTMLImageElement).src = `https://picsum.photos/seed/${product.id}/400/533`;
          }}
        />

        {/* Secondary Hover Image */}
        {imgs.length > 1 && (
          <img
            src={secondaryImg}
            alt={`${product.name} alternate`}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              isHovered ? 'opacity-100 scale-[1.02]' : 'opacity-0 scale-100'
            }`}
            loading="lazy"
          />
        )}

        {/* Top-left Badges */}
        <div className="absolute top-2.5 left-2.5 z-10 flex flex-col gap-1 items-start">
          {product.isSharkTank && (
            <span className="px-2 py-[2px] bg-[#D4A843] text-[#050505] text-[9px] font-bold uppercase tracking-[0.08em]">
              Shark Tank S5
            </span>
          )}

          {product.isBestSeller && !product.isSharkTank && (
            <span className="px-2 py-[2px] bg-[#050505] text-[#FAFAF8] text-[9px] font-semibold uppercase tracking-[0.06em]">
              Bestseller
            </span>
          )}

          {discount > 0 && (
            <span className="px-1.5 py-[2px] bg-[#050505]/70 backdrop-blur-sm text-[#C4B08C] text-[9px] font-semibold">
              {discount}% Off
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist(product);
          }}
          className={`absolute top-2.5 right-2.5 z-10 w-8 h-8 flex items-center justify-center transition-all duration-200 ${
            isWishlisted
              ? 'bg-[#050505] text-white'
              : 'bg-white/80 backdrop-blur-sm text-[#6B6B64] hover:text-[#050505] hover:bg-white'
          }`}
          aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <Heart className={`w-[14px] h-[14px] ${isWishlisted ? 'fill-current' : ''}`} strokeWidth={1.5} />
        </button>

        {/* Quick-Add Size Tray */}
        <div className="absolute inset-x-0 bottom-0 z-20 p-2.5 bg-gradient-to-t from-[#050505]/80 via-[#050505]/50 to-transparent translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]">
          <div className="text-[9px] font-semibold text-white/70 uppercase tracking-[0.12em] mb-1.5 text-center">
            Quick Add
          </div>
          <div className="flex items-center justify-center gap-1">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={(e) => handleSelectSize(size as 'S' | 'M' | 'L' | 'XL' | 'XXL', e)}
                className={`flex-1 py-1.5 text-[10px] font-semibold uppercase transition-all ${
                  addedSize === size
                    ? 'bg-[#4A5535] text-white'
                    : 'bg-white/90 hover:bg-[#D4A843] text-[#050505] active:scale-95'
                }`}
              >
                {addedSize === size ? <Check className="w-3 h-3 mx-auto" strokeWidth={2} /> : size}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Product Info */}
      <div className="py-3 px-1 flex flex-col flex-1 justify-between gap-1.5">
        <div>
          {/* Unit / Category */}
          <div className="flex items-center justify-between text-[10px] text-[#A3A39C] mb-0.5">
            <span className="uppercase tracking-[0.1em] line-clamp-1">{product.unit || product.category}</span>
            <div className="flex items-center gap-0.5 text-[#C4B08C] font-medium">
              <Star className="w-[10px] h-[10px] fill-current" />
              <span>{product.rating}</span>
            </div>
          </div>

          {/* Name */}
          <h3 className="text-[12px] sm:text-[13px] font-medium text-[#050505] leading-snug line-clamp-1">
            {product.name}
          </h3>
        </div>

        {/* Color Swatches & Price */}
        <div className="flex items-center justify-between mt-auto pt-1.5 border-t border-[#E8E8E3]">
          {/* Colors */}
          <div className="flex items-center gap-1">
            {product.colors.slice(0, 4).map((c) => (
              <button
                key={c.name}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedColor(c.name);
                }}
                title={c.name}
                className={`w-3 h-3 rounded-full transition-all ${
                  selectedColor === c.name
                    ? 'ring-1 ring-[#050505] ring-offset-1 scale-110'
                    : 'hover:scale-110'
                }`}
                style={{
                  backgroundColor: c.hex,
                  border: c.hex.toLowerCase() === '#ffffff' ? '1px solid #E8E8E3' : '1px solid transparent',
                }}
              />
            ))}
            {product.colors.length > 4 && (
              <span className="text-[9px] text-[#A3A39C] font-medium ml-0.5">+{product.colors.length - 4}</span>
            )}
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-1.5">
            <span className="font-heading font-bold text-[13px] sm:text-[14px] text-[#050505]">
              ₹{product.price}
            </span>
            <span className="text-[10px] text-[#A3A39C] line-through">
              ₹{product.originalPrice}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
