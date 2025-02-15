/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/2024_s1',
  cors: true,
  server: {
    watch: {
      usePolling: true,
    },
  },
});
