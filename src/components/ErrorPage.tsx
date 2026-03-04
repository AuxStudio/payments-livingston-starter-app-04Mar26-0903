/**
 * This component represents an error page in the application. It is displayed when an error occurs during navigation or data fetching.
 * The page includes an image, a title, a description of the error, and a button to retry the action. The error message is extracted from
 * the provided error object or from the route error if available. The layout is structured using React Bootstrap's Container, Row, and Col components for a responsive design.
 */
import { DIGITAL_DESIGN_ASSETS } from '@/constants';
import Button from 'react-bootstrap/Button';
import { useRouteError, isRouteErrorResponse } from 'react-router';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { extractErrorMessage } from '@/store/api/apiSlice';

interface ErrorPageProps {
    contextMessage?: string;
    error?: Error;
    retryAction?: () => void;
}

const ErrorPage: React.FC<ErrorPageProps> = ({ contextMessage, error, retryAction }) => {
    const routeError = useRouteError();
    let msg = 'Unknown error occurred';
    let contextMsg = contextMessage || "This isn't working properly right now.";

    if (error) {
        msg = extractErrorMessage(error);
    } else if (routeError) {
        // Type guard for React Router's RouteErrorResponse
        if (isRouteErrorResponse(routeError)) {
            if (routeError.status === 404) {
                msg = "Sorry, the resource you're looking for doesn't exist.";
            }
        } else {
            msg = extractErrorMessage(routeError);
        }
    }

    return (
        <Container>
            <Row>
                <Col className='text-center'>
                    <img
                        src={`${DIGITAL_DESIGN_ASSETS}/assets/images/illustrations/scenes/scene-error-403-not-authorized.svg`}
                        alt='System failure'
                        style={{
                            width: '160px'
                        }}
                    />
                    <h1 className='mb-3'>Sorry — something went wrong:</h1>
                    <p>{contextMsg}</p>
                    <p className='text-bold'>{msg}</p>
                    <p>
                        Try to refresh the page or email us at
                        <a href='/#'> portal@livingston.com.</a>
                    </p>
                    <Button variant='secondary' onClick={retryAction || (() => window.location.reload())}>
                        Try again
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default ErrorPage;
