/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#4d7c0f",

          secondary: "#166534",

          accent: "#d6d633",

          neutral: "#2A303C",

          "base-100": "#F5F5FA",

          info: "#96C7E4",

          success: "#2AE58D",

          warning: "#C49F0E",

          error: "#F10E3B",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
