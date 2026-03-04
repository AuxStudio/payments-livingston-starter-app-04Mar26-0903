/**
 * This component represents an overlay spinner that can be used to indicate loading or processing states in the application. The spinner is displayed as an overlay on top of the content,
 * with a semi-transparent background to indicate that the user cannot interact with the underlying content while the spinner is active. The component accepts props for customizing the variant,
 * animation type, and size of the spinner, allowing for flexibility in its appearance. The spinner is implemented using React Bootstrap's Spinner component and is styled to cover the entire
 * area of its parent container.
 */
import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

interface OverlaySpinnerProps {
    variant?: string;
    animation?: 'border' | 'grow';
    size?: 'sm';
}

export const OverlaySpinner: React.FC<OverlaySpinnerProps> = ({ variant = 'primary', animation = 'border', size }) => {
    return (
        <div
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'rgba(255, 255, 255, 0.7)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 1050
            }}
        >
            <Spinner animation={animation} variant={variant} size={size} />
        </div>
    );
};
