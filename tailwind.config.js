/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        navy: {
          50: '#f0f4fa',
          100: '#dce5f1',
          200: '#c4d4e8',
          300: '#9fb8d8',
          400: '#6f93c0',
          500: '#4d73a8',
          600: '#3a5a8c',
          700: '#2e4770',
          800: '#1e3258',
          900: '#152443',
          950: '#0d1830',
        },
        brand: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        accent: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7e22ce',
        },
      },
      boxShadow: {
        soft: '0 2px 8px -2px rgba(30, 50, 88, 0.08), 0 4px 16px -4px rgba(30, 50, 88, 0.06)',
        card: '0 1px 3px -1px rgba(30, 50, 88, 0.06), 0 8px 24px -8px rgba(30, 50, 88, 0.08)',
        lift: '0 4px 12px -2px rgba(30, 50, 88, 0.10), 0 16px 40px -12px rgba(30, 50, 88, 0.12)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'float-slow': 'floatSlow 6s ease-in-out infinite',
        'pulse-slow': 'pulseSlow 4s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '0.9' },
        },
      },
    },
  },
  plugins: [],
};
