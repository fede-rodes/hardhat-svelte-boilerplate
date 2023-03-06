import "../src/styles/app.css";

export const decorators = [
  (Story, { globals }) => {
    console.log({ globals });
    const themeMode =
      globals?.backgrounds?.value == null ||
      globals.backgrounds.value === "#F8F8F8"
        ? "light"
        : "dark";

    themeMode === "light"
      ? window.document.documentElement.classList.remove("dark")
      : window.document.documentElement.classList.add("dark");

    return Story;
  },
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
