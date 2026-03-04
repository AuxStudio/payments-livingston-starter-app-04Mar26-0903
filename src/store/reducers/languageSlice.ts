/**
 * This slice manages the application's language settings, including the selected language code. It initializes the state with the selected language code from local storage and
 * provides a reducer to update the language code when the user selects a new language. The setLanguageCode reducer also updates the local storage with the new language code to
 * persist the user's preference across sessions. The slice exports the setLanguageCode action for use in components and a selector to access the selected language code from the state.
 */
import { AVAILABLE_LANGUAGES } from '@/constants';
import * as localStorageUtils from '@/utils/localstorage';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { LanguageCode } from 'livingston-npm-components';

const initialState: { selectedLanguageCode: LanguageCode } = {
    selectedLanguageCode: localStorageUtils.getSelectedLanguageCode()
};

const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        setLanguageCode: (state, action: PayloadAction<LanguageCode>) => {
            state.selectedLanguageCode = action.payload;
            const f = AVAILABLE_LANGUAGES.find((language) => language.code === action.payload);
            if (f) {
                localStorageUtils.setSelectedLanguageCode(f.code);
            }
        }
    }
});

export const { setLanguageCode } = languageSlice.actions;
export const selectSelectedLanguageCode = (state: RootState) => state.language.selectedLanguageCode;
export default languageSlice.reducer;
