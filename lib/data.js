export const categories = [
  { id: 'perfumes', name: 'Perfumes', image: '/images/cat-perfume.jpg' },
  { id: 'watches', name: 'Watches', image: '/images/cat-watch.jpg' },
  { id: 'gift-sets', name: 'Gift Sets', image: '/images/cat-gift.jpg' },
  { id: 'accessories', name: 'Accessories', image: '/images/cat-access.jpg' },
];

export const products = [
  // Perfumes
  {
    id: 'p1',
    name: 'Men Turkey Original',
    category: 'perfumes',
    price: 1200,
    image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=500&q=60',
    description: 'Authentic Turkish fragrance for men with woody notes.',
    featured: true,
  },
  {
    id: 'p2',
    name: 'Ladies Turkey Original',
    category: 'perfumes',
    price: 1350,
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=500&q=60',
    description: 'Elegant floral scent for women.',
    featured: true,
  },
  {
    id: 'p3',
    name: 'Shaik Opulent',
    category: 'perfumes',
    price: 2500,
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=500&q=60',
    description: 'Luxury Arabic perfume with oud and rose.',
    featured: false,
  },
  // Watches
  {
    id: 'w1',
    name: 'Classic Chronograph',
    category: 'watches',
    price: 4500,
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=500&q=60',
    description: 'Stainless steel chronograph watch for men.',
    featured: true,
  },
  {
    id: 'w2',
    name: 'Rose Gold Minimalist',
    category: 'watches',
    price: 3200,
    image: 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=500&q=60',
    description: 'Elegant rose gold watch for ladies.',
    featured: false,
  },
  // Gift Sets
  {
    id: 'g1',
    name: 'His & Hers Set',
    category: 'gift-sets',
    price: 5000,
    image: 'https://images.unsplash.com/photo-1512909006721-3d6018887383?auto=format&fit=crop&w=500&q=60',
    description: 'Perfect gift set containing matching perfumes.',
    featured: true,
  },
];
