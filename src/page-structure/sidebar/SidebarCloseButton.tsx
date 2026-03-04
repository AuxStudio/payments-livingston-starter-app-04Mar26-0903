/**
 * This component represents a close button in the sidebar. It is styled as a circular button and includes a times icon to indicate closing. The button is designed
 * to be used in mobile views, allowing users to toggle the visibility of the sidebar. The component accepts an onClick prop, which is a function that will be called
 * when the button is clicked, typically to close the sidebar. The button uses React Bootstrap for styling and FontAwesome for the icon, ensuring a consistent and visually appealing design.
 */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';

type ComponentProps = {
    onClick: () => void;
};

const SidebarCloseButton = ({ onClick }: ComponentProps) => {
    return (
        <Button variant='tertiary' size='lg' className='sidebar-close-button-mobile' onClick={onClick}>
            <FontAwesomeIcon icon={faTimes} />
        </Button>
    );
};

export default SidebarCloseButton;
