/**
 * This file defines a custom hook, useTranslation, which provides a function for translating keys into their corresponding phrases based on the selected language.
 * The hook uses the useTranslationsQuery to fetch translation data from the backend and the useAppSelector to access the currently selected language code from the Redux store.
 * The translate function takes a key and optional substitutions and language code, retrieves the appropriate translation, and replaces any placeholders with the provided substitutions.
 * If a translation is not found or an error occurs, it returns a fallback string indicating the issue.
 */
import { useTranslationsQuery } from '@/store/api/translationsApi';
import { useAppSelector } from '@/store/hooks';
import { LanguageCode } from 'livingston-npm-components';
import { useCallback } from 'react';

interface UseTranslationOptions {
    substitutions?: (string | number)[];
    languageCode?: LanguageCode;
}

export type TranslateFunction = (key: string, options?: UseTranslationOptions) => string;

export const useTranslation = (): TranslateFunction => {
    const { selectedLanguageCode } = useAppSelector((state) => state.language);
    const { data } = useTranslationsQuery({ languageCode: selectedLanguageCode });

    const translate = useCallback(
        (key: string, options: UseTranslationOptions = {}) => {
            const { substitutions = [] } = options;

            let languageCode = selectedLanguageCode;
            if (options.languageCode) {
                languageCode = options.languageCode;
            }

            try {
                if (!data || (languageCode !== 'en' && languageCode !== 'fr' && languageCode !== 'es')) {
                    return key;
                }

                // Get the specific translation for the key
                const translatedPhrase = data[languageCode][key];
                if (!translatedPhrase) {
                    return `Untranslated: [${key}]`;
                }

                // If we have substitutions, replace the placeholders
                if (substitutions.length > 0) {
                    return translatedPhrase.trim().replace(/{(\d+)}/g, (match, index) => substitutions[index]?.toString() || match);
                }

                // Return the trimmed translation
                return translatedPhrase.trim();
            } catch (error) {
                console.error('Translation error:', error);
                return `Error: [${key}]`;
            }
        },
        [data, selectedLanguageCode]
    );

    return translate;
};
