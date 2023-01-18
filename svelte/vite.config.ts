import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  resolve: {
    alias: {
      $actions: resolve("./src/actions"),
      $assets: resolve("./src/assets"),
      $components: resolve("./src/components"),
      $stores: resolve("./src/stores"),
      $types: resolve("./src/types"),
      $utils: resolve("./src/utils"),
    },
  },
});
