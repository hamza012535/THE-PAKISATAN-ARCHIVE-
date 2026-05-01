/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'news-paper': '#f8f5f0',
        'news-dark': '#1a1a1a',
        'news-gray': '#4a4a4a',
        'news-accent': '#8b0000',
        'news-border': '#d4d0c8',
      },
      fontFamily: {
        'serif': ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
        'sans': ['Helvetica Neue', 'Arial', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#1a1a1a',
            a: {
              color: '#8b0000',
              '&:hover': {
                color: '#a00000',
              },
            },
          },
        },
      },
    },
  },
  plugins: [],
}