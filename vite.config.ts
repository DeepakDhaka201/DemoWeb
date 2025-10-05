import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      server: {
        port: 5174,
<<<<<<< HEAD
        allowedHosts: [
          'kalyan.samrat777.in',
          'samrat777.in',
          'www.samrat777.in',
          'localhost',
          '127.0.0.1'
        ]
=======
        host: true
>>>>>>> b673f0a9d6e799999730d583e3b37c8e1c52c701
      }
    };
});
