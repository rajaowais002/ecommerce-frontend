export default {
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: './index.html' // Points to your HTML file
      }
    }
  }
}
// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import path from 'path';
// import { fileURLToPath } from 'url';

// const __dirname = path.dirname(fileURLToPath(import.meta.url));

// export default defineConfig({
//   plugins: [react({
//     jsxRuntime: 'automatic'
//   })],
//   resolve: {
//     alias: {
//       // Correct paths for React 19 and latest packages
//       'react-router-dom': path.resolve(__dirname, 'node_modules/react-router-dom'),
//       'react-toastify': path.resolve(__dirname, 'node_modules/react-toastify')
//     }
//   },
//   optimizeDeps: {
//     include: [
//       'react',
//       'react-dom',
//       'react-router-dom',
//       'react-toastify',
//       'react/jsx-runtime'
//     ],
//     esbuildOptions: {
//       loader: {
//         '.js': 'jsx'
//       }
//     }
//   },
//   build: {
//     target: 'esnext',
//     rollupOptions: {
//       external: [],
//       output: {
//         manualChunks: {
//           'react-vendor': ['react', 'react-dom', 'react/jsx-runtime'],
//           'router': ['react-router-dom'],
//           'toast': ['react-toastify']
//         }
//       }
//     }
//   }
// });