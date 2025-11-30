import Link from 'next/link';
import { products } from '../../../lib/data';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
    return products.map((product) => ({
        id: product.id,
    }));
}

export default function ProductPage({ params }) {
    const product = products.find(p => p.id === params.id);

    if (!product) {
        notFound();
    }

    return (
        <div className="container section-padding pt-32">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Image Gallery */}
                <div className="bg-gray-100 aspect-square relative overflow-hidden">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Product Info */}
                <div className="space-y-6">
                    <span className="text-gray-500 uppercase tracking-widest text-sm">{product.category}</span>
                    <h1 className="text-4xl font-heading">{product.name}</h1>
                    <p className="text-2xl text-gold font-bold">ETB {product.price}</p>

                    <p className="text-gray-600 leading-relaxed">
                        {product.description}
                        <br /><br />
                        Experience the luxury and authenticity of {product.name}.
                        Perfect for any occasion, this item represents the pinnacle of style and quality.
                    </p>

                    <div className="pt-6 border-t border-gray-200">
                        <div className="flex gap-4">
                            <button className="flex-1 btn-primary bg-black text-white hover:bg-gold hover:text-black">
                                Add to Cart
                            </button>
                            <button className="w-12 h-12 border border-gray-300 flex items-center justify-center hover:border-gold hover:text-gold transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
                            </button>
                        </div>

                        <div className="mt-6 space-y-2 text-sm text-gray-500">
                            <div className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
                                <span>Delivery: 2-3 Business Days</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                                <span>100% Authentic Guarantee</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
