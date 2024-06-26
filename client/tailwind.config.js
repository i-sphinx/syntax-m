/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        light: {
          background: "#F8F9FA",
          text: "#212529",
          primary: "#007BFF",
          secondary: "#6C757D",
          accent: "#28A745",
        },
        dark: {
          background: "#343A40",
          text: "#F8F9FA",
          primary: "#0DCAF0",
          secondary: "#6C757D",
          accent: "#198754",
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
