/**
 * This component represents a language selector in the application. It allows users to select their preferred language from a dropdown menu. The component uses the LanguageSelector
 * component from the 'livingston-npm-components' library to display the available languages and handle language selection. When a user selects a language, the component dispatches an
 * action to update the selected language code in the application's state and shows a toast notification indicating whether the language change was successful or if it failed. The component
 * also has an optional prop to control the visibility of a sidebar on non-desktop devices after a language change.
 */
import { ButtonType, LanguageType, LanguageSelector as NPMLanguageSelector, toastState } from 'livingston-npm-components';
import { AVAILABLE_LANGUAGES } from '@/constants';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { selectSelectedLanguageCode, setLanguageCode } from '@/store/reducers/languageSlice';
import { useTranslation } from '@/utils/hooks/useTranslation';
import { Dispatch, SetStateAction } from 'react';

type LanguageSelectorProps = {
    setSidebarVisible?: Dispatch<SetStateAction<boolean>>;
    isDesktop?: boolean;
};

export const LanguageSelector = ({ setSidebarVisible, isDesktop }: LanguageSelectorProps) => {
    const dispatch = useAppDispatch();
    const translate = useTranslation();

    const selectedLanguageCode = useAppSelector(selectSelectedLanguageCode);

    return (
        <NPMLanguageSelector
            languages={AVAILABLE_LANGUAGES}
            selectedLanguage={AVAILABLE_LANGUAGES.find((language) => language.code === selectedLanguageCode) || AVAILABLE_LANGUAGES[0]}
            setLanguage={async (selectedLanguageType: LanguageType) => {
                try {
                    dispatch(setLanguageCode(selectedLanguageType.code));

                    toastState.addToast({
                        message: translate('selectedLanguageSuccessfullyChanged', { languageCode: selectedLanguageType.code }),
                        type: 'success'
                    });

                    // Close sidebar on non-desktop devices after language change
                    if (setSidebarVisible && !isDesktop) {
                        setSidebarVisible(false);
                    }
                } catch (_error) {
                    toastState.addToast({
                        message: translate('selectedLanguageChangeFailed'),
                        type: 'error'
                    });
                }
            }}
            dropDownButton={{
                type: ButtonType.SecondaryWhite,
                width: 'full'
            }}
        />
    );
};
