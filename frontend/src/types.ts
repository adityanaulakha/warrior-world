export interface Product {
  id: string;
  name: string;
  category: 'T-Shirts' | 'Polos' | 'Winter' | 'Bottoms';
  price: number;
  originalPrice: number;
  rating: number;
  reviewsCount?: number;
  images: [string, string]; // Primary and hover image
  colors: { name: string; hex: string }[];
  isSharkTank?: boolean;
  isBestSeller?: boolean;
  isNew?: boolean;
  sizes: ('S' | 'M' | 'L' | 'XL' | 'XXL')[];
  tag?: string;
  description?: string;
  unit?: string;
}

export interface CartItem {
  product: Product;
  selectedSize: 'S' | 'M' | 'L' | 'XL' | 'XXL';
  selectedColor: string;
  quantity: number;
}

export interface CategoryTile {
  name: string;
  itemCount: number;
  image: string;
  badge?: string;
}

export interface CollectionTile {
  id: string;
  title: string;
  badge: string;
  tagline: string;
  image: string;
  size: 'large' | 'medium' | 'tall';
}

export interface PressItem {
  outlet: string;
  headline: string;
  date: string;
  linkText: string;
}

export interface CommunityReel {
  id: string;
  username: string;
  caption: string;
  views: string;
  image: string;
  productName: string;
}
