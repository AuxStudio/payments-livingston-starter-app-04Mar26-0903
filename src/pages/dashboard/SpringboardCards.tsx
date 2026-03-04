/**
 * This component represents a set of springboard cards displayed on the dashboard. Each card provides quick access to different sections of the application, such as all documents,
 * analytics, and tasks. The cards are designed to be visually appealing and informative, with icons, titles, and descriptions. The component uses React Bootstrap for layout and styling,
 * and FontAwesome for icons. The text content is translated using the useTranslation hook to support multiple languages.
 */
import { faClipboardList, faLineChart, faFileContract } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SpringboardCard from '@/components/cards/SpringboardCard';
import { useTranslation } from '@/utils/hooks/useTranslation';

export const SpringboardCards = () => {
    const translate = useTranslation();

    return (
        <Row className='row-cols-1 row-cols-md-3 row-cols-xl-1'>
            <Col className='d-flex'>
                <SpringboardCard
                    className='mb-4 flex-fill'
                    icon={faFileContract as IconDefinition}
                    title={translate('allDocumentsTitle')}
                    description={translate('allDocumentsDescription')}
                    onClick={() => alert('Springboard clicked')}
                />
            </Col>
            <Col className='d-flex'>
                <SpringboardCard
                    className='mb-4 flex-fill'
                    icon={faLineChart as IconDefinition}
                    title={translate('analyticsTitle')}
                    description={translate('analyticsDescription')}
                    onClick={() => alert('Springboard clicked')}
                />
            </Col>
            <Col className='d-flex'>
                <SpringboardCard
                    className='mb-4 flex-fill'
                    icon={faClipboardList as IconDefinition}
                    title={translate('tasksTitle')}
                    description={translate('tasksDescription')}
                    onClick={() => alert('Springboard clicked')}
                />
            </Col>
        </Row>
    );
};
