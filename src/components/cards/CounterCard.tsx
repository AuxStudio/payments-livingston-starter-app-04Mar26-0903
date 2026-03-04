/**
 * This component represents a counter card that displays a title, status, count, and an optional button. The card is styled using React Bootstrap's Card component and can be customized
 * with different props for the title, status, count, and button. The button can trigger a specified action when clicked. The component also supports an optional className prop for additional
 * styling and a dangerText prop to apply a specific text color for the status and count when set to true.
 */
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

type ButtonProps = {
    label: string;
    onClick: () => void;
};

type CounterCardProps = {
    title?: string;
    status?: string;
    count?: number;
    dangerText?: boolean;
    button?: ButtonProps;
    className?: string;
};

const CounterCard = ({ title, status, count, dangerText = false, button, className }: CounterCardProps) => {
    return (
        <Card className={`h-100 ${className ?? ''}`}>
            <Card.Body>
                <small className='text-uppercase text-lii-text-light fw-bold'>{title}</small>
                <h5 className={`${dangerText ? 'text-danger-dark' : ''} mb-0`}>{status}</h5>
                <h1 className={`${dangerText ? 'text-danger-dark' : ''} display-3 mb-0`}>{count}</h1>
            </Card.Body>
            {button && (
                <Card.Footer>
                    <Button variant='secondary' onClick={() => button.onClick && button.onClick()}>
                        {button.label}
                    </Button>
                </Card.Footer>
            )}
        </Card>
    );
};
export default CounterCard;
