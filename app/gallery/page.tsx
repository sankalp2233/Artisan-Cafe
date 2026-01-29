import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Gallery - Artisan Cafe | Interior & Atmosphere Photos',
    description: 'Browse photos of Artisan Cafe\'s cozy interior, delicious coffee creations, fresh pastries, and inviting atmosphere. See why customers love our cafe.',
    keywords: 'cafe gallery, coffee shop photos, cafe interior, artisan coffee images, cozy cafe atmosphere',
};

export default function GalleryPage() {
    const galleryImages = [
        { src: '/cafe_hero_image_1769668420348.png', alt: 'Cafe Interior' },
        { src: '/coffee_art_latte_1769668436677.png', alt: 'Latte Art' },
        { src: '/fresh_pastries_1769668452469.png', alt: 'Fresh Pastries' },
        { src: '/cafe_ambiance_1769668472178.png', alt: 'Cozy Reading Corner' },
        { src: '/espresso_machine_1769668487751.png', alt: 'Espresso Machine' },
        { src: '/cafe_exterior_1769668503693.png', alt: 'Cafe Exterior' },
    ];

    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-20">
                {/* Hero Section */}
                <section className="bg-cafe-brown-800 text-white py-20">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="font-display font-bold text-5xl md:text-6xl mb-6">Gallery</h1>
                        <p className="text-xl opacity-90">
                            A visual journey through our cafe's atmosphere, creations, and moments
                        </p>
                    </div>
                </section>

                {/* Gallery Grid */}
                <section className="py-20 bg-cafe-cream">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {galleryImages.map((image, index) => (
                                <div
                                    key={index}
                                    className="group relative overflow-hidden rounded-xl shadow-lg h-80 cursor-pointer"
                                >
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="absolute bottom-0 left-0 right-0 p-6">
                                            <p className="text-white font-display font-semibold text-xl">{image.alt}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Instagram CTA */}
                <section className="py-20 bg-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="font-display font-bold text-4xl mb-6 text-cafe-brown-800">
                            Share Your Experience
                        </h2>
                        <p className="text-lg text-cafe-brown-600 mb-8">
                            Tag us in your photos <span className="text-cafe-accent font-semibold">@artisancafe</span> and use{' '}
                            <span className="text-cafe-accent font-semibold">#ArtisanCafeMoments</span> to be featured!
                        </p>
                        <div className="flex justify-center gap-4">
                            <div className="w-16 h-16 bg-gradient-to-br from-cafe-accent to-cafe-gold rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer">
                                <span className="text-3xl">📷</span>
                            </div>
                            <div className="w-16 h-16 bg-gradient-to-br from-cafe-gold to-cafe-brown-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer">
                                <span className="text-3xl">❤️</span>
                            </div>
                            <div className="w-16 h-16 bg-gradient-to-br from-cafe-brown-600 to-cafe-accent rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer">
                                <span className="text-3xl">☕</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Visit CTA */}
                <section className="py-20 bg-gradient-to-br from-cafe-accent to-cafe-gold text-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">
                            Ready to Create Your Own Memories?
                        </h2>
                        <p className="text-xl mb-8 opacity-90">
                            Come visit us and experience the magic in person!
                        </p>
                        <a href="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-cafe-accent !inline-block">
                            Get Directions
                        </a>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
