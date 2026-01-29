import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-cafe-brown-800 text-cafe-brown-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* About */}
                    <div>
                        <h3 className="font-display font-bold text-xl text-cafe-gold mb-4">Artisan Cafe</h3>
                        <p className="text-cafe-brown-300 text-sm">
                            Your neighborhood cafe serving premium coffee, delicious food, and warm hospitality since 2020.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold text-cafe-gold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/about" className="text-cafe-brown-300 hover:text-cafe-gold transition-colors duration-300">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/menu" className="text-cafe-brown-300 hover:text-cafe-gold transition-colors duration-300">
                                    Menu
                                </Link>
                            </li>
                            <li>
                                <Link href="/gallery" className="text-cafe-brown-300 hover:text-cafe-gold transition-colors duration-300">
                                    Gallery
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-cafe-brown-300 hover:text-cafe-gold transition-colors duration-300">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-semibold text-cafe-gold mb-4">Contact</h4>
                        <ul className="space-y-2 text-cafe-brown-300 text-sm">
                            <li>123 Coffee Street</li>
                            <li>Downtown, City 12345</li>
                            <li className="mt-3">Phone: (555) 123-4567</li>
                            <li>Email: hello@artisancafe.com</li>
                        </ul>
                    </div>

                    {/* Hours */}
                    <div>
                        <h4 className="font-semibold text-cafe-gold mb-4">Hours</h4>
                        <ul className="space-y-2 text-cafe-brown-300 text-sm">
                            <li>Monday - Friday: 7am - 9pm</li>
                            <li>Saturday: 8am - 10pm</li>
                            <li>Sunday: 8am - 8pm</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-cafe-brown-700 mt-8 pt-8 text-center text-cafe-brown-400 text-sm">
                    <p>&copy; {new Date().getFullYear()} Artisan Cafe. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
