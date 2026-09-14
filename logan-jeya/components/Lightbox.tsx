
import React, { useEffect, useRef, memo } from 'react';
import { CloseIcon } from './Icons';

interface LightboxProps {
    imageUrl: string;
    altText: string;
    isOpen: boolean;
    onClose: () => void;
    animations: boolean;
}

const Lightbox: React.FC<LightboxProps> = memo(({ imageUrl, altText, isOpen, onClose, animations }) => {
    const closeButtonRef = useRef<HTMLButtonElement>(null);
    const previousFocusRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        if (isOpen) {
            previousFocusRef.current = document.activeElement as HTMLElement;

            const handleKeyDown = (event: KeyboardEvent) => {
                if (event.key === 'Escape') {
                    onClose();
                }
                // Trap focus since the close button is the only focusable element
                if (event.key === 'Tab') {
                    event.preventDefault();
                    closeButtonRef.current?.focus();
                }
            };

            document.body.style.overflow = 'hidden';
            window.addEventListener('keydown', handleKeyDown);

            // Delay focus to allow for transition animation
            const focusTimeout = setTimeout(() => closeButtonRef.current?.focus(), 100);

            return () => {
                clearTimeout(focusTimeout);
                document.body.style.overflow = '';
                window.removeEventListener('keydown', handleKeyDown);
                if (previousFocusRef.current) {
                    previousFocusRef.current.focus();
                }
            };
        }
    }, [isOpen, onClose]);

    const transitionClass = animations ? 'transition-all duration-300 ease-in-out' : '';

    return (
        <div
            role="dialog"
            aria-modal="true"
            aria-label="Image lightbox"
            className={`fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm ${transitionClass} ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
            onClick={onClose}
        >
            <div
                className={`relative ${transitionClass} ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
                onClick={(e) => e.stopPropagation()}
            >
                <img
                    src={imageUrl}
                    alt={altText}
                    className="block max-w-[90vw] max-h-[90vh] object-contain rounded-lg dark:shadow-2xl"
                />
                 <button
                    ref={closeButtonRef}
                    onClick={onClose}
                    aria-label="Close lightbox"
                    className="absolute -top-2 -right-2 p-1.5 text-background bg-text-primary hover:bg-text-secondary dark:text-text-primary dark:bg-background dark:hover:bg-ui-background-hover rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent focus-visible:ring-offset-background"
                >
                    <CloseIcon className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
});

export default Lightbox;
