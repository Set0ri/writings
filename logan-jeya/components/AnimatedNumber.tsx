
import React, { useState, useEffect, useRef } from 'react';

interface AnimatedNumberProps {
    value: number;
    duration?: number;
}

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ value, duration = 1000 }) => {
    // Ensure value is a finite number, providing a fallback for invalid inputs.
    const safeValue = Number.isFinite(value) ? value : 0;
    const [displayValue, setDisplayValue] = useState(0);

    const frameRef = useRef<number | null>(null);
    const startTimeRef = useRef<number | null>(null);
    const startValueRef = useRef(0);

    useEffect(() => {
        startValueRef.current = displayValue;
        startTimeRef.current = performance.now();

        const animate = (currentTime: number) => {
            if (!startTimeRef.current) {
                startTimeRef.current = currentTime;
            }

            const elapsedTime = currentTime - startTimeRef.current;
            const progress = Math.min(elapsedTime / duration, 1);
            const easedProgress = easeOutCubic(progress);

            const currentDisplayValue = Math.floor(
                startValueRef.current + (safeValue - startValueRef.current) * easedProgress
            );
            
            setDisplayValue(currentDisplayValue);

            if (progress < 1) {
                frameRef.current = requestAnimationFrame(animate);
            } else {
                setDisplayValue(safeValue);
            }
        };

        frameRef.current = requestAnimationFrame(animate);

        return () => {
            if (frameRef.current) {
                cancelAnimationFrame(frameRef.current);
            }
        };
    }, [safeValue, duration]); // displayValue is intentionally omitted to animate from current state

    return <span>{displayValue.toLocaleString()}</span>;
};

export default AnimatedNumber;
