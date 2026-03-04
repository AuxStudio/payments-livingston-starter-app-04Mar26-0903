/**
 * This file defines the API endpoints for managing clearance data in the application. It uses the RTK Query API slice to create a query for fetching clearance data from the backend.
 * The clearances endpoint is defined as a GET request to the '/list/clearances' URL, and it provides tags for cache management. The useLazyClearancesQuery hook is exported for use
 * in components that need to fetch clearance data on demand.
 */
import { Clearance } from '@/types';
import { apiSlice } from './apiSlice';

export const clearancesApi = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        clearances: build.query<Clearance[], void>({
            query: () => ({
                url: '/list/clearances',
                method: 'GET'
            }),
            providesTags: (_result, _error) => [{ type: 'Clearances' as const, id: 'LIST' }]
        })
    })
});

export const { useLazyClearancesQuery } = clearancesApi;
