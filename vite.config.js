import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    base: './',
    build: {
        outDir: 'dist',
        assetsDir: 'assets'
    },
    optimizeDeps: {
        include: ['bootstrap'] // if using Bootstrap
    },
    define: {
        // Global settings if needed
        'process.env': {}
    }
})