
import React, { useState, useEffect, useRef, memo } from 'react';
import { ChevronDownIcon } from './Icons';

interface PaletteDropdownProps {
    colorPalette: string;
    setColorPalette: (palette: string) => void;
    animations: boolean;
}

const palettes = {
    light: [
        { name: 'default-light', label: 'Default', color: '#2F4F4F' },
        { name: 'arctic-light', label: 'Arctic', color: '#5e81ac' },
        { name: 'latte-light', label: 'Latte', color: '#d20f39' },
        { name: 'grove-light', label: 'Grove', color: '#487858' },
    ],
    dark: [
        { name: 'default-dark', label: 'Default', color: '#FBBF24' },
        { name: 'mocha-dark', label: 'Mocha', color: '#cba6f7' },
        { name: 'macchiato-dark', label: 'Forest', color: '#82E0AA' },
        { name: 'monochrome-dark', label: 'Monochrome', color: '#ffffff' },
    ],
};

const PaletteDropdown: React.FC<PaletteDropdownProps> = memo(({ colorPalette, setColorPalette, animations }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    
    const themeMode = colorPalette.includes('light') ? 'light' : 'dark';
    const availablePalettes = palettes[themeMode];
    const currentPalette = availablePalettes.find(p => p.name === colorPalette) || availablePalettes[0];
    const focusVisibleRing = "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent focus-visible:ring-offset-background";

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`h-6 sm:h-7 w-auto flex items-center justify-center gap-1 sm:gap-1.5 px-1.5 sm:px-2 rounded-full transition-colors bg-ui-background hover:bg-ui-background-hover text-text-secondary cursor-pointer ${focusVisibleRing}`}
                aria-label="Select color theme"
                aria-haspopup="true"
                aria-expanded={isOpen}
            >
                <span className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full ring-0 outline-none border-none" style={{ backgroundColor: currentPalette.color }} />
                <ChevronDownIcon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${animations ? 'transition-transform' : ''} ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            {isOpen && (
                <div 
                    className="absolute right-0 mt-2 w-36 origin-top-right rounded-md shadow-lg bg-card-bg ring-1 ring-black dark:ring-white ring-opacity-5 dark:ring-opacity-10 backdrop-blur-xl backdrop-saturate-150 transform-gpu focus:outline-none z-[100]"
                    style={{ backdropFilter: "blur(24px) saturate(150%)", WebkitBackdropFilter: "blur(24px) saturate(150%)" }}
                >
                    <div className="py-1" role="menu" aria-orientation="vertical">
                        {availablePalettes.map((palette) => (
                            <button
                                key={palette.name}
                                onClick={() => {
                                    setColorPalette(palette.name);
                                    setIsOpen(false);
                                }}
                                className={`w-full text-left flex items-center gap-3 px-3 py-2 text-sm ${ colorPalette === palette.name ? 'bg-accent/20 text-accent' : 'text-text-secondary' } hover:bg-ui-background-hover`}
                                role="menuitem"
                            >
                                <span className="w-3.5 h-3.5 rounded-full ring-0 outline-none border-none" style={{ backgroundColor: palette.color }}/>
                                {palette.label}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
});

export default PaletteDropdown;
