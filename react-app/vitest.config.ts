import { defineConfig } from 'vitest/config';
import path from 'path';


export default defineConfig({
  test: {
    watch: true,
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupTests.ts',
    coverage: {

      include: ['**/src/components/**/*.{js,jsx,ts,tsx}'],
      exclude: ['**/src/components/**/*.{types,stories,constants,test,spec}.{tsx,ts}'],
      thresholds: {
        branches: 80,
        functions: 80,
        lines: 80,
        statements: -10,
      }
    }
  },
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, './src')
    },
  },
})