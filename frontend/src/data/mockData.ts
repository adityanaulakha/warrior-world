import { Product, CategoryTile, CollectionTile, PressItem, CommunityReel } from '../types';

export const BEST_SELLER_PRODUCTS: Product[] = [
  {
    id: 'prod-garuda-commando',
    name: 'The Garuda Commando Cotton T-shirt',
    category: 'T-Shirts',
    price: 399,
    originalPrice: 599,
    rating: 4.9,
    reviewsCount: 3840,
    isSharkTank: true,
    isBestSeller: true,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    tag: 'Shark Tank S5',
    unit: 'Special Forces Division',
    description: '100% Bio-washed Cotton, 180 GSM. High-density pigment print. Wash-tested 50+ times with zero bleed.',
    images: [
      'https://warriorworld.in/cdn/shop/files/109-black_789dd3ce-30d0-4080-85f6-3cbd932abbee.jpg?v=1755499634&width=1000',
      'https://warriorworld.in/cdn/shop/files/109-white_1087d819-2924-4fe9-9a3e-06285f824969.jpg?v=1755499634&width=1000'
    ],
    colors: [
      { name: 'Black', hex: '#111111' },
      { name: 'Olive Green', hex: '#3B442B' },
      { name: 'Navy Blue', hex: '#1B263B' },
      { name: 'Royal Blue', hex: '#2E4057' },
      { name: 'White', hex: '#FFFFFF' }
    ]
  },
  {
    id: 'prod-land-warfare',
    name: 'Land Warfare Army Cotton T-shirt',
    category: 'T-Shirts',
    price: 399,
    originalPrice: 599,
    rating: 4.8,
    reviewsCount: 2940,
    isSharkTank: true,
    isBestSeller: true,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    tag: 'Shark Tank S5',
    unit: 'Indian Army Regiment',
    description: 'Frontline combat typography on 100% combed cotton. Featured in the Shark Tank Season 5 pitch.',
    images: [
      'https://cdn.shopify.com/s/files/1/0693/7215/0016/files/170_green_ea8ea9cf-4ae6-411a-a0e2-53771f614e71.jpg?v=1755499474',
      'https://warriorworld.in/cdn/shop/files/109-green_c102bb94-bd4f-4d0e-9c91-aceedc2c9929.jpg?v=1755499634&width=1000'
    ],
    colors: [
      { name: 'Olive Green', hex: '#3B442B' },
      { name: 'Black', hex: '#111111' },
      { name: 'Navy Blue', hex: '#1B263B' }
    ]
  },
  {
    id: 'prod-garud-force',
    name: 'The Garud Commando Force Soft Cotton T-shirt',
    category: 'T-Shirts',
    price: 399,
    originalPrice: 599,
    rating: 4.9,
    reviewsCount: 3120,
    isSharkTank: true,
    isBestSeller: true,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    tag: 'Shark Tank S5',
    unit: 'Garud Commando Squadron',
    description: 'Indian Air Force Garud emblem on premium combed jersey. Direct-to-Film high definition print.',
    images: [
      'https://cdn.shopify.com/s/files/1/0693/7215/0016/files/145-navy-blue_f1312148-0ec9-47fd-9e59-f79f71789614.jpg?v=1755499449',
      'https://warriorworld.in/cdn/shop/files/109-blue_e41dc366-1149-4f72-9a63-33c40287535c.jpg?v=1755499634&width=1000'
    ],
    colors: [
      { name: 'Navy Blue', hex: '#1B263B' },
      { name: 'Black', hex: '#111111' },
      { name: 'White', hex: '#FFFFFF' }
    ]
  },
  {
    id: 'prod-fearless-army',
    name: 'The Fearless Army Cotton T-shirt',
    category: 'T-Shirts',
    price: 399,
    originalPrice: 599,
    rating: 4.9,
    reviewsCount: 2280,
    isSharkTank: true,
    isBestSeller: true,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    tag: 'Shark Tank S5',
    unit: 'Frontline Infantry',
    description: 'Audacious army graphic tee as worn by founders during Shark Tank India Season 5 Episode 29.',
    images: [
      'https://cdn.shopify.com/s/files/1/0693/7215/0016/files/108-black_ce7cd308-ca17-4e85-bd73-19a9187cc1b8.jpg?v=1755499637',
      'https://warriorworld.in/cdn/shop/files/109-black_789dd3ce-30d0-4080-85f6-3cbd932abbee.jpg?v=1755499634&width=1000'
    ],
    colors: [
      { name: 'Black', hex: '#111111' },
      { name: 'Olive Green', hex: '#3B442B' },
      { name: 'White', hex: '#FFFFFF' }
    ]
  },
  {
    id: 'prod-break-the-rules',
    name: 'Break The Rules Soft Cotton T-shirt',
    category: 'T-Shirts',
    price: 399,
    originalPrice: 599,
    rating: 4.8,
    reviewsCount: 1870,
    isSharkTank: true,
    isBestSeller: true,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    tag: 'Shark Tank S5',
    unit: 'Street Combat',
    description: 'Rebel streetwear aesthetic. 100% bio-washed cotton, lightweight, breathable and shrink-resistant.',
    images: [
      'https://cdn.shopify.com/s/files/1/0693/7215/0016/files/189-black_8b48445c-a431-4b6a-bde5-1b3670445368.jpg?v=1755499398',
      'https://cdn.shopify.com/s/files/1/0693/7215/0016/files/162-black_3aed7d1f-ab08-48c4-b546-d3226ff65422.jpg?v=1755499513'
    ],
    colors: [
      { name: 'Black', hex: '#111111' },
      { name: 'Navy Blue', hex: '#1B263B' }
    ]
  },
  {
    id: 'prod-ladakh-scouts',
    name: 'Ladakh Scouts Vintage Soft Cotton T-shirt',
    category: 'T-Shirts',
    price: 399,
    originalPrice: 599,
    rating: 4.9,
    reviewsCount: 1650,
    isSharkTank: true,
    isBestSeller: true,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    tag: 'Shark Tank S5',
    unit: 'High Altitude Warfare',
    description: 'Tribute to Snow Warriors of Ladakh Scouts. 180 GSM ring-spun cotton with vintage wash.',
    images: [
      'https://cdn.shopify.com/s/files/1/0693/7215/0016/files/954-BLACK.jpg?v=1791271717',
      'https://cdn.shopify.com/s/files/1/0693/7215/0016/files/940-white.jpg?v=1791268934'
    ],
    colors: [
      { name: 'Black', hex: '#111111' },
      { name: 'White', hex: '#FFFFFF' }
    ]
  },
  {
    id: 'prod-marcos-special',
    name: 'MARCOS Special Forces Soft Cotton T-shirt',
    category: 'T-Shirts',
    price: 399,
    originalPrice: 599,
    rating: 4.9,
    reviewsCount: 2150,
    isSharkTank: true,
    isBestSeller: true,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    tag: 'Navy Seals',
    unit: 'Marine Commandos',
    description: 'Elite Indian Navy MARCOS unit insignia printed on breathable organic combed cotton.',
    images: [
      'https://cdn.shopify.com/s/files/1/0693/7215/0016/files/940-white.jpg?v=1791268934',
      'https://cdn.shopify.com/s/files/1/0693/7215/0016/files/941-black.jpg?v=1791268389'
    ],
    colors: [
      { name: 'White', hex: '#FFFFFF' },
      { name: 'Black', hex: '#111111' },
      { name: 'Navy', hex: '#1B263B' }
    ]
  },
  {
    id: 'prod-designer-pattern',
    name: 'Warrior World Designer Pattern Cotton T-shirt',
    category: 'T-Shirts',
    price: 399,
    originalPrice: 599,
    rating: 4.7,
    reviewsCount: 1450,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    tag: 'Original Art',
    unit: 'Urban Modern',
    description: 'Subtle topographic line artwork intersected by clean tactical grids.',
    images: [
      'https://cdn.shopify.com/s/files/1/0693/7215/0016/files/944-BLACK.jpg?v=1791270786',
      'https://cdn.shopify.com/s/files/1/0693/7215/0016/files/946-BLACK.jpg?v=1791270354'
    ],
    colors: [
      { name: 'Black', hex: '#111111' },
      { name: 'Olive', hex: '#3C4729' },
      { name: 'White', hex: '#FFFFFF' }
    ]
  },
  {
    id: 'prod-break-rules',
    name: 'Break The Rules Soft Cotton T-shirt',
    category: 'T-Shirts',
    price: 399,
    originalPrice: 599,
    rating: 4.8,
    reviewsCount: 1690,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    tag: 'Rebel Fit',
    unit: 'Youth Collective',
    description: 'Distressed streetwear typography made from high-density bio-washed combed cotton.',
    images: [
      'https://cdn.shopify.com/s/files/1/0693/7215/0016/files/943-BLACK.jpg?v=1791267799',
      'https://cdn.shopify.com/s/files/1/0693/7215/0016/files/942-black.jpg?v=1791268040'
    ],
    colors: [
      { name: 'Black', hex: '#111111' },
      { name: 'Charcoal', hex: '#333333' }
    ]
  },
  {
    id: 'prod-fearless-army-regimental',
    name: 'The Fearless Army Cotton T-shirt',
    category: 'T-Shirts',
    price: 399,
    originalPrice: 599,
    rating: 4.8,
    reviewsCount: 1820,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    tag: 'National Pride',
    unit: 'Regimental Valor',
    description: 'Dedicated to the armed forces of India. Fade-proof eco pigment screen printing.',
    images: [
      'https://cdn.shopify.com/s/files/1/0693/7215/0016/files/949-green_65d6eeb8-45b4-41a9-9012-361badd24ec7.jpg?v=1791265112',
      'https://cdn.shopify.com/s/files/1/0693/7215/0016/files/948-white.jpg?v=1791265484'
    ],
    colors: [
      { name: 'Army Olive', hex: '#3B442B' },
      { name: 'White', hex: '#FFFFFF' },
      { name: 'Black', hex: '#111111' }
    ]
  },
  {
    id: 'prod-classic-polo',
    name: 'Classic Plain Polo Collar T-Shirt',
    category: 'Polos',
    price: 599,
    originalPrice: 899,
    rating: 4.9,
    reviewsCount: 2210,
    isBestSeller: true,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    tag: 'Polo Deals: 2 @ ₹999 | 3 @ ₹1349',
    unit: 'Classic Officer Collar',
    description: 'Heavyweight 240 GSM pique knit polo with anti-roll ribbed collar and subtle metal buttons.',
    images: [
      'https://warriorworld.in/cdn/shop/files/polo.png?v=1776155472&width=1000',
      'https://warriorworld.in/cdn/shop/files/Military-Polo_jpg.jpg?v=1791274244&width=1000'
    ],
    colors: [
      { name: 'Black', hex: '#151515' },
      { name: 'Olive Green', hex: '#3E492B' },
      { name: 'Navy Blue', hex: '#1A2740' },
      { name: 'White', hex: '#FFFFFF' }
    ]
  },
  {
    id: 'prod-07-stealth-hoodie',
    name: '07 Stealth Classic Hoodie',
    category: 'Winter',
    price: 799,
    originalPrice: 999,
    rating: 4.9,
    reviewsCount: 1420,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    tag: 'Winter Collection',
    unit: 'Heavyweight 340 GSM',
    description: '340 GSM fleece-backed thermal hoodie with kangaroo pocket and double-lined hood.',
    images: [
      'https://warriorworld.in/cdn/shop/files/Artboard_1_copy_2.png?v=1776060965&width=1000',
      'https://warriorworld.in/cdn/shop/files/Artboard_1_copy_6.png?v=1776155551&width=1000'
    ],
    colors: [
      { name: 'Black', hex: '#121212' },
      { name: 'Olive', hex: '#353D25' },
      { name: 'Navy', hex: '#1A2535' }
    ]
  },
  {
    id: 'prod-07-stealth-sweatshirt',
    name: '07 Stealth Operative Soft Cotton Sweatshirt',
    category: 'Winter',
    price: 699,
    originalPrice: 899,
    rating: 4.8,
    reviewsCount: 1110,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    tag: 'Fleece Sweatshirt',
    unit: 'Winter Ops',
    description: 'Brushed cotton exterior with warm French terry fleece interior for all-weather comfort.',
    images: [
      'https://warriorworld.in/cdn/shop/files/Artboard_1_copy_6.png?v=1776155551&width=1000',
      'https://warriorworld.in/cdn/shop/files/Artboard_1_copy_5_2.png?v=1776078716&width=1000'
    ],
    colors: [
      { name: 'Olive', hex: '#384226' },
      { name: 'Black', hex: '#141414' },
      { name: 'Navy', hex: '#1A2535' }
    ]
  }
];

