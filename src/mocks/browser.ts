/**
 * This file sets up a Service Worker using the Mock Service Worker (MSW) library for browser environments. It imports the necessary functions from MSW and the request
 * handlers defined in the 'handlers' module. The setupWorker function is called with the spread operator to pass all the handlers to configure the Service Worker.
 * This allows the application to intercept and mock network requests based on the defined handlers, which is useful for testing and development purposes without relying on actual backend services.
 */
import { setupWorker } from 'msw/browser';
import { handlers } from './handlers';

// This configures a Service Worker with the given request handlers
export const worker = setupWorker(...handlers);
