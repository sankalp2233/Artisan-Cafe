'use client';

import { useEffect, useState } from 'react';

interface Reservation {
    _id: string;
    name: string;
    email: string;
    phone: string;
    date: string;
    time: string;
    guests: number;
    status: 'pending' | 'confirmed' | 'cancelled';
    message?: string;
    createdAt: string;
}

export default function AdminReservationsPage() {
    const [reservations, setReservations] = useState<Reservation[]>([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState<'all' | 'pending' | 'confirmed' | 'cancelled'>('all');

    useEffect(() => {
        fetchReservations();
    }, []);

    const fetchReservations = async () => {
        const token = localStorage.getItem('adminToken');
        try {
            const response = await fetch('/api/reservations', {
                headers: { Authorization: `Bearer ${token}` },
            });
            const data = await response.json();
            if (data.success) {
                setReservations(data.data);
            }
        } catch (error) {
            console.error('Error fetching reservations:', error);
        } finally {
            setLoading(false);
        }
    };

    const updateStatus = async (id: string, status: 'confirmed' | 'cancelled') => {
        const token = localStorage.getItem('adminToken');
        try {
            const response = await fetch(`/api/reservations/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ status }),
            });

            if (response.ok) {
                fetchReservations();
                alert(`Reservation ${status}!`);
            }
        } catch (error) {
            console.error('Error updating reservation:', error);
            alert('Failed to update reservation');
        }
    };

    const filteredReservations =
        filter === 'all' ? reservations : reservations.filter((r) => r.status === filter);

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        });
    };

    const statusColors = {
        pending: 'bg-yellow-100 text-yellow-700',
        confirmed: 'bg-green-100 text-green-700',
        cancelled: 'bg-red-100 text-red-700',
    };

    return (
        <div>
            <div className="mb-8">
                <h1 className="font-display font-bold text-4xl text-cafe-brown-800 mb-2">
                    Reservations
                </h1>
                <p className="text-cafe-brown-600">Manage customer reservations</p>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-3 mb-6">
                {['all', 'pending', 'confirmed', 'cancelled'].map((status) => (
                    <button
                        key={status}
                        onClick={() => setFilter(status as any)}
                        className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 capitalize ${filter === status
                                ? 'bg-cafe-accent text-white'
                                : 'bg-cafe-brown-100 text-cafe-brown-700 hover:bg-cafe-brown-200'
                            }`}
                    >
                        {status} {status === 'pending' && `(${reservations.filter((r) => r.status === 'pending').length})`}
                    </button>
                ))}
            </div>

            {loading ? (
                <div className="text-center py-12">
                    <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-cafe-accent border-t-transparent"></div>
                </div>
            ) : (
                <div className="space-y-4">
                    {filteredReservations.length > 0 ? (
                        filteredReservations.map((reservation) => (
                            <div key={reservation._id} className="card">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-3">
                                            <h3 className="font-display font-bold text-xl text-cafe-brown-800">
                                                {reservation.name}
                                            </h3>
                                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColors[reservation.status]}`}>
                                                {reservation.status}
                                            </span>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-cafe-brown-600">
                                            <div className="flex items-center gap-2">
                                                <span>📧</span>
                                                <span>{reservation.email}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span>📞</span>
                                                <span>{reservation.phone}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span>📅</span>
                                                <span>
                                                    {formatDate(reservation.date)} at {reservation.time}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span>👥</span>
                                                <span>{reservation.guests} guests</span>
                                            </div>
                                        </div>

                                        {reservation.message && (
                                            <div className="mt-3 p-3 bg-cafe-brown-50 rounded-lg">
                                                <p className="text-sm text-cafe-brown-700">
                                                    <strong>Special Request:</strong> {reservation.message}
                                                </p>
                                            </div>
                                        )}

                                        <div className="mt-2 text-xs text-cafe-brown-500">
                                            Booked on {formatDate(reservation.createdAt)}
                                        </div>
                                    </div>

                                    {reservation.status === 'pending' && (
                                        <div className="flex gap-3">
                                            <button
                                                onClick={() => updateStatus(reservation._id, 'confirmed')}
                                                className="btn-primary !py-2 !px-6"
                                            >
                                                ✓ Confirm
                                            </button>
                                            <button
                                                onClick={() => updateStatus(reservation._id, 'cancelled')}
                                                className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-300"
                                            >
                                                ✗ Cancel
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="card text-center py-12 text-cafe-brown-600">
                            No {filter !== 'all' && filter} reservations found.
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
