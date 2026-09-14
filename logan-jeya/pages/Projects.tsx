
import React, { memo } from 'react';
import { projects } from '../constants';
import { Route } from '../App';
import ProjectImage from '../components/ProjectImage';

interface PageProps {
    animations: boolean;
    elevation: boolean;
    isCompact: boolean;
    navigateTo: (route: Route) => void;
}

const ProjectsPage: React.FC<PageProps> = memo(({ animations, elevation, isCompact, navigateTo }) => {
    // When elevated, each project gets its own card. These are the styles for it.
    const cardClasses = elevation 
        ? `p-6 rounded-lg shadow-md bg-card-bg ${animations ? 'transition-all duration-300' : 'transition-none'}` 
        : '';

    return (
        <section id="projects">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {projects.map((project) => (
                    <button 
                        onClick={() => navigateTo({ page: 'research-projects-work', slug: project.slug })}
                        key={project.slug} 
                        className={`h-full flex flex-col group text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent focus-visible:ring-offset-background rounded-lg ${animations ? 'transition-transform duration-300 transform hover:-translate-y-1' : ''} ${cardClasses}`}
                    >
                        <ProjectImage 
                            src={project.image}
                            title={project.title} 
                            alt={project.title} 
                            className="rounded-lg mb-3 aspect-video object-cover" 
                        />
                        <h3 className="font-bold text-lg group-hover:underline">{project.title}</h3>
                        <p className="text-text-secondary">
                            {project.description}
                        </p>
                    </button>
                ))}
            </div>
        </section>
    );
});

export default ProjectsPage;
