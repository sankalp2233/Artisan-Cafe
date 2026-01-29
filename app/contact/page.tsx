import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ReservationForm from '@/components/ReservationForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact & Reservations - Artisan Cafe | Book Your Table',
    description: 'Contact Artisan Cafe, find our location in South Extension I, New Delhi, or make a table reservation online. Open 7 days a week. Call (555) 123-4567.',
    keywords: 'contact cafe, table reservation, book table, cafe location, South Extension New Delhi, cafe hours',
};

export default function ContactPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-20">
                {/* Hero Section */}
                <section className="bg-cafe-brown-800 text-white py-20">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="font-display font-bold text-5xl md:text-6xl mb-6">Contact Us</h1>
                        <p className="text-xl opacity-90">
                            We'd love to hear from you. Visit us, call us, or book a table!
                        </p>
                    </div>
                </section>

                {/* Contact Info & Map */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
                            {/* Contact Information */}
                            <div>
                                <h2 className="font-display font-bold text-3xl mb-8 text-cafe-brown-800">
                                    Get in Touch
                                </h2>

                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-cafe-accent rounded-full flex items-center justify-center flex-shrink-0">
                                            <span className="text-2xl">📍</span>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-lg mb-1 text-cafe-brown-800">Address</h3>
                                            <p className="text-cafe-brown-600">
                                                123 Coffee Street
                                                <br />
                                                Downtown, City 12345
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-cafe-gold rounded-full flex items-center justify-center flex-shrink-0">
                                            <span className="text-2xl">📞</span>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-lg mb-1 text-cafe-brown-800">Phone</h3>
                                            <p className="text-cafe-brown-600">(555) 123-4567</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-cafe-brown-600 rounded-full flex items-center justify-center flex-shrink-0">
                                            <span className="text-2xl">📧</span>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-lg mb-1 text-cafe-brown-800">Email</h3>
                                            <p className="text-cafe-brown-600">hello@artisancafe.com</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-cafe-accent rounded-full flex items-center justify-center flex-shrink-0">
                                            <span className="text-2xl">🕐</span>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-lg mb-1 text-cafe-brown-800">Hours</h3>
                                            <div className="text-cafe-brown-600 space-y-1">
                                                <p>Monday - Friday: 7:00 AM - 9:00 PM</p>
                                                <p>Saturday: 8:00 AM - 10:00 PM</p>
                                                <p>Sunday: 8:00 AM - 8:00 PM</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 pt-8 border-t border-cafe-brown-200">
                                    <h3 className="font-semibold text-lg mb-4 text-cafe-brown-800">Follow Us</h3>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-cafe-accent rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer">
                                            <span className="text-xl">📘</span>
                                        </div>
                                        <div className="w-10 h-10 bg-cafe-gold rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer">
                                            <span className="text-xl">📷</span>
                                        </div>
                                        <div className="w-10 h-10 bg-cafe-brown-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer">
                                            <span className="text-xl">🐦</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Google Maps Embed */}
                            <div className="bg-cafe-brown-100 rounded-xl overflow-hidden shadow-lg h-96">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7007.791983460937!2d77.21780714211002!3d28.572885774984346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce25c2bda02bd%3A0x88805483a1dca8bb!2sSouth%20Extension%20I%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1769670467539!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Cafe Location Map"
                                    className="w-full h-full"
                                />
                            </div>
                        </div>

                        {/* Reservation Form */}
                        <div id="reservation" className="scroll-mt-24">
                            <div className="text-center mb-12">
                                <h2 className="section-title">Make a Reservation</h2>
                                <p className="section-subtitle">
                                    Secure your spot and enjoy a seamless dining experience
                                </p>
                            </div>

                            <div className="flex justify-center">
                                <ReservationForm />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
