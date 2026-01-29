'use client';

import { useEffect, useState } from 'react';

interface MenuItem {
    _id: string;
    name: string;
    description: string;
    category: 'Beverages' | 'Food' | 'Desserts';
    price: number;
    image: string;
    isAvailable: boolean;
}

export default function AdminMenuPage() {
    const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [showForm, setShowForm] = useState(false);
    const [editingItem, setEditingItem] = useState<MenuItem | null>(null);
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        category: 'Beverages' as 'Beverages' | 'Food' | 'Desserts',
        price: 0,
        image: '',
        isAvailable: true,
    });

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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const token = localStorage.getItem('adminToken');

        try {
            const url = editingItem ? `/api/menu/${editingItem._id}` : '/api/menu';
            const method = editingItem ? 'PUT' : 'POST';

            const response = await fetch(url, {
                method,
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                fetchMenu();
                resetForm();
                alert(editingItem ? 'Menu item updated!' : 'Menu item created!');
            }
        } catch (error) {
            console.error('Error saving menu item:', error);
            alert('Failed to save menu item');
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this item?')) return;

        const token = localStorage.getItem('adminToken');

        try {
            const response = await fetch(`/api/menu/${id}`, {
                method: 'DELETE',
                headers: { Authorization: `Bearer ${token}` },
            });

            if (response.ok) {
                fetchMenu();
                alert('Menu item deleted!');
            }
        } catch (error) {
            console.error('Error deleting menu item:', error);
            alert('Failed to delete menu item');
        }
    };

    const handleEdit = (item: MenuItem) => {
        setEditingItem(item);
        setFormData({
            name: item.name,
            description: item.description,
            category: item.category,
            price: item.price,
            image: item.image,
            isAvailable: item.isAvailable,
        });
        setShowForm(true);
    };

    const resetForm = () => {
        setShowForm(false);
        setEditingItem(null);
        setFormData({
            name: '',
            description: '',
            category: 'Beverages',
            price: 0,
            image: '',
            isAvailable: true,
        });
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="font-display font-bold text-4xl text-cafe-brown-800 mb-2">Menu Management</h1>
                    <p className="text-cafe-brown-600">Manage your cafe menu items</p>
                </div>
                <button onClick={() => setShowForm(!showForm)} className="btn-primary">
                    {showForm ? 'Cancel' : '+ Add New Item'}
                </button>
            </div>

            {showForm && (
                <div className="card mb-8">
                    <h2 className="font-display font-bold text-2xl text-cafe-brown-800 mb-6">
                        {editingItem ? 'Edit Menu Item' : 'Add New Menu Item'}
                    </h2>
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
                                <label className="block text-cafe-brown-700 font-medium mb-2">Category *</label>
                                <select
                                    required
                                    className="input-field"
                                    value={formData.category}
                                    onChange={(e) =>
                                        setFormData({ ...formData, category: e.target.value as any })
                                    }
                                >
                                    <option value="Beverages">Beverages</option>
                                    <option value="Food">Food</option>
                                    <option value="Desserts">Desserts</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label className="block text-cafe-brown-700 font-medium mb-2">Description *</label>
                            <textarea
                                required
                                rows={3}
                                className="input-field"
                                value={formData.description}
                                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-cafe-brown-700 font-medium mb-2">Price ($) *</label>
                                <input
                                    type="number"
                                    required
                                    min="0"
                                    step="0.01"
                                    className="input-field"
                                    value={formData.price}
                                    onChange={(e) =>
                                        setFormData({ ...formData, price: parseFloat(e.target.value) })
                                    }
                                />
                            </div>

                            <div>
                                <label className="block text-cafe-brown-700 font-medium mb-2">Image URL *</label>
                                <input
                                    type="url"
                                    required
                                    className="input-field"
                                    value={formData.image}
                                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                                    placeholder="https://example.com/image.jpg"
                                />
                            </div>
                        </div>

                        <div className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                id="isAvailable"
                                checked={formData.isAvailable}
                                onChange={(e) => setFormData({ ...formData, isAvailable: e.target.checked })}
                                className="w-5 h-5 text-cafe-accent"
                            />
                            <label htmlFor="isAvailable" className="text-cafe-brown-700 font-medium">
                                Available for order
                            </label>
                        </div>

                        <div className="flex gap-4">
                            <button type="submit" className="btn-primary">
                                {editingItem ? 'Update Item' : 'Create Item'}
                            </button>
                            <button type="button" onClick={resetForm} className="btn-outline">
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            )}

            {loading ? (
                <div className="text-center py-12">
                    <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-cafe-accent border-t-transparent"></div>
                </div>
            ) : (
                <div className="card overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b-2 border-cafe-brown-200">
                                <th className="text-left py-4 px-4 font-semibold text-cafe-brown-800">Item</th>
                                <th className="text-left py-4 px-4 font-semibold text-cafe-brown-800">Category</th>
                                <th className="text-left py-4 px-4 font-semibold text-cafe-brown-800">Price</th>
                                <th className="text-left py-4 px-4 font-semibold text-cafe-brown-800">Status</th>
                                <th className="text-right py-4 px-4 font-semibold text-cafe-brown-800">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {menuItems.map((item) => (
                                <tr key={item._id} className="border-b border-cafe-brown-100 hover:bg-cafe-brown-50">
                                    <td className="py-4 px-4">
                                        <div className="flex items-center gap-3">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-12 h-12 rounded object-cover"
                                            />
                                            <div>
                                                <p className="font-semibold text-cafe-brown-800">{item.name}</p>
                                                <p className="text-sm text-cafe-brown-600 line-clamp-1">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-4 px-4 text-cafe-brown-600">{item.category}</td>
                                    <td className="py-4 px-4 text-cafe-brown-800 font-semibold">
                                        ${item.price.toFixed(2)}
                                    </td>
                                    <td className="py-4 px-4">
                                        <span
                                            className={`px-3 py-1 rounded-full text-xs font-semibold ${item.isAvailable
                                                    ? 'bg-green-100 text-green-700'
                                                    : 'bg-red-100 text-red-700'
                                                }`}
                                        >
                                            {item.isAvailable ? 'Available' : 'Unavailable'}
                                        </span>
                                    </td>
                                    <td className="py-4 px-4 text-right">
                                        <button
                                            onClick={() => handleEdit(item)}
                                            className="text-cafe-accent hover:text-cafe-gold font-semibold mr-4"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => handleDelete(item._id)}
                                            className="text-red-600 hover:text-red-700 font-semibold"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {menuItems.length === 0 && (
                        <div className="text-center py-12 text-cafe-brown-600">
                            No menu items yet. Click "Add New Item" to create one!
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
