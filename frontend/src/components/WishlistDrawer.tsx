import React from 'react';
import { X, Heart, Trash2, ShoppingBag } from 'lucide-react';
import { Product } from '../types';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  wishlistProducts: Product[];
  onRemoveFromWishlist: (product: Product) => void;
  onMoveToCart: (product: Product) => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  onClose,
  wishlistProducts,
  onRemoveFromWishlist,
  onMoveToCart
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-md w-full bg-white shadow-2xl flex flex-col justify-between z-10 animate-in slide-in-from-right duration-250">
        
        {/* Header */}
        <div className="p-5 border-b border-neutral-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-neutral-900" />
            <div>
              <div className="font-heading font-bold text-base text-neutral-900">Your Wishlist</div>
              <div className="text-xs text-neutral-500">
                {wishlistProducts.length} saved {wishlistProducts.length === 1 ? 'item' : 'items'}
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-black rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {wishlistProducts.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-3">
              <Heart className="w-10 h-10 text-neutral-300" />
              <div className="font-heading font-bold text-base text-neutral-900">Your wishlist is empty</div>
              <p className="text-xs text-neutral-500 max-w-xs">
                Click the heart icon on any product card to save your favorites.
              </p>
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2 bg-neutral-900 hover:bg-black text-white rounded-xl text-xs font-semibold"
              >
                Browse Catalog
              </button>
            </div>
          ) : (
            wishlistProducts.map((product) => (
              <div
                key={product.id}
                className="p-3 bg-neutral-50 border border-neutral-200/80 rounded-xl flex gap-3 relative"
              >
                <div className="w-16 h-20 rounded-lg bg-neutral-200 overflow-hidden flex-shrink-0">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1 flex flex-col justify-between">
                  <div className="pr-6">
                    <h4 className="font-heading font-semibold text-xs sm:text-sm text-neutral-900 leading-tight line-clamp-1">
                      {product.name}
                    </h4>
                    <div className="text-[11px] text-neutral-500 mt-0.5">
                      ★ {product.rating} • {product.category}
                    </div>
                    <div className="flex items-baseline gap-2 pt-1">
                      <span className="font-bold text-sm text-neutral-900">₹{product.price}</span>
                      <span className="text-[10px] text-neutral-400 line-through">₹{product.originalPrice}</span>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => onMoveToCart(product)}
                      className="px-3 py-1.5 bg-neutral-900 hover:bg-black text-white rounded-lg text-[11px] font-semibold flex items-center gap-1.5 transition-colors"
                    >
                      <ShoppingBag className="w-3 h-3" />
                      <span>Move to Bag</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => onRemoveFromWishlist(product)}
                      className="p-1 text-neutral-400 hover:text-red-500 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
};
