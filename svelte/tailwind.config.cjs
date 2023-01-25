/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(var(--color-primary))",
        "primary-100": "rgb(var(--color-primary-100))",
        body: "rgb(var(--color-body))",
        background: "rgb(var(--color-background))",
        highlight: "rgb(var(--color-highlight))",
        muted: "rgb(var(--color-muted))",
        accent: "rgb(var(--color-accent))",
      },
    },
  },
  plugins: [],
};
