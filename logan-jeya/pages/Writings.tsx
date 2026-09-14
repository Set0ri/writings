
import React, { memo } from 'react';
import { newestWritings } from '../constants';
import { Writing } from '../types';
import { Route } from '../App';
import AnimatedNumber from '../components/AnimatedNumber';

interface PageProps {
    animations: boolean;
    elevation: boolean;
    isCompact: boolean;
    navigateTo: (route: Route) => void;
}

const WritingsPage: React.FC<PageProps> = memo(({ animations, elevation, isCompact, navigateTo }) => {
    const sectionClasses = `${elevation ? 'p-6 rounded-lg shadow-md bg-card-bg' : ''} ${animations ? 'transition-all duration-300' : 'transition-none'}`;
    const mainSpacing = isCompact ? 'space-y-6' : 'space-y-10';
    const listSpacing = isCompact ? 'space-y-4' : 'space-y-6';

    return (
        <section id="writings" className={`${sectionClasses} ${mainSpacing}`}>
            <ul className={listSpacing}>
              {newestWritings.map((writing) => (
                <li key={writing.slug}>
                  <button onClick={() => navigateTo({ page: 'writings', slug: writing.slug })} className="text-accent underline hover:text-text-secondary text-base text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent focus-visible:ring-offset-background rounded">
                    {writing.title}
                  </button>
                   <p className="text-text-secondary mt-1">{writing.excerpt}</p>
                   <div className="text-xs text-text-secondary mt-2">
                        <span>By Logan Jeya</span>
                        <span className="mx-2" aria-hidden="true">·</span>
                        <span>{writing.publicationDate}</span>
                        <span className="mx-2" aria-hidden="true">·</span>
                        <span><AnimatedNumber value={writing.views} /> views</span>
                    </div>
                </li>
              ))}
            </ul>
        </section>
    );
});

export default WritingsPage;