export const FRESH_DEPLOYMENT_FEATURE = {
  id: 'fresh-feature',
  title: 'Siachen Glacier Expedition Drop',
  badge: 'New Launch • March 2026',
  tagline: 'Authentic regimental badges hand-drawn by veteran artists, screen-printed on heavy duty combed jersey.',
  ctaText: 'Shop the Drop',
  image: 'https://cdn.shopify.com/s/files/1/0693/7215/0016/files/954-BLACK.jpg?v=1791271717',
  stats: 'Limited Batch: 2,500 Units'
};

export const FRESH_DEPLOYMENT_PRODUCTS: Product[] = [
  {
    id: 'prod-ladakh-scouts',
    name: 'Ladakh Scouts Vintage Soft Cotton T-shirt',
    category: 'T-Shirts',
    price: 399,
    originalPrice: 599,
    rating: 4.9,
    reviewsCount: 420,
    isNew: true,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    tag: 'New Launch',
    unit: 'Ladakh Scouts Regiment',
    description: '100% Cotton, 180 GSM. Round neck, classic fit. Dedicated to the Snow Warriors of Ladakh.',
    images: [
      'https://cdn.shopify.com/s/files/1/0693/7215/0016/files/954-BLACK.jpg?v=1791271717',
      'https://cdn.shopify.com/s/files/1/0693/7215/0016/files/955-black.jpg?v=1791262903'
    ],
    colors: [
      { name: 'Black', hex: '#121212' },
      { name: 'Beige', hex: '#D8D1BD' }
    ]
  },
  {
    id: 'prod-om-mani-padme-hum',
    name: 'Om Mani Padme Hum Soft Cotton T-shirt',
    category: 'T-Shirts',
    price: 399,
    originalPrice: 599,
    rating: 4.8,
    reviewsCount: 310,
    isNew: true,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    tag: 'Spiritual Warrior',
    unit: 'Himalayan Frontier',
    description: 'Sacred Sanskrit warrior scripture artwork with weathered distressed aesthetic.',
    images: [
      'https://cdn.shopify.com/s/files/1/0693/7215/0016/files/960-BLACK.jpg?v=1791260951',
      'https://cdn.shopify.com/s/files/1/0693/7215/0016/files/958-BEIGE.jpg?v=1791261473'
    ],
    colors: [
      { name: 'Black', hex: '#111111' },
      { name: 'Beige', hex: '#D8D1BD' }
    ]
  },
  {
    id: 'prod-silk-route-explorer',
    name: 'Silk Route Explorer Soft Cotton T-shirt',
    category: 'T-Shirts',
    price: 399,
    originalPrice: 599,
    rating: 4.7,
    reviewsCount: 280,
    isNew: true,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    tag: 'Adventure Series',
    unit: 'Expedition Recon',
    description: 'Cartographic topographic elevation coordinates spanning the Karakoram mountain range.',
    images: [
      'https://cdn.shopify.com/s/files/1/0693/7215/0016/files/959-WHITE.jpg?v=1791261276',
      'https://cdn.shopify.com/s/files/1/0693/7215/0016/files/956-WHITE.jpg?v=1791262012'
    ],
    colors: [
      { name: 'White', hex: '#FFFFFF' },
      { name: 'Black', hex: '#111111' }
    ]
  },
  {
    id: 'prod-nasa-moon-break',
    name: 'NASA Moon Break Soft Cotton T-shirt',
    category: 'T-Shirts',
    price: 399,
    originalPrice: 599,
    rating: 4.9,
    reviewsCount: 512,
    isNew: true,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    tag: 'Aerospace Drop',
    unit: 'Aerospace Ops',
    description: 'High-contrast lunar exploration vector art with subtle sleeve detailing.',
    images: [
      'https://cdn.shopify.com/s/files/1/0693/7215/0016/files/957-BLACK.jpg?v=1791261766',
      'https://cdn.shopify.com/s/files/1/0693/7215/0016/files/945-white.jpg?v=1791267267'
    ],
    colors: [
      { name: 'Black', hex: '#111111' },
      { name: 'White', hex: '#FFFFFF' }
    ]
  }
];

