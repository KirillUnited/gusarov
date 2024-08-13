const { fontFamily } = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,njk}"],
  theme: {
    container: {
      center: true,
      padding: '24px'
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
        foreground: 'hsl(var(--foreground))'
      },
    },
  },
  plugins: [],
}

