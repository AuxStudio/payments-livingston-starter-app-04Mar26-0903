/**
 * This component is responsible for automatically scrolling the page to the top whenever the user navigates to a new route. It uses the useLocation hook from react-router to detect
 * changes in the current pathname and triggers a scroll to the top of the page when a new route is accessed. The component also includes a fallback mechanism to ensure that it works
 * even if the main container element is not found, by scrolling the window instead. The scrollToTop function is called with a slight delay to allow the page to render before attempting
 * to scroll, which can be particularly useful for pages that load content asynchronously. The component does not render any visible elements and serves solely as a functional component to
 * manage the scroll behavior on route changes.
 */
import { useEffect } from 'react';
import { useLocation } from 'react-router';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        const scrollToTop = () => {
            const container = document.querySelector<HTMLDivElement>('.main-stage-wrapper');

            if (container) {
                container.scrollTo({ top: 0 }); // smooth scroll CSS animation
            } else {
                // fallback on window scroll
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        };

        // Delay to wait page render (async content)
        const id = setTimeout(scrollToTop, 50);

        return () => clearTimeout(id);
    }, [pathname]);

    return null;
};

export default ScrollToTop;
