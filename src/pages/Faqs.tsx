/**
 * This component represents the Frequently Asked Questions (FAQs) page of the application. It displays a list of common questions and their corresponding answers in an accordion format.
 * The page is structured using React Bootstrap's Container and Accordion components for layout and styling. Each FAQ item is represented by the Faq component, which takes a question number
 * as a prop to display the appropriate question and answer. The FAQs are designed to provide users with quick access to information and help them find answers to common queries about the
 * application or its features.
 */
import { Container } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import { Faq } from './Faq';

export const Faqs = () => {
    return (
        <Container className='mt-4'>
            <Accordion>
                <Card>
                    <Card.Header>
                        <h5 className='text-lii-text-light'>Frequently Asked Questions</h5>
                    </Card.Header>
                    <Faq question={1} />
                    <Faq question={2} />
                    <Faq question={3} />
                </Card>
            </Accordion>
        </Container>
    );
};
