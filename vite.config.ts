import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  base: "/Mentoro/",
  resolve: {
    alias: [
      { find: "@", replacement: "src" },
      // "@comp/*": ["./src/components/*"],
      // "@route/*": ["./src/routes"],
      // "@layout/*": ["./src/routes/layouts/*"],
      // "@page/*": ["./src/routes/pages/*"],
      // "@style/*": ["./src/styles/*"],
      // "@valtio/*": ["./valtio/*"]
    ],
  },
});
