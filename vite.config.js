import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Updated path for react-router-dom v7
      'react-router-dom': 'react-router-dom',
    }
  },
  optimizeDeps: {
    include: [
      'react-router-dom',
      'react-toastify',
      'react/jsx-runtime'
    ]
  },
  build: {
    rollupOptions: {
      external: [], // Ensure nothing is externalized
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react/jsx-runtime'],
          'router': ['react-router-dom'],
          'toast': ['react-toastify']
        }
      }
    }
  }
});