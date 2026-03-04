/**
 * This component represents a frequently asked questions (FAQ) item in the application. It displays a question and its corresponding answer.
 * The component uses React Bootstrap's Accordion component to create a collapsible item that can be expanded or collapsed to show or hide the answer.
 * The question is passed as a prop, and the answer is currently hardcoded as placeholder text. This component can be reused for multiple FAQ items by passing different
 * questions and answers as props.
 */
import Accordion from 'react-bootstrap/Accordion';

type FaqProps = {
    question: number;
};

export const Faq = ({ question }: FaqProps) => (
    <Accordion.Item eventKey={question.toString()}>
        <Accordion.Header>
            <div className='fw-bold'>Question {question}</div>
        </Accordion.Header>
        <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at lectus justo. Aliquam sit amet nibh vel libero tincidunt
            suscipit ac ut urna. Quisque iaculis nisi quis turpis accumsan dignissim.
        </Accordion.Body>
    </Accordion.Item>
);
