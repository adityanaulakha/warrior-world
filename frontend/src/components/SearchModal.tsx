import React, { useState } from 'react';
import { Search, X, Star } from 'lucide-react';
import { BEST_SELLER_PRODUCTS, FRESH_DEPLOYMENT_PRODUCTS } from '../data/mockData';
import { Product } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (product: Product) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectProduct
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const allProducts = [...BEST_SELLER_PRODUCTS, ...FRESH_DEPLOYMENT_PRODUCTS];
  const results = query.trim()
    ? allProducts.filter((p) =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase()) ||
        (p.unit && p.unit.toLowerCase().includes(query.toLowerCase())) ||
        (p.tag && p.tag.toLowerCase().includes(query.toLowerCase()))
      )
    : allProducts.slice(0, 4);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="relative min-h-screen flex items-start justify-center p-4 sm:p-6 pt-16 sm:pt-24">
        <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden p-6 animate-in fade-in zoom-in-95 duration-150 border border-neutral-100">
          
          {/* Search Input */}
          <div className="flex items-center gap-3 pb-4 border-b border-neutral-100">
            <Search className="w-5 h-5 text-neutral-400" />
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by name, collection, or category..."
              className="flex-1 bg-transparent text-neutral-900 placeholder-neutral-400 text-sm focus:outline-none"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery('')}
                className="p-1 text-neutral-400 hover:text-black"
              >
                <X className="w-4 h-4" />
              </button>
            )}
            <button
              type="button"
              onClick={onClose}
              className="p-1 text-neutral-400 hover:text-black rounded-lg ml-2"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Suggestion Pills */}
          <div className="py-3 flex items-center gap-2 overflow-x-auto no-scrollbar border-b border-neutral-100 text-xs">
            <span className="text-neutral-400 font-medium">Suggestions:</span>
            {['Garuda Commando', 'Shark Tank', '3 for 999', 'Polo', 'Hoodie', 'Cargo'].map((pill) => (
              <button
                key={pill}
                type="button"
                onClick={() => setQuery(pill)}
                className="px-2.5 py-1 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 rounded-full transition-colors whitespace-nowrap"
              >
                {pill}
              </button>
            ))}
          </div>

          {/* Results */}
          <div className="pt-4 max-h-[60vh] overflow-y-auto space-y-2">
            <div className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider mb-2">
              {query ? `Found ${results.length} results` : 'Popular items'}
            </div>

            {results.length === 0 ? (
              <div className="py-10 text-center text-xs text-neutral-500">
                No products found matching "{query}".
              </div>
            ) : (
              results.map((product) => (
                <div
                  key={product.id}
                  onClick={() => {
                    onSelectProduct(product);
                    onClose();
                  }}
                  className="p-3 bg-neutral-50 hover:bg-neutral-100 rounded-xl flex items-center justify-between cursor-pointer group transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-12 h-14 object-cover rounded-lg bg-neutral-200"
                    />
                    <div>
                      <div className="text-xs sm:text-sm font-semibold text-neutral-900 group-hover:text-black leading-tight">
                        {product.name}
                      </div>
                      <div className="flex items-center gap-2 text-[11px] text-neutral-500 mt-0.5">
                        <span className="flex items-center gap-0.5">
                          <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                          {product.rating}
                        </span>
                        <span>•</span>
                        <span>{product.category}</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-sm font-bold text-neutral-900">
                      ₹{product.price}
                    </div>
                    <div className="text-[10px] text-neutral-400 line-through">
                      ₹{product.originalPrice}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

        </div>
      </div>
    </div>
  );
};
