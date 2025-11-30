export default function Footer() {
    return (
        <footer className="bg-charcoal text-white pt-16 pb-8">
            <div className="container grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                <div>
                    <h3 className="text-2xl font-heading mb-6 text-gold">SHEWABER</h3>
                    <p className="text-gray-400 leading-relaxed">
                        Luxury & Original Style Delivered. We provide authentic perfumes, watches, and accessories.
                    </p>
                </div>

                <div>
                    <h4 className="text-lg font-bold mb-6 uppercase tracking-wider">Shop</h4>
                    <ul className="space-y-3 text-gray-400">
                        <li><a href="/shop?category=perfumes" className="hover:text-gold">Perfumes</a></li>
                        <li><a href="/shop?category=watches" className="hover:text-gold">Watches</a></li>
                        <li><a href="/shop?category=gift-sets" className="hover:text-gold">Gift Sets</a></li>
                        <li><a href="/shop?category=accessories" className="hover:text-gold">Accessories</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-lg font-bold mb-6 uppercase tracking-wider">Support</h4>
                    <ul className="space-y-3 text-gray-400">
                        <li><a href="/contact" className="hover:text-gold">Contact Us</a></li>
                        <li><a href="/faq" className="hover:text-gold">FAQ</a></li>
                        <li><a href="/shipping" className="hover:text-gold">Shipping & Returns</a></li>
                        <li><a href="/privacy" className="hover:text-gold">Privacy Policy</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-lg font-bold mb-6 uppercase tracking-wider">Contact</h4>
                    <ul className="space-y-3 text-gray-400">
                        <li>Addis Ababa, Ethiopia</li>
                        <li>+251 911 234 567</li>
                        <li>info@shewaber.com</li>
                    </ul>
                </div>
            </div>

            <div className="container border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
                <p>&copy; {new Date().getFullYear()} SHEWABER. All rights reserved.</p>
            </div>
        </footer>
    );
}