export const ARSENAL_CATEGORIES: CategoryTile[] = [
  {
    name: 'Crew neck',
    itemCount: 142,
    badge: 'Popular',
    image: 'https://warriorworld.in/cdn/shop/files/019_-_10_April_Warrior_World_web_1200px_2.png?v=1775818065&width=800'
  },
  {
    name: 'Prime Polo',
    itemCount: 32,
    badge: 'Heavyweight',
    image: 'https://warriorworld.in/cdn/shop/files/Artboard_1_copy_4_1.png?v=1776075440&width=800'
  },
  {
    name: 'Polo',
    itemCount: 64,
    badge: 'Classic',
    image: 'https://warriorworld.in/cdn/shop/files/polo.png?v=1776155472&width=800'
  },
  {
    name: 'Oversized',
    itemCount: 88,
    badge: 'Street Fit',
    image: 'https://warriorworld.in/cdn/shop/files/Artboard_1_copy_5_1.png?v=1776066528&width=800'
  },
  {
    name: 'Shirts',
    itemCount: 45,
    badge: 'Utility',
    image: 'https://warriorworld.in/cdn/shop/files/f-M_1_._f0428482-235d-4ae5-a371-248b8ef379a2.jpg?v=1782822288&width=800'
  },
  {
    name: 'BOTTOM WEAR',
    itemCount: 56,
    badge: 'Multi-pocket',
    image: 'https://warriorworld.in/cdn/shop/files/resized_770x1024_sagegreen.jpg?v=1782822191&width=800'
  },
  {
    name: 'PICK ANY COMBO',
    itemCount: 95,
    badge: '3 for ₹999',
    image: 'https://warriorworld.in/cdn/shop/files/ChatGPT_Image_Sep_28_2026_03_42_52_PM.png?v=1790590417&width=800'
  },
  {
    name: 'full sleeve',
    itemCount: 78,
    badge: 'Comfort',
    image: 'https://warriorworld.in/cdn/shop/files/Artboard_1_copy_5_2.png?v=1776078716&width=800'
  },
  {
    name: 'Sweatshirt',
    itemCount: 36,
    badge: 'Fleece',
    image: 'https://warriorworld.in/cdn/shop/files/Artboard_1_copy_6.png?v=1776155551&width=800'
  },
  {
    name: 'Hoodies',
    itemCount: 41,
    badge: '340 GSM',
    image: 'https://warriorworld.in/cdn/shop/files/Artboard_1_copy_2.png?v=1776060965&width=800'
  },
  {
    name: 'Socks',
    itemCount: 24,
    badge: 'Cushioned',
    image: 'https://warriorworld.in/cdn/shop/files/Socks.png?v=1776155472&width=800'
  }
];

