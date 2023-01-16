module.exports = {
  content: ["./src/**/*.{js,jsx,tx,tsx}"],
  theme: {
    extend: {
      colors:{
        body: "#0b0920",
        para: "#ebebeb",
        subbrand: "#e0147abb",
      },
      fontFamily: {
        title: ['Oswald', 'sans-serif'],
        para: ['Open Sans', 'sans-serif'],
        style: ['Pacifico', 'cursive'],
      },
      maxWidth: {
        container: '1185px',
      }
    },
  },
  plugins: [],
}