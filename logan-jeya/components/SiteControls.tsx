
import React, { useState, useEffect, useRef, memo } from 'react';
import { 
    SunIcon, 
    MoonIcon, 
    BoltIcon, 
    BoltSlashIcon, 
    Square3Stack3DIcon, 
    Squares2x2Icon,
    CompactIcon,
    ExpandIcon,
    ChevronDownIcon,
} from './Icons';
import PaletteDropdown from './PaletteDropdown';

type FontSize = 'sm' | 'base' | 'lg';
type FontFamily = 'mono' | 'roboto' | 'system';

interface SiteControlsProps {
    colorPalette: string;
    setColorPalette: (palette: string) => void;
    fontSize: FontSize;
    setFontSize: (size: FontSize) => void;
    fontFamily: FontFamily;
    setFontFamily: (font: FontFamily) => void;
    animations: boolean;
    setAnimations: (enabled: boolean) => void;
    elevation: boolean;
    setElevation: (enabled: boolean) => void;
    isCompact: boolean;
    setIsCompact: (enabled: boolean) => void;
}

const SiteControls: React.FC<SiteControlsProps> = memo(({
    colorPalette,
    setColorPalette,
    fontSize,
    setFontSize,
    fontFamily,
    setFontFamily,
    animations,
    setAnimations,
    elevation,
    setElevation,
    isCompact,
    setIsCompact,
}) => {
    
    const [isFontDropdownOpen, setIsFontDropdownOpen] = useState(false);
    const fontDropdownRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (fontDropdownRef.current && !fontDropdownRef.current.contains(event.target as Node)) {
                setIsFontDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleTheme = () => {
        const isCurrentlyDark = colorPalette.includes('dark');
        if (isCurrentlyDark) {
            const lastLight = localStorage.getItem('lastLightPalette') || 'default-light';
            setColorPalette(lastLight);
        } else {
            const lastDark = localStorage.getItem('lastDarkPalette') || 'default-dark';
            setColorPalette(lastDark);
        }
    };

    const fontSizes: FontSize[] = ['sm', 'base', 'lg'];
    const fontFamilies: FontFamily[] = ['mono', 'roboto', 'system'];
    const fontFamilyLabels: Record<FontFamily, string> = {
        mono: 'Mono',
        roboto: 'Roboto',
        system: 'System',
    };
    
    const focusVisibleRing = "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent focus-visible:ring-offset-background";
    const iconButtonBaseClass = `flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full text-text-secondary hover:text-text-primary hover:bg-ui-background-hover ${focusVisibleRing}`;
    
    // Changed font-bold to font-medium/semibold for better rendering on 4k screens
    const fontButtonClass = `flex items-center justify-center h-full px-2 sm:px-3 text-xs font-medium sm:font-semibold rounded-full transition-colors ${focusVisibleRing}`;
    const inactiveFontButtonClass = "hover:bg-ui-background-hover text-text-secondary";
    const tooltipClass = "absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 bg-text-primary text-background dark:bg-text-primary dark:text-background text-xs rounded opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border-none outline-none font-medium";
    const theme = colorPalette.includes('dark') ? 'dark' : 'light';
    const iconSize = "w-3.5 h-3.5 sm:w-4 sm:h-4";


    return (
        <div className="flex items-center flex-wrap gap-1 sm:gap-2">
            <div className="relative group">
                <button
                    onClick={toggleTheme}
                    className={iconButtonBaseClass}
                    aria-label="Toggle theme"
                >
                    {theme === 'dark' ? (
                        <SunIcon className={iconSize} />
                    ) : (
                        <MoonIcon className={iconSize} />
                    )}
                </button>
                <div className={tooltipClass}>
                    {theme === 'dark' ? 'Light mode' : 'Dark mode'}
                </div>
            </div>
            
            <div className="flex items-center space-x-1 rounded-full p-0.5 sm:p-1 bg-ui-background h-6 sm:h-7">
                {fontSizes.map((size) => (
                    <div className="relative group h-full" key={size}>
                        <button
                            onClick={() => setFontSize(size)}
                            className={`${fontButtonClass} ${fontSize === size ? 'bg-accent text-accent-text' : inactiveFontButtonClass}`}
                            aria-label={`Set font size to ${size}`}
                        >
                            {size.toUpperCase()}
                        </button>
                         <div className={tooltipClass}>
                            Font size: {size}
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="relative group">
                <button
                    onClick={() => setAnimations(!animations)}
                    className={iconButtonBaseClass}
                    aria-label={animations ? "Disable animations" : "Enable animations"}
                >
                    {animations ? <BoltIcon className={iconSize} /> : <BoltSlashIcon className={iconSize} />}
                </button>
                <div className={tooltipClass}>
                    {animations ? "Disable animations" : "Enable animations"}
                </div>
            </div>

            <div className="relative group">
                <button
                    onClick={() => setElevation(!elevation)}
                    className={iconButtonBaseClass}
                    aria-label={elevation ? "Use flat style" : "Use elevated style"}
                >
                    {elevation ? <Square3Stack3DIcon className={iconSize} /> : <Squares2x2Icon className={iconSize} />}
                </button>
                <div className={tooltipClass}>
                    {elevation ? "Flat style" : "Elevated style"}
                </div>
            </div>
            
            <div className="relative group">
                <button
                    onClick={() => setIsCompact(!isCompact)}
                    className={iconButtonBaseClass}
                    aria-label={isCompact ? "Increase spacing" : "Decrease spacing"}
                >
                    {isCompact ? <ExpandIcon className={iconSize} /> : <CompactIcon className={iconSize} />}
                </button>
                <div className={tooltipClass}>
                    {isCompact ? "Expand spacing" : "Compact spacing"}
                </div>
            </div>

            <div className="relative" ref={fontDropdownRef}>
                 <button
                    onClick={() => setIsFontDropdownOpen(!isFontDropdownOpen)}
                    className={`h-6 sm:h-7 flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 text-xs font-medium sm:font-semibold rounded-full transition-colors bg-ui-background hover:bg-ui-background-hover text-text-secondary cursor-pointer ${focusVisibleRing}`}
                    aria-label="Select font family"
                    aria-haspopup="true"
                    aria-expanded={isFontDropdownOpen}
                >
                    <span>{fontFamilyLabels[fontFamily]}</span>
                    <ChevronDownIcon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${animations ? 'transition-transform' : ''} ${isFontDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                 {isFontDropdownOpen && (
                    <div 
                        className="absolute left-0 sm:left-auto sm:right-0 mt-2 w-32 origin-top-right rounded-md shadow-lg bg-card-bg ring-1 ring-black dark:ring-white ring-opacity-5 dark:ring-opacity-10 backdrop-blur-xl backdrop-saturate-150 transform-gpu focus:outline-none z-[100]"
                        style={{ backdropFilter: "blur(24px) saturate(150%)", WebkitBackdropFilter: "blur(24px) saturate(150%)" }}
                    >
                        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                            {fontFamilies.map((font) => (
                                <button
                                    key={font}
                                    onClick={() => {
                                        setFontFamily(font);
                                        setIsFontDropdownOpen(false);
                                    }}
                                    className={`w-full text-left block px-4 py-2 text-sm font-medium ${
                                        fontFamily === font
                                            ? 'bg-accent/20 text-accent'
                                            : 'text-text-secondary'
                                    } hover:bg-ui-background-hover`}
                                    role="menuitem"
                                >
                                    {fontFamilyLabels[font]}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
            
            <PaletteDropdown colorPalette={colorPalette} setColorPalette={setColorPalette} animations={animations} />

        </div>
    );
});

export default SiteControls;
