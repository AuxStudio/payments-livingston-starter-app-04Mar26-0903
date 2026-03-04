/**
 * This component represents the header of the sidebar in the application. It includes a brand color strip, the Livingston logo, and a close button for mobile views.
 * The component accepts a prop setSidebarVisible, which is a function to toggle the visibility of the sidebar. The header is styled with a border at the bottom and
 * uses Bootstrap classes for layout and spacing. The close button is conditionally rendered based on the screen size, allowing users to easily close the sidebar on smaller
 * devices while keeping it visible on larger screens. The Livingston logo is displayed prominently in the header, reinforcing brand identity.
 */
import SidebarCloseButton from './SidebarCloseButton';
import { LivingstonLogo } from '@/assets/images/LivingstonLogo';

type SidebarHeaderProps = {
    setSidebarVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const SidebarHeader = ({ setSidebarVisible }: SidebarHeaderProps) => {
    return (
        <section className='sidebar-header border-bottom'>
            <div className='brand-color-strip lii-portal-accent'></div>
            <div className='d-flex justify-content-between align-items-center p-3 '>
                <div className='w-80'>
                    <LivingstonLogo />
                </div>
                <SidebarCloseButton onClick={() => setSidebarVisible(false)} />
            </div>
        </section>
    );
};

export default SidebarHeader;
