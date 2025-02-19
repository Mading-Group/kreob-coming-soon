import React, {useState} from 'react';

interface TooltipProps {
    children: React.ReactNode;
    content: React.ReactNode;
    direction?: 'top' | 'right' | 'bottom' | 'left';
    className?: string;
}

const Tooltip: React.FC<TooltipProps> = ({children, content, direction = 'top', className}) => {
    const [visible, setVisible] = useState(false);

    const showTooltip = () => setVisible(true);
    const hideTooltip = () => setVisible(false);

    return (
        <div className="relative inline-block" onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>
            {children}
            {visible && (
                <div
                    className={`absolute z-10 p-2 text-sm bg-black text-white rounded ${getTooltipPosition(direction)} ${className}`}>
                    {content}
                </div>
            )}
        </div>
    );
};

const getTooltipPosition = (direction: 'top' | 'right' | 'bottom' | 'left') => {
    switch (direction) {
        case 'top':
            return 'bottom-full left-1/2 transform -translate-x-1/2 mb-2';
        case 'right':
            return 'left-full top-1/2 transform -translate-y-1/2 ml-2';
        case 'bottom':
            return 'top-full left-1/2 transform -translate-x-1/2 mt-2';
        case 'left':
            return 'right-full top-1/2 transform -translate-y-1/2 mr-2';
        default:
            return '';
    }
};

export default Tooltip;