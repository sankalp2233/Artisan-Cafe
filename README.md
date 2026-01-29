# Artisan Cafe - Full-Stack Website

A modern, production-ready cafe website built with Next.js, Tailwind CSS, MongoDB, and JWT authentication.

![Home Page](public/cafe_interior_1769668403743.png)

## ✨ Features

- 🎨 **Premium Design** - Tailwind CSS with custom color palette and animations
- 📱 **Fully Responsive** - Mobile, tablet, and desktop optimized
- 🗺️ **Google Maps Integration** - Embedded location map
- 🍽️ **Dynamic Menu** - CRUD operations with admin panel
- 📅 **Table Reservations** - Online booking system with status management
- 🔐 **Secure Admin Panel** - JWT authentication with protected routes
- 🗄️ **MongoDB Database** - Complete data persistence
- ⚡ **Next.js 15** - Server-side rendering and API routes
- 🔍 **SEO Optimized** - Meta tags, semantic HTML, and page-specific metadata

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- MongoDB (local or MongoDB Atlas account)

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/cafe-website.git
cd cafe-website

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your MongoDB URI and credentials

# Seed the database
npm run seed

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 🔧 Environment Variables

Create a `.env.local` file in the root directory:

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secure_jwt_secret_key
ADMIN_EMAIL=admin@cafe.com
ADMIN_PASSWORD=YourSecurePassword
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## 📁 Project Structure

```
cafe-website/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── admin/             # Admin panel pages
│   └── (public)/          # Public pages
├── components/            # React components
├── lib/                   # Utilities and middleware
├── models/                # MongoDB schemas
├── public/                # Static assets
└── scripts/               # Database seeding scripts
```

## 🎯 Pages

- **Home** - Hero section with cafe introduction
- **About** - Cafe story and values
- **Menu** - Dynamic menu with categories (Beverages, Food, Desserts)
- **Gallery** - Photo showcase
- **Contact** - Location map and reservation form
- **Admin Panel** - Menu and reservation management

## 🔐 Admin Access

Default credentials (change in production):
- Email: `admin@cafe.com`
- Password: `AdminPassword123!`

Access the admin panel at `/admin/login`

## 🛠️ Tech Stack

- **Frontend:** Next.js 15, React, Tailwind CSS
- **Backend:** Next.js API Routes, Node.js
- **Database:** MongoDB with Mongoose
- **Authentication:** JWT (JSON Web Tokens)
- **Styling:** Tailwind CSS with custom configuration
- **Fonts:** Google Fonts (Playfair Display, Inter)

## 📦 API Endpoints

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| GET | `/api/menu` | No | Get all menu items |
| POST | `/api/menu` | Yes | Create menu item |
| PUT | `/api/menu/[id]` | Yes | Update menu item |
| DELETE | `/api/menu/[id]` | Yes | Delete menu item |
| GET | `/api/reservations` | Yes | Get all reservations |
| POST | `/api/reservations` | No | Create reservation |
| PUT | `/api/reservations/[id]` | Yes | Update reservation |
| POST | `/api/auth/login` | No | Admin login |

## 🚀 Deployment

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Add environment variables in Vercel dashboard.

### Other Platforms

Also compatible with Railway, Render, AWS, Azure, and GCP.

## 📝 License

MIT License - feel free to use this project for your own cafe website!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

For questions or support, please open an issue on GitHub.

---

**Built with ❤️ using Next.js and Tailwind CSS**
