import Link from 'next/link';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../lib/data';

export default function Home() {
    const featuredProducts = products.filter(p => p.featured);

    return (
        <>
            <Hero />

            {/* Categories Section */}
            <section className="section-padding container">
                <h2 className="text-3xl font-heading text-center mb-12">Shop by Category</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((cat) => (
                        <Link key={cat.id} href={`/shop?category=${cat.id}`} className="group relative h-80 overflow-hidden block">
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors z-10"></div>
                            {/* Placeholder images if local ones fail */}
                            <img
                                src={cat.image.startsWith('/') ? `https://source.unsplash.com/random/400x600?${cat.name}` : cat.image}
                                alt={cat.name}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 flex items-center justify-center z-20">
                                <h3 className="text-2xl font-bold text-white uppercase tracking-widest border-b-2 border-transparent group-hover:border-gold transition-all pb-2">
                                    {cat.name}
                                </h3>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Featured Products */}
            <section className="section-padding bg-gray-50">
                <div className="container">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="text-3xl font-heading mb-2">Featured Collection</h2>
                            <p className="text-gray-500">Handpicked luxury items just for you.</p>
                        </div>
                        <Link href="/shop" className="text-gold hover:text-black transition-colors font-medium">
                            View All &rarr;
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuredProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Brand Story */}
            <section className="section-padding container">
                <div className="bg-charcoal text-white p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-heading mb-6 text-gold">The SHEWABER Story</h2>
                        <p className="text-lg text-gray-300 leading-relaxed mb-8">
                            "Luxury & Original Style Delivered" is not just our tagline; it's our promise.
                            We bring you the finest authentic perfumes, watches, and accessories from around the globe.
                            Experience the elegance of Turkey, the richness of Arabia, and the precision of modern craftsmanship.
                        </p>
                        <Link href="/about" className="btn-primary bg-gold text-black border-gold hover:bg-white hover:text-black">
                            Read More
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
