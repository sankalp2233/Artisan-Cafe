import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function HomePage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-20">
                {/* Hero Section */}
                <section
                    className="relative h-[600px] bg-cover bg-center"
                    style={{
                        backgroundImage: 'url(/cafe_hero_image_1769668420348.png)',
                    }}
                >
                    <div className="absolute inset-0 bg-black/40" />
                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
                        <div className="text-white max-w-2xl animate-slide-up">
                            <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl mb-6">
                                Welcome to <span className="text-cafe-gold">Artisan Cafe</span>
                            </h1>
                            <p className="text-xl md:text-2xl mb-8 text-gray-200">
                                Where every cup tells a story, and every bite is a masterpiece.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link href="/menu" className="btn-primary">
                                    View Menu
                                </Link>
                                <Link href="/contact#reservation" className="btn-outline border-white text-white hover:bg-white hover:text-cafe-brown-800">
                                    Make a Reservation
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Welcome Section */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="section-title">Crafted with Passion</h2>
                            <p className="section-subtitle">
                                Experience the perfect blend of premium coffee, artisan food, and warm hospitality in the heart of your neighborhood.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                            <div className="text-center p-6 group">
                                <div className="w-20 h-20 bg-cafe-accent rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <span className="text-4xl">☕</span>
                                </div>
                                <h3 className="font-display font-bold text-2xl mb-3 text-cafe-brown-800">Premium Coffee</h3>
                                <p className="text-cafe-brown-600">
                                    Ethically sourced beans, expertly roasted, and skillfully brewed to perfection every time.
                                </p>
                            </div>

                            <div className="text-center p-6 group">
                                <div className="w-20 h-20 bg-cafe-gold rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <span className="text-4xl">🍰</span>
                                </div>
                                <h3 className="font-display font-bold text-2xl mb-3 text-cafe-brown-800">Fresh Pastries</h3>
                                <p className="text-cafe-brown-600">
                                    Daily baked goods made with love and the finest ingredients from local suppliers.
                                </p>
                            </div>

                            <div className="text-center p-6 group">
                                <div className="w-20 h-20 bg-cafe-brown-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <span className="text-4xl">🏡</span>
                                </div>
                                <h3 className="font-display font-bold text-2xl mb-3 text-cafe-brown-800">Cozy Atmosphere</h3>
                                <p className="text-cafe-brown-600">
                                    A welcoming space designed for work, relaxation, or meaningful conversations with friends.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Featured Section */}
                <section className="py-20 bg-cafe-brown-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="animate-slide-up">
                                <h2 className="font-display font-bold text-4xl mb-6 text-cafe-brown-800">
                                    Your Daily Escape
                                </h2>
                                <p className="text-lg text-cafe-brown-600 mb-6">
                                    More than just a cafe, Artisan Cafe is a sanctuary where the aroma of freshly ground coffee mingles with the warmth of friendly smiles. Every detail, from our carefully curated menu to our thoughtfully designed space, is crafted to make your visit memorable.
                                </p>
                                <p className="text-lg text-cafe-brown-600 mb-8">
                                    Whether you're starting your day with an espresso, enjoying a leisurely lunch, or unwinding with a dessert, we're here to make every moment special.
                                </p>
                                <Link href="/about" className="btn-primary">
                                    Our Story
                                </Link>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <img
                                    src="/coffee_art_latte_1769668436677.png"
                                    alt="Latte Art"
                                    className="rounded-lg shadow-lg h-64 w-full object-cover"
                                />
                                <img
                                    src="/fresh_pastries_1769668452469.png"
                                    alt="Fresh Pastries"
                                    className="rounded-lg shadow-lg h-64 w-full object-cover mt-8"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 bg-gradient-to-br from-cafe-accent to-cafe-gold text-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">
                            Ready to Experience the Difference?
                        </h2>
                        <p className="text-xl mb-8 opacity-90">
                            Join us for an unforgettable dining experience. Reserve your table today!
                        </p>
                        <Link href="/contact#reservation" className="btn-outline border-white text-white hover:bg-white hover:text-cafe-accent !inline-block">
                            Book Your Table
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
