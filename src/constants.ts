/**
 * This file defines various constants used throughout the application, including configuration settings for Okta authentication, environment variables, API base URL, and available languages.
 */
import { LanguageType } from 'livingston-npm-components';

export const OktaEnabled = import.meta.env.VITE_OKTA_ENABLED && import.meta.env.VITE_OKTA_ENABLED === 'true' ? true : false;

console.log('Okta enabled:', OktaEnabled);
console.log('Env Okta enabled: [' + import.meta.env.VITE_OKTA_CLIENT_ID + ']');

export const ENV_NAME = import.meta.env.VITE_ENV_NAME || 'dev';
export const DIGITAL_DESIGN_ASSETS =
    import.meta.env.VITE_ENV_NAME === 'dev' ? 'https://dds-react-wiki-dev.livingston.com' : 'https://dds-react-wiki.livingston.com';

// Define your API base URL - this should match what you use in your actual API
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://api.example.com';

export const LOCALSTORAGE_LANGUAGE_CODE_KEY = 'languageCode';
export const AVAILABLE_LANGUAGES: LanguageType[] = [
    { code: 'en', label: 'English' },
    { code: 'fr', label: 'Français' },
    { code: 'es', label: 'Español' }
];
