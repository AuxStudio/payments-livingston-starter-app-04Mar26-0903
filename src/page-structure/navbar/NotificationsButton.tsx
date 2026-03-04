/**
 * This component represents a notifications button in the navigation bar. It is styled as a rounded circle and includes a bell icon to indicate notifications.
 * The button also has a badge that displays the number of unread notifications. The component accepts an optional className prop for additional styling.
 */
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

type NotificationsButtonProps = {
    className?: string;
};

const NotificationsButton = ({ className = '' }: NotificationsButtonProps) => {
    return (
        <Button
            variant='tertiary'
            className={`${className} rounded-circle position-relative mx-1`}
            style={{ width: '40px', height: '40px' }}
        >
            <FontAwesomeIcon icon={faBell as IconDefinition} />
            <div className='alert-badge top-0'>2</div>
        </Button>
    );
};

export default NotificationsButton;
