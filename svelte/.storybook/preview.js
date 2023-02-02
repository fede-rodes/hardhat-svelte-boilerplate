import "../src/styles/app.css";

// export const decorators = [
//   (Story, { globals }) => {
//     const themeMode =
//       globals?.backgrounds?.value == null ||
//       globals.backgrounds.value === "#F8F8F8"
//         ? "light"
//         : "dark";

//     document.documentElement.setAttribute("data-theme", themeMode);

//     return <Story />;
//   },
// ];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
