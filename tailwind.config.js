/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background-primary)',
        foreground: 'var(--text-primary)',
        accent: {
          primary: 'var(--accent-primary)',
          secondary: 'var(--accent-secondary)',
          tertiary: 'var(--accent-tertiary)',
        },
        gray: {
          50: 'var(--gray-50)',
          100: 'var(--gray-100)',
          200: 'var(--gray-200)',
          300: 'var(--gray-300)',
          400: 'var(--gray-400)',
          500: 'var(--gray-500)',
          600: 'var(--gray-600)',
          700: 'var(--gray-700)',
          800: 'var(--gray-800)',
          900: 'var(--gray-900)',
        }
      },
      backgroundColor: {
        primary: 'var(--background-primary)',
        secondary: 'var(--background-secondary)',
        tertiary: 'var(--background-tertiary)',
      },
      textColor: {
        primary: 'var(--text-primary)',
        secondary: 'var(--text-secondary)',
        tertiary: 'var(--text-tertiary)',
      },
      borderColor: {
        light: 'var(--border-light)',
        medium: 'var(--border-medium)',
        dark: 'var(--border-dark)',
      },
      animation: {
        'expand-width': 'expandWidth 0.3s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'spin-slow': 'spin 3s linear infinite',
        'gradient-x': 'gradientX 3s ease infinite',
        'fly-in': 'flyIn 0.5s ease-out',
        'fade-in': 'fadeIn 0.3s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        expandWidth: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        gradientX: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        flyIn: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}