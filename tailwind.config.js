/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './_includes/**/*.{html,js,md}',
    './_layouts/**/*.{html,js,md}',
    './_*/*.{html,js,md}',
    './*.{html,js,md}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        body: ['Poppins', 'sans-serif'],
      },
      spacing: {
        '5p': '5%',
        '10p': '10%',
        '15p': '15%',
      },
      aspectRatio: {
        'landscape': '2 / 1 ',
        'portrait': '3 / 4',
        'portrait-tall': '3 / 5',
      },
      minHeight:{
        '100': '100vh',
        '90': '90vh',
        '80': '80vh',
        '70': '70vh',
        '60': '60vh',
        '50': '50vh',
      },
      colors:{
      }
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#e2bcaf",
          "secondary": "#eacfc4",
          "accent": "#6d051",
          "neutral": "#fff5f5",
          "base-100": "#366661",
					"info": "#05403a"
        },
      },
      "light",
      "dark",
    ],
  },
  plugins: [
    require('@tailwindcss/typography'),
    require("daisyui"),
  ],
}