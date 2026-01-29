# Artisan Cafe - Full-Stack Next.js Application

A production-ready cafe website built with Next.js 15, featuring a public-facing site and a secure admin panel.

## Features

### Public Website
- **Home Page**: Hero section with cafe introduction and call-to-action
- **About Page**: Cafe story, mission, values, and team
- **Menu Page**: Dynamic menu with category filtering
- **Gallery**: Beautiful image grid showcasing cafe ambiance
- **Contact Page**: Contact information and reservation form

### Admin Panel
- **Authentication**: Secure JWT-based login
- **Dashboard**: Overview with stats and quick actions
- **Menu Management**: Full CRUD operations for menu items
- **Reservation Management**: View and manage customer reservations

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT (JSON Web Tokens)
- **Language**: TypeScript

## Getting Started

### Prerequisites
- Node.js 18+ installed
- MongoDB instance (local or cloud)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
Copy `.env.example` to `.env.local` and update with your values:
```bash
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
ADMIN_EMAIL=admin@cafe.com
ADMIN_PASSWORD=YourSecurePassword123!
```

3. Seed the database:
```bash
npm run seed
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

### Admin Access
- Navigate to `/admin/login`
- Use credentials from `.env.local`

## Project Structure

```
cafe/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── admin/             # Admin panel pages
│   ├── about/             # About page
│   ├── menu/              # Menu page
│   ├── gallery/           # Gallery page
│   ├── contact/           # Contact page
│   └── page.tsx           # Home page
├── components/            # Reusable components
├── lib/                   # Utilities (DB, auth)
├── models/                # MongoDB models
├── public/                # Static assets
└── scripts/               # Database seeding
```

## API Routes

### Public Routes
- `GET /api/menu` - Get all menu items
- `POST /api/reservations` - Create reservation

### Protected Routes (require JWT token)
- `POST /api/menu` - Create menu item
- `PUT /api/menu/[id]` - Update menu item
- `DELETE /api/menu/[id]` - Delete menu item
- `GET /api/reservations` - Get all reservations
- `PUT /api/reservations/[id]` - Update reservation status

### Auth Routes
- `POST /api/auth/login` - Admin login
- `POST /api/auth/verify` - Verify JWT token

## Environment Variables

| Variable | Description |
|----------|-------------|
| `MONGODB_URI` | MongoDB connection string |
| `JWT_SECRET` | Secret key for JWT tokens |
| `ADMIN_EMAIL` | Admin user email |
| `ADMIN_PASSWORD` | Admin user password |
| `NEXT_PUBLIC_SITE_URL` | Site URL (default: http://localhost:3000) |

## Production Deployment

1. Build the application:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```

## License

This project is for demonstration purposes.
