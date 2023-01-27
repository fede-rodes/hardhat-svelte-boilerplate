const { resolve } = require("path");
const { mergeConfig } = require("vite"); // use `mergeConfig` to recursively merge Vite options;

module.exports = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx|svelte)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/svelte-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  // For tighter Vite integration
  async viteFinal(config, { configType }) {
    // return the customized config
    return mergeConfig(config, {
      // customize the Vite config here
      resolve: {
        alias: {
          /**
           * Reminder to ensure aliases are also added here:
           * 1. .storybook/main.cjs
           * 2. tsconfig.json
           * 3. vite.config.ts
           */
          "@actions": resolve("./src/actions"),
          "@assets": resolve("./src/assets"),
          "@components": resolve("./src/components"),
          "@stores": resolve("./src/stores"),
          "@types": resolve("./src/types"),
          "@utils": resolve("./src/utils"),
          "@styles": resolve("./src/styles"),
          "@artifacts": resolve("./src/artifacts"),
        },
      },
    });
  },
};
