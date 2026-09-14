
import React, { memo, useRef, useState, useEffect } from 'react';
import { experienceHistory, educationHistory, resumeData, projects } from '../constants';
import { Route } from '../App';
import KonamiCode from '../components/KonamiCode';
import { DownloadIcon, CloseIcon, SunIcon, MoonIcon } from '../components/Icons';

interface PageProps {
    animations: boolean;
    elevation: boolean;
    isCompact: boolean;
    navigateTo: (route: Route) => void;
    isKonamiActive: boolean;
    setIsKonamiActive: (isActive: boolean) => void;
    konamiIndex: number;
}

const cleanDuration = (duration: string) => {
    if (!duration) return "";
    return duration.split(' · ')[0];
};

interface ResumeSheetProps {
    id?: string;
    className?: string;
    style?: React.CSSProperties;
    theme?: 'blue' | 'white';
}

const ResumeSheet = memo(({ id, className, style, theme = 'white' }: ResumeSheetProps) => {
    const isBlue = theme === 'blue';

    // Dynamic Styles
    const bgClass = isBlue ? 'bg-[#172a45]' : 'bg-white';
    const textHeaderClass = isBlue ? 'text-white' : 'text-slate-900';
    const textSubHeaderClass = isBlue ? 'text-slate-200' : 'text-slate-800';
    const textBodyClass = isBlue ? 'text-slate-300' : 'text-slate-600';
    const textFaintClass = isBlue ? 'text-slate-400' : 'text-slate-500';
    const borderClass = isBlue ? 'border-slate-600' : 'border-slate-200';
    const lineClass = isBlue ? 'bg-slate-700' : 'bg-slate-200';
    const sectionHeaderClass = `text-[10px] font-bold uppercase tracking-[0.15em] ${textHeaderClass} border-b ${borderClass} pb-1.5 mb-3 mt-4`;

    return (
        <div id={id} className={`w-[794px] min-h-[1123px] ${bgClass} ${textBodyClass} px-16 pt-10 pb-8 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.7)] relative text-[10px] leading-relaxed text-left overflow-hidden box-border font-sans ${className || ''}`} style={style}>
            
            {/* Background Watermark */}
            <div className={`absolute -bottom-8 -right-8 select-none pointer-events-none z-0 p-8 ${isBlue ? 'opacity-[0.04]' : 'opacity-[0.02]'}`}>
                 <img 
                    src="https://i.imgur.com/uWz4D63.png" 
                    alt="" 
                    className="w-[350px] h-[350px] object-contain -rotate-12 grayscale translate-y-10"
                    style={{ 
                        imageRendering: 'pixelated',
                        filter: 'contrast(0.6) brightness(1.4) blur(1px)' 
                    }}
                 />
            </div>

            {/* Header */}
            <header className="mb-5 relative z-10">
                <div className="flex justify-between items-end mb-4">
                    <div>
                        <h1 className={`text-[32px] font-bold ${textHeaderClass} tracking-tight mb-0 leading-none`}>Logan Jeya</h1>
                    </div>
                    <div className={`text-right flex flex-col gap-0.5 ${textFaintClass} font-medium`}>
                        <span>logan@setori.ai</span>
                        <span>loganjeya.com</span>
                    </div>
                </div>
                {/* Aligned Summary with Experience/Projects - Max width enforced for reflow */}
                <div className={`text-[10px] ${textBodyClass} leading-relaxed pt-1 max-w-[600px]`}>
                    <span className={textHeaderClass}>15+ years building, & scaling machine learning infrastructure with deep proficiency in AI Cybersecurity & Safety, Agentic Risk Exposure, and expertise in ML Product Strategy, Ops, & GTM</span>
                </div>
            </header>

            {/* Experience */}
            <section className="relative z-10">
                <h2 className={sectionHeaderClass}>Experience</h2>
                <div className="space-y-5">
                    {experienceHistory.map((exp, idx) => (
                        <div key={idx} className="flex gap-6 relative">
                            {/* Logo Column */}
                            <div className="flex flex-col items-center w-8 shrink-0">
                                    {/* Vertical Line connecting logos - Spans full height of the row including gap */}
                                    {idx !== experienceHistory.length - 1 && (
                                        <div className={`absolute top-4 -bottom-5 left-4 w-px ${lineClass}`} />
                                    )}
                                
                                <div className={`relative z-10 w-8 h-8 rounded border ${borderClass} flex items-center justify-center overflow-hidden ${exp.company === 'Setori' ? 'bg-black' : 'bg-white'}`}>
                                    <img 
                                        src={exp.logo} 
                                        alt={exp.company} 
                                        className={`max-w-full max-h-full p-1 
                                            ${exp.company === 'Setori' ? 'invert brightness-0 grayscale-0' : ''} 
                                            ${exp.company === 'MASC Research' ? 'scale-[1.3]' : ''}
                                        `}
                                    />
                                </div>
                            </div>

                            {/* Content Column */}
                            <div className="flex-1 pb-1">
                                <div className="flex justify-between items-baseline mb-0.5">
                                    <h3 className={`text-[11px] font-bold ${textHeaderClass}`}>{exp.company}</h3>
                                </div>
                                
                                <div className="space-y-2">
                                    {exp.roles.map((role, rIdx) => (
                                        <div key={rIdx}>
                                            <div className="flex justify-between items-baseline mb-0.5">
                                                <h4 className={`text-[10px] font-semibold ${textSubHeaderClass}`}>{role.title}</h4>
                                                <span className={`text-[10px] ${textFaintClass} tabular-nums`}>{cleanDuration(role.duration)}</span>
                                            </div>
                                            {role.description && (
                                                <p className={`${textBodyClass} text-[10px] leading-relaxed max-w-[500px]`}>{role.description}</p>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Education */}
            <section className="relative z-10">
                <h2 className={sectionHeaderClass}>Education</h2>
                <div className="space-y-3">
                    {educationHistory.map((edu, idx) => (
                        <div key={idx} className="flex gap-6">
                            {/* Logo Column */}
                            <div className="relative flex flex-col items-center w-8 shrink-0">
                                <div className={`w-8 h-8 shrink-0 rounded border ${borderClass} flex items-center justify-center bg-white overflow-hidden`}>
                                    <img 
                                        src={edu.logo} 
                                        alt={edu.institution} 
                                        className="max-w-full max-h-full p-0.5 scale-110"
                                    />
                                </div>
                            </div>

                            {/* Content Column */}
                            <div className="flex-1">
                                <div className="flex justify-between items-baseline mb-0.5">
                                    <h3 className={`text-[11px] font-bold ${textHeaderClass}`}>{edu.institution}</h3>
                                    <span className={`text-[10px] ${textFaintClass} tabular-nums`}>{cleanDuration(edu.duration)}</span>
                                </div>
                                <div className={`text-[10px] ${textBodyClass} font-medium`}>{edu.degree}</div>
                                <div className={`text-[9px] ${textFaintClass} mt-0.5 max-w-[500px]`}>{edu.description}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Research */}
            <section className="relative z-10">
                <h2 className={sectionHeaderClass}>Research</h2>
                <div className="space-y-2">
                    {resumeData.research.map((res, idx) => (
                        <div key={idx} className="flex items-baseline">
                            {/* Publication Column - Fixed width for alignment */}
                            <div className={`w-28 shrink-0 text-[10px] font-bold ${textHeaderClass} leading-relaxed pr-2`}>
                                {res.publication}
                            </div>
                            <div className="flex-1 flex justify-between gap-4 items-baseline">
                                {/* Title Column - Max width increased to 480px to allow 2 lines for thesis */}
                                <div className={`text-[10px] ${textBodyClass} leading-relaxed whitespace-pre-line max-w-[480px]`}>
                                    {res.role === "First Author" && <i className="italic">First Author</i>}
                                    {res.role === "First Author" ? " - " : ""}
                                    {res.title}
                                </div>
                                <div className={`text-[10px] ${textFaintClass} tabular-nums shrink-0 text-right`}>
                                    {res.year}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Projects */}
            <section className="relative z-10">
                <h2 className={sectionHeaderClass}>Selected Projects</h2>
                <div className="space-y-3">
                    {projects.map((proj, idx) => (
                        <div key={idx}>
                            <div className="flex justify-between items-baseline mb-0.5">
                                <h3 className={`text-[11px] font-bold ${textHeaderClass}`}>{proj.title}</h3>
                                <span className={`text-[10px] ${textFaintClass} tabular-nums`}>{proj.date}</span>
                            </div>
                            {/* Description - Max width increased to 600px to keep ApeNET on one line */}
                            <p className={`${textBodyClass} text-[10px] leading-relaxed mb-1.5 max-w-[600px]`}>{proj.description}</p>
                            {proj.skills && (
                                <div className={`text-[9px] ${textFaintClass}`}>
                                    {proj.skills.join(" · ")}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* Interests */}
            <section className="relative z-10">
                <h2 className={sectionHeaderClass}>Interests</h2>
                <div className={`text-[10px] ${textBodyClass} leading-relaxed max-w-[600px]`}>
                    {resumeData.awardsAndInterests.map(item => item.label).join(", ")}
                </div>
            </section>

        </div>
    );
});

const ResumePage: React.FC<PageProps> = memo(({ 
    animations, 
    isKonamiActive, 
    setIsKonamiActive, 
    konamiIndex 
}) => {
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);
    const [resumeTheme, setResumeTheme] = useState<'blue' | 'white'>('white');
    const thumbnailContainerRef = useRef<HTMLDivElement>(null);
    const lightboxContainerRef = useRef<HTMLDivElement>(null);
    const [thumbScale, setThumbScale] = useState(0.8); // Default start scale
    const [lightboxScale, setLightboxScale] = useState(1);
    
    const A4_WIDTH_PX = 794;
    const A4_HEIGHT_PX = 1123;

    useEffect(() => {
        if (isLightboxOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isLightboxOpen]);

    const handleDownloadPdf = async () => {
        if (isGeneratingPdf) return;
        setIsGeneratingPdf(true);

        try {
            // @ts-ignore
            const html2canvas = window.html2canvas;
            // @ts-ignore
            const { jsPDF } = window.jspdf;

            if (!html2canvas || !jsPDF) {
                console.error("PDF libraries not loaded.");
                alert("PDF libraries are not loaded. Please refresh the page.");
                return;
            }

            const element = document.getElementById('resume-content');
            if (!element) {
                console.error("Resume element not found");
                return;
            }

            // Create a clone to ensure 1:1 scale capture without lightbox transforms interference
            const clone = element.cloneNode(true) as HTMLElement;
            
            // Reset any potential transforms or margins on the clone to ensure clean capture
            // We position it off-screen but visible to the renderer
            clone.style.transform = 'none';
            clone.style.margin = '0';
            clone.style.position = 'fixed';
            clone.style.top = '0';
            clone.style.left = '0';
            clone.style.zIndex = '-9999';
            // Ensure fixed A4 pixel dimensions
            clone.style.width = '794px'; 
            clone.style.height = '1123px';
            
            document.body.appendChild(clone);

            // Add a small delay to ensure styles are applied and images loaded
            await new Promise(resolve => setTimeout(resolve, 100));
            
            const canvas = await html2canvas(clone, {
                scale: 2, // 2x scale for better text clarity on PDF
                useCORS: true, // Critical for external images (logos)
                allowTaint: true,
                backgroundColor: resumeTheme === 'blue' ? '#172a45' : '#ffffff',
                logging: false,
                windowWidth: 794,
                windowHeight: 1123
            });

            document.body.removeChild(clone);

            const imgData = canvas.toDataURL('image/jpeg', 1.0);
            const pdf = new jsPDF({
                orientation: 'portrait',
                unit: 'mm',
                format: 'a4'
            });

            const imgWidth = 210; // A4 width mm
            const pageHeight = 297; // A4 height mm
            // Calculate height preserving aspect ratio, though it should be close to full page
            const imgHeight = (canvas.height * imgWidth) / canvas.width;

            pdf.addImage(imgData, 'JPEG', 0, 0, imgWidth, imgHeight);
            pdf.save('LoganJeya_Resume_2025.pdf');

        } catch (error) {
            console.error('PDF Generation failed', error);
            alert('Could not generate PDF. Please try again.');
        } finally {
            setIsGeneratingPdf(false);
        }
    };

    // Calculate scale for Thumbnail (fits in content column)
    useEffect(() => {
        const updateThumbScale = () => {
            if (thumbnailContainerRef.current) {
                const parentWidth = thumbnailContainerRef.current.offsetWidth;
                const newScale = Math.min(1, parentWidth / A4_WIDTH_PX);
                setThumbScale(newScale);
            }
        };

        window.addEventListener('resize', updateThumbScale);
        updateThumbScale();
        // Double check after mount to ensure container width is correct
        setTimeout(updateThumbScale, 100);
        return () => window.removeEventListener('resize', updateThumbScale);
    }, []);

    // Calculate scale for Lightbox (fits in viewport comfortably)
    useEffect(() => {
        if (!isLightboxOpen) return;

        const updateLightboxScale = () => {
            const isMobile = window.innerWidth < 640;
            const margin = isMobile ? 0 : 40; // No margin on mobile to allow full width
            const availableWidth = window.innerWidth - margin;
            // We don't constrain by height to allow scrolling, similar to a real PDF viewer
            const newScale = Math.min(1.2, availableWidth / A4_WIDTH_PX); 
            setLightboxScale(newScale);
        };

        window.addEventListener('resize', updateLightboxScale);
        updateLightboxScale();
        return () => window.removeEventListener('resize', updateLightboxScale);
    }, [isLightboxOpen]);

    return (
        <KonamiCode 
            isKonamiActive={isKonamiActive} 
            setIsKonamiActive={setIsKonamiActive} 
            animations={animations} 
            konamiIndex={konamiIndex}
            location="other"
        >
            <div className="flex flex-col w-full min-h-[60vh] pb-8 print:py-0 font-sans -mt-3 sm:mt-0">
                
                <div className="mb-4 text-left">
                    <p className="text-text-secondary text-sm">
                        Click below to preview or download resumé.
                    </p>
                </div>

                {/* Thumbnail View */}
                <div 
                    ref={thumbnailContainerRef} 
                    className="w-full flex justify-center print:hidden"
                >
                    <div className="relative w-fit">
                        {/* Floating Theme Toggle */}
                         <div 
                            className="absolute top-3 right-3 z-20 flex items-center space-x-1 bg-black/20 backdrop-blur-md p-1 rounded-full border border-white/10 shadow-sm transition-opacity duration-300 hover:bg-black/30 scale-[0.7] origin-top-right"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button 
                                onClick={() => setResumeTheme('blue')}
                                className={`p-1.5 rounded-full transition-all duration-200 ${resumeTheme === 'blue' ? 'bg-white text-black shadow-md scale-105' : 'text-white/80 hover:text-white hover:bg-white/10'}`}
                                aria-label="Blue Theme"
                                title="Blue Theme"
                            >
                                <MoonIcon className="w-3 h-3" />
                            </button>
                            <button 
                                onClick={() => setResumeTheme('white')}
                                className={`p-1.5 rounded-full transition-all duration-200 ${resumeTheme === 'white' ? 'bg-white text-black shadow-md scale-105' : 'text-white/80 hover:text-white hover:bg-white/10'}`}
                                aria-label="White Theme"
                                title="White Theme"
                            >
                                <SunIcon className="w-3 h-3" />
                            </button>
                        </div>

                        <button 
                            onClick={() => setIsLightboxOpen(true)}
                            className="relative group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded block"
                            aria-label="Open Resume"
                            style={{
                                width: A4_WIDTH_PX * thumbScale,
                                height: A4_HEIGHT_PX * thumbScale,
                            }}
                        >
                            <div 
                                className="w-[794px] origin-top-left transition-transform duration-300 ease-out will-change-transform"
                                style={{ transform: `scale(${thumbScale})` }}
                            >
                                <ResumeSheet theme={resumeTheme} className="group-hover:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] dark:shadow-black/50 transition-shadow duration-300 pointer-events-none" />
                                
                                {/* Overlay for click interaction and potential hover sheen */}
                                <div className="absolute inset-0 bg-transparent z-10" />
                            </div>
                        </button>
                    </div>
                </div>

                {/* Lightbox View */}
                {isLightboxOpen && (
                    <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm overflow-y-auto print:bg-white print:overflow-visible print:static print:block overscroll-contain">
                        
                        {/* Lightbox Controls (Hidden on Print) */}
                        <div className="sticky top-0 left-0 right-0 p-4 flex justify-between items-center bg-black/60 backdrop-blur-md z-50 print:hidden">
                             <h2 className="font-bold text-lg text-white pl-2">Resumé</h2>
                             <div className="flex gap-3">
                                <button 
                                    onClick={handleDownloadPdf}
                                    disabled={isGeneratingPdf}
                                    className={`flex items-center gap-2 px-4 py-2 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-colors shadow-lg active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-white ${isGeneratingPdf ? 'opacity-70 cursor-wait' : ''}`}
                                >
                                    {isGeneratingPdf ? (
                                        <>
                                            <span className="w-4 h-4 border-2 border-gray-600 border-t-transparent rounded-full animate-spin"/>
                                            Generating...
                                        </>
                                    ) : (
                                        <>
                                            <DownloadIcon className="w-4 h-4"/> Save as PDF
                                        </>
                                    )}
                                </button>
                                <button 
                                    onClick={() => setIsLightboxOpen(false)} 
                                    className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                                    aria-label="Close"
                                >
                                    <CloseIcon className="w-5 h-5"/>
                                </button>
                            </div>
                        </div>

                        {/* Resume Container in Lightbox */}
                        <div 
                            className="flex justify-center pt-16 pb-4 sm:p-8 min-h-full print:p-0 print:m-0 print:block" 
                            onClick={(e) => e.target === e.currentTarget && setIsLightboxOpen(false)}
                        >
                            <div 
                                ref={lightboxContainerRef}
                                className="w-[794px] origin-top transition-transform duration-300 ease-out print:transform-none print:m-0"
                                style={{ 
                                    transform: `scale(${lightboxScale})`,
                                    // Adjust margin bottom to prevent huge empty space from scaled height
                                    marginBottom: `-${A4_HEIGHT_PX * (1 - lightboxScale)}px` 
                                }}
                            >
                                <ResumeSheet id="resume-content" theme={resumeTheme} />
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </KonamiCode>
    );
});

export default ResumePage;
