/**
 * This component represents a call to action card in the dashboard. It encourages users to take a specific action, such as learning more about a feature or signing up for a service.
 * The card is styled with a secondary background and includes a title, description, and a button that links to more information. The text content is translated using the useTranslation
 * hook to support multiple languages.
 */
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { faExternalLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { useTranslation } from '@/utils/hooks/useTranslation';

export const CallToAction = () => {
    const translate = useTranslation();

    return (
        <Card className='bg-secondary'>
            <Card.Body>
                <div className='d-flex flex-column justify-content-between h-100'>
                    <div className='d-flex justify-content-between align-items-center'>
                        <div>
                            <div className='text-lii-text-light'>{translate('ctaTitle')}</div>
                            <h1 className='text-white'>{translate('ctaDescription')}</h1>
                        </div>
                    </div>
                    <div className='mt-3'>
                        <Button variant='secondary-white'>
                            {translate('ctaLearnMore')} <FontAwesomeIcon icon={faExternalLink as IconDefinition} className='ms-1' />
                        </Button>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
};
