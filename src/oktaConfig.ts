/**
 * This file defines the configuration for Okta authentication in the application. It retrieves necessary values such as the client ID, issuer URL, and testing options from
 * environment variables, providing default values if they are not set. The configuration object is structured to be compatible with Okta's OIDC settings, including scopes
 * and PKCE support. This setup allows the application to integrate with Okta for user authentication and authorization.
 */
const CLIENT_ID = import.meta.env.VITE_OKTA_CLIENT_ID || '{clientId}';
const ISSUER = import.meta.env.VITE_OKTA_ISSUER || 'https://livingstonintl.okta.com';
const OKTA_TESTING_DISABLEHTTPSCHECK = import.meta.env.VITE_OKTA_TESTING_DISABLEHTTPSCHECK || false;
const BASENAME = import.meta.env.VITE_PUBLIC_URL || '';
const REDIRECT_URI = `${BASENAME}/login/callback`;

const oktaConfig = {
    oidc: {
        clientId: CLIENT_ID,
        issuer: ISSUER,
        redirectUri: REDIRECT_URI,
        scopes: ['openid', 'profile', 'email'],
        pkce: true,
        disableHttpsCheck: OKTA_TESTING_DISABLEHTTPSCHECK
    }
};

export default oktaConfig;
