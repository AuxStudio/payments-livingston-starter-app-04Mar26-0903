/**
 * This file defines the API endpoints for managing translation data in the application. It uses the RTK Query API slice to create a query for fetching translations from the backend.
 * The translations endpoint is defined as a GET request to the '/translations' URL, with query parameters for the application and language code. It provides tags for cache management,
 * allowing the application to efficiently manage translation data based on the selected language. The useTranslationsQuery hook is exported for use in components that need to fetch
 * translation data, enabling internationalization support throughout the application.
 */
import { TranslationsData } from '@/types';
import { apiSlice } from './apiSlice';
import { LanguageCode } from 'livingston-npm-components';

export const translationsApi = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        translations: build.query<TranslationsData, { languageCode: LanguageCode }>({
            query: ({ languageCode }) => ({
                url: '/translations',
                params: {
                    application: 'starter-app',
                    language: languageCode
                }
            }),
            providesTags: (_result, _error, { languageCode }) => [{ type: 'Translations' as const, id: languageCode }]
        })
    })
});

export const { useTranslationsQuery } = translationsApi;
