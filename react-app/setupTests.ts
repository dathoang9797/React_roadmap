import '@testing-library/jest-dom';
import { server } from './src/mocks/server';
import { beforeAll, afterEach, afterAll } from 'vitest'

// One of the most common uses of MSW in Node.js is with test runners
// like Jest or Vitest. While the general principles of MSW 
// in Node.js still apply there, the test runners expose
// a convenient setup API to enable mocking in the right phases of the test run.
// There are three key steps to integrating MSW with any test runner:

// Enable mocking before all tests run (server.listen());
beforeAll(() => server.listen())

// Reset any request handlers between tests (server.resetHandlers());
afterEach(() => server.resetHandlers())

// Restore native request-issuing modules after all tests run (server.close()).
afterAll(() => server.close())