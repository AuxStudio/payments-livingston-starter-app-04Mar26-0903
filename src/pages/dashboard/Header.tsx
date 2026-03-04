/**
 * This component represents the header section of the dashboard page. It displays the title of the dashboard along with an icon.
 * The header is styled to be visually appealing and provides a clear indication of the page's purpose. The icon used in the header is a house chimney, which symbolizes a home or dashboard.
 * The component accepts a title prop to dynamically set the header text.
 */

import { faHouseChimney } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

type HeaderProps = {
    title: string;
};

export const Header: React.FC<HeaderProps> = ({ title }) => (
    <div className='d-flex justify-content-between align-items-center py-4'>
        <div className='d-flex align-items-center'>
            <span className='badge badge-circular badge-info me-3'>
                <FontAwesomeIcon icon={faHouseChimney as IconDefinition} />
            </span>
            <h1 className='mb-0'>{title}</h1>
        </div>
    </div>
);
