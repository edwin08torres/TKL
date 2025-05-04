// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";   // ⬅️  añade esto

export default defineConfig({
  plugins: [react(), tailwindcss()],           // ⬅️  y aquí
});
