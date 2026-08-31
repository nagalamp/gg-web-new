// tailwind.config.ts
import type { Config } from 'tailwindcss';
import { COLORS, RADIUS, SHADOWS } from './constants/theme';

const config: Config = {
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            colors: COLORS,
            borderRadius: RADIUS,
            boxShadow: SHADOWS,
            fontFamily: {
                heading: ['var(--font-outfit)', 'sans-serif'],
                body: ['var(--font-lexend)', 'sans-serif'],
            },
        },
    },
    plugins: [],
};

export default config;