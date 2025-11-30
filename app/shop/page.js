"use client";
import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import ProductCard from '../../components/ProductCard';
import { products, categories } from '../../lib/data';

function ShopContent() {
    const searchParams = useSearchParams();
    const categoryParam = searchParams.get('category');

    const [selectedCategory, setSelectedCategory] = useState(categoryParam || 'all');
    const [priceRange, setPriceRange] = useState(10000);

    const filteredProducts = products.filter(product => {
        const matchCategory = selectedCategory === 'all' || product.category === selectedCategory;
        const matchPrice = product.price <= priceRange;
        return matchCategory && matchPrice;
    });

    return (
        <div className="flex flex-col md:flex-row gap-12">
            {/* Sidebar */}
            <aside className="w-full md:w-1/4 space-y-8">
                <div>
                    <h3 className="text-xl font-bold mb-4 border-b border-gray-200 pb-2">Categories</h3>
                    <ul className="space-y-2">
                        <li>
                            <button
                                onClick={() => setSelectedCategory('all')}
                                className={`text-left w-full hover:text-gold ${selectedCategory === 'all' ? 'text-gold font-bold' : 'text-gray-600'}`}
                            >
                                All Categories
                            </button>
                        </li>
                        {categories.map(cat => (
                            <li key={cat.id}>
                                <button
                                    onClick={() => setSelectedCategory(cat.id)}
                                    className={`text-left w-full hover:text-gold ${selectedCategory === cat.id ? 'text-gold font-bold' : 'text-gray-600'}`}
                                >
                                    {cat.name}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h3 className="text-xl font-bold mb-4 border-b border-gray-200 pb-2">Price Filter</h3>
                    <input
                        type="range"
                        min="0"
                        max="10000"
                        value={priceRange}
                        onChange={(e) => setPriceRange(Number(e.target.value))}
                        className="w-full accent-gold"
                    />
                    <div className="flex justify-between text-sm text-gray-600 mt-2">
                        <span>0 ETB</span>
                        <span>{priceRange} ETB</span>
                    </div>
                </div>
            </aside>

            {/* Product Grid */}
            <div className="w-full md:w-3/4">
                <div className="mb-6 text-gray-500">
                    Showing {filteredProducts.length} results
                </div>

                {filteredProducts.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 text-gray-500">
                        No products found matching your criteria.
                    </div>
                )}
            </div>
        </div>
    );
}

export default function Shop() {
    return (
        <div className="container section-padding pt-32">
            <h1 className="text-4xl font-heading text-center mb-12">Shop Collection</h1>
            <Suspense fallback={<div className="text-center">Loading...</div>}>
                <ShopContent />
            </Suspense>
        </div>
    );
}
