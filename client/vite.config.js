import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// Saat development, request /api diteruskan ke backend Express (port 3000)
export default defineConfig({ plugins: [react()], server: { proxy: { '/api': 'http://localhost:3000' } } });
