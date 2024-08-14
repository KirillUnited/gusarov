const { fontFamily } = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,njk}"],
  theme: {
    container: {
      center: true,
      padding: '20px',
      screens: {
        'sm': '540px',
        'md': '720px',
        'lg': '960px',
        'xl': '1140px',
        '2xl': '1320px'
      }
    },
    fontFamily: {
      primary: ['var(--font-primary)', ...fontFamily.sans],
      foreground: ['var(--font-foreground)', ...fontFamily.sans],
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        text: 'var(--text)'
      },
    },
  },
  plugins: [],
}

