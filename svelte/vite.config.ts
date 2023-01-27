import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  resolve: {
    alias: {
      "@actions": path.resolve("./src/actions"),
      "@assets": path.resolve("./src/assets"),
      "@components": path.resolve("./src/components"),
      "@stores": path.resolve("./src/stores"),
      "@types": path.resolve("./src/types"),
      "@utils": path.resolve("./src/utils"),
      "@styles": path.resolve("./src/styles"),
      "@artifacts": path.resolve("./src/artifacts"),
    },
  },
});
