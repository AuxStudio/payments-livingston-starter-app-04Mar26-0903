/**
 * This component represents the logout functionality of the application. When the component is rendered, it triggers the logout process by calling
 * the signOut method from the Okta authentication library. After the user is logged out, it navigates back to the home page. The component uses the
 * useEffect hook to perform the logout action when the component is mounted, and it relies on the useOktaAuth hook to access the Okta authentication context
 * and the useNavigate hook from React Router for navigation.
 */
import { useEffect } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { useNavigate } from 'react-router';

const Logout = () => {
    const { oktaAuth } = useOktaAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const logout = async () => {
            await oktaAuth.signOut();
            navigate('/');
        };
        logout();
    }, [oktaAuth, navigate]);

    return null;
};

export default Logout;
