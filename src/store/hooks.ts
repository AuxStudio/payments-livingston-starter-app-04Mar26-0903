/**
 * Custom hooks for accessing the Redux store. These hooks provide typed versions of the standard useDispatch, useSelector, and useStore hooks from React Redux,
 * allowing for better type safety and improved developer experience when working with the Redux store in the application. The useAppDispatch hook returns the dispatch
 * function with the correct type for the application's actions, while the useAppSelector hook allows components to select data from the store with proper typing.
 * The useAppStore hook provides access to the entire store instance if needed.
 */
import { useDispatch, useSelector, useStore } from 'react-redux';
import type { RootState, AppDispatch, AppStore } from './store';
import type { TypedUseSelectorHook } from 'react-redux';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppStore: () => AppStore = useStore;
