import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

// Ensure we're using the correct directory for the build
const rootDir = process.cwd();
const clientDir = path.join(rootDir, 'client');
const distDir = path.join(rootDir, 'dist/client');

// Only import development plugins in development
const devPlugins = [];

if (process.env.NODE_ENV !== 'production') {
  try {
    const { default: runtimeErrorOverlay } = await import('@replit/vite-plugin-runtime-error-modal');
    devPlugins.push(runtimeErrorOverlay());
    
    if (process.env.REPL_ID) {
      const { cartographer } = await import('@replit/vite-plugin-cartographer');
      devPlugins.push(cartographer());
    }
  } catch (e: unknown) {
    const error = e as Error;
    console.warn('Could not load development plugins:', error.message);
  }
}

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    ...devPlugins,
  ],
  resolve: {
    alias: {
      "@": path.resolve(clientDir, "src"),
      "@shared": path.resolve(rootDir, "shared"),
      "@assets": path.resolve(rootDir, "attached_assets"),
    },
  },
  root: clientDir,
  build: {
  outDir: distDir,
  emptyOutDir: true,
  manifest: true,
  rollupOptions: {
    input: "index.html", // ✅ relative to root
  },
},
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
