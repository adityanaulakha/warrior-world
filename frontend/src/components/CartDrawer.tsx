import React, { useEffect } from 'react';
import { X, Plus, Minus, ShoppingBag, ArrowRight, Trash2 } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (index: number, qty: number) => void;
  onRemoveItem: (index: number) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const subtotal = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const savings = items.reduce((acc, item) => acc + (item.product.originalPrice - item.product.price) * item.quantity, 0);
  const isEmpty = items.length === 0;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Overlay */}
      <div className="drawer-overlay fade-in" onClick={onClose} />
      
      {/* Drawer */}
      <div className="relative bg-white w-full max-w-[420px] h-full flex flex-col slide-in-right shadow-2xl">
        
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#F0F0F0]">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-gray-800" />
            <span className="font-heading font-bold text-base text-black">My Cart</span>
            {!isEmpty && (
              <span className="badge badge-black text-[10px]">{items.reduce((a, b) => a + b.quantity, 0)}</span>
            )}
          </div>
          <button onClick={onClose} className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors" aria-label="Close cart">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        {isEmpty ? (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
            <ShoppingBag className="w-12 h-12 text-gray-200 mb-4" />
            <p className="font-heading font-bold text-lg text-gray-800">Your cart is empty</p>
            <p className="text-gray-500 text-sm mt-1 mb-6">Add some warrior gear to get started!</p>
            <button onClick={onClose} className="btn-primary text-sm py-3 px-6">
              Continue Shopping <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <>
            {/* Combo reminder */}
            {items.length < 3 && (
              <div className="mx-5 mt-4 p-3 rounded-xl bg-[#FEF9C3] border border-[#FDE68A]">
                <p className="text-sm font-medium text-[#92400E]">
                  🛒 Add {3 - items.length} more T-shirt{items.length < 2 ? 's' : ''} to unlock 3 for ₹999!
                </p>
              </div>
            )}

            <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
              {items.map((item, idx) => (
                <div key={`${item.product.id}-${item.selectedSize}-${item.selectedColor}`} className="flex gap-3">
                  {/* Image */}
                  <div className="w-16 h-20 rounded-lg overflow-hidden bg-[#F5F5F5] flex-shrink-0">
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                      onError={(e) => { (e.target as HTMLImageElement).src = `https://picsum.photos/seed/${item.product.id}/64/80`; }}
                    />
                  </div>
                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 line-clamp-2 leading-snug">{item.product.name}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-[11px] text-gray-500 bg-gray-100 px-2 py-0.5 rounded">{item.selectedSize}</span>
                      <span className="w-3 h-3 rounded-full border border-gray-200" style={{ backgroundColor: item.product.colors.find(c => c.name === item.selectedColor)?.hex || '#666' }} />
                      <span className="text-[11px] text-gray-500">{item.selectedColor}</span>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-1 border border-[#E5E5E5] rounded-lg overflow-hidden">
                        <button onClick={() => onUpdateQuantity(idx, item.quantity - 1)} className="w-7 h-7 flex items-center justify-center hover:bg-gray-50 transition-colors" aria-label="Decrease quantity">
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-6 text-center text-sm font-medium">{item.quantity}</span>
                        <button onClick={() => onUpdateQuantity(idx, item.quantity + 1)} className="w-7 h-7 flex items-center justify-center hover:bg-gray-50 transition-colors" aria-label="Increase quantity">
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-gray-900">₹{item.product.price * item.quantity}</span>
                        <button onClick={() => onRemoveItem(idx)} className="text-gray-300 hover:text-red-400 transition-colors" aria-label="Remove item">
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary & Checkout */}
            <div className="border-t border-[#F0F0F0] px-5 py-5 space-y-3">
              {savings > 0 && (
                <div className="flex justify-between text-sm">
                  <span className="text-green-600 font-medium">🎉 You're saving</span>
                  <span className="text-green-600 font-bold">₹{savings}</span>
                </div>
              )}
              <div className="flex justify-between text-sm text-gray-600">
                <span>Subtotal ({items.reduce((a, b) => a + b.quantity, 0)} items)</span>
                <span className="font-semibold text-black">₹{subtotal}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-500">
                <span>Shipping</span>
                <span className="text-green-600 font-medium">FREE</span>
              </div>
              <button className="w-full btn-primary py-4 text-sm rounded-xl mt-2">
                Checkout — ₹{subtotal} <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-center text-xs text-gray-400">COD · UPI · Cards · EMI available</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
