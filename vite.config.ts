import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  // 開發中、產品路徑
  base:
    process.env.NODE_ENV === "production"
      ? "/hotel-booking-website-2024/"
      : "/",
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        // svgr options
      },
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
      api: resolve(__dirname, "./src/api"),
      pages: resolve(__dirname, "./src/pages"),
      plugins: resolve(__dirname, "./src/plugins"),
      assets: resolve(__dirname, "./src/assets"),
      modules: resolve(__dirname, "./src/modules"),
      components: resolve(__dirname, "./src/components"),
      utils: resolve(__dirname, "./src/utils"),
      helpers: resolve(__dirname, "./src/helpers"),
      services: resolve(__dirname, "./src/services"),
      hooks: resolve(__dirname, "./src/hooks"),
      axiosConfig: resolve(__dirname, "./src/axios.config.ts"),
      constants: resolve(__dirname, "./src/constants"),
      routes: resolve(__dirname, "./src/routes"),
      theme: resolve(__dirname, "./src/theme"),
      machines: resolve(__dirname, "./src/machines"),
      "@type": resolve(__dirname, "./src/@type"),
    },
  },
});
