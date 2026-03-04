/**
 * This file defines the request handlers for the Mock Service Worker (MSW) used in the application. It imports the necessary functions from MSW and the specific handlers
 * for translations and clearances. The handlers are defined as an array of HTTP GET requests that match specific API endpoints, allowing the application to intercept these
 * requests and return mock responses during development and testing. The API_BASE_URL constant is used to construct the full URL for each endpoint, ensuring that the handlers
 * are correctly configured to match the expected API routes.
 */
// src/mocks/handlers.ts
import { http } from 'msw';
import { getTranslations } from './translationsMockHandler';
import { getClearances } from './clearancesMockHandler';
import { API_BASE_URL } from '@/constants';

export const handlers = [
    http.get(`${API_BASE_URL}/translations`, getTranslations),
    http.get(`${API_BASE_URL}/list/clearances`, getClearances)
];
