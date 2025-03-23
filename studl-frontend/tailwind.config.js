/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        portal: "#eef4ff",   // Light Blue
        primary: "#1e3a8a",      // College Navy Blue
        secondary: "#facc15",    // Academic Yellow
        accent: "#f8fafc",       // Light Background
      },
    },
  },
  plugins: [],
};
