/**
 * This component represents the navigation bar of the application. It includes a button to toggle the sidebar, a notifications button, a waffle menu dropdown, and a profile dropdown. The profile dropdown contains options for viewing the user's profile, billing information, and an about section. The component also manages the state for showing the about modal.
 */
import { faBars, faCircleInfo, faCreditCard, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import NavbarProfileDropdown, { NavbarProfileDropDownItem } from './NavbarProfileDropdown';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import WaffleMenuDropdown from './WaffleMenuDropdown';
import NotificationsButton from './NotificationsButton';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { useState } from 'react';
import { AboutModal } from '@/components/AboutModal';

type NavbarProps = {
    sidebarVisible: boolean;
    setSidebarVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

function Navbar({ sidebarVisible, setSidebarVisible }: NavbarProps): JSX.Element {
    const [showAboutModal, setShowAboutModal] = useState(false);
    const dropdownEntries: NavbarProfileDropDownItem[] = [
        {
            icon: faUserCircle as IconDefinition,
            title: 'Profile',
            link: '#/action-1'
        },
        {
            icon: faCreditCard as IconDefinition,
            title: 'Billing',
            link: '#/action-2'
        },
        { icon: faCircleInfo as IconDefinition, title: 'About', onClick: () => setShowAboutModal(true) }
    ];

    return (
        <nav className='navbar bg-white border-bottom'>
            <div className='container-fluid'>
                <div className='row flex-fill'>
                    <div className='col'>
                        <div className='d-flex align-items-center justify-content-between py-2'>
                            <Button variant='ghost-secondary' onClick={() => setSidebarVisible(!sidebarVisible)}>
                                <FontAwesomeIcon icon={faBars as IconDefinition} />
                            </Button>
                            <div className='d-flex align-items-center'>
                                <NotificationsButton className='mx-1' />
                                <WaffleMenuDropdown className='mx-1' />
                                <NavbarProfileDropdown companyName='ABC company' email='john@abccompany.com' entries={dropdownEntries} />
                                <AboutModal show={showAboutModal} onHide={() => setShowAboutModal(false)} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
