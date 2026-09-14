

import React, { useMemo, memo, useRef, useEffect } from 'react';
import { projects } from '../constants';
import { Route } from '../App';
import ProjectImage from '../components/ProjectImage';
import CodeBlock from '../components/CodeBlock';

interface PageProps {
    animations: boolean;
    elevation: boolean;
    isCompact: boolean;
    slug: string;
    navigateTo: (route: Route) => void;
}

const MathJaxRenderer: React.FC<{ expression: string, displayMode?: boolean }> = memo(({ expression, displayMode = false }) => {
    const containerRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        // MathJax 3 typeset promise pattern
        if ((window as any).MathJax) {
            containerRef.current.innerHTML = displayMode ? `$$${expression}$$` : `\\(${expression}\\)`;
            (window as any).MathJax.typesetPromise([containerRef.current]).catch((err: any) => console.error('MathJax error:', err));
        } else {
            containerRef.current.innerText = expression;
        }
    }, [expression, displayMode]);

    return <span ref={containerRef} />;
});

const renderFormattedCalculation = (calculation: string) => {
  return calculation.split('\n').map((line, index) => {
    const trimmedLine = line.trim();
    if (trimmedLine === '') return null;

    if (trimmedLine.startsWith('**') && trimmedLine.endsWith('**')) {
        return <p key={`${index}-${line}`} className="font-bold text-text-primary">{trimmedLine.slice(2, -2)}</p>
    }
    
    return <span key={`${index}-${line}`}>{line}<br/></span>;
  });
};

const parseContent = (text: string | undefined) => {
    if (!text) return null;
    // Split by double newline to get paragraphs
    return text.split('\n\n').map((paragraph, idx) => {
        const trimmed = paragraph.trim();
        // Check if it's a standalone equation paragraph for display math
        if (trimmed.startsWith('$$') && trimmed.endsWith('$$')) {
             const math = trimmed.slice(2, -2);
             return (
                 <div key={idx} className="my-8 w-full flex justify-center overflow-x-auto no-scrollbar">
                     <MathJaxRenderer expression={math} displayMode={true} />
                 </div>
             );
        }

        // Regular paragraph parsing including inline and potential block math
        const parts = paragraph.split(/(\*\*.*?\*\*|\[.*?\]\(.*?\)|(?:\$\$[\s\S]*?\$\$)|(?:\$.*?\$))/g);
        return (
            <p key={idx} className="text-text-secondary leading-relaxed mb-4 last:mb-0">
                {parts.map((part, i) => {
                    if (part.startsWith('**') && part.endsWith('**')) {
                        return <strong key={i} className="text-text-primary font-semibold">{part.slice(2, -2)}</strong>;
                    }
                    const linkMatch = part.match(/\[(.*?)\]\((.*?)\)/);
                    if (linkMatch) {
                        return <a key={i} href={linkMatch[2]} target="_blank" rel="noopener noreferrer" className="text-accent underline hover:text-text-primary font-medium">{linkMatch[1]}</a>;
                    }
                    if (part.startsWith('$$') && part.endsWith('$$')) {
                        const math = part.slice(2, -2);
                        return (
                             <span key={i} className="block w-full text-center my-4 overflow-x-auto no-scrollbar">
                                <MathJaxRenderer expression={math} displayMode={true} />
                             </span>
                        );
                    }
                    if (part.startsWith('$') && part.endsWith('$')) {
                        const math = part.slice(1, -1);
                        return <MathJaxRenderer key={i} expression={math} />;
                    }
                    return part;
                })}
            </p>
        );
    });
};

const ProjectDetailPage: React.FC<PageProps> = memo(({ slug, animations, elevation, isCompact, navigateTo }) => {
    const project = useMemo(() => projects.find(p => p.slug === slug), [slug]);
    
    const sectionClasses = `${elevation ? 'p-6 rounded-lg shadow-md bg-card-bg' : ''} ${animations ? 'transition-all duration-300' : 'transition-none'}`;
    const mainSpacing = isCompact ? 'space-y-6' : 'space-y-10';
    const sectionSpacing = isCompact ? 'space-y-3' : 'space-y-5';

    if (!project) {
        return (
             <div className="text-center py-10">
                <p className="text-text-secondary">Sorry, the requested project could not be found.</p>
                <button onClick={() => navigateTo({ page: 'research-projects-work' })} className="underline text-accent mt-4 inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent focus-visible:ring-offset-background rounded">Back to Projects</button>
            </div>
        );
    }

    return (
        <div className={`${sectionClasses} ${mainSpacing}`}>
            <section className={sectionSpacing}>
                {parseContent(project.details)}
            </section>
            
            {project.technicalDetails && (
                <section className={sectionSpacing}>
                    <h3 className="text-xl font-bold text-text-primary">Technical Deep Dive</h3>
                    {parseContent(project.technicalDetails)}
                </section>
            )}

            {project.architectureDiagram && (
                 <section className={sectionSpacing}>
                    <h3 className="text-xl font-bold text-text-primary">Architecture Diagram</h3>
                    <ProjectImage 
                        src={project.architectureDiagram} 
                        alt={`${project.title} Architecture`} 
                        title={`${project.title} Arch`}
                        className="rounded-lg aspect-video object-contain bg-white" 
                    />
                </section>
            )}

            {project.codeExample && (
                <section className={sectionSpacing}>
                    <h3 className="text-xl font-bold text-text-primary">Code Example</h3>
                    <CodeBlock 
                        code={project.codeExample.code.trim()} 
                        language={project.codeExample.language} 
                    />
                </section>
            )}
            
            {project.analysis && (
                <section className={sectionSpacing}>
                    <h3 className="text-xl font-bold text-text-primary">Impact & Analysis</h3>
                    {parseContent(project.analysis)}
                </section>
            )}

            {project.roi && (
                 <section className={sectionSpacing}>
                    <h3 className="text-xl font-bold text-text-primary">{project.roi.title}</h3>
                    <div className="bg-ui-background p-4 rounded-lg">
                       <pre className="font-mono text-sm text-text-secondary whitespace-pre-wrap">
                         {renderFormattedCalculation(project.roi.calculation.trim())}
                       </pre>
                    </div>
                </section>
            )}

        </div>
    );
});

export default ProjectDetailPage;