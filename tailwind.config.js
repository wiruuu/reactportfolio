import typography from "@tailwindcss/typography";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [
    // any other plugins first
    typography, // 👈 keep this last
  ],
};
