import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "https://pmsbackend-wzvr.onrender.com/",
  server: {
    proxy: {
      "/api": {
        target: "https://pmsbackend-wzvr.onrender.com",
        secure: false,
        changeOrigin: true,
      },
    },
  },
  plugins: [react()],
});
