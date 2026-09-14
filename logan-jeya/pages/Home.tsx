
import React, { useState, memo, useEffect } from 'react';
import { newestWritings, popularWritings, socialLinks, experienceHistory, educationHistory } from '../constants';
import { 
    SparklesIcon, 
    FlameIcon, 
    LinkedInIcon, 
    XIcon, 
    EggIcon, 
    ChevronRightIcon, 
    ChevronDownIcon, 
    PatreonIcon,
    ResumeIcon,
} from '../components/Icons';
import { Route } from '../App';
import KonamiCode from '../components/KonamiCode';

type WritingsFilter = 'newest' | 'popular';

interface PageProps {
    animations: boolean;
    elevation: boolean;
    isCompact: boolean;
    navigateTo: (route: Route) => void;
    isKonamiActive: boolean;
    setIsKonamiActive: (isActive: boolean) => void;
    konamiIndex: number;
}

const FadeIn = ({ 
    children, 
    index, 
    enabled, 
    className = "" 
}: { 
    children?: React.ReactNode; 
    index: number; 
    enabled: boolean; 
    className?: string; 
}) => {
    const [showStatic, setShowStatic] = useState(false);

    useEffect(() => {
        if (enabled) {
            const timeout = setTimeout(() => {
                setShowStatic(true);
            }, index * 100 + 850); // Delay + Animation Duration (800ms) + Buffer
            return () => clearTimeout(timeout);
        }
    }, [enabled, index]);

    if (!enabled || showStatic) return <div className={className}>{children}</div>;
    
    return (
        <div 
            className={`opacity-0 animate-fade-in-up ${className}`} 
            style={{ animationDelay: `${index * 100}ms` }}
        >
            {children}
        </div>
    );
};

