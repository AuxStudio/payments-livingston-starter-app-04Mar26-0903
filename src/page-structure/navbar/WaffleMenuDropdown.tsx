/**
 * This component represents a waffle menu dropdown in the navigation bar. It displays a grid of app icons and names when clicked, allowing users to quickly access different applications.
 * The menu is designed to be responsive, showing a single column layout if there are three or fewer apps, and a grid layout for more than three apps. Each app item includes an icon, name,
 * and an external link icon to indicate that it will open in a new tab or window. The component uses React Bootstrap's Dropdown component for the dropdown functionality and FontAwesome for
 * the icons.
 */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faThLarge,
    faChartPie,
    faFileAlt,
    faClipboardCheck,
    faList,
    faExternalLinkAlt,
    faCreditCard
} from '@fortawesome/free-solid-svg-icons';
import Dropdown from 'react-bootstrap/Dropdown';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

type WaffleMenuDropdownProps = {
    className?: string;
};

type AppItem = {
    appName: string;
    icon: IconDefinition;
    href: string;
};

const WaffleMenuDropdown = ({ className = '' }: WaffleMenuDropdownProps) => {
    const appItems: AppItem[] = [
        { appName: 'Clearance Analytics', icon: faChartPie as IconDefinition, href: '#' },
        { appName: 'Document Creation (USA)', icon: faFileAlt as IconDefinition, href: '#' },
        { appName: 'Clearance Tracker', icon: faClipboardCheck as IconDefinition, href: '#' },
        { appName: 'My Livingston', icon: faList as IconDefinition, href: '#' },
        { appName: 'Document Creation (CA)', icon: faFileAlt as IconDefinition, href: '#' },
        { appName: 'Payments', icon: faCreditCard as IconDefinition, href: '#' }
    ];

    const singleColumn = appItems.length <= 3;

    return (
        <Dropdown className={`${className} waffle-menu-wrapper mx-1`}>
            <Dropdown.Toggle
                variant='tertiary'
                id='waffle-menu-dropdown'
                className='rounded-circle'
                style={{ width: '40px', height: '40px' }}
            >
                <FontAwesomeIcon icon={faThLarge as IconDefinition} />
            </Dropdown.Toggle>

            <Dropdown.Menu className='pb-0 w-auto'>
                <h4 className='dropdown-header border-bottom'>Project apps</h4>
                <div className={`waffle-menu bg-gray-200 border-top rounded-bottom ${singleColumn ? 'single-column' : 'grid'}`}>
                    {appItems.map((item, index) => (
                        <a
                            key={index}
                            href='/#'
                            onClick={(e) => e.preventDefault()}
                            className='app-link d-flex flex-row justify-content-between align-items-center rounded-sm flex-grow-1 p-2'
                        >
                            <div className='d-flex flex-row align-items-center'>
                                <div className='app-icon d-flex flex-column justify-content-center align-items-center flex-shrink-0 me-2'>
                                    <FontAwesomeIcon icon={item.icon} />
                                </div>
                                <div className='app-name flex-shrink-0'>{item.appName}</div>
                            </div>
                            <div className='external-link-icon ms-3'>
                                <FontAwesomeIcon icon={faExternalLinkAlt as IconDefinition} />
                            </div>
                        </a>
                    ))}
                </div>
            </Dropdown.Menu>
        </Dropdown>
    );
};
export default WaffleMenuDropdown;
