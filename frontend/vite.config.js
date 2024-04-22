import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // base: "https://pmsbackend-wzvr.onrender.com",
  server: {
    proxy: {
      "/api": {
        target: "https://pmsbackend-wzvr.onrender.com",
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  plugins: [react()],
});
