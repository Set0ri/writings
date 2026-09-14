import React, { useState, useEffect } from 'react';
import { ArrowUpIcon } from './Icons';

const ScrollToTop: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        // Use passive listener for better scroll performance
        window.addEventListener('scroll', toggleVisibility, { passive: true });
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className={`fixed-element fixed bottom-8 right-8 z-40 transition-all duration-300 transform ${isVisible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
            <button
                onClick={scrollToTop}
                className="p-3 rounded-full bg-accent text-accent-text shadow-lg hover:bg-opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent focus-visible:ring-offset-background transform transition-transform hover:scale-110 flex items-center justify-center"
                aria-label="Scroll to top"
            >
                <ArrowUpIcon className="w-6 h-6" />
            </button>
        </div>
    );
};

export default ScrollToTop;