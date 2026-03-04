/**
 * This file provides utility functions for managing language preferences in local storage.
 */
import { AVAILABLE_LANGUAGES, LOCALSTORAGE_LANGUAGE_CODE_KEY } from '@/constants';
import { LanguageCode } from 'livingston-npm-components';

export const getSelectedLanguageCode = () =>
    (localStorage.getItem(LOCALSTORAGE_LANGUAGE_CODE_KEY) as LanguageCode) || AVAILABLE_LANGUAGES[0].code;
export const setSelectedLanguageCode = (languageCode: LanguageCode) => localStorage.setItem(LOCALSTORAGE_LANGUAGE_CODE_KEY, languageCode);