export const BENTO_COLLECTIONS: CollectionTile[] = [
  {
    id: 'col-military',
    title: 'Military Collection',
    badge: 'Army Heritage',
    tagline: 'Standard issue tributes to infantry regiments, armored squadrons & frontline troops.',
    image: 'https://warriorworld.in/cdn/shop/files/Military-Polo_jpg.jpg?v=1791274244&width=1200',
    size: 'large'
  },
  {
    id: 'col-patriotic',
    title: 'Patriotic Collection',
    badge: 'National Pride',
    tagline: 'Subtle tricolor micro-accents and emblem graphics rooted in Indian heritage.',
    image: 'https://warriorworld.in/cdn/shop/files/Patriotic_jpg.jpg?v=1791274244&width=800',
    size: 'medium'
  },
  {
    id: 'col-travel',
    title: 'Travel & Adventures',
    badge: 'Outdoor Recon',
    tagline: 'Engineered for mountain treks, rough trails, and outdoor explorers.',
    image: 'https://warriorworld.in/cdn/shop/files/Travel_jpg.jpg?v=1791274243&width=800',
    size: 'medium'
  },
  {
    id: 'col-wildlife',
    title: 'Wildlife Collection',
    badge: 'Territory Patrol',
    tagline: 'Tigers of Ranthambore, Himalayan leopards and untamed predatory power.',
    image: 'https://warriorworld.in/cdn/shop/files/06_jpg.jpg?v=1791285982&width=800',
    size: 'medium'
  },
  {
    id: 'col-everyday',
    title: 'Everyday Essentials',
    badge: 'Urban Street',
    tagline: 'Minimalist street-ready silhouettes designed to transition seamlessly from desk to gym.',
    image: 'https://warriorworld.in/cdn/shop/files/Everyday_Round_neck_shirt_jpg.jpg?v=1791274244&width=800',
    size: 'medium'
  }
];

