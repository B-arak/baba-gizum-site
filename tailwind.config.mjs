/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#f3f7f1',
          100: '#e3ecdd',
          200: '#c8d9bc',
          300: '#a5bf94',
          400: '#7fa069',
          500: '#5e8348',
          600: '#476936',
          700: '#38522d',
          800: '#2e4226',
          900: '#1f3a1f',
          950: '#102014'
        },
        sand: {
          50: '#fafaf7',
          100: '#f5f1e8',
          200: '#ece4d2',
          300: '#dccfb1',
          400: '#c8b48a',
          500: '#b89c6c',
          600: '#a78759',
          700: '#8a6d4a'
        },
        accent: {
          500: '#f5c842',
          600: '#dfae2c'
        }
      },
      fontFamily: {
        sans: ['Heebo', 'Rubik', 'system-ui', 'sans-serif'],
        display: ['Heebo', 'Rubik', 'system-ui', 'sans-serif']
      },
      maxWidth: {
        '8xl': '88rem'
      },
      boxShadow: {
        soft: '0 4px 20px -2px rgba(31, 58, 31, 0.08)',
        strong: '0 10px 40px -10px rgba(31, 58, 31, 0.25)'
      }
    }
  },
  plugins: []
};
