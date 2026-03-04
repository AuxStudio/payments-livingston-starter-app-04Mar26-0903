/**
 * Initializes the mock API for the application. This function checks if the environment variable VITE_USE_MOCK_API is set to 'false'.
 * If it is not, it imports the Service Worker from the 'browser' module and starts it with specific options.
 * The Service Worker is configured to show more realistic behavior in the browser's Network tab, avoid logging all requests to the console,
 * and bypass any unhandled requests to allow them to reach real APIs. This setup allows developers to use mock data during development and testing without affecting real API endpoints.
 */
const initMocks = async () => {
    if (import.meta.env.VITE_USE_MOCK_API !== 'false') {
        console.log('🔶 Mock API enabled');
        const { worker } = await import('./browser');
        // Start the worker
        await worker.start({
            // Show more realistic behavior in the browser's Network tab
            serviceWorker: {
                url: '/mockServiceWorker.js'
            },
            // Don't log all requests to console
            quiet: true,
            // By default, capture all requests that match one of our mock handlers
            // but pass through any other requests to real APIs
            onUnhandledRequest: 'bypass'
        });
    }
};

export default initMocks;
