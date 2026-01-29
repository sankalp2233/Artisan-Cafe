import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Us - Artisan Cafe | Our Story & Values',
    description: 'Learn about Artisan Cafe\'s journey, our commitment to quality coffee, sustainable practices, and the passionate team behind your favorite neighborhood cafe.',
    keywords: 'about artisan cafe, coffee story, cafe values, sustainable coffee, local cafe team',
};

export default function AboutPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-20">
                {/* Hero Section */}
                <section className="bg-cafe-brown-800 text-white py-20">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="font-display font-bold text-5xl md:text-6xl mb-6">Our Story</h1>
                        <p className="text-xl opacity-90">
                            A journey of passion, quality, and community
                        </p>
                    </div>
                </section>

                {/* Story Section */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="order-2 lg:order-1">
                                <h2 className="font-display font-bold text-4xl mb-6 text-cafe-brown-800">
                                    Where It All Began
                                </h2>
                                <p className="text-lg text-cafe-brown-600 mb-4">
                                    Artisan Cafe was born from a simple dream: to create a space where exceptional coffee meets genuine hospitality. Founded in 2020, we set out to bring the authentic artisan coffee experience to our local community.
                                </p>
                                <p className="text-lg text-cafe-brown-600 mb-4">
                                    What started as a passion project has grown into a beloved neighborhood gathering place. Every day, we're honored to serve our customers not just great coffee and food, but also a warm, welcoming atmosphere where everyone feels at home.
                                </p>
                                <p className="text-lg text-cafe-brown-600">
                                    Our commitment to quality extends beyond our menu. We partner with local suppliers, support sustainable practices, and invest in our community because we believe a cafe should be more than just a business – it should be a positive force in the neighborhood.
                                </p>
                            </div>

                            <div className="order-1 lg:order-2">
                                <img
                                    src="/cafe_ambiance_1769668472178.png"
                                    alt="Cafe Interior"
                                    className="rounded-lg shadow-2xl"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Mission & Values */}
                <section className="py-20 bg-cafe-brown-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="section-title">Our Values</h2>
                            <p className="section-subtitle">
                                The principles that guide everything we do
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="card text-center">
                                <div className="w-16 h-16 bg-cafe-accent rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-3xl">💎</span>
                                </div>
                                <h3 className="font-display font-bold text-xl mb-3 text-cafe-brown-800">Quality First</h3>
                                <p className="text-cafe-brown-600">
                                    We never compromise on the quality of our ingredients or the care we put into every item.
                                </p>
                            </div>

                            <div className="card text-center">
                                <div className="w-16 h-16 bg-cafe-gold rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-3xl">🌱</span>
                                </div>
                                <h3 className="font-display font-bold text-xl mb-3 text-cafe-brown-800">Sustainability</h3>
                                <p className="text-cafe-brown-600">
                                    From ethically sourced coffee to eco-friendly packaging, we care about our planet.
                                </p>
                            </div>

                            <div className="card text-center">
                                <div className="w-16 h-16 bg-cafe-brown-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-3xl">🤝</span>
                                </div>
                                <h3 className="font-display font-bold text-xl mb-3 text-cafe-brown-800">Community</h3>
                                <p className="text-cafe-brown-600">
                                    We're proud to be a gathering place where friendships are made and memories created.
                                </p>
                            </div>

                            <div className="card text-center">
                                <div className="w-16 h-16 bg-cafe-accent rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-3xl">❤️</span>
                                </div>
                                <h3 className="font-display font-bold text-xl mb-3 text-cafe-brown-800">Passion</h3>
                                <p className="text-cafe-brown-600">
                                    Love for what we do shows in every cup, every dish, and every interaction.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="section-title">Meet the Team</h2>
                            <p className="section-subtitle">
                                The passionate people behind your favorite cafe
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                            <div className="text-center">
                                <div className="w-32 h-32 bg-gradient-to-br from-cafe-accent to-cafe-gold rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-5xl">👨‍🍳</span>
                                </div>
                                <h3 className="font-display font-bold text-2xl mb-2 text-cafe-brown-800">Chef Marcus</h3>
                                <p className="text-cafe-accent font-semibold mb-3">Head Chef</p>
                                <p className="text-cafe-brown-600">
                                    With 15 years of culinary experience, Marcus brings creativity and precision to every dish.
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="w-32 h-32 bg-gradient-to-br from-cafe-gold to-cafe-brown-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-5xl">👨‍💼</span>
                                </div>
                                <h3 className="font-display font-bold text-2xl mb-2 text-cafe-brown-800">Sarah Chen</h3>
                                <p className="text-cafe-accent font-semibold mb-3">Owner & Coffee Specialist</p>
                                <p className="text-cafe-brown-600">
                                    Sarah's passion for coffee excellence drives our commitment to serving the best brews.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Visit Us CTA */}
                <section className="py-20 bg-gradient-to-br from-cafe-accent to-cafe-gold text-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">
                            Come Visit Us
                        </h2>
                        <p className="text-xl mb-8 opacity-90">
                            We'd love to welcome you to our cafe and share our passion for great coffee and food.
                        </p>
                        <a href="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-cafe-accent !inline-block">
                            Get in Touch
                        </a>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
