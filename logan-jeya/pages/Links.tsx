


import React, { useMemo, memo } from 'react';
import { writings, projects, socialLinks } from '../constants';
import { Route } from '../App';

interface PageProps {
    animations: boolean;
    elevation: boolean;
    isCompact: boolean;
    navigateTo: (route: Route) => void;
}

interface LinkInfo {
    url: string;
    text: string;
    sourcePage: string;
    sourceContext: string;
}

const getAllLinks = (): LinkInfo[] => {
    const links: LinkInfo[] = [];

    // Writings
    writings.forEach(writing => {
        links.push({
            url: `#/writings/${writing.slug}`,
            text: writing.title,
            sourcePage: 'Writings & Home Pages',
            sourceContext: `Writing entry`
        });
    });

    // Projects
    projects.forEach(project => {
        links.push({
            url: `#/research-projects-work/${project.slug}`,
            text: project.title,
            sourcePage: 'Projects Page',
            sourceContext: `Project card`
        });
    });
    
    // Main Navigation from Home Page
    links.push({
        url: '#/research-projects-work',
        text: 'Research, Projects & Work',
        sourcePage: 'Home Page',
        sourceContext: 'Section heading'
    });
    links.push({
        url: '#/writings',
        text: 'Writings',
        sourcePage: 'Home Page',
        sourceContext: 'Section heading'
    });
    links.push({
        url: '#/interesting-companies-investments',
        text: 'Interesting Companies/Investments',
        sourcePage: 'Home Page',
        sourceContext: 'Section heading'
    });
    links.push({
        url: '#/links',
        text: 'Index of Links',
        sourcePage: 'Home Page',
        sourceContext: 'Section heading'
    });

    // Contact links from Home Page
    links.push({
        url: socialLinks.emailLink,
        text: socialLinks.email,
        sourcePage: 'Home Page',
        sourceContext: 'Contact section'
    });
    links.push({
        url: socialLinks.linkedin,
        text: 'LinkedIn Profile',
        sourcePage: 'Home Page',
        sourceContext: 'Contact section icon'
    });
    links.push({
        url: socialLinks.x,
        text: 'X Profile',
        sourcePage: 'Home Page',
        sourceContext: 'Contact section icon'
    });
    links.push({
        url: socialLinks.setori,
        text: 'Setori.ai',
        sourcePage: 'Home Page',
        sourceContext: 'Contact section icon'
    });
    links.push({
        url: socialLinks.patreon,
        text: 'Patreon Profile',
        sourcePage: 'Home Page',
        sourceContext: 'Contact section icon'
    });
    links.push({
        url: '#/resume',
        text: 'Resumé',
        sourcePage: 'Home Page',
        sourceContext: 'Contact section icon'
    });
    
    // Static links from other pages
     links.push({
        url: '#/',
        text: 'Go back home (Header)',
        sourcePage: 'All pages (except Home)',
        sourceContext: 'Header back arrow'
    });
    links.push({
        url: '#/research-projects-work',
        text: 'Back to Projects',
        sourcePage: 'Project Detail Page',
        sourceContext: 'Error message link'
    });
    links.push({
        url: '#/writings',
        text: 'Back to Writings',
        sourcePage: 'Writing Detail Page',
        sourceContext: 'Error message link'
    });

    return links;
};


const LinksPage: React.FC<PageProps> = memo(({ animations, elevation, isCompact, navigateTo }) => {
    const sectionClasses = `${elevation ? 'p-6 rounded-lg shadow-md bg-card-bg' : ''} ${animations ? 'transition-all duration-300' : 'transition-none'}`;
    const mainSpacing = isCompact ? 'space-y-6' : 'space-y-10';
    const listSpacing = isCompact ? 'space-y-5' : 'space-y-8';

    const allLinks = useMemo(() => getAllLinks(), []);

    const handleLinkClick = (url: string) => {
        const path = url.replace(/^#\/?/, '');
        const [page, slug] = path.split('/');
        navigateTo({ page: page || 'home', slug });
    };
    
    const linkButtonClass = "font-semibold text-accent underline hover:text-text-secondary break-words text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent focus-visible:ring-offset-background rounded";

    return (
        <section id="links" className={`${sectionClasses} ${mainSpacing}`}>
            <p className="text-text-secondary mb-8">An index of all internal and external links used throughout the website, along with their source location.</p>
            <div className={listSpacing}>
                {allLinks.map((link, index) => {
                    const isInternal = link.url.startsWith('#');
                    return (
                        <div key={index}>
                            {isInternal ? (
                                <button onClick={() => handleLinkClick(link.url)} className={linkButtonClass}>
                                    {link.text}
                                </button>
                            ) : (
                                <a 
                                   href={link.url} 
                                   target="_blank" 
                                   rel="noopener noreferrer" 
                                   className={linkButtonClass}
                                >
                                    {link.text}
                                </a>
                            )}
                            <p className="text-text-secondary mt-1">
                                <span className="font-semibold">URL:</span> <code className="bg-ui-background px-1 py-0.5 rounded text-xs">{link.url}</code>
                            </p>
                            <p className="text-text-secondary">
                                <span className="font-semibold">Source:</span> {link.sourcePage} <span className="text-text-secondary/80">({link.sourceContext})</span>
                            </p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
});

export default LinksPage;
