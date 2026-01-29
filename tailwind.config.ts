import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                cafe: {
                    cream: '#F5F1E8',
                    brown: {
                        50: '#F8F4EE',
                        100: '#EDE5D8',
                        200: '#D9C7B0',
                        300: '#C5A988',
                        400: '#A88B68',
                        500: '#8B6D48',
                        600: '#6F5539',
                        700: '#533D2A',
                        800: '#37261B',
                        900: '#1B130D',
                    },
                    accent: '#D97706', // Warm amber
                    gold: '#F59E0B',
                },
            },
            fontFamily: {
                display: ['Playfair Display', 'serif'],
                sans: ['Inter', 'sans-serif'],
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-in',
                'slide-up': 'slideUp 0.6s ease-out',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
            },
        },
    },
    plugins: [],
};
export default config;
