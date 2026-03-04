/**
 * This file defines the types related to translations used in the application. The TranslationLabel interface represents a mapping of
 * translation keys to their corresponding translated strings for a specific language.
 */
interface TranslationLabel {
    [key: string]: string; // e.g., "EnterEmailAddress_Label": "Enter your email address"
}

export interface TranslationsData {
    en: TranslationLabel;
    fr: TranslationLabel;
    es: TranslationLabel;
}
