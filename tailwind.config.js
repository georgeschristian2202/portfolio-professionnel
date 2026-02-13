export default {
  content: ["./index.html","./src/**/*.{vue,js,ts}"],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1280px'
      }
    },
    extend: {
      colors: {
        bg: 'var(--bg)',
        bg2: 'var(--bg2)',
        text: 'var(--text)',
        border: 'var(--border)',
        main: 'var(--main)'
      }
    }
  },
  plugins: [],
}