const HomePage: React.FC<PageProps> = memo(({ animations, elevation, isCompact, navigateTo, isKonamiActive, setIsKonamiActive, konamiIndex }) => {
    const [writingsFilter, setWritingsFilter] = useState<WritingsFilter>('newest');
    const [isAboutOpen, setIsAboutOpen] = useState(false);
    
    const sectionClasses = `${elevation ? 'p-6 rounded-lg shadow-md bg-card-bg' : ''} ${animations ? 'transition-all duration-300' : 'transition-none'}`;
    const mainCardClasses = `${elevation ? 'p-6 rounded-lg shadow-md bg-card-bg' : ''} ${animations ? 'transition-all duration-300' : 'transition-none'}`;

    const mainSpacing = isCompact ? 'space-y-4' : 'space-y-10';
    const cardContentSpacing = isCompact ? 'space-y-4' : 'space-y-10';
    const listSpacing = isCompact ? 'space-y-1.5' : 'space-y-3';
    
    const focusVisibleRing = "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent focus-visible:ring-offset-background rounded";
    const inlineLinkButtonClass = `text-accent underline hover:text-text-secondary text-left ${focusVisibleRing}`;
    const headingButtonClass = `w-full text-left hover:text-accent ${animations ? 'transition-colors' : ''} ${focusVisibleRing}`;

    const timelineCircleClasses = "absolute left-0 top-0 w-14 h-14 flex items-center justify-center rounded-full bg-background ring-4 ring-background";
    
    const tooltipClass = "absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 bg-text-primary text-background dark:bg-text-primary dark:text-background text-xs rounded opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border-none outline-none font-medium";

    // Start at index 3 to allow header (0,1,2) to animate first
    const baseIndex = 3;

    return (
        <KonamiCode 
            isKonamiActive={isKonamiActive} 
            setIsKonamiActive={setIsKonamiActive} 
            animations={animations} 
            konamiIndex={konamiIndex}
            location="home"
        >
            <div className={mainSpacing}>
                <div className={mainCardClasses}>
                    <div className={cardContentSpacing}>
                        <FadeIn index={baseIndex} enabled={animations}>
                            <p className="leading-relaxed text-text-secondary p-4 rounded-lg bg-ui-background">
                                <strong className="text-text-primary">15+ years building, testing, & scaling machine learning infrastructure and models</strong> generating $500M+ ROI across Microsoft, Uber & Setori. Currently building in AI Trust, Risk & Safety.
                            </p>
                        </FadeIn>

                        <FadeIn index={baseIndex + 1} enabled={animations}>
                            <div className={cardContentSpacing}>
                                <section id="writings">
                                    <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                                        <h2 className="text-xl font-bold">
                                        <button onClick={() => navigateTo({ page: 'writings' })} className={headingButtonClass}>Writings</button>
                                        </h2>
                                        <div className="flex items-center space-x-2 text-sm">
                                            <button 
                                                onClick={() => setWritingsFilter('newest')}
                                                className={`flex items-center px-3 py-1 rounded-full ${animations ? 'transition-colors' : ''} ${writingsFilter === 'newest' ? 'bg-accent text-accent-text' : 'hover:bg-ui-background-hover'} ${focusVisibleRing}`}
                                            >
                                                <SparklesIcon className="w-4 h-4 mr-1.5" />
                                                Newest
                                            </button>
                                            <button 
                                                onClick={() => setWritingsFilter('popular')}
                                                className={`flex items-center px-3 py-1 rounded-full ${animations ? 'transition-colors' : ''} ${writingsFilter === 'popular' ? 'bg-accent text-accent-text' : 'hover:bg-ui-background-hover'} ${focusVisibleRing}`}
                                            >
                                                <FlameIcon className="w-4 h-4 mr-1.5" />
                                                Popular
                                            </button>
                                        </div>
                                    </div>
                                    <ul className={listSpacing}>
                                    {(writingsFilter === 'newest' ? newestWritings : popularWritings).slice(0, 3).map((writing, index) => (
                                        <li key={index}>
                                        <button onClick={() => navigateTo({ page: 'writings', slug: writing.slug })} className={`${inlineLinkButtonClass} block w-full truncate sm:inline-block sm:w-auto sm:whitespace-normal`}>
                                            {writing.title}
                                        </button>
                                        <div className="text-xs text-text-secondary mt-1">
                                            <span>{writing.publicationDate}</span>
                                        </div>
                                        </li>
                                    ))}
                                    </ul>
                                </section>
                                
                                <section id="projects">
                                    <h2 className="text-xl font-bold">
                                        <button onClick={() => navigateTo({ page: 'research-projects-work' })} className={headingButtonClass}>Research, Projects & Work</button>
                                    </h2>
                                </section>

                                <section id="interesting-companies-investments">
                                    <h2 className="text-xl font-bold">
                                        <button onClick={() => navigateTo({ page: 'interesting-companies-investments' })} className={headingButtonClass}>Interesting Companies/Investments</button>
                                    </h2>
                                </section>

                                <section id="links">
                                    <h2 className="text-xl font-bold">
                                        <button onClick={() => navigateTo({ page: 'links' })} className={headingButtonClass}>Index of Links</button>
                                    </h2>
                                </section>
                            </div>
                        </FadeIn>

                        <FadeIn index={baseIndex + 2} enabled={animations}>
                            <section id="about">
                                <h2 className="text-xl font-bold">
                                <button
                                    onClick={() => setIsAboutOpen(!isAboutOpen)}
                                    className={`flex items-center justify-between ${headingButtonClass}`}
                                    aria-expanded={isAboutOpen}
                                    aria-controls="about-content"
                                >
                                    <span>More About Me</span>
                                    {isAboutOpen ? <ChevronDownIcon className="w-5 h-5" /> : <ChevronRightIcon className="w-5 h-5" />}
                                </button>
                                </h2>
                                <div
                                className={`
                                    grid 
                                    ${isAboutOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}
                                    ${animations ? 'transition-[grid-template-rows] duration-500 ease-in-out' : ''}
                                `}
                                >
                                <div className="overflow-hidden">
                                    <div
                                    id="about-content"
                                    className={`
                                        pt-4 text-text-secondary space-y-4 leading-relaxed
                                        transform-origin-top
                                        ${isAboutOpen ? 'opacity-100' : 'opacity-0'}
                                        ${animations ? 'transition-opacity duration-300 ease-in-out' : ''}
                                    `}
                                    >
                                    <p>
                                        Hello, I'm Logan. a builder, engineer, operator (and angel investor) researching the intersection of fractal machine learning and feedback loops — exploring how these concepts might lead us towards what I call Riemann Intelligences, a more accurate term for Artificial Super Intelligences (ASI).
                                    </p>
                                    <p>
                                        I've spent the last 15 years developing deep proficiencies in ML Infra, ML Safety Systems, AI Companions, Computer Vision and expertise in Strategy, Ops, GTM & Technical Product Management. My current interests include cycling, neuroscience, lithography, reading, football (soccer) and writing and One Piece.
                                    </p>

                                    <div className={`border border-border p-4 sm:p-6 rounded-lg ${elevation ? 'bg-card-bg shadow-md' : 'bg-ui-background/[.3]'} ${animations ? 'transition-all duration-300' : ''}`}>
                                        {/* Timeline Section */}
                                        <h3 className="text-xl font-bold mb-6">Timeline</h3>
                                        <div className="relative py-4">
                                            <div className="absolute left-7 top-0 h-full w-0.5 bg-border" aria-hidden="true"></div>
                                            <div className={isCompact ? 'space-y-8' : 'space-y-12'}>
                                                {experienceHistory.map((exp, index) => (
                                                    <div key={index} className="relative pl-16">
                                                        <div className={timelineCircleClasses}>
                                                            <div className={`w-12 h-12 rounded-full flex items-center justify-center overflow-hidden p-1 bg-white`}>
                                                                <img 
                                                                    src={exp.logo} 
                                                                    alt={`${exp.company} logo`} 
                                                                    className={`
                                                                        object-contain
                                                                        w-full h-full
                                                                        ${exp.company === 'Setori' ? 'scale-[.85] invert' : ''}
                                                                        ${exp.company === 'Microsoft' ? 'scale-[.46]' : ''}
                                                                        ${exp.company === 'Uber' ? 'scale-[.66]' : ''}
                                                                        ${exp.company === 'MASC Research' ? 'scale-[1.185]' : ''}
                                                                        ${animations ? 'transition-transform duration-300' : ''}
                                                                    `}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="flex-1">
                                                            <h4 className="font-bold text-lg text-text-primary">{exp.company}</h4>
                                                            {exp.totalDuration && <p className="text-sm text-text-secondary">{exp.totalDuration}</p>}
                                                            {exp.location && <p className="text-sm text-text-secondary">{exp.location}</p>}
                                                            <div className={`mt-4 ${isCompact ? 'space-y-3' : 'space-y-4'}`}>
                                                                {exp.roles.map((role, rIndex) => (
                                                                    <div key={rIndex}>
                                                                        <h5 className="font-bold">{role.title}</h5>
                                                                        <p className="text-sm text-text-secondary">{role.duration}</p>
                                                                        {role.description && <p className="mt-1 text-text-secondary leading-relaxed">{role.description}</p>}
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        
                                        <hr className="my-6 border-border" />

                                        {/* Education Section */}
                                        <h3 className="text-xl font-bold mb-6">Education</h3>
                                        <div className="relative py-4">
                                            <div className="absolute left-7 top-0 h-full w-0.5 bg-border" aria-hidden="true"></div>
                                            <div className="space-y-8">
                                                {educationHistory.map((edu, index) => (
                                                    <div key={index} className="relative pl-16">
                                                        <div className={timelineCircleClasses}>
                                                            <div className={`w-12 h-12 rounded-full flex items-center justify-center overflow-hidden p-1 bg-white`}>
                                                                <img 
                                                                    src={edu.logo} 
                                                                    alt={`${edu.institution} logo`} 
                                                                    className={`
                                                                        object-contain w-full h-full
                                                                        ${edu.institution === 'University of Waterloo' ? 'scale-[1.185]' : ''}
                                                                        ${animations ? 'transition-transform duration-300' : ''}
                                                                    `}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="flex-1">
                                                            <h4 className="font-bold text-lg text-text-primary">{edu.institution}</h4>
                                                            <p className="font-semibold">{edu.degree}</p>

                                                            <p className="text-sm text-text-secondary">{edu.duration}</p>
                                                            <p className="mt-1 text-text-secondary leading-relaxed">{edu.description}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pt-4 space-y-4">
                                        <p>
                                        I believe it's unreasonable to expect people, especially the young, to stay focused and grow on their own when billions of dollars are deployed to monetize their attention. This challenge is why we're building Tori: a new kind of personalized AI partner designed to support young people in chasing their dreams.
                                        </p>
                                        <p>
                                        Traditional AI is powerful but often faceless, failing to capture what drives human connection: empathy and shared struggle. Tori fills this gap as a customizable digital avatar that provides emotional support, helps users block distractions, and evolves with them through a compelling, game-like experience. Think of it as Pokémon meets Tamagotchi, with the educational focus of Duolingo.
                                        </p>
                                        <p>
                                        Over the past few years, we've built one of the world's largest datasets on human failure and effective interventions. We're using this to build Cordialis-1, a state-of-the-art behavioral model that can predict when a user might stumble and deploy the right support.
                                        </p>
                                        <p>
                                        Ultimately, my mission is to build technology that fosters a society where human dignity and fulfillment are paramount. If there's a will, there should be a way. Tori is our contribution to helping people find it.
                                        </p>
                                    </div>

                                    <div className="relative w-full overflow-hidden mt-8" style={{ paddingTop: '56.25%' }}>
                                        <iframe 
                                            className="absolute top-0 left-0 w-full h-full rounded-lg"
                                            src="https://www.youtube.com/embed/DOwDIHzN5bs?si=Bl96-HxWB7kzPzfa"
                                            title="YouTube video player" 
                                            frameBorder="0" 
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            referrerPolicy="strict-origin-when-cross-origin"
                                            allowFullScreen>
                                        </iframe>
                                    </div>

                                    </div>
                                </div>
                                </div>
                            </section>
                        </FadeIn>
                    </div>
                </div>

                <FadeIn index={baseIndex + 3} enabled={animations}>
                    <div className={mainSpacing}>
                        <hr className="border-border" />
                        <section id="contact" className={sectionClasses}>
                            <p className="text-text-secondary">
                                For collaboration, partnerships, and investments, feel free to reach out to me at{' '}
                                <a href={socialLinks.emailLink} className={`text-accent hover:text-text-secondary ${animations ? 'transition-colors' : ''}`}>
                                    {socialLinks.email}
                                </a>. I'll try my best to check often and will reply to almost everyone. Average response time is 2-3 business days.
                            </p>
                            <div className="mt-4 flex items-center space-x-4">
                                <div className="relative group">
                                    <a 
                                        href={socialLinks.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="LinkedIn Profile"
                                        className={`block text-text-secondary hover:text-accent ${animations ? 'transition-colors' : ''}`}
                                    >
                                        <LinkedInIcon className="w-5 h-5" />
                                    </a>
                                    <div className={tooltipClass}>LinkedIn</div>
                                </div>
                                <div className="relative group">
                                    <a 
                                        href={socialLinks.x}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="X Profile"
                                        className={`block text-text-secondary hover:text-accent ${animations ? 'transition-colors' : ''}`}
                                    >
                                        <XIcon className="w-5 h-5" />
                                    </a>
                                    <div className={tooltipClass}>X (Twitter)</div>
                                </div>
                                <div className="relative group">
                                    <a 
                                        href={socialLinks.setori}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Setori.ai"
                                        className={`block text-text-secondary hover:text-accent ${animations ? 'transition-colors' : ''}`}
                                    >
                                        <EggIcon className="w-5 h-5" />
                                    </a>
                                    <div className={tooltipClass}>Setori</div>
                                </div>
                                <div className="relative group">
                                    <a 
                                        href={socialLinks.patreon}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Patreon Profile"
                                        className={`block text-text-secondary hover:text-accent ${animations ? 'transition-colors' : ''}`}
                                    >
                                        <PatreonIcon className="w-5 h-5" />
                                    </a>
                                    <div className={tooltipClass}>Patreon</div>
                                </div>
                                <div className="relative group">
                                    <button
                                        onClick={() => navigateTo({ page: 'resume' })}
                                        aria-label="Resume Page"
                                        className={`block text-text-secondary hover:text-accent ${animations ? 'transition-colors' : ''}`}
                                    >
                                        <ResumeIcon className="w-5 h-5" />
                                    </button>
                                    <div className={tooltipClass}>Resumé</div>
                                </div>
                            </div>
                        </section>
                    </div>
                </FadeIn>
            </div>
        </KonamiCode>
    );
});

export default HomePage;
