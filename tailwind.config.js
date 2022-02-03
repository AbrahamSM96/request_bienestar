module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        morenaBold: "#621132",
        morenaLigth: "#9D2449",
        pantone504brown: "#4E232E",
        pantone490brown: "#56242a",
        pantone627green: "#13322B",
        pantone626green: "#285c4d",
        pantone465cream: "#B38E5D",
        pantone468cream: "#D4C19C",
      },
    },
  },
  plugins: [],
  variants: {
    extend: {
      opacity: ["disabled"],
    },
  },
};
