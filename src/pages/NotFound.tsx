/**
 * This component represents the Not Found page of the application. It is displayed when a user navigates to a route that does not exist. The page includes an image, a title,
 * and a description with a link to the dashboard. The content is translated using the useTranslation hook to support multiple languages. The layout is structured using React
 * Bootstrap's Container, Row, and Col components for a responsive design.
 */
import { PageNotFoundImage } from '@/assets/images/PageNotFoundImage';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useTranslation } from '@/utils/hooks/useTranslation';

export const NotFound = () => {
    const translate = useTranslation();

    const renderLink = (text: string, link: string) => {
        return <a href={link}>{text}</a>;
    };

    return (
        <div className='d-flex flex-column justify-content-center flex-fill h-100'>
            <Container fluid>
                <Row>
                    <Col className='text-center'>
                        <div className='error-image w-150px w-md-225px m-auto'>
                            <PageNotFoundImage />
                        </div>
                        <h1 className='mb-3'>{translate('pageNotFoundTitle')}</h1>
                        <p>
                            {translate('pageNotFoundDescription')} {renderLink(translate('dashboardTitle'), '/dashboard')}
                        </p>
                        {/* <p>{translate('pageNotFoundDescription', { substitutions: [translate('dashboardTitle')] })}</p> */}
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
