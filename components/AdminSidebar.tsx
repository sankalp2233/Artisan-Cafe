'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface AdminSidebarProps {
    onLogout: () => void;
}

const AdminSidebar = ({ onLogout }: AdminSidebarProps) => {
    const pathname = usePathname();

    const menuItems = [
        { name: 'Dashboard', path: '/admin/dashboard', icon: '📊' },
        { name: 'Menu Items', path: '/admin/menu', icon: '🍴' },
        { name: 'Reservations', path: '/admin/reservations', icon: '📅' },
    ];

    return (
        <div className="bg-cafe-brown-800 text-white w-64 min-h-screen p-6">
            <div className="mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-cafe-accent to-cafe-gold rounded-full flex items-center justify-center mb-3">
                    <span className="text-white font-display font-bold text-xl">A</span>
                </div>
                <h2 className="font-display font-bold text-xl">Artisan Cafe</h2>
                <p className="text-cafe-brown-300 text-sm">Admin Panel</p>
            </div>

            <nav className="space-y-2">
                {menuItems.map((item) => (
                    <Link
                        key={item.path}
                        href={item.path}
                        className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-300 ${pathname === item.path
                                ? 'bg-cafe-accent text-white'
                                : 'text-cafe-brown-300 hover:bg-cafe-brown-700'
                            }`}
                    >
                        <span className="text-xl">{item.icon}</span>
                        <span className="font-medium">{item.name}</span>
                    </Link>
                ))}
            </nav>

            <div className="mt-auto pt-8">
                <button
                    onClick={onLogout}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-cafe-brown-300 hover:bg-cafe-brown-700 transition-colors duration-300"
                >
                    <span className="text-xl">🚪</span>
                    <span className="font-medium">Logout</span>
                </button>

                <div className="mt-6 pt-6 border-t border-cafe-brown-700">
                    <Link
                        href="/"
                        className="text-cafe-brown-300 hover:text-cafe-gold text-sm transition-colors duration-300"
                    >
                        ← Back to Website
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AdminSidebar;
