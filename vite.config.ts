import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        port: 3000
    },
    resolve: {
        alias: {
            '@': '/src'
        }
    },
    define: {
        __BUILD_DATE__: JSON.stringify(new Date().toISOString())
    }
});
