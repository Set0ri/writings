import React, { useMemo, memo, useRef, useEffect } from 'react';
import { writings } from '../constants';
import { Route } from '../App';
import KonamiCode from '../components/KonamiCode';
import { ArrowLeftIcon } from '../components/Icons';
import CodeBlock from '../components/CodeBlock';
import { SeriesTopBanner, SeriesBottomProgress } from '../components/SeriesNavigation';
import { 
    CastePyramid, 
    ComputeVelocityGraph,
    StaleVsOnline,
    AlignmentGraph, 
    NashEquilibriumMatrix,
    DPSVisual,
    BitsVsAtoms,
    FeedbackLoop,
    DroneSwarm,
    MarketBifurcation,
    AutomationTiers,
    RLFeedbackLoop,
    EscalationLadder,
    MultiverseCoordinates,
    MultiverseFogOfWar,
    ExtractionPipeline,
    TelemetryStreamVisual,
    LatentDriftVisual,
    SeahorseValleyVisual,
    AssayOfficeVisual
} from '../components/EssayVisuals';

interface PageProps {
    animations: boolean;
    elevation: boolean;
    isCompact: boolean;
    slug: string;
    navigateTo: (route: Route) => void;
    isKonamiActive: boolean;
    setIsKonamiActive: (isActive: boolean) => void;
    konamiIndex: number;
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

const renderInlineContent = (text: string, navigateTo?: (route: Route) => void) => {
  const parts = text.split(/(\[.*?\]\(.*?\)|\*\*.*?\*\*|\$.*?\$)/g).filter(Boolean);
  return parts.map((part, idx) => {
    if (part.startsWith('[') && part.includes('](') && part.endsWith(')')) {
      const match = part.match(/^\[(.*?)\]\((.*?)\)$/);
      if (match) {
        const [, linkText, linkUrl] = match;
        const isInternalWriting = linkUrl.startsWith('#/writings/') || linkUrl.startsWith('/writings/') || (!linkUrl.startsWith('http') && !linkUrl.startsWith('mailto:'));
        if (isInternalWriting && navigateTo) {
          const cleanSlug = linkUrl.replace(/^#?\/?writings\/?/, '').replace(/^\//, '');
          return (
            <button
              key={idx}
              onClick={() => navigateTo({ page: 'writings', slug: cleanSlug })}
              className="text-accent underline hover:opacity-80 transition-opacity focus:outline-none text-left"
            >
              {linkText}
            </button>
          );
        }
        return (
          <a
            key={idx}
            href={linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline hover:opacity-80 transition-opacity"
          >
            {linkText}
          </a>
        );
      }
    }
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={idx} className="text-text-primary font-semibold">{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith('$') && part.endsWith('$')) {
      return <MathJaxRenderer key={idx} expression={part.slice(1, -1)} />;
    }
    return <React.Fragment key={idx}>{part}</React.Fragment>;
  });
};

const renderFormattedContent = (
  content: string, 
  elevation: boolean,
  writingTitle?: string,
  writingDetailTitle?: string,
  navigateTo?: (route: Route) => void
) => {
  const lines = content.split('\n');
  const elements: React.ReactNode[] = [];
  let i = 0;

  const isHeaderDuplicate = (text: string) => {
    const clean = (s: string) => s.toLowerCase().replace(/^(#+\s*|part\s*\d+[\.:\s-]*)/i, '').replace(/[^a-z0-9]/g, '');
    const t = clean(text);
    if (!t) return false;
    if (writingTitle && clean(writingTitle) === t) return true;
    if (writingDetailTitle && clean(writingDetailTitle) === t) return true;
    return false;
  };

  while (i < lines.length) {
    const line = lines[i];
    const trimmedLine = line.trim();

    if (trimmedLine === '') {
      i++;
      continue;
    }

    const key = `${i}-${trimmedLine.substring(0, 20)}`;

    // Skip any heading in content that duplicates the article title
    if (trimmedLine.startsWith('#') && isHeaderDuplicate(trimmedLine)) {
      i++;
      continue;
    }

    // Code block detection ```
    if (trimmedLine.startsWith('```')) {
      const language = trimmedLine.slice(3).trim() || 'system';
      const codeLines: string[] = [];
      i++;
      while (i < lines.length && !lines[i].trim().startsWith('```')) {
        codeLines.push(lines[i]);
        i++;
      }
      i++; // skip closing ```
      elements.push(
        <CodeBlock key={key} code={codeLines.join('\n')} language={language} />
      );
      continue;
    }

    // Blockquote detection >
    if (trimmedLine.startsWith('>')) {
      const quoteLines: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith('>')) {
        const raw = lines[i].trim().replace(/^>\s*/, '');
        const clean = raw.replace(/^[*_]+|[*_]+$/g, '').replace(/^"|"$/g, '').replace(/^'|'$/g, '').trim();
        quoteLines.push(clean);
        i++;
      }
      elements.push(
        <blockquote key={key} className="my-6 border-l-4 border-accent/60 pl-4 py-2 italic text-text-primary text-base sm:text-lg bg-surface/30 rounded-r space-y-1">
          {quoteLines.map((line, lIdx) => (
            <div key={lIdx}>{renderInlineContent(line, navigateTo)}</div>
          ))}
        </blockquote>
      );
      continue;
    }

    // Custom Component Parsers - Passing elevation
    if (trimmedLine === '[[CASTE_PYRAMID]]') { elements.push(<CastePyramid key={key} elevation={elevation} />); i++; continue; }
    if (trimmedLine === '[[COMPUTE_VELOCITY]]') { elements.push(<ComputeVelocityGraph key={key} elevation={elevation} />); i++; continue; }
    if (trimmedLine === '[[STALE_KNOWLEDGE]]') { elements.push(<StaleVsOnline key={key} elevation={elevation} />); i++; continue; }
    if (trimmedLine === '[[ALIGNMENT_GRAPH]]') { elements.push(<AlignmentGraph key={key} elevation={elevation} />); i++; continue; }
    if (trimmedLine === '[[NASH_EQUILIBRIUM]]') { elements.push(<NashEquilibriumMatrix key={key} elevation={elevation} />); i++; continue; }
    if (trimmedLine === '[[DRONE_SWARM]]') { elements.push(<DroneSwarm key={key} elevation={elevation} />); i++; continue; }
    if (trimmedLine === '[[DPS_VISUAL]]') { elements.push(<DPSVisual key={key} elevation={elevation} />); i++; continue; }
    if (trimmedLine === '[[BITS_VS_ATOMS]]') { elements.push(<BitsVsAtoms key={key} elevation={elevation} />); i++; continue; }
    if (trimmedLine === '[[FEEDBACK_LOOP]]') { elements.push(<FeedbackLoop key={key} elevation={elevation} />); i++; continue; }
    if (trimmedLine === '[[MARKET_BIFURCATION]]') { elements.push(<MarketBifurcation key={key} elevation={elevation} />); i++; continue; }
    if (trimmedLine === '[[AUTOMATION_TIERS]]') { elements.push(<AutomationTiers key={key} elevation={elevation} />); i++; continue; }
    if (trimmedLine === '[[RL_FEEDBACK_LOOP]]') { elements.push(<RLFeedbackLoop key={key} elevation={elevation} />); i++; continue; }
    if (trimmedLine === '[[ESCALATION_LADDER]]') { elements.push(<EscalationLadder key={key} elevation={elevation} />); i++; continue; }
    if (trimmedLine === '[[MULTIVERSE_COORDINATES]]') { elements.push(<MultiverseCoordinates key={key} elevation={elevation} />); i++; continue; }
    if (trimmedLine === '[[TELEMETRY_PIPELINE]]') { elements.push(<TelemetryStreamVisual key={key} elevation={elevation} />); i++; continue; }
    if (trimmedLine === '[[FOG_OF_WAR_MAP]]') { elements.push(<MultiverseFogOfWar key={key} elevation={elevation} />); i++; continue; }
    if (trimmedLine === '[[EXTRACTION_PIPELINE]]') { elements.push(<ExtractionPipeline key={key} elevation={elevation} />); i++; continue; }
    if (trimmedLine === '[[LATENT_DRIFT_MAP]]') { elements.push(<LatentDriftVisual key={key} elevation={elevation} />); i++; continue; }
    if (trimmedLine === '[[SEAHORSE_VALLEY]]') { elements.push(<SeahorseValleyVisual key={key} elevation={elevation} />); i++; continue; }
    if (trimmedLine === '[[ASSAY_OFFICE]]') { elements.push(<AssayOfficeVisual key={key} elevation={elevation} />); i++; continue; }

    // Display Math $$...$$
    if (trimmedLine.startsWith('$$') && trimmedLine.endsWith('$$')) {
        const math = trimmedLine.slice(2, -2).trim();
        elements.push(
            <div key={key} className="my-8 w-full overflow-x-auto flex justify-center">
                <MathJaxRenderer expression={math} displayMode={true} />
            </div>
        );
        i++;
        continue;
    }
    
    // Markdown Table detection | ... |
    if (trimmedLine.startsWith('|') && trimmedLine.endsWith('|')) {
      const tableLines: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith('|') && lines[i].trim().endsWith('|')) {
        tableLines.push(lines[i].trim());
        i++;
      }
      if (tableLines.length >= 2) {
        const headerRow = tableLines[0].split('|').slice(1, -1).map(c => c.trim());
        const dataRows = tableLines.slice(2).map(row => row.split('|').slice(1, -1).map(c => c.trim()));
        elements.push(
          <div key={key} className="my-6 overflow-x-auto rounded-lg shadow-sm border border-border/40">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="bg-surface/50 border-b border-border/60">
                  {headerRow.map((th, thIdx) => (
                    <th key={thIdx} className="py-3 px-4 font-semibold text-text-primary">
                      {renderInlineContent(th, navigateTo)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-border/30">
                {dataRows.map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-surface/30 transition-colors">
                    {row.map((cell, cIdx) => (
                      <td key={cIdx} className="py-3 px-4 text-text-secondary leading-relaxed">
                        {renderInlineContent(cell, navigateTo)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
        continue;
      }
    }

    if (trimmedLine.startsWith('### ')) {
      elements.push(<h4 key={key} className="text-lg font-bold mt-8 mb-3 text-text-primary tracking-tight">{trimmedLine.substring(4)}</h4>);
      i++;
      continue;
    }
    if (trimmedLine.startsWith('## ')) {
      elements.push(<h3 key={key} className="text-xl font-bold mt-10 mb-4 text-text-primary tracking-tight">{trimmedLine.substring(3)}</h3>);
      i++;
      continue;
    }
    if (trimmedLine.startsWith('# ')) {
      elements.push(<h2 key={key} className="text-2xl font-bold mt-12 mb-6 text-text-primary tracking-tight">{trimmedLine.substring(2)}</h2>);
      i++;
      continue;
    }

    if (trimmedLine === '---') {
      elements.push(<hr key={key} className="my-8 border-border" />);
      i++;
      continue;
    }

    if (trimmedLine.startsWith('• ') || trimmedLine.startsWith('- ') || /^\d+\.\s/.test(trimmedLine)) {
      const content = trimmedLine.replace(/^(• |- |\d+\.\s)/, '');
      elements.push(
        <div key={key} className="flex items-start my-3 pl-1">
          <span className="text-text-secondary mr-3 mt-1 select-none">&#8226;</span>
          <p className="flex-1 text-text-secondary leading-relaxed">
            {renderInlineContent(content, navigateTo)}
          </p>
        </div>
      );
      i++;
      continue;
    }
    
    // Handle inline math and links within paragraphs
    elements.push(
      <p key={key} className="text-text-secondary leading-relaxed my-4">
        {renderInlineContent(trimmedLine, navigateTo)}
      </p>
    );
    i++;
  }

  return elements;
};


const WritingDetailPage: React.FC<PageProps> = memo(({ slug, animations, elevation, navigateTo, isKonamiActive, setIsKonamiActive, konamiIndex }) => {
    const writing = useMemo(() => writings.find(w => 
      w.slug === slug || 
      ((slug === 'latent-astronauts-multiverse-portals' || slug === 'latent-cosmonauts-generative-portals') && w.slug === 'latent-astronauts')
    ), [slug]);

    const sectionClasses = `${elevation ? 'p-6 rounded-lg shadow-md bg-card-bg' : ''} ${animations ? 'transition-all duration-300' : 'transition-none'}`;

    if (!writing) {
        return (
            <div className="text-center py-10">
                <p className="text-text-secondary">Sorry, the requested article could not be found.</p>
                <button onClick={() => navigateTo({ page: 'writings' })} className="underline text-accent mt-4 inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent focus-visible:ring-offset-background rounded">Back to Writings</button>
            </div>
        );
    }

    return (
        <KonamiCode 
            isKonamiActive={isKonamiActive} 
            setIsKonamiActive={setIsKonamiActive} 
            animations={animations}
            konamiIndex={konamiIndex}
            trackerOffsetClass="-top-8"
            trackerPositionClass="absolute -left-64"
            location="writing"
        >
            <article className={sectionClasses}>
                {writing.series && (
                    <SeriesTopBanner 
                        series={writing.series}
                        currentSlug={writing.slug}
                        navigateTo={navigateTo}
                    />
                )}

                {renderFormattedContent(writing.content, elevation, writing.title, writing.detailTitle, navigateTo)}

                {writing.series && (
                    <SeriesBottomProgress 
                        series={writing.series}
                        currentSlug={writing.slug}
                        navigateTo={navigateTo}
                    />
                )}

                <div className="mt-16 pt-8 border-t border-border">
                    <button 
                        onClick={() => navigateTo({ page: 'writings' })} 
                        className="group flex items-center text-text-secondary hover:text-accent transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent focus-visible:ring-offset-background rounded p-1 -ml-1"
                    >
                        <ArrowLeftIcon className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:-translate-x-1" />
                        <span className="font-semibold">Back to Writings</span>
                    </button>
                </div>
            </article>
        </KonamiCode>
    );
});

export default WritingDetailPage;