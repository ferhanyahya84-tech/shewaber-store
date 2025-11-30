import Link from 'next/link';

export default function ProductCard({ product }) {
    return (
        <div className="group relative">
            <div className="aspect-[3/4] w-full overflow-hidden bg-gray-200 relative">
                <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                {product.featured && (
                    <span className="absolute top-4 left-4 bg-gold text-black text-xs font-bold px-2 py-1 uppercase tracking-wider">
                        Featured
                    </span>
                )}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-white/90 backdrop-blur-sm">
                    <button className="w-full bg-black text-white py-2 uppercase text-sm tracking-wider hover:bg-gold hover:text-black transition-colors">
                        Add to Cart
                    </button>
                </div>
            </div>
            <div className="mt-4 flex justify-between">
                <div>
                    <h3 className="text-lg font-medium text-gray-900">
                        <Link href={`/product/${product.id}`}>
                            <span aria-hidden="true" className="absolute inset-0" />
                            {product.name}
                        </Link>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                </div>
                <p className="text-lg font-medium text-gold">ETB {product.price}</p>
            </div>
        </div>
    );
}
