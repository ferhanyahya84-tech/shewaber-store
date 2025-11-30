import Link from 'next/link';

export default function Cart() {
    return (
        <div className="container section-padding pt-32">
            <h1 className="text-4xl font-heading text-center mb-12">Your Shopping Cart</h1>

            <div className="max-w-4xl mx-auto bg-white p-8 shadow-sm border border-gray-100">
                <div className="text-center py-12">
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="mx-auto text-gray-300 mb-6"><circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" /><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" /></svg>
                    <p className="text-xl text-gray-500 mb-8">Your cart is currently empty.</p>
                    <Link href="/shop" className="btn-primary bg-black text-white hover:bg-gold hover:text-black inline-block">
                        Continue Shopping
                    </Link>
                </div>
            </div>
        </div>
    );
}
