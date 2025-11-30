import Link from 'next/link';

export default function Hero() {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gray-100">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/30 z-10"></div>
                {/* Placeholder for a real luxury image. Using a solid color gradient for now if image fails */}
                <img
                    src="https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=1920&q=80"
                    alt="Luxury Perfume"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="relative z-20 text-center text-white px-4 animate-fade-in">
                <h2 className="text-xl md:text-2xl tracking-[0.2em] mb-4 uppercase text-gold-light">Welcome to Shewaber</h2>
                <h1 className="text-5xl md:text-7xl font-bold mb-8 font-heading">Luxury & Original<br />Style Delivered</h1>
                <Link href="/shop" className="btn-primary bg-white text-black border-white hover:bg-gold hover:border-gold hover:text-black">
                    Shop Now
                </Link>
            </div>
        </section>
    );
}
