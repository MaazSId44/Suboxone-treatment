/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-teal": "linear-gradient(to bottom right, #15977F, #095D7F)",
      },
      colors: {
        primary: "#49C7AB",
        customWhite: "#F1F5F9",
        customBlack: "#1E293B",
        customGray: "#475569",
      },
      screens: {
        "3xl": "1340px",
        "4xl": "1920px",
        "5xl": "2560px",
      },
      boxShadow: {
        "custom-shadow": "0px 10px 30px 0px rgba(0, 0, 0, 0.06)",
      },
    },
  },
  plugins: [],
};
