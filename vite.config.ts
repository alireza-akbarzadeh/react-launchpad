import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), sentryVitePlugin({
    org: "devtools-pk",
    project: "apple-beyound"
  })],

  build: {
    sourcemap: true
  }
});