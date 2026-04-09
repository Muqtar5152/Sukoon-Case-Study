import Muqtar from "@Muqtar/vite-plugin"
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isGithubActions = process.env.GITHUB_ACTIONS === 'true';

// https://vite.dev/config/
export default defineConfig({
  base: isGithubActions ? '/Sukoon-Case-Study/' : '/',
  plugins: [
    Muqtar({
      // Support for legacy code that imports the Muqtar SDK with @/integrations, @/entities, etc.
      // can be removed if the code has been updated to use the new SDK imports from @Muqtar/sdk
      legacySDKImports: process.env.Muqtar_LEGACY_SDK_IMPORTS === 'true',
      hmrNotifier: true,
      navigationNotifier: true,
      analyticsTracker: true,
      visualEditAgent: true
    }),
    react(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
});