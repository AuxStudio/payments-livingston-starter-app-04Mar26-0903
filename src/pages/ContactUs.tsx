/**
 * This component represents the Contact Us page of the application. It is a simple page that displays a header with the title "ContactUs".
 * The page is structured using React Bootstrap's Container, Row, and Col components for layout. The component is designed to be a placeholder for
 * future content related to contacting the company or support team.
 */
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const ContactUs = () => {
    return (
        <Container fluid className='mt-4'>
            <Row>
                <Col>
                    <h1>ContactUs</h1>
                </Col>
            </Row>
        </Container>
    );
};
