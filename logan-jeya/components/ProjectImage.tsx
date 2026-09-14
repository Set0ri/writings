
import React, { useState, useEffect, memo } from 'react';

interface ProjectImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    title: string;
}

const generateAcronym = (title: string): string => {
    if (!title) return '';
    if (title.toUpperCase() === 'APENET') return 'AN';
    
    const words = title.split(' ');
    if (words.length > 1) {
        return (words[0][0] + words[1][0]).toUpperCase();
    }
    if (words[0].length > 1) {
        return words[0].substring(0, 2).toUpperCase();
    }
    return words[0].toUpperCase();
};

const generateSvgDataUrl = (title: string, alt: string): string => {
    const isArchitecture = alt.toLowerCase().includes('architecture');
    const acronym = isArchitecture ? "ARCH" : generateAcronym(title);
    
    // Simple hash to get a deterministic color
    let hash = 0;
    for (let i = 0; i < title.length; i++) {
        hash = title.charCodeAt(i) + ((hash << 5) - hash);
    }
    const color = `hsl(${hash % 360}, 50%, 30%)`;
    const textColor = `hsl(${hash % 360}, 20%, 85%)`;

    const svgPattern = isArchitecture ? `
        <defs>
            <pattern id="pattern-grid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 0 10 L 20 10 M 10 0 L 10 20" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
            </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#pattern-grid)"></rect>
    ` : '';
    
    const svgString = `
        <svg width="320" height="180" viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision">
            <rect width="100%" height="100%" fill="${color}" />
            ${svgPattern}
            <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="monospace" font-size="48" fill="${textColor}" font-weight="bold">
                ${acronym}
            </text>
        </svg>
    `.trim();

    const base64Svg = btoa(svgString);
    return `data:image/svg+xml;base64,${base64Svg}`;
};


const ProjectImage: React.FC<ProjectImageProps> = memo(({ src, alt, title, ...props }) => {
    const [hasError, setHasError] = useState(false);
    
    useEffect(() => {
        setHasError(false);
    }, [src]);

    const handleError = () => {
        if (!hasError) {
            setHasError(true);
        }
    };

    if (hasError || !src) {
        const fallbackSrc = generateSvgDataUrl(title, alt || '');
        return <img src={fallbackSrc} alt={alt} {...props} />;
    }

    return <img src={src} alt={alt} onError={handleError} {...props} />;
});

export default ProjectImage;