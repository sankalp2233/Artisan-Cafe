import dbConnect from '../lib/mongoose';
import Menu from '../models/Menu';
import Admin from '../models/Admin';
import { hashPassword } from '../lib/auth';

const sampleMenuItems = [
    {
        name: 'Espresso',
        description: 'Rich and bold single shot of premium espresso',
        category: 'Beverages',
        price: 3.50,
        image: '/coffee_art_latte_1769668436677.png',
        isAvailable: true,
    },
    {
        name: 'Cappuccino',
        description: 'Classic Italian coffee with steamed milk and foam',
        category: 'Beverages',
        price: 4.50,
        image: '/coffee_art_latte_1769668436677.png',
        isAvailable: true,
    },
    {
        name: 'Latte',
        description: 'Smooth espresso with steamed milk and beautiful latte art',
        category: 'Beverages',
        price: 4.75,
        image: '/coffee_art_latte_1769668436677.png',
        isAvailable: true,
    },
    {
        name: 'Croissant',
        description: 'Buttery, flaky, artisan-baked French pastry',
        category: 'Food',
        price: 3.95,
        image: '/fresh_pastries_1769668452469.png',
        isAvailable: true,
    },
    {
        name: 'Avocado Toast',
        description: 'Fresh avocado on sourdough with cherry tomatoes and feta',
        category: 'Food',
        price: 8.95,
        image: '/fresh_pastries_1769668452469.png',
        isAvailable: true,
    },
    {
        name: 'Chocolate Muffin',
        description: 'Moist chocolate muffin with chocolate chips',
        category: 'Desserts',
        price: 3.50,
        image: '/fresh_pastries_1769668452469.png',
        isAvailable: true,
    },
    {
        name: 'Tiramisu',
        description: 'Classic Italian dessert with coffee-soaked ladyfingers',
        category: 'Desserts',
        price: 6.95,
        image: '/fresh_pastries_1769668452469.png',
        isAvailable: true,
    },
    {
        name: 'Cold Brew',
        description: 'Smooth, refreshing cold-steeped coffee served over ice',
        category: 'Beverages',
        price: 4.25,
        image: '/coffee_art_latte_1769668436677.png',
        isAvailable: true,
    },
];

async function seed() {
    try {
        await dbConnect();
        console.log('Connected to database');

        // Clear existing data
        await Menu.deleteMany({});
        await Admin.deleteMany({});
        console.log('Cleared existing data');

        // Create menu items
        await Menu.insertMany(sampleMenuItems);
        console.log(`✅ Created ${sampleMenuItems.length} menu items`);

        // Create admin user
        const adminEmail = process.env.ADMIN_EMAIL || 'admin@cafe.com';
        const adminPassword = process.env.ADMIN_PASSWORD || 'AdminPassword123!';
        const hashedPassword = await hashPassword(adminPassword);

        await Admin.create({
            email: adminEmail,
            password: hashedPassword,
        });
        console.log(`✅ Created admin user: ${adminEmail}`);

        console.log('\n🎉 Database seeded successfully!');
        console.log(`\nAdmin Credentials:`);
        console.log(`Email: ${adminEmail}`);
        console.log(`Password: ${adminPassword}`);
        console.log('\n⚠️  Please change these credentials in production!');

        process.exit(0);
    } catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
}

seed();
