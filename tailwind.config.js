export default {
  content: ["./index.html","./src/**/*.{vue,js,ts}"],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1280px' // verrouille à 1280 pour avoir le même rendu que ta 1ère image
      }
    },
    darkMode: 'class',

    extend: {
      colors:{ bg:"#1f242d", bg2:"#323946", text:"#ffffff", main:"#00eeff" }
    }
  },
  plugins: [],
}
