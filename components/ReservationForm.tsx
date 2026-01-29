'use client';

import { useState, FormEvent } from 'react';

const ReservationForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: 2,
        message: '',
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccess(false);

        try {
            const response = await fetch('/api/reservations', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to create reservation');
            }

            setSuccess(true);
            setFormData({
                name: '',
                email: '',
                phone: '',
                date: '',
                time: '',
                guests: 2,
                message: '',
            });
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="card max-w-2xl">
            <h3 className="font-display font-bold text-2xl text-cafe-brown-800 mb-6">Make a Reservation</h3>

            {success && (
                <div className="mb-6 p-4 bg-green-100 border-2 border-green-400 text-green-700 rounded-lg">
                    <strong>Success!</strong> Your reservation has been submitted. We'll contact you shortly to confirm.
                </div>
            )}

            {error && (
                <div className="mb-6 p-4 bg-red-100 border-2 border-red-400 text-red-700 rounded-lg">
                    <strong>Error:</strong> {error}
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-cafe-brown-700 font-medium mb-2">Name *</label>
                        <input
                            type="text"
                            required
                            className="input-field"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                    </div>

                    <div>
                        <label className="block text-cafe-brown-700 font-medium mb-2">Email *</label>
                        <input
                            type="email"
                            required
                            className="input-field"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-cafe-brown-700 font-medium mb-2">Phone *</label>
                    <input
                        type="tel"
                        required
                        className="input-field"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                        <label className="block text-cafe-brown-700 font-medium mb-2">Date *</label>
                        <input
                            type="date"
                            required
                            className="input-field"
                            min={new Date().toISOString().split('T')[0]}
                            value={formData.date}
                            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        />
                    </div>

                    <div>
                        <label className="block text-cafe-brown-700 font-medium mb-2">Time *</label>
                        <input
                            type="time"
                            required
                            className="input-field"
                            value={formData.time}
                            onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        />
                    </div>

                    <div>
                        <label className="block text-cafe-brown-700 font-medium mb-2">Guests *</label>
                        <input
                            type="number"
                            required
                            min="1"
                            max="20"
                            className="input-field"
                            value={formData.guests}
                            onChange={(e) => setFormData({ ...formData, guests: parseInt(e.target.value) })}
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-cafe-brown-700 font-medium mb-2">Special Requests</label>
                    <textarea
                        rows={4}
                        className="input-field"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Any dietary restrictions or special occasions?"
                    />
                </div>

                <button type="submit" disabled={loading} className="btn-primary w-full">
                    {loading ? 'Submitting...' : 'Reserve Table'}
                </button>
            </form>
        </div>
    );
};

export default ReservationForm;
