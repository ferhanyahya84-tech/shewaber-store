export default function Contact() {
    return (
        <div className="container section-padding pt-32">
            <h1 className="text-4xl font-heading text-center mb-12">Contact Us</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                {/* Contact Info */}
                <div className="bg-gray-50 p-8 md:p-12">
                    <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                        Have a question about our products or need assistance with your order?
                        Our luxury concierge team is here to help.
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-gold/20 flex items-center justify-center text-gold rounded-full shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                            </div>
                            <div>
                                <h4 className="font-bold">Phone</h4>
                                <p className="text-gray-600">+251 911 234 567</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-gold/20 flex items-center justify-center text-gold rounded-full shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                            </div>
                            <div>
                                <h4 className="font-bold">Email</h4>
                                <p className="text-gray-600">info@shewaber.com</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-gold/20 flex items-center justify-center text-gold rounded-full shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                            </div>
                            <div>
                                <h4 className="font-bold">Location</h4>
                                <p className="text-gray-600">Addis Ababa, Ethiopia</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Form */}
                <div>
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                            <input type="text" id="name" className="w-full p-3 border border-gray-300 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors" placeholder="Your Name" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input type="email" id="email" className="w-full p-3 border border-gray-300 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors" placeholder="your@email.com" />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                            <textarea id="message" rows="4" className="w-full p-3 border border-gray-300 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors" placeholder="How can we help you?"></textarea>
                        </div>
                        <button type="submit" className="w-full btn-primary bg-black text-white hover:bg-gold hover:text-black">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
