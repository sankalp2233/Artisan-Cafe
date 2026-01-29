'use client';

import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MenuCard from '@/components/MenuCard';
import type { Metadata } from 'next';

// Note: metadata export doesn't work in client components, 
// but SEO is handled by root layout. This is a client component 
// due to useState/useEffect for API fetching.

interface MenuItem {
    _id: string;
    name: string;
    description: string;
    category: 'Beverages' | 'Food' | 'Desserts';
    price: number;
    image: string;
    isAvailable: boolean;
}

export default function MenuPage() {
    const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [activeCategory, setActiveCategory] = useState<string>('All');

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        try {
            const response = await fetch('/api/menu');
            const data = await response.json();
            if (data.success) {
                setMenuItems(data.data);
            }
        } catch (error) {
            console.error('Error fetching menu:', error);
        } finally {
            setLoading(false);
        }
    };

    const categories = ['All', 'Beverages', 'Food', 'Desserts'];

    const filteredItems =
        activeCategory === 'All'
            ? menuItems
            : menuItems.filter((item) => item.category === activeCategory);

    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-20">
                {/* Hero Section */}
                <section className="bg-cafe-brown-800 text-white py-20">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="font-display font-bold text-5xl md:text-6xl mb-6">Our Menu</h1>
                        <p className="text-xl opacity-90">
                            Discover our selection of premium beverages, artisan food, and delightful desserts
                        </p>
                    </div>
                </section>

                {/* Category Filter */}
                <section className="bg-white border-b-2 border-cafe-brown-100 sticky top-20 z-40">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                        <div className="flex flex-wrap gap-4 justify-center">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setActiveCategory(category)}
                                    className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${activeCategory === category
                                        ? 'bg-cafe-accent text-white shadow-lg'
                                        : 'bg-cafe-brown-100 text-cafe-brown-700 hover:bg-cafe-brown-200'
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Menu Items */}
                <section className="py-20 bg-cafe-cream">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        {loading ? (
                            <div className="text-center py-20">
                                <div className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-cafe-accent border-t-transparent"></div>
                                <p className="mt-4 text-cafe-brown-600">Loading menu...</p>
                            </div>
                        ) : filteredItems.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {filteredItems.map((item) => (
                                    <MenuCard
                                        key={item._id}
                                        name={item.name}
                                        description={item.description}
                                        price={item.price}
                                        image={item.image}
                                        category={item.category}
                                        isAvailable={item.isAvailable}
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-20">
                                <p className="text-xl text-cafe-brown-600">
                                    {activeCategory === 'All'
                                        ? 'No menu items available yet. Please check back soon!'
                                        : `No ${activeCategory.toLowerCase()} available at the moment.`}
                                </p>
                            </div>
                        )}
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 bg-gradient-to-br from-cafe-accent to-cafe-gold text-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">
                            Ready to Order?
                        </h2>
                        <p className="text-xl mb-8 opacity-90">
                            Visit us or make a reservation to enjoy these delicious offerings!
                        </p>
                        <a href="/contact#reservation" className="btn-outline border-white text-white hover:bg-white hover:text-cafe-accent !inline-block">
                            Reserve Your Table
                        </a>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
