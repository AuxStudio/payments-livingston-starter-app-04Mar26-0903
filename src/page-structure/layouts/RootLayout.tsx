/**
 * This component represents the root layout of the application. It is responsible for setting up the security context using Okta for authentication
 * and handling the loading state of translations. The component uses the useTranslationsQuery hook to fetch translations based on the selected language code.
 * If the translations are still loading, it displays an overlay spinner. If there is an error while loading translations, it shows an error page. If Okta authentication is enabled,
 * it wraps the content in the Security component provided by @okta/okta-react, which manages the authentication flow. The restoreOriginalUri function is defined to handle redirection
 * after successful authentication, ensuring that users are returned to their original destination. Finally, the Outlet component from react-router is used to render child routes within this layout.
 */
import OktaAuth, { toRelativeUrl } from '@okta/okta-auth-js';
import { Security } from '@okta/okta-react';
import { Outlet, useNavigate } from 'react-router';
import oktaConfig from '@/oktaConfig';
import { OktaEnabled } from '@/constants';
import { useTranslationsQuery } from '@/store/api/translationsApi';
import { getSelectedLanguageCode } from '@/utils/localstorage';
import { OverlaySpinner } from '@/components/OverlaySpinner';
import ErrorPage from '@/components/ErrorPage';

const oktaAuth = OktaEnabled ? new OktaAuth(oktaConfig.oidc) : null;

export default function RootLayout() {
    const navigate = useNavigate();
    const languageCode = getSelectedLanguageCode();
    const { error, isLoading: isBusyLoadingTranslations } = useTranslationsQuery({ languageCode });

    if (isBusyLoadingTranslations) {
        return <OverlaySpinner />;
    }

    if (error) {
        return (
            <div className='vh-100 d-flex align-items-center justify-content-center'>
                <ErrorPage />
            </div>
        );
    }

    const restoreOriginalUri = (_oktaAuth: OktaAuth, originalUri: string) => {
        navigate(toRelativeUrl(originalUri || '/', window.location.origin));
    };

    if (!OktaEnabled) {
        return <Outlet />;
    }
    return (
        <Security oktaAuth={oktaAuth!} restoreOriginalUri={restoreOriginalUri}>
            <Outlet />
        </Security>
    );
}
