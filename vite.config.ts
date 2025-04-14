import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["create.jpg", "join.jpg", "icon.svg"],
      manifest: {
        name: "Numeritos",
        short_name: "Numeritos",
        description: "Jueguito de los numeritos, adivina cual es el mío",
        theme_color: "#111524",
        icons: [
          { src: "icon.svg", sizes: "192x192", type: "image/png" },
          { src: "icon.svg", sizes: "512x512", type: "image/png" },
        ],
      }
    })
  ],
});
