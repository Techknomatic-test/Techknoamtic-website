import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import type {Plugin} from 'vite';
import {defineConfig, loadEnv} from 'vite';

const devIndexPlugin = (): Plugin => ({
  name: 'dev-index',
  configureServer(server) {
    server.middlewares.use((req, _res, next) => {
      if (req.url === '/' || req.url === '/index.html') {
        req.url = '/index.dev.html';
      }
      next();
    });
  },
});

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    base: mode === 'production' ? '/Techknoamtic-website/docs/' : '/',
    plugins: [react(), tailwindcss(), ...(mode === 'development' ? [devIndexPlugin()] : [])],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      rollupOptions: {
        input: path.resolve(__dirname, 'index.dev.html'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
