'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLoginPage() {
    const router = useRouter();
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Login failed');
            }

            // Store token in localStorage
            localStorage.setItem('adminToken', data.data.token);
            router.push('/admin/dashboard');
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-cafe-accent to-cafe-gold flex items-center justify-center p-4">
            <div className="card max-w-md w-full">
                <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-cafe-accent to-cafe-gold rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-white font-display font-bold text-2xl">A</span>
                    </div>
                    <h1 className="font-display font-bold text-3xl text-cafe-brown-800 mb-2">Admin Panel</h1>
                    <p className="text-cafe-brown-600">Sign in to manage your cafe</p>
                </div>

                {error && (
                    <div className="mb-6 p-4 bg-red-100 border-2 border-red-400 text-red-700 rounded-lg">
                        <strong>Error:</strong> {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-cafe-brown-700 font-medium mb-2">Email</label>
                        <input
                            type="email"
                            required
                            className="input-field"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="admin@cafe.com"
                        />
                    </div>

                    <div>
                        <label className="block text-cafe-brown-700 font-medium mb-2">Password</label>
                        <input
                            type="password"
                            required
                            className="input-field"
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            placeholder="••••••••"
                        />
                    </div>

                    <button type="submit" disabled={loading} className="btn-primary w-full">
                        {loading ? 'Signing in...' : 'Sign In'}
                    </button>
                </form>

                <div className="mt-6 pt-6 border-t border-cafe-brown-200 text-center">
                    <a href="/" className="text-cafe-accent hover:text-cafe-gold transition-colors duration-300">
                        ← Back to Website
                    </a>
                </div>
            </div>
        </div>
    );
}
