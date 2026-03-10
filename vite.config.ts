import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // ensures it listens on all interfaces
    watch: {
      usePolling: true,       // <--- important
      interval: 100,          // check every 100ms
    },
  },
});