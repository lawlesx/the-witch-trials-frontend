module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#10081F",
        primary: {
          100: "#F9F8FF",
          200: "#ECE8FF",
          300: "#DCD5FF",
          400: "#A673EF",
          500: "#8247E5",
          600: "#6433C4",
          700: "#4A23A4",
          800: "#331684",
          900: "#220D6D",
        },
        "light-grey": {
          100: "#FAFAFB",
          200: "#F5F6F7",
          300: "#EEEFF2",
          400: "#E2E4E8",
          500: "#CACDD5",
          600: "#B2B7C2",
          700: "#A4A9B6",
          800: "#959CAB",
          900: "#8C93A3",
        },
      },
      backgroundImage: {
        "gradient-1": "linear-gradient(90deg, #9796F0 0%, #FBC7D4 100%)",
      },
      screens: {
        "3xl": "1700px",
      },
    },
  },
  plugins: [],
};
