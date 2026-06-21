/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#08080a',
          900: '#0d0d10',
          850: '#131318',
          800: '#1a1a20',
          700: '#232329',
          600: '#2e2e36',
        },
        red: {
          50: '#fff0f0',
          100: '#ffd9d9',
          200: '#ffb0b0',
          300: '#ff7878',
          400: '#ff2d2d',
          500: '#e50000',
          600: '#b80000',
          700: '#8f0000',
          800: '#6b0000',
          900: '#4d0000',
        },
        steel: {
          300: '#c9c9cf',
          400: '#8b8b94',
          500: '#5b5b63',
        },
        ember: {
          400: '#ff7a3d',
          500: '#ff5a1f',
          600: '#e0430c',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Bebas Neue"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 40px -10px rgba(229, 0, 0, 0.45)',
        card: '0 12px 40px -12px rgba(0,0,0,0.7)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out both',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'spin-slow': 'spin 14s linear infinite',
        shimmer: 'shimmer 2.5s linear infinite',
        'car-slide': 'carSlide 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        carSlide: {
          '0%': { opacity: '0', transform: 'translateX(60px) scale(0.95)' },
          '15%': { opacity: '1', transform: 'translateX(0) scale(1)' },
          '85%': { opacity: '1', transform: 'translateX(0) scale(1)' },
          '100%': { opacity: '0', transform: 'translateX(-60px) scale(0.95)' },
        },
      },
    },
  },
  plugins: [],
};
