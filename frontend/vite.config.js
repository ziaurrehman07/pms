import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "process.env.TARGET_URL",
        secure: false,
        changeOrigin: true,
      },
    },
  },
  plugins: [react()],
});