export const SECONDARY_COLLECTION_STRIP = [
  { name: 'Air Force', code: 'IAF-90', icon: '✈️' },
  { name: 'Navy', code: 'INS-SEA', icon: '⚓' },
  { name: 'Commando', code: 'CMD-SPEC', icon: '⚡' },
  { name: 'Gym / Iron', code: 'REP-MAX', icon: '🏋️' },
  { name: 'Sports', code: 'ATH-FIT', icon: '🎯' },
  { name: 'Operation', code: 'BLACK-OPS', icon: '🛡️' }
];

export const SHARK_TANK_PRESS: PressItem[] = [
  {
    outlet: 'The Crazy Careers',
    headline: 'How WarriorWorld scaled an army-inspired apparel revolution to Shark Tank India S5',
    date: 'OCT 2025',
    linkText: 'Read Feature'
  },
  {
    outlet: 'D2C Insider Pulse',
    headline: 'Behind Vineeta Singh’s ₹75 Lakh investment in WarriorWorld’s tough streetwear model',
    date: 'NOV 2025',
    linkText: 'Read Analysis'
  },
  {
    outlet: 'CEOVine',
    headline: 'Uday Patel and the co-founders on cracking 50+ wash durability with direct-to-consumer pricing',
    date: 'DEC 2025',
    linkText: 'Read Interview'
  },
  {
    outlet: 'VieStories',
    headline: 'From Gujarat grassroots to nationwide closets: the 5 Lakh customer milestone',
    date: 'JAN 2026',
    linkText: 'Read Story'
  },
  {
    outlet: 'Dealroom',
    headline: 'WarriorWorld valuation snapshot and post-Shark Tank supply chain expansion metrics',
    date: 'FEB 2026',
    linkText: 'View Metrics'
  },
  {
    outlet: 'Shark Tank Audits',
    headline: 'Why Vineeta Singh went all-in on WarriorWorld: Margins, repeat orders, and brand loyalty',
    date: 'MAR 2026',
    linkText: 'Read Breakdown'
  },
  {
    outlet: 'Infashion Business',
    headline: 'Can patriotism drive sustainable fashion? WarriorWorld’s unique market wedge',
    date: 'MAR 2026',
    linkText: 'Read Report'
  },
  {
    outlet: 'Snapdeal Blog',
    headline: 'Spotlight on Indian apparel innovators blending military discipline with youth streetwear',
    date: 'APR 2026',
    linkText: 'Read Article'
  }
];

