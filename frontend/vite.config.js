import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "https://pmsfrontend-563q.onrender.com",
  server: {
    proxy: {
      "/api": {
        target: "https://pmsbackend-wzvr.onrender.com",
        changeOrigin: true,
      },
    },
  },
  plugins: [react()],
});
