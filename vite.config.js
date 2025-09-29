import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    base: './', // This is the most important line for deployment
    build: {
        outDir: 'dist',
        assetsDir: 'assets'
    }
})