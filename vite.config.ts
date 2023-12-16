import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  // 開發中、產品路徑
  base:
    process.env.NODE_ENV === "production"
      ? "/hotel-booking-website-2024/"
      : "/",
  plugins: [react()],
});