
import React from 'react';
import { 
    Sun, 
    Moon, 
    Zap, 
    ZapOff, 
    Layers, 
    Square,
    Shrink,
    Expand,
    ChevronRight,
    ChevronDown,
    Sparkles,
    Flame,
    Egg,
    ArrowLeft,
    X,
    FileText,
    Download,
} from 'lucide-react';

type IconProps = React.ComponentProps<'svg'>;

const defaultProps = {
    shapeRendering: "geometricPrecision"
};

export const SunIcon = (props: IconProps) => <Sun {...defaultProps} {...props} fill="currentColor" />;
export const MoonIcon = (props: IconProps) => <Moon {...defaultProps} {...props} fill="currentColor" />;
export const BoltIcon = (props: IconProps) => <Zap {...defaultProps} {...props} fill="currentColor" />;
export const BoltSlashIcon = (props: IconProps) => <ZapOff {...defaultProps} {...props} fill="currentColor" />;
export const Square3Stack3DIcon = (props: IconProps) => <Layers {...defaultProps} {...props} fill="currentColor" />;
export const Squares2x2Icon = (props: IconProps) => <Square {...defaultProps} {...props} fill="currentColor" />;
export const CompactIcon = (props: IconProps) => <Shrink {...defaultProps} {...props} fill="currentColor" />;
export const ExpandIcon = (props: IconProps) => <Expand {...defaultProps} {...props} fill="currentColor" />;
export const ChevronRightIcon = (props: IconProps) => <ChevronRight {...defaultProps} {...props} />;
export const ChevronDownIcon = (props: IconProps) => <ChevronDown {...defaultProps} {...props} />;
export const SparklesIcon = (props: IconProps) => <Sparkles {...defaultProps} {...props} fill="currentColor" />;
export const FlameIcon = (props: IconProps) => <Flame {...defaultProps} {...props} fill="currentColor" />;
// Custom filled resume icon
export const ResumeIcon = (props: IconProps) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...defaultProps} {...props}>
        <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
    </svg>
);
export const DownloadIcon = (props: IconProps) => <Download {...defaultProps} {...props} />;

export const LinkedInIcon = (props: IconProps) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 448 512"
        fill="currentColor"
        shapeRendering="geometricPrecision"
        {...props}
    >
        <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/>
    </svg>
);
export const XIcon = (props: IconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        shapeRendering="geometricPrecision"
        {...props}
    >
        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
    </svg>
);
export const EggIcon = (props: IconProps) => <Egg {...defaultProps} {...props} fill="currentColor" />
export const ArrowLeftIcon = (props: IconProps) => <ArrowLeft {...defaultProps} {...props} />
export const CloseIcon = (props: IconProps) => <X {...defaultProps} {...props} />;
export const PatreonIcon = (props: IconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        fill="currentColor"
        shapeRendering="geometricPrecision"
        {...props}
    >
        <path d="M512 194.8c0 101.3-82.4 183.8-183.8 183.8-101.7 0-184.4-82.4-184.4-183.8 0-101.6 82.7-183.8 184.4-183.8C429.6 11 512 93.2 512 194.8zM0 491V11h79v480H0z"/>
    </svg>
);
export const ClipboardIcon = (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" {...props}>
        <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    </svg>
);

export const CheckIcon = (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" {...props}>
        <polyline points="20 6 9 17 4 12" />
    </svg>
);

export const ArrowUpIcon = (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" {...props}>
        <path d="m18 15-6-6-6 6"/>
    </svg>
);

export const DpadUpIcon = (props: React.ComponentProps<'svg'> & { filled?: boolean }) => {
    const { filled = true, ...rest } = props;
    const pathProps = filled 
        ? { fill: "currentColor" } 
        : { fill: "none", stroke: "currentColor", strokeWidth: "1.5" };
    return (
        <svg viewBox="0 0 24 24" shapeRendering="geometricPrecision" {...rest}>
            <path d="M12 5l-5 5h3v6h4v-6h3z" {...pathProps} />
        </svg>
    );
};
export const DpadDownIcon = (props: React.ComponentProps<'svg'> & { filled?: boolean }) => {
    const { filled = true, ...rest } = props;
    const pathProps = filled 
        ? { fill: "currentColor" } 
        : { fill: "none", stroke: "currentColor", strokeWidth: "1.5" };
    return (
        <svg viewBox="0 0 24 24" shapeRendering="geometricPrecision" {...rest}>
            <path d="M12 19l5-5h-3v-6h-4v6H7z" {...pathProps} />
        </svg>
    );
};
export const DpadLeftIcon = (props: React.ComponentProps<'svg'> & { filled?: boolean }) => {
    const { filled = true, ...rest } = props;
    const pathProps = filled 
        ? { fill: "currentColor" } 
        : { fill: "none", stroke: "currentColor", strokeWidth: "1.5" };
    return (
        <svg viewBox="0 0 24 24" shapeRendering="geometricPrecision" {...rest}>
            <path d="M5 12l5-5v3h6v4h-6v3z" {...pathProps} />
        </svg>
    );
};
export const DpadRightIcon = (props: React.ComponentProps<'svg'> & { filled?: boolean }) => {
    const { filled = true, ...rest } = props;
    const pathProps = filled 
        ? { fill: "currentColor" } 
        : { fill: "none", stroke: "currentColor", strokeWidth: "1.5" };
    return (
        <svg viewBox="0 0 24 24" shapeRendering="geometricPrecision" {...rest}>
            <path d="M19 12l-5 5v-3h-6v-4h6V7z" {...pathProps} />
        </svg>
    );
};

export const NintendoBIcon = (props: React.ComponentProps<'svg'> & { filled?: boolean }) => {
    const { filled = true, ...rest } = props;
    const circleFill = filled ? "currentColor" : "none";
    const textFill = filled ? 'var(--bg-color)' : 'currentColor';

    return (
        <svg viewBox="0 0 24 24" shapeRendering="geometricPrecision" {...rest}>
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" fill={circleFill} />
            <text 
                x="12" 
                y="16.5" 
                fontSize="14" 
                fontFamily="monospace" 
                fontWeight="bold" 
                textAnchor="middle"
                stroke="none"
                fill={textFill}
            >
                B
            </text>
        </svg>
    );
};

export const NintendoAIcon = (props: React.ComponentProps<'svg'> & { filled?: boolean }) => {
    const { filled = true, ...rest } = props;
    const circleFill = filled ? "currentColor" : "none";
    const textFill = filled ? 'var(--bg-color)' : 'currentColor';

    return (
        <svg viewBox="0 0 24 24" shapeRendering="geometricPrecision" {...rest}>
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" fill={circleFill} />
            <text 
                x="12" 
                y="16.5" 
                fontSize="14" 
                fontFamily="monospace" 
                fontWeight="bold" 
                textAnchor="middle"
                stroke="none"
                fill={textFill}
            >
                A
            </text>
        </svg>
    );
};
