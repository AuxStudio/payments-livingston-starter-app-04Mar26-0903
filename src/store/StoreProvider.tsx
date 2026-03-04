/**
 * This file defines the StoreProvider component, which is responsible for providing the Redux store to the React application.
 * It uses the Provider component from react-redux to wrap the application and pass down the store instance. The store is created using a custom makeStore function, and
 * a ref is used to ensure that the store instance is only created once. Additionally, a useEffect hook is included to log the latest state of the store whenever the component mounts or
 * updates, allowing for easier debugging and state tracking during development.
 */
'use client';
import { useEffect, useRef } from 'react';
import { Provider } from 'react-redux';
import { makeStore, AppStore } from './store';

export default function StoreProvider({ children }: { children: React.ReactNode }) {
    const storeRef = useRef<AppStore>();
    if (!storeRef.current) {
        // Create the store instance the first time this renders
        storeRef.current = makeStore();
    }

    useEffect(() => {
        if (!storeRef.current) {
            return;
        }
        // Log the latest state whenever the component mounts or updates
        const unsubscribe = storeRef.current.subscribe(() => {
            console.log('Latest state:', storeRef.current!.getState());
        });

        // Cleanup subscription on unmount
        return () => unsubscribe();
    }, []);

    return <Provider store={storeRef.current}>{children}</Provider>;
}
