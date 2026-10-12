import React, { useState, useEffect } from 'react';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ArsenalCategories } from './components/ArsenalCategories';
import { ChooseYourUnit } from './components/ChooseYourUnit';
import { ComboBanner } from './components/ComboBanner';
import { BestSellers } from './components/BestSellers';
import { SharkTankSpotlight } from './components/SharkTankSpotlight';
import { WhyWarriorWorld } from './components/WhyWarriorWorld';
import { FreshDeployment } from './components/FreshDeployment';
import { TacticalCombatBottoms } from './components/TacticalCombatBottoms';
import { BrandLogos } from './components/BrandLogos';
import { AppDownloadStrip } from './components/AppDownloadStrip';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { WishlistDrawer } from './components/WishlistDrawer';
import { SearchModal } from './components/SearchModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

import { Product, CartItem } from './types';
import { BEST_SELLER_PRODUCTS, FRESH_DEPLOYMENT_PRODUCTS } from './data/mockData';
import { Check, Sparkles } from 'lucide-react';

export function App() {
  // Local interactive state
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      product: BEST_SELLER_PRODUCTS[0], // Garuda Commando Cotton T-shirt
      selectedSize: 'L',
      selectedColor: 'Black',
      quantity: 1,
    },
    {
      product: BEST_SELLER_PRODUCTS[1], // Land Warfare Army Cotton T-shirt
      selectedSize: 'L',
      selectedColor: 'Olive',
      quantity: 1,
    }
  ]);

  const [wishlistIds, setWishlistIds] = useState<Set<string>>(
    new Set([BEST_SELLER_PRODUCTS[0].id, BEST_SELLER_PRODUCTS[2].id])
  );

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  };

  // Add product to cart with chosen size & color
  const handleQuickAdd = (
    product: Product,
    size: 'S' | 'M' | 'L' | 'XL' | 'XXL',
    color: string
  ) => {
    setCartItems((prev) => {
      const existingIndex = prev.findIndex(
        (item) =>
          item.product.id === product.id &&
          item.selectedSize === size &&
          item.selectedColor === color
      );

      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex].quantity += 1;
        return next;
      } else {
        return [
          ...prev,
          {
            product,
            selectedSize: size,
            selectedColor: color,
            quantity: 1,
          },
        ];
      }
    });

    showToast(`Added ${product.name} (${size}) to Arsenal Cart!`);
  };

  const handleUpdateQuantity = (index: number, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveItem(index);
      return;
    }
    setCartItems((prev) => {
      const next = [...prev];
      next[index].quantity = newQty;
      return next;
    });
  };

  const handleRemoveItem = (index: number) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
    showToast('Removed item from Arsenal Cart');
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  // Wishlist toggle
  const handleToggleWishlist = (product: Product) => {
    setWishlistIds((prev) => {
      const next = new Set(prev);
      if (next.has(product.id)) {
        next.delete(product.id);
        showToast(`Removed ${product.name} from Wishlist`);
      } else {
        next.add(product.id);
        showToast(`Added ${product.name} to Tactical Wishlist`);
      }
      return next;
    });
  };

  const handleRemoveFromWishlist = (product: Product) => {
    setWishlistIds((prev) => {
      const next = new Set(prev);
      next.delete(product.id);
      return next;
    });
  };

  const handleMoveToCart = (product: Product) => {
    handleQuickAdd(product, 'L', product.colors[0]?.name || 'Standard');
    handleRemoveFromWishlist(product);
  };

  // Build combo action
  const handleBuildCombo = (targetTierCount: number) => {
    // Populate cart with top items to fulfill combo requirement
    const sampleTees = [
      BEST_SELLER_PRODUCTS[0],
      BEST_SELLER_PRODUCTS[1],
      BEST_SELLER_PRODUCTS[2],
      BEST_SELLER_PRODUCTS[3],
      BEST_SELLER_PRODUCTS[4]
    ];

    const newComboItems: CartItem[] = [];
    for (let i = 0; i < targetTierCount; i++) {
      const product = sampleTees[i % sampleTees.length];
      newComboItems.push({
        product,
        selectedSize: 'L',
        selectedColor: product.colors[0]?.name || 'Standard',
        quantity: 1
      });
    }

    setCartItems(newComboItems);
    setIsCartOpen(true);
    showToast(`Assembled ${targetTierCount}-Tee Combo! Total savings applied.`);
  };

  // Smooth scroll helper
  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const wishlistProducts = [
    ...BEST_SELLER_PRODUCTS,
    ...FRESH_DEPLOYMENT_PRODUCTS
  ].filter((p) => wishlistIds.has(p.id));

  return (
    <div className="min-h-screen bg-white text-neutral-900 flex flex-col font-sans selection:bg-neutral-900 selection:text-white">
      
      {/* 1. TOP ANNOUNCEMENT BAR */}
      <AnnouncementBar />

      {/* 2. STICKY CONDENSING HEADER */}
      <Header
        cartCount={totalCartCount}
        wishlistCount={wishlistIds.size}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onSelectCategory={(category) => {
          if (category === 'Bottoms' || category === 'Cargo Pants' || category === 'Combat Bottoms') {
            scrollToSection('tactical-bottoms');
          } else if (category === 'Military') {
            scrollToSection('collections-bento');
          } else if (category === 'Shark Tank Special' || category.includes('Shark Tank')) {
            scrollToSection('shark-tank');
          } else if (category === 'Combos') {
            scrollToSection('combos-section');
          } else if (category === 'New Arrivals') {
            scrollToSection('fresh-deployment');
          } else {
            scrollToSection('best-sellers-section');
          }
        }}
      />

      {/* 3. HERO (Full viewport, 5 slides, stats chips) */}
      <Hero
        onShopNewArrivals={() => scrollToSection('fresh-deployment')}
        onShopCombos={() => scrollToSection('combos-section')}
      />

      {/* 4. AS SEEN ON SHARK TANK INDIA S5 — OFFICIAL EDITORIAL SPREAD */}
      <SharkTankSpotlight
        onShopSharkApproved={() => {
          scrollToSection('best-sellers-section');
          showToast('Showing Shark Tank S5 Range');
        }}
        onQuickAdd={handleQuickAdd}
      />

      {/* 5. SHOP BY CATEGORY — "THE ARSENAL" */}
      <ArsenalCategories
        onSelectCategory={(name) => {
          showToast(`Filtered category: ${name}`);
          if (name === 'Cargo Pants' || name === 'Bottoms' || name === 'Tactical Bottoms') {
            scrollToSection('tactical-bottoms');
          } else {
            scrollToSection('best-sellers-section');
          }
        }}
      />

      {/* 6. COMBO DEAL BANNER — "BUY MORE, SAVE MORE (3 @ ₹999)" */}
      <ComboBanner onBuildCombo={handleBuildCombo} />

      {/* 7. BEST SELLERS — "MOST WANTED DROPS" */}
      <BestSellers
        wishlistIds={wishlistIds}
        onToggleWishlist={handleToggleWishlist}
        onQuickAdd={handleQuickAdd}
      />

      {/* 8. SHOP BY COLLECTION — "CHOOSE YOUR UNIT" */}
      <ChooseYourUnit
        onSelectCollection={(title) => {
          showToast(`Inspecting collection: ${title}`);
          scrollToSection('best-sellers-section');
        }}
      />

      {/* 9. TACTICAL COMBAT BOTTOMS CAPSULE */}
      <TacticalCombatBottoms
        onExploreBottoms={(style) => {
          showToast(`Selected ${style} Combat Pants!`);
          scrollToSection('best-sellers-section');
        }}
      />

      {/* 10. NEW IN / LATEST COLLECTION — "FRESH DEPLOYMENT" */}
      <FreshDeployment
        wishlistIds={wishlistIds}
        onToggleWishlist={handleToggleWishlist}
        onQuickAdd={handleQuickAdd}
        onShopDrop={() => {
          showToast('Exploring Siachen Glacier Drop');
          scrollToSection('best-sellers-section');
        }}
      />

      {/* 11. WHY WARRIORWORLD — "THE STANDARD" */}
      <WhyWarriorWorld />

      {/* 13. TRUSTED BY / BRAND LOGOS */}
      <BrandLogos />

      {/* 14. APP DOWNLOAD STRIP */}
      <AppDownloadStrip />

      {/* 16. FOOTER */}
      <Footer onOpenSearch={() => setIsSearchOpen(true)} />

      {/* FLOATING WHATSAPP BUTTON (Bottom Right) */}
      <FloatingWhatsApp />

      {/* CART DRAWER (Slides from Right) */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* WISHLIST DRAWER (Slides from Right) */}
      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistProducts={wishlistProducts}
        onRemoveFromWishlist={handleRemoveFromWishlist}
        onMoveToCart={handleMoveToCart}
      />

      {/* TACTICAL SEARCH MODAL */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={(p) => {
          showToast(`Selected ${p.name}`);
          scrollToSection('best-sellers-section');
        }}
      />

      {/* TOAST NOTIFICATION BADGE */}
      {toastMessage && (
        <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 px-4 py-2.5 bg-neutral-900 text-white rounded-full shadow-2xl flex items-center gap-2 text-xs font-medium animate-in fade-in slide-in-from-bottom-2 duration-200">
          <Sparkles className="w-3.5 h-3.5 text-white" />
          <span>{toastMessage}</span>
        </div>
      )}

    </div>
  );
}

export default App;
