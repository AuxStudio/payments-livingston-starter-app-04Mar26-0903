/**
 * This component represents an "About" modal in the application. It displays information about the application, including the version and build date.
 * The modal is styled using React Bootstrap's Modal component and includes an image, a title, and a description. The build date is formatted to a human-readable string.
 * The modal can be shown or hidden based on the props passed to it.
 */
import { DIGITAL_DESIGN_ASSETS } from '@/constants';
import { Button, Image } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';

declare const __BUILD_DATE__: string;

type AboutModalProps = {
    show: boolean;
    onHide: () => void;
};

export const AboutModal = ({ show, onHide }: AboutModalProps) => {
    const buildDate = new Date(__BUILD_DATE__).toLocaleString();

    return (
        <Modal show={show} centered onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>About</Modal.Title>
            </Modal.Header>
            <Modal.Body className='d-flex flex-column align-items-center text-center p-6'>
                <Image height={159} src={`${DIGITAL_DESIGN_ASSETS}/assets/images/illustrations/scenes/scene-person-on-box.svg`} />
                <h1 className='text-lii-text fw-bold'>Version information</h1>
                <p className='text-lii-text'>{`Build date: ${buildDate}`}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='primary' onClick={onHide}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};
