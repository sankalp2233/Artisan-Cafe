'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import AdminSidebar from '@/components/AdminSidebar';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        checkAuth();
    }, []);

    const checkAuth = async () => {
        const token = localStorage.getItem('adminToken');

        if (!token) {
            router.push('/admin/login');
            return;
        }

        try {
            const response = await fetch('/api/auth/verify', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ token }),
            });

            if (!response.ok) {
                throw new Error('Invalid token');
            }

            setIsAuthenticated(true);
        } catch (error) {
            localStorage.removeItem('adminToken');
            router.push('/admin/login');
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('adminToken');
        router.push('/admin/login');
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-cafe-cream flex items-center justify-center">
                <div className="text-center">
                    <div className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-cafe-accent border-t-transparent mb-4"></div>
                    <p className="text-cafe-brown-600">Verifying authentication...</p>
                </div>
            </div>
        );
    }

    if (!isAuthenticated) {
        return null;
    }

    return (
        <div className="flex min-h-screen bg-cafe-cream">
            <AdminSidebar onLogout={handleLogout} />
            <div className="flex-1">
                <div className="p-8">{children}</div>
            </div>
        </div>
    );
}
