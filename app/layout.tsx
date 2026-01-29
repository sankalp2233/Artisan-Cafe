import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Artisan Cafe - Premium Coffee & Dining Experience",
    description: "Experience the finest artisan coffee, delicious food, and warm ambiance at Artisan Cafe. Reserve your table today!",
    keywords: "cafe, coffee, restaurant, artisan, dining, reservations",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
