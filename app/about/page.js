export default function About() {
    return (
        <div className="container section-padding pt-32">
            <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-heading mb-8">Our Story</h1>
                <div className="w-24 h-1 bg-gold mx-auto mb-12"></div>

                <div className="prose prose-lg mx-auto text-gray-600 leading-relaxed">
                    <p className="mb-6">
                        Founded with a passion for elegance and authenticity, <strong>SHEWABER</strong> has established itself as the premier destination for luxury perfumes, watches, and accessories in Ethiopia.
                    </p>
                    <p className="mb-6">
                        Our name, <em>Shewaber</em>, reflects our deep roots and commitment to serving our community with products that define class and sophistication. We believe that true luxury is not just about the price tag, but about the feeling of confidence and uniqueness that comes with wearing an original piece.
                    </p>
                    <p className="mb-6">
                        We meticulously source our collection from renowned global markets—bringing you the finest scents from Turkey and France, and precision timepieces that stand the test of time.
                    </p>
                    <p>
                        At SHEWABER, we don't just sell products; we deliver a lifestyle. A lifestyle of distinction, quality, and timeless beauty.
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-6 bg-gray-50">
                        <h3 className="text-xl font-bold mb-2">Authenticity</h3>
                        <p className="text-sm text-gray-500">100% Original Products Guaranteed</p>
                    </div>
                    <div className="p-6 bg-gray-50">
                        <h3 className="text-xl font-bold mb-2">Quality</h3>
                        <p className="text-sm text-gray-500">Handpicked for Excellence</p>
                    </div>
                    <div className="p-6 bg-gray-50">
                        <h3 className="text-xl font-bold mb-2">Service</h3>
                        <p className="text-sm text-gray-500">Dedicated Customer Support</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
