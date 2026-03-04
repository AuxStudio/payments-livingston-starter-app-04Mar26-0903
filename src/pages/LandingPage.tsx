/**
 * This component represents the landing page of the application. It is a simple page that displays a header with the title "Landing Page".
 * The page is structured using React Bootstrap's Container, Row, and Col components for layout. The component is designed to be a placeholder for
 * future content related to the landing page of the application.
 */
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const LandingPage = () => {
    return (
        <Container fluid className='mt-4'>
            <Row>
                <Col>
                    <h1 className='text-center'>Landing Page</h1>
                </Col>
            </Row>
        </Container>
    );
};
