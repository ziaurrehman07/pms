import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  server: {
    // proxy: {
    //   "/api": {
    //     target: "https://pmsservice.onrender.com",
    //     secure: false,
    //     changeOrigin: true,
    //   },
    // },
  },
  plugins: [react()],
});
