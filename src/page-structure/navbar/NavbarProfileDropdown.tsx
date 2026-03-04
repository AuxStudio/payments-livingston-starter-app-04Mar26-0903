/**
 * This component represents the profile dropdown in the navigation bar. It displays the user's profile information and provides links to various account settings.
 * It also includes a logout option. The component uses React Bootstrap's Dropdown component for the dropdown functionality and FontAwesome for icons. It retrieves
 * the user's information from Okta authentication if Okta is enabled.
 */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { UserProfileImage } from '@/assets/images/UserProfileImage';
import Dropdown from 'react-bootstrap/Dropdown';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { useEffect, useState } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { OktaEnabled } from '@/constants';

export type NavbarProfileDropDownItem = {
    icon: IconDefinition;
    title: string;
    link?: string;
    onClick?: () => void;
};

type NavbarProfileDropdownProps = {
    companyName: string;
    email: string;
    entries: Array<NavbarProfileDropDownItem>;
};

export default function NavbarProfileDropdown({ entries }: NavbarProfileDropdownProps): JSX.Element {
    const { oktaAuth, authState } = OktaEnabled ? useOktaAuth() : { oktaAuth: null, authState: null };
    const [userName, setUserName] = useState<string | undefined>();
    const [userEmail, setUserEmail] = useState<string | undefined>();

    useEffect(() => {
        if (!authState) {
            return;
        }

        if (authState.isAuthenticated) {
            oktaAuth.getUser().then((user) => {
                setUserName(`${user.given_name} ${user.family_name}`);
                setUserEmail(user.email);
            });
        }
    }, [oktaAuth, authState]);

    return (
        <Dropdown align='end'>
            <Dropdown.Toggle variant='tertiary' id='user-dropdown' className='d-flex align-items-center w-300px w-sm-400px'>
                <FontAwesomeIcon icon={faUserCircle as IconDefinition} className='me-2' />
                <div className='text-truncate'>{userName ? userName : 'User'}</div>
            </Dropdown.Toggle>
            <Dropdown.Menu className='w-300px w-sm-400px'>
                <div className='profile-name d-flex align-items-center px-3 py-2'>
                    <div className='me-2'>
                        <UserProfileImage />
                    </div>
                    <div className='text-truncate'>{userEmail ? userEmail : 'user@company.com'}</div>
                </div>
                <Dropdown.Divider />
                {entries.map((entry, index) => (
                    <Dropdown.Item
                        key={index}
                        href={entry.link ? entry.link : undefined}
                        onClick={entry.onClick ? entry.onClick : undefined}
                    >
                        <div className='d-flex align-items-center'>
                            <FontAwesomeIcon icon={entry.icon} className='me-2' />
                            {entry.title}
                        </div>
                    </Dropdown.Item>
                ))}
                <Dropdown.Divider />
                <a className='dropdown-item' href='/logout'>
                    <div className='d-flex align-items-center'>
                        <FontAwesomeIcon icon={faSignOutAlt as IconDefinition} className='me-2' />
                        Logout
                    </div>
                </a>
            </Dropdown.Menu>
        </Dropdown>
    );
}
