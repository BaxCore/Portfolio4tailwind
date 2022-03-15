module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    colors: {
      'blackb': '#000000',
     'grays': '#d1d5db',
    },
    extend: {
      backgroundImage: {
        'mybg': "url('./public/img/spbw.jpg')",
        'footer-texture': "url('./img/footer-texture.png')",
      }
    },
  },
  plugins: [],
}
