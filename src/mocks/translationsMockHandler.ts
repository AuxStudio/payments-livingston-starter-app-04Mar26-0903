/**
 * This file defines a request handler for the Mock Service Worker (MSW) that simulates an API endpoint for fetching translations.
 * The handler processes GET requests to the '/translations' endpoint, extracts query parameters for language and application, and returns mock translation data
 * with a random delay to mimic real network conditions. The handler also includes error handling to simulate occasional server errors and validates the presence of required parameters.
 * The mock translation data is loaded from a local JSON file, and the response is structured to ensure that all expected languages are included, even if some are missing from the mock data.
 */
import { HttpResponse, delay } from 'msw';
import mockTranslations from './mockData/translationsData.json';
import { LanguageCode } from 'livingston-npm-components';
import { TranslationsData } from '@/types';

// Helper function to generate random delay between 1 and 5 seconds
const getRandomDelay = () => {
    // Returns milliseconds between 1000 (1 second) and 5000 (5 seconds)
    return 1000 + Math.random() * 4000;
};

export const getTranslations = async ({ request }: { request: Request }) => {
    // Get language code from query params
    const url = new URL(request.url);
    const languageCode = (url.searchParams.get('language') as LanguageCode) || 'en';
    const application = url.searchParams.get('application');
    // Validate request params
    if (!application) {
        return new HttpResponse(JSON.stringify({ message: 'Missing application parameter' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' }
        });
    }

    const delayTime = getRandomDelay();
    console.log(`🔶 Mocking api: ${request.url}. LanguageCode: ${languageCode}. Delay: ${Math.round(delayTime / 1000)} seconds`);
    await delay(delayTime);

    // Occasional error simulation (10% chance)
    if (Math.random() < 0.1) {
        return new HttpResponse(JSON.stringify({ message: 'Server error occurred' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }

    // Load and process mock data
    try {
        const data = mockTranslations as unknown as TranslationsData;

        // Ensure all required languages exist in the mock data
        const fullData: TranslationsData = {
            en: data.en || {},
            fr: data.fr || {},
            es: data.es || {}
        };

        return HttpResponse.json(fullData, { status: 200 });
    } catch (error) {
        return HttpResponse.json({ message: 'Failed to load translations' }, { status: 500 });
    }
};
