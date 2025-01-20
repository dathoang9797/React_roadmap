import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import path from 'path';
import crypto from 'crypto';

// Unit tests
// Integration test
// E2E tests

// https://vite.dev/config/
export default defineConfig({
  css: {
    modules: {
      generateScopedName: (className, filePath) => {
        const folderName = path.basename(path.dirname(filePath));
        const hash = crypto
          .createHash('sha256')
          .update(folderName.concat(className))
          .digest('hex')
          .substring(0, 5)
        return `${folderName}__${className}__${hash}`
      },
    },
  },
  plugins: [
    react(),
    tsconfigPaths()
  ],
})
