/**
 * This component represents a set of counter cards that display different statuses and counts. Each card includes a title, status, count, and a button that performs an action when clicked.
 * The component uses React Bootstrap's Col component for layout and a custom CounterCard component for the card design. The text content is translated using the useTranslation hook to support
 * multiple languages. Additionally, it utilizes the toastState from livingston-npm-components to display success messages when certain actions are performed.
 */
import Col from 'react-bootstrap/Col';
import CounterCard from '@/components/cards/CounterCard';
import { useTranslation } from '@/utils/hooks/useTranslation';
import { toastState } from 'livingston-npm-components';
import { useState } from 'react';

export const CounterCards = () => {
    const [counter, setCounter] = useState(1);
    const translate = useTranslation();
    const onHoldCount = 8;

    return (
        <>
            {onHoldCount > 0 && (
                <Col className='col-12 col-md-4 mb-4'>
                    <CounterCard
                        title={translate('counterCardTitle')}
                        status={translate('statusOnHold')}
                        count={8}
                        dangerText
                        button={{
                            label: translate('counterCardOHoldButton'),
                            onClick: () => alert('Button clicked')
                        }}
                    />
                </Col>
            )}
            <Col className={`col-12 col-md-${onHoldCount > 0 ? '4' : '6'} mb-4`}>
                <CounterCard
                    title={translate('counterCardTitle')}
                    status={translate('statusCompleted')}
                    count={128}
                    button={{
                        label: translate('counterCardCompletedButton'),
                        onClick: () => {
                            toastState.addToast({
                                message: translate('toastDescription', { substitutions: ['document', 'created'] }) + ' ' + counter,
                                type: 'success'
                            });
                            setCounter((prevCounter) => prevCounter + 1);
                        }
                    }}
                />
            </Col>
            <Col className={`col-12 col-md-${onHoldCount > 0 ? '4' : '6'} mb-4`}>
                <CounterCard
                    title={translate('counterCardTitle')}
                    status={translate('statusInProgress')}
                    count={26}
                    button={{
                        label: translate('counterCardIProgressButton'),
                        onClick: () => alert('Button clicked')
                    }}
                />
            </Col>
        </>
    );
};
