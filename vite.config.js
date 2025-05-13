import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// https://vite.dev/config/
export default defineConfig({
  base: '/login-remote-app/',
  plugins: [react(),
    federation({
      name:'loginApp',
      filename:'remoteEntry.js',
      exposes:{
        './Login': './src/Login.jsx'
      },
      shared:['react', 'react-dom']
    })
  ],
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  }
})
