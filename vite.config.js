import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
    plugins: [
        react(),
        VitePWA({
            /* plugin options */
        }),
    ],
    server: {
        proxy: {
            "/firebase": {
                target: "https://firebase.googleapis.com",
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/firebase/, ""),
            },
        },
    },
});
