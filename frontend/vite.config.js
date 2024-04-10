import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "https://pmsbackend-2iax.onrender.com",
  server: {
    proxy: {
      "/api": {
        target: "https://pmsbackend-2iax.onrender.com",
        changeOrigin: true,

      },
    },
  },
  plugins: [react()],
});
