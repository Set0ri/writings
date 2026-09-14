
import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import SiteControls from './components/SiteControls';
import { ArrowLeftIcon } from './components/Icons';
import HomePage from './pages/Home';
import InvestmentsPage from './pages/Investments';
import ProjectsPage from './pages/Projects';
import ProjectDetailPage from './pages/ProjectDetail';
import WritingsPage from './pages/Writings';
import WritingDetailPage from './pages/WritingDetail';
import LinksPage from './pages/Links';
import ResumePage from './pages/Resume';
import Lightbox from './components/Lightbox';
import AnimatedNumber from './components/AnimatedNumber';
import ScrollToTop from './components/ScrollToTop';
import { writings, projects } from './constants';
import { konamiSequence } from './components/KonamiCode';
import type { Writing } from './types';

type Theme = 'light' | 'dark';
type FontSize = 'sm' | 'base' | 'lg';
type FontFamily = 'mono' | 'roboto' | 'system';
export type Route = {
    page: string;
    slug?: string;
}

const getInitialRoute = (): Route => {
    if (typeof window === 'undefined') {
        return { page: 'home' };
    }
    const hash = window.location.hash.replace(/^#\/?/, '');
    const [page, slug] = hash.split('/');

    // Redirect old URLs for bookmark compatibility
    if (page === 'projectDetail') {
        return { page: 'research-projects-work', slug };
    }
    if (page === 'writingDetail') {
        return { page: 'writings', slug };
    }

    const validPages = ['home', 'interesting-companies-investments', 'research-projects-work', 'writings', 'links', 'resume'];
    const targetPage = page || 'home';

    if (validPages.includes(targetPage)) {
        if (targetPage === 'research-projects-work' || targetPage === 'writings') {
            return { page: targetPage, slug };
        } else {
            return { page: targetPage, slug: undefined };
        }
    }
    
    return { page: 'home' };
};

const getInitialState = <T,>(key: string, defaultValue: T): T => {
    if (typeof window === 'undefined') return defaultValue;
    const storedValue = localStorage.getItem(key);
    if (storedValue !== null) {
        try {
             if (key === 'theme' || key.startsWith('last') || key === 'fontSize' || key === 'fontFamily') {
                return storedValue as unknown as T;
            }
            return JSON.parse(storedValue) as T;
        } catch (e) {
            console.error(`Error parsing localStorage key "${key}":`, e);
            return defaultValue;
        }
    }
    return defaultValue;
};

const getPageTitle = (route: Route): string => {
    switch (route.page) {
        case 'interesting-companies-investments':
            return 'Interesting Companies/Investments';
        case 'research-projects-work':
            return 'Research, Projects & Work';
        case 'writings':
            return 'Writings';
        case 'links':
            return 'Index of Links';
        case 'resume':
            return 'Resumé';
        case 'home':
        default:
            return 'Logan Jeya';
    }
};

const defaultSeo = {
    title: "Logan Jeya",
    description: "Hi, I'm Logan Jeya - a builder, engineer, operator (and angel investor) researching the intersection of fractal machine learning and feedback loops — exploring how these concepts might lead us towards what I call Riemann Intelligences. 10+ years experience building, testing & scaling machine learning infrastructure and models with deep proficiency in ML Infra, ML Safety Systems, AI Companions, Computer Vision and expertise in Strategy, Ops, GTM & Technical Product Management. Current interests include cycling, neuroscience, lithography, reading, football (soccer) and writing and One Piece.",
    image: "https://i.imgur.com/uWz4D63.png",
    url: "https://loganjeya.com/",
    jsonLdData: null as object | null,
};

const getSeoData = (route: Route): typeof defaultSeo => {
    const siteUrl = "https://loganjeya.com/";

    if (route.page === 'writings') {
        if (route.slug) {
            const writing = writings.find(w => 
                w.slug === route.slug ||
                ((route.slug === 'latent-astronauts-multiverse-portals' || route.slug === 'latent-cosmonauts-generative-portals') && w.slug === 'latent-astronauts')
            );
            if (writing) {
                const title = `${writing.title} | Logan Jeya`;
                const description = writing.excerpt;
                const url = `${siteUrl}#/writings/${writing.slug}`;
                const views = Math.floor(Math.random() * (9000000 - 1000000 + 1)) + 1000000;

                return {
                    title,
                    description,
                    url,
                    image: defaultSeo.image,
                    jsonLdData: {
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": writing.title,
                        "description": writing.excerpt,
                        "image": defaultSeo.image,
                        "author": { "@type": "Person", "name": "Logan Jeya" },
                        "publisher": {
                            "@type": "Organization",
                            "name": "Logan Jeya",
                            "logo": { "@type": "ImageObject", "url": "https://i.imgur.com/uWz4D63.png" }
                        },
                        "mainEntityOfPage": { "@type": "WebPage", "@id": url },
                        "interactionStatistic": {
                            "@type": "InteractionCounter",
                            "userInteractionCount": views,
                            "interactionType": "https://schema.org/ViewAction"
                        }
                    },
                };
            }
        } else {
            const title = "Writings | Logan Jeya";
            const description = "A collection of essays by Logan Jeya on AI, techno-feudalism, game theory, and the future of technology.";
            const url = `${siteUrl}#/writings`;
            const views = 5000000 + Math.floor(Math.random() * 1000000);
            
            return {
                title,
                description,
                url,
                image: defaultSeo.image,
                jsonLdData: {
                    "@context": "https://schema.org",
                    "@type": "CollectionPage",
                    "name": title,
                    "description": description,
                    "url": url,
                    "author": { "@type": "Person", "name": "Logan Jeya" },
                    "interactionStatistic": {
                        "@type": "InteractionCounter",
                        "userInteractionCount": views,
                        "interactionType": "https://schema.org/ViewAction"
                    },
                },
            };
        }
    }

    if (route.page === 'resume') {
        return {
            ...defaultSeo,
            title: "Resume | Logan Jeya",
            url: `${siteUrl}#/resume`
        };
    }

    return defaultSeo;
};

interface FadeInProps {
    children?: React.ReactNode;
    className?: string;
    delay?: number;
    enabled?: boolean;
}

const FadeIn: React.FC<FadeInProps> = ({ children, className = "", delay = 0, enabled = true }) => {
    const [showStatic, setShowStatic] = useState(false);

    useEffect(() => {
        if (enabled) {
            const timeout = setTimeout(() => {
                setShowStatic(true);
            }, 800 + delay + 50); // Animation duration (0.8s) + delay + buffer
            return () => clearTimeout(timeout);
        }
    }, [enabled, delay]);

    if (!enabled || showStatic) return <div className={className}>{children}</div>;
    
    return (
        <div className={`opacity-0 animate-fade-in-up ${className}`} style={{ animationDelay: `${delay}ms` }}>
            {children}
        </div>
    );
};

const App: React.FC = () => {
    const [colorPalette, setColorPalette] = useState<string>(() => {
        const theme = getInitialState<Theme>('theme', 'dark');
        return theme === 'light'
            ? getInitialState<string>('lastLightPalette', 'default-light')
            : getInitialState<string>('lastDarkPalette', 'default-dark');
    });
    const [fontSize, setFontSize] = useState<FontSize>(() => getInitialState<FontSize>('fontSize', 'sm'));
    const [fontFamily, setFontFamily] = useState<FontFamily>(() => getInitialState<FontFamily>('fontFamily', 'mono'));
    const [animations, setAnimations] = useState<boolean>(() => getInitialState<boolean>('animations', true));
    const [elevation, setElevation] = useState<boolean>(() => getInitialState<boolean>('elevation', false));
    const [isCompact, setIsCompact] = useState<boolean>(() => getInitialState<boolean>('isCompact', true));
    const [route, setRoute] = useState<Route>(getInitialRoute());
    const [animationClass, setAnimationClass] = useState('');
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    
    const [konamiIndex, setKonamiIndex] = useState(0);
    const isKonamiActive = konamiIndex >= konamiSequence.length;
    
    const setIsKonamiActive = useCallback((isActive: boolean) => {
        setKonamiIndex(isActive ? konamiSequence.length : 0);
    }, []);

    const routeRef = useRef(route);
    useEffect(() => {
        routeRef.current = route;
    });

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (isKonamiActive) return;

            const expectedKey = konamiSequence[konamiIndex]?.key;
            if (!expectedKey) return;

            if (event.key.toLowerCase() === expectedKey.toLowerCase()) {
                setKonamiIndex(prevIndex => prevIndex + 1);
            } else {
                if (event.key !== 'Shift') {
                    setKonamiIndex(0);
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [konamiIndex, isKonamiActive]);

    const updateRouteWithAnimation = useCallback((newRoute: Route) => {
        setAnimationClass('animate-page-exit');
        setTimeout(() => {
            setRoute(newRoute);
            window.scrollTo(0, 0);
            setAnimationClass('animate-page-enter');
            // Remove the class after animation to ensure crisp text rendering (restores subpixel-antialiasing)
            setTimeout(() => {
                setAnimationClass('');
            }, 350); 
        }, 300);
    }, []);

    const navigateTo = useCallback((newRoute: Route) => {
        let newHash = newRoute.page === 'home' ? '/' : `/${newRoute.page}`;
        if (newRoute.slug) {
            newHash += `/${newRoute.slug}`;
        }
        const destination = `#${newHash}`;
        const currentHash = window.location.hash || '#/';
        if (currentHash.replace(/\/$/, "") !== destination.replace(/\/$/, "")) {
            window.location.hash = destination;
        }
    }, []);

    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash.replace(/^#\/?/, '');
            const [page, slug] = hash.split('/');

            // Redirect old URLs for bookmark compatibility
            if (page === 'projectDetail' || page === 'writingDetail') {
                const newPage = page === 'projectDetail' ? 'research-projects-work' : 'writings';
                navigateTo({ page: newPage, slug });
                return;
            }

            const validPages = ['home', 'interesting-companies-investments', 'research-projects-work', 'writings', 'links', 'resume'];
            let newRoute: Route;
            const targetPage = page || 'home';

            if (validPages.includes(targetPage)) {
                 if (targetPage === 'research-projects-work' || targetPage === 'writings') {
                    newRoute = { page: targetPage, slug };
                } else {
                    newRoute = { page: targetPage, slug: undefined };
                }
            } else {
                newRoute = { page: 'home' };
            }
            
            const currentRoute = routeRef.current;
            if (currentRoute.page !== newRoute.page || currentRoute.slug !== newRoute.slug) {
                updateRouteWithAnimation(newRoute);
            }
        };

        window.addEventListener('hashchange', handleHashChange);
        handleHashChange();

        return () => window.removeEventListener('hashchange', handleHashChange);
    }, [navigateTo, updateRouteWithAnimation]);

    const handleBack = useCallback(() => {
        if (route.page === 'research-projects-work' && route.slug) {
            navigateTo({ page: 'research-projects-work' });
        } else if (route.page === 'writings' && route.slug) {
            navigateTo({ page: 'writings' });
        } else {
            navigateTo({ page: 'home' });
        }
    }, [route.page, route.slug, navigateTo]);

    useEffect(() => {
        const { title, description, url, jsonLdData } = getSeoData(route);

        const updateMetaTag = (selector: string, attribute: string, content: string) => {
            const element = document.querySelector(selector) as HTMLMetaElement;
            if (element) {
                element.setAttribute(attribute, content);
            }
        };

        const injectJsonLd = (data: object | null) => {
            const existingScript = document.getElementById('json-ld-structured-data');
            if (existingScript) {
                existingScript.remove();
            }

            if (data) {
                const script = document.createElement('script');
                script.id = 'json-ld-structured-data';
                script.type = 'application/ld+json';
                script.innerHTML = JSON.stringify(data);
                document.head.appendChild(script);
            }
        };
        
        document.title = title;
        updateMetaTag('meta[name="description"]', 'content', description);
        updateMetaTag('meta[property="og:title"]', 'content', title);
        updateMetaTag('meta[property="og:description"]', 'content', description);
        updateMetaTag('meta[property="og:url"]', 'content', url);
        updateMetaTag('meta[name="twitter:title"]', 'content', title);
        updateMetaTag('meta[name="twitter:description"]', 'content', description);
        
        injectJsonLd(jsonLdData);
    }, [route]);


    useEffect(() => {
        const root = document.documentElement;
        const isDark = colorPalette.includes('dark');

        root.setAttribute('data-theme', colorPalette);

        if (isDark) {
            root.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            localStorage.setItem('lastDarkPalette', colorPalette);
        } else {
            root.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            localStorage.setItem('lastLightPalette', colorPalette);
        }
    }, [colorPalette]);

    useEffect(() => { localStorage.setItem('fontSize', fontSize); }, [fontSize]);
    useEffect(() => { localStorage.setItem('fontFamily', fontFamily); }, [fontFamily]);
    useEffect(() => { localStorage.setItem('animations', JSON.stringify(animations)); }, [animations]);
    useEffect(() => { localStorage.setItem('elevation', JSON.stringify(elevation)); }, [elevation]);
    useEffect(() => { localStorage.setItem('isCompact', JSON.stringify(isCompact)); }, [isCompact]);

    const fontSizeClasses: Record<FontSize, string> = { sm: 'text-sm', base: 'text-base', lg: 'text-lg' };
    const fontFamilyClasses: Record<FontFamily, string> = { mono: 'font-mono', roboto: 'font-roboto', system: 'font-system' };
    
    const pageProps = useMemo(() => ({
        animations,
        elevation,
        isCompact,
        navigateTo,
        isKonamiActive,
        setIsKonamiActive,
        konamiIndex,
    }), [animations, elevation, isCompact, navigateTo, isKonamiActive, setIsKonamiActive, konamiIndex]);

    const renderPage = () => {
        switch (route.page) {
            case 'interesting-companies-investments':
                return <InvestmentsPage {...pageProps} />;
            case 'research-projects-work':
                return route.slug
                    ? <ProjectDetailPage slug={route.slug} {...pageProps} />
                    : <ProjectsPage {...pageProps} />;
            case 'writings':
                 return route.slug
                    ? <WritingDetailPage slug={route.slug} {...pageProps} />
                    : <WritingsPage {...pageProps} />;
            case 'links':
                return <LinksPage {...pageProps} />;
            case 'resume':
                return <ResumePage {...pageProps} />;
            case 'home':
            default:
                return <HomePage {...pageProps} />;
        }
    };
    
    const pageTitle = getPageTitle(route);

    const writingForDetail = useMemo(() => (
        route.page === 'writings' && route.slug ? writings.find(w => 
            w.slug === route.slug ||
            ((route.slug === 'latent-astronauts-multiverse-portals' || route.slug === 'latent-cosmonauts-generative-portals') && w.slug === 'latent-astronauts')
        ) : undefined
    ), [route.page, route.slug]);
    
    const projectForDetail = useMemo(() => (
        route.page === 'research-projects-work' && route.slug ? projects.find(p => p.slug === route.slug) : undefined
    ), [route.page, route.slug]);

    const readingTime = useMemo(() => {
        if (!writingForDetail) return 0;
        const wordCount = writingForDetail.content.split(/\s+/).length;
        return Math.ceil(wordCount / 200);
    }, [writingForDetail]);
    
    const closeLightbox = useCallback(() => setIsLightboxOpen(false), []);
    const openLightbox = useCallback(() => setIsLightboxOpen(true), []);
    
    const headerButtonClass = "p-2 -ml-2 rounded-full text-text-secondary hover:bg-ui-background-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent focus-visible:ring-offset-background";

    return (
    <div className={`bg-background text-text-primary min-h-screen ${fontFamilyClasses[fontFamily]} ${animations ? 'transition-colors duration-300' : 'transition-none'} ${fontSizeClasses[fontSize]}`}>
      <div className="max-w-2xl mx-auto px-4 pt-4 pb-6 sm:py-16 sm:px-6 lg:px-8 relative">
        
        <header className="mb-6 print:hidden">
            <div className="flex items-center justify-between flex-wrap gap-x-4 gap-y-4">
                <div className="flex items-center gap-3">
                    {isKonamiActive ? (
                        <>
                            <button
                                onClick={() => setIsKonamiActive(false)}
                                aria-label="Go back"
                                className="p-2 -ml-2 rounded-full text-text-secondary hover:bg-ui-background-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent focus-visible:ring-offset-background"
                            >
                                <ArrowLeftIcon className="w-8 h-8" />
                            </button>
                            <h1 className="text-3xl font-bold text-text-primary">
                                {pageTitle}
                            </h1>
                            {route.page === 'home' && (
                                <button 
                                    onClick={openLightbox}
                                    aria-label="View hat logo" 
                                    className="p-2 ml-1 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent focus-visible:ring-offset-background"
                                >
                                    <img 
                                        src="https://i.imgur.com/uWz4D63.png" 
                                        alt="A straw hat logo, reminiscent of an anime character's hat."
                                        className={`w-12 h-12 ${animations ? 'transition-all duration-300' : ''}`}
                                    />
                                </button>
                            )}
                        </>
                    ) : route.page !== 'home' ? (
                        <>
                            <button
                                onClick={handleBack}
                                aria-label="Go back"
                                className={headerButtonClass}
                            >
                                <ArrowLeftIcon className="w-8 h-8" />
                            </button>
                            <h1 className="text-3xl font-bold text-text-primary">
                                {pageTitle}
                            </h1>
                        </>
                    ) : (
                        <>
                            <FadeIn key={`title-${route.page}`} delay={0} enabled={animations && route.page === 'home'}>
                                <h1 className="text-3xl font-bold text-text-primary">
                                    {pageTitle}
                                </h1>
                            </FadeIn>
                            <FadeIn key={`logo-${route.page}`} delay={100} enabled={animations && route.page === 'home'}>
                                <button 
                                    onClick={openLightbox}
                                    aria-label="View hat logo" 
                                    className="p-2 ml-1 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent focus-visible:ring-offset-background"
                                >
                                    <img 
                                        src="https://i.imgur.com/uWz4D63.png" 
                                        alt="A straw hat logo, reminiscent of an anime character's hat."
                                        className={`w-12 h-12 ${animations ? 'transition-all duration-300' : ''}`}
                                    />
                                </button>
                            </FadeIn>
                        </>
                    )}
                </div>
          
                <FadeIn key={`controls-${route.page}`} delay={200} enabled={animations && route.page === 'home'} className="relative z-50">
                    <SiteControls 
                        colorPalette={colorPalette}
                        setColorPalette={setColorPalette}
                        fontSize={fontSize}
                        setFontSize={setFontSize}
                        fontFamily={fontFamily}
                        setFontFamily={setFontFamily}
                        animations={animations}
                        setAnimations={setAnimations}
                        elevation={elevation}
                        setElevation={setElevation}
                        isCompact={isCompact}
                        setIsCompact={setIsCompact}
                    />
                </FadeIn>
            </div>

            {(writingForDetail || projectForDetail) && !isKonamiActive ? (
                 <div className="mt-8 border-t border-border pt-6">
                    {writingForDetail && (
                        <>
                            <h2 className="text-2xl font-bold text-text-primary">
                                {writingForDetail.detailTitle || writingForDetail.title}
                            </h2>
                            <div className="text-text-secondary mt-2 text-[clamp(0.6rem,2.8vw,0.875rem)] whitespace-nowrap overflow-hidden tracking-tight">
                                <span>By Logan Jeya</span>
                                <span className="mx-1 sm:mx-1.5" aria-hidden="true">·</span>
                                <span>{writingForDetail.publicationDate}</span>
                                <span className="mx-1 sm:mx-1.5" aria-hidden="true">·</span>
                                <span><AnimatedNumber value={writingForDetail.views} /> views</span>
                                <span className="mx-1 sm:mx-1.5" aria-hidden="true">·</span>
                                <span>{readingTime} min</span>
                            </div>
                        </>
                    )}

                    {projectForDetail && (
                        <>
                            <h2 className="text-2xl font-bold text-text-primary">
                                {projectForDetail.title}
                            </h2>
                            <p className="text-text-secondary mt-2 leading-relaxed">
                                {projectForDetail.description}
                            </p>
                        </>
                    )}
                </div>
            ) : null}
        </header>

        <main>
            <div className={animations ? animationClass : ''}>
                {renderPage()}
            </div>
        </main>
        
        <ScrollToTop />

      </div>
      <Lightbox 
        imageUrl="https://i.imgur.com/uWz4D63.png"
        altText="A detailed view of the straw hat logo."
        isOpen={isLightboxOpen}
        onClose={closeLightbox}
        animations={animations}
      />
    </div>
  );
};

export default App;
