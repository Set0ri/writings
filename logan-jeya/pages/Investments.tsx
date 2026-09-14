
import React, { memo } from 'react';
import { investments } from '../constants';
import { Route } from '../App';

interface PageProps {
    animations: boolean;
    elevation: boolean;
    isCompact: boolean;
    navigateTo: (route: Route) => void;
}

const InvestmentsPage: React.FC<PageProps> = memo(({ animations, elevation, isCompact }) => {
    const sectionClasses = `${elevation ? 'p-6 rounded-lg shadow-md bg-card-bg' : ''} ${animations ? 'transition-all duration-300' : 'transition-none'}`;
    const mainSpacing = isCompact ? 'space-y-6' : 'space-y-10';

    return (
        <section id="interesting-companies-investments" className={`${sectionClasses} ${mainSpacing}`}>
            <div className="space-y-8">
                {investments.map((investment, index) => (
                    <div key={index} className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-ui-background font-bold text-text-secondary">
                            {investment.logo}
                        </div>
                        <div>
                            <div className="flex items-baseline gap-2">
                                <h3 className="font-bold text-lg">{investment.name}</h3>
                                <span className="text-sm text-text-secondary">{investment.date}</span>
                            </div>
                            <p className="text-text-secondary leading-relaxed mt-1">
                                {investment.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
});

export default InvestmentsPage;