export const COMMUNITY_REELS: CommunityReel[] = [
  {
    id: 'reel-1',
    username: '@warriorworldstore',
    caption: 'Long sleeves. Clean style. Sharp looks. All-day comfort. Wear Warrior World T-shirts.',
    views: '124K',
    image: 'https://cdn.shopify.com/s/files/1/0693/7215/0016/files/image-1775310006577.jpg?v=1775310008',
    productName: 'Full Sleeve Tee'
  },
  {
    id: 'reel-2',
    username: '@warriorworldstore',
    caption: '⭐️ Warrior World New Drops 🤺 Designed for everyday wear. Inspired by patriotism. 3 at ₹999/-',
    views: '89K',
    image: 'https://cdn.shopify.com/s/files/1/0693/7215/0016/files/image-1775310006574.jpg?v=1775310008',
    productName: 'Garuda Commando Tee'
  },
  {
    id: 'reel-3',
    username: '@warriorworldstore',
    caption: '🔥 Wear the Indian Patriots Collection — Available Now! 🇮🇳 Army, Navy & Air Force.',
    views: '210K',
    image: 'https://cdn.shopify.com/s/files/1/0693/7215/0016/files/image-1775310066521.jpg?v=1775310068',
    productName: 'Patriots Special Edition'
  },
  {
    id: 'reel-4',
    username: '@warriorworldstore',
    caption: '100% Cotton, 180 GSM bio-washed. Guaranteed color fastness.',
    views: '345K',
    image: 'https://cdn.shopify.com/s/files/1/0693/7215/0016/files/954-BLACK.jpg?v=1791271717',
    productName: 'Ladakh Scouts Tee'
  },
  {
    id: 'reel-5',
    username: '@warriorworldstore',
    caption: 'Buy Any 3 for ₹999 | Buy Any 5 for ₹1499. Big savings combos!',
    views: '98K',
    image: 'https://warriorworld.in/cdn/shop/files/ChatGPT_Image_Sep_28_2026_03_42_52_PM.png?v=1790590417&width=600',
    productName: 'Combo Pack'
  },
  {
    id: 'reel-6',
    username: '@warriorworldstore',
    caption: 'Officer mess vibe. The Prime Polo collar stays sharp after every wash.',
    views: '175K',
    image: 'https://warriorworld.in/cdn/shop/files/Artboard_1_copy_4_1.png?v=1776075440&width=600',
    productName: 'Prime Polo Shirt'
  }
];

