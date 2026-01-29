'use client';

import { useEffect, useState } from 'react';
import Link from "next/link";

interface Stats {
    menuItems: number;
    reservations: number;
    pendingReservations: number;
}

export default function AdminDashboard() {
    const [stats, setStats] = useState<Stats>({ menuItems: 0, reservations: 0, pendingReservations: 0 });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchStats();
    }, []);

    const fetchStats = async () => {
        const token = localStorage.getItem('adminToken');
        try {
            const [menuRes, reservationsRes] = await Promise.all([
                fetch('/api/menu'),
                fetch('/api/reservations', {
                    headers: { Authorization: `Bearer ${token}` },
                }),
            ]);

            const menuData = await menuRes.json();
            const reservationsData = await reservationsRes.json();

            if (menuData.success && reservationsData.success) {
                setStats({
                    menuItems: menuData.data.length,
                    reservations: reservationsData.data.length,
                    pendingReservations: reservationsData.data.filter((r: any) => r.status === 'pending').length,
                });
            }
        } catch (error) {
            console.error('Error fetching stats:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <div className="mb-8">
                <h1 className="font-display font-bold text-4xl text-cafe-brown-800 mb-2">Dashboard</h1>
                <p className="text-cafe-brown-600">Welcome back! Here's an overview of your cafe.</p>
            </div>

            {loading ? (
                <div className="text-center py-12">
                    <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-cafe-accent border-t-transparent"></div>
                </div>
            ) : (
                <>
                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div className="card bg-gradient-to-br from-cafe-accent to-cafe-gold text-white">
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-5xl">🍴</span>
                                <div className="text-right">
                                    <p className="text-white/80 text-sm font-medium">Menu Items</p>
                                    <p className="text-4xl font-bold">{stats.menuItems}</p>
                                </div>
                            </div>
                            <Link href="/admin/menu" className="text-white/90 hover:text-white text-sm font-medium">
                                Manage Menu →
                            </Link>
                        </div>

                        <div className="card bg-gradient-to-br from-cafe-gold to-cafe-brown-600 text-white">
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-5xl">📅</span>
                                <div className="text-right">
                                    <p className="text-white/80 text-sm font-medium">Total Reservations</p>
                                    <p className="text-4xl font-bold">{stats.reservations}</p>
                                </div>
                            </div>
                            <Link href="/admin/reservations" className="text-white/90 hover:text-white text-sm font-medium">
                                View All →
                            </Link>
                        </div>

                        <div className="card bg-gradient-to-br from-cafe-brown-600 to-cafe-brown-800 text-white">
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-5xl">⏳</span>
                                <div className="text-right">
                                    <p className="text-white/80 text-sm font-medium">Pending</p>
                                    <p className="text-4xl font-bold">{stats.pendingReservations}</p>
                                </div>
                            </div>
                            <Link href="/admin/reservations" className="text-white/90 hover:text-white text-sm font-medium">
                                Review →
                            </Link>
                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="card">
                        <h2 className="font-display font-bold text-2xl text-cafe-brown-800 mb-6">Quick Actions</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Link
                                href="/admin/menu"
                                className="flex items-center gap-4 p-4 rounded-lg border-2 border-cafe-brown-200 hover:border-cafe-accent hover:bg-cafe-brown-50 transition-all duration-300"
                            >
                                <span className="text-3xl">➕</span>
                                <div>
                                    <h3 className="font-semibold text-cafe-brown-800">Add Menu Item</h3>
                                    <p className="text-sm text-cafe-brown-600">Create a new item for your menu</p>
                                </div>
                            </Link>

                            <Link
                                href="/admin/reservations"
                                className="flex items-center gap-4 p-4 rounded-lg border-2 border-cafe-brown-200 hover:border-cafe-accent hover:bg-cafe-brown-50 transition-all duration-300"
                            >
                                <span className="text-3xl">✅</span>
                                <div>
                                    <h3 className="font-semibold text-cafe-brown-800">Review Reservations</h3>
                                    <p className="text-sm text-cafe-brown-600">Approve or manage bookings</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
