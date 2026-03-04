/**
 * This is the entry point of the Livingston Starter App. It initializes the application by setting up mock APIs, rendering the main App component within a StrictMode wrapper,
 * and providing a global StoreProvider for state management. Additionally, it includes a Toaster component for displaying notifications throughout the app.
 */
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import StoreProvider from '@/store/StoreProvider';

import initMocks from './mocks';
import { Toaster } from 'livingston-npm-components';

(async () => {
    await initMocks(); // See https://mswjs.io/docs/getting-started

    createRoot(document.getElementById('root')!).render(
        <StrictMode>
            <StoreProvider>
                <App />
                <Toaster />
            </StoreProvider>
        </StrictMode>
    );
})();