export const BEDSHEET_CHIPS = [
  { name: 'Army', tag: 'Double Bedsheet', image: 'https://cdn.shopify.com/s/files/1/0693/7215/0016/files/army.png' },
  { name: 'AirForce', tag: 'Double Bedsheet', image: 'https://cdn.shopify.com/s/files/1/0693/7215/0016/files/airforce.png' },
  { name: 'Navy', tag: 'Double Bedsheet', image: 'https://cdn.shopify.com/s/files/1/0693/7215/0016/files/navy_jpg.png' },
  { name: 'WildLife', tag: 'Double Bedsheet', image: 'https://cdn.shopify.com/s/files/1/0693/7215/0016/files/wildlife_jpg.png' },
  { name: 'Travel', tag: 'Double Bedsheet', image: 'https://cdn.shopify.com/s/files/1/0693/7215/0016/files/travel_jpg.png' },
  { name: 'Everyday', tag: 'Double Bedsheet', image: 'https://cdn.shopify.com/s/files/1/0693/7215/0016/files/everyday.jpg_1.png' },
  { name: 'Patroit', tag: 'Double Bedsheet', image: 'https://cdn.shopify.com/s/files/1/0693/7215/0016/files/patriot_jpg.png' },
  { name: 'Commando', tag: 'Double Bedsheet', image: 'https://cdn.shopify.com/s/files/1/0693/7215/0016/files/commando_jpg.png' },
  { name: 'GYM', tag: 'Double Bedsheet', image: 'https://cdn.shopify.com/s/files/1/0693/7215/0016/files/gym_jpg.png' },
  { name: 'Sports', tag: 'Double Bedsheet', image: 'https://cdn.shopify.com/s/files/1/0693/7215/0016/files/sports_jpg.png' },
  { name: 'Operation', tag: 'Double Bedsheet', image: 'https://cdn.shopify.com/s/files/1/0693/7215/0016/files/operation_jpg.png' }
];

export const RATING_BREAKDOWN = [
  { category: 'Fabric Quality (100% Combed Cotton)', score: 4.8, max: 5.0, votes: '4.8L+ Ratings' },
  { category: 'Comfort & Classic Fit', score: 4.9, max: 5.0, votes: '4.9L+ Ratings' },
  { category: 'Stitching Strength & Seams', score: 4.8, max: 5.0, votes: '4.7L+ Ratings' },
  { category: 'Print Durability (50+ Industrial Washes)', score: 4.6, max: 5.0, votes: '4.6L+ Ratings' },
  { category: 'Value For Money (Combo Pricing)', score: 4.6, max: 5.0, votes: '4.9L+ Ratings' }
];

export const BRAND_PARTNERS = [
  { name: 'ARMED FORCES ATHLETICS', code: 'AFA-01' },
  { name: 'TACTICAL BHARAT CORPS', code: 'TBC-99' },
  { name: 'HIGH ALTITUDE RECON', code: 'HAR-44' },
  { name: 'SURVIVAL GEAR LABS', code: 'SGL-12' },
  { name: 'URBAN COMBAT STREET', code: 'UCS-77' },
  { name: 'OUTDOOR EXPLORER CO.', code: 'OEC-88' },
  { name: 'SPECIAL UNITS FOUNDATION', code: 'SUF-05' }
];
