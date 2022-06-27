module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        circles: "var(--circles)"
      },
      
      textColor: {
        "todos-text": "var(--text-todos)",
        "hover-text": "var(--text-hover)",
        line: "var(--line)",
        completed: "var(--completed)",
        skin: {
          text: "var(--text)",
          blue: "var(--blue)"
        }
      },

      backgroundColor: {
        skin: {
          base: "var(--bg-base)",
          todos: "var(--bg-todos)",
          circles: "var(--circles)"
        }
      },

      backgroundImage: {
        'desktop-dark': "url('../assets/images/bg-desktop-dark.jpg')",
        'desktop-light': "url('../assets/images/bg-desktop-light.jpg')",
        'mobile-dark': "url('../assets/images/bg-mobile-dark.jpg')",
        'mobile-light': "url('../assets/images/bg-mobile-light.jpg')",
        'icon-check': "url('../assets/images/icon-check.svg')",
        'icon-close': "url('../assets/images/icon-cross.svg')",
      },
      
      screens: {
        'movil': '375px'
      }
    },
  },
  plugins: [],
}