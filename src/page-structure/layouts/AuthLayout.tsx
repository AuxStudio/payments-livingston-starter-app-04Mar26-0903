/**
 * This component represents the main layout for authenticated users in the application. It includes a sidebar for navigation, a navbar at the top, and a main content area where
 * different pages are rendered based on the current route. The layout also handles authentication using Okta, ensuring that only authenticated users can access the content.
 * If Okta is enabled and the user is not authenticated, they will be redirected to the login page. The sidebar visibility is responsive to the screen size, automatically showing
 * on desktop devices and allowing toggling on smaller screens. The component also integrates internationalization support by using a translation hook to fetch translated strings
 * for the sidebar items.
 */
import { useEffect, useState } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { toRelativeUrl } from '@okta/okta-auth-js';
import { NavLink, Outlet } from 'react-router';
import { Sidebar, Spinner, useWindowSize } from 'livingston-npm-components';
import Navbar from '@/page-structure/navbar/Navbar';
import { OktaEnabled } from '@/constants';
import SidebarHeader from '@/page-structure/sidebar/SidebarHeader';
import SidebarFooter from '@/page-structure/sidebar/SidebarFooter';
import { useTranslation } from '@/utils/hooks/useTranslation';
import { getSidebarItems } from '@/page-structure/sidebar/sidebarItems';
import ScrollToTop from '@/components/ScrollToTop';

export default function AuthLayout() {
    const [sidebarVisible, setSidebarVisible] = useState<boolean>(true);
    const { oktaAuth, authState } = OktaEnabled ? useOktaAuth() : { oktaAuth: null, authState: null };
    const { isDesktop } = useWindowSize();
    const translate = useTranslation();

    useEffect(() => {
        if (!OktaEnabled) {
            return;
        }

        if (!authState) {
            return;
        }

        if (!authState?.isAuthenticated) {
            const originalUri = toRelativeUrl(window.location.href, window.location.origin);
            oktaAuth.setOriginalUri(originalUri);
            oktaAuth.signInWithRedirect();
        }
    }, [oktaAuth, authState]);

    useEffect(() => {
        setSidebarVisible(isDesktop);
    }, [isDesktop]);

    if (OktaEnabled) {
        if (!authState || !authState?.isAuthenticated) {
            return <Spinner fullScreenLoading />;
        }
    }

    return (
        <div className='d-flex'>
            <Sidebar
                entries={getSidebarItems(translate)}
                sidebarVisible={sidebarVisible}
                setSidebarVisible={setSidebarVisible}
                sidebarItemSelected={() => {
                    if (!isDesktop) {
                        setSidebarVisible(false);
                    }
                }}
                NavLink={NavLink}
                SidebarHeader={SidebarHeader}
                SidebarFooter={() => <SidebarFooter setSidebarVisible={setSidebarVisible} isDesktop={isDesktop} />}
            />
            <div className='d-flex flex-column flex-fill overflow-hidden w-100' style={{ height: '100dvh' }}>
                <Navbar sidebarVisible={sidebarVisible} setSidebarVisible={setSidebarVisible} />
                <div data-spy='scroll' data-offset='80' className='main-stage-wrapper h-100 d-flex flex-column flex-fill position-relative'>
                    <div className='d-flex flex-column flex-fill'>
                        <ScrollToTop />
                        <Outlet />
                    </div>
                </div>
                <div className={!isDesktop && sidebarVisible ? 'overlay' : ''} />
            </div>
        </div>
    );
}
