import React from 'react';
import type { Route } from '../App';
import type { Writing } from '../types';

interface SeriesItem {
  title: string;
  slug?: string;
}

interface SeriesConfig {
  intro: string;
  items: SeriesItem[];
}

/**
 * Clean, minimalistic series registries matching user specification:
 * - Simple text intro ("A series of essays...")
 * - Unadorned bullet points ("• Part 1. ...")
 * - Clickable links for published parts
 * - Clean status indications without bulky cards, borders, or banners
 */
const SERIES_REGISTRY: Record<string, SeriesConfig> = {
  'Do AI Dream of Sheep?': {
    intro: 'A series of essays about how AI will impact our world',
    items: [
      {
        title: 'Part 1. An Emergent Caste System - Techno-feudalism',
        slug: 'do-ai-dream-of-sheep-primer',
      },
      {
        title: 'Part 2. Game Theory of AI Alignment in War',
        slug: 'wargaming-ai-alignment',
      },
      {
        title: 'Part 3. The AI Data Economy & Labor Automation',
        slug: 'ai-data-economy-and-labor-automation',
      },
      {
        title: 'Part 4. The Geopolitics of an AI Arms Race',
      },
      {
        title: 'Part 5. Challenges in AI Safety & Interpretability',
      },
      {
        title: 'Part 6. Speculative AI Threat Vectors',
      },
      {
        title: 'Part 7. Riemann Intelligences (RI) and not AGI',
      },
      {
        title: 'AI Rebuttal Log',
      },
    ],
  },
  'The Latent Multiverse': {
    intro: 'A series of essays exploring the latent multiverse',
    items: [
      {
        title: 'Part 1. The Latent Astronauts',
        slug: 'latent-astronauts',
      },
      {
        title: 'Part 2. Sailors of the Possible',
        slug: 'sailors-of-the-possible',
      },
      {
        title: 'Part 3. Sailors of the Latent Multiverse',
        slug: 'sailors-of-the-latent-multiverse',
      },
    ],
  },
};

interface SeriesNavigationProps {
  series: NonNullable<Writing['series']>;
  currentSlug: string;
  navigateTo: (route: Route) => void;
}

/**
 * Simple, clickable series navigation list matching exact requested design:
 * - Clean bulleted list matching the site's chosen font
 * - Interactive navigation on click
 * - No bulky cards, buttons, or border outlines
 */
export const SeriesNavigation: React.FC<SeriesNavigationProps> = ({
  series,
  currentSlug,
  navigateTo,
}) => {
  const config = SERIES_REGISTRY[series.name];

  // Fallback if series is not in registry: dynamic 2-item list from series props
  const intro = config?.intro ?? `A series of essays: ${series.name}`;
  const items: SeriesItem[] = config?.items ?? [
    ...(series.prevSlug && series.prevTitle
      ? [{ title: `Part ${series.part - 1}. ${series.prevTitle}`, slug: series.prevSlug }]
      : []),
    { title: `Part ${series.part}. Current Essay`, slug: currentSlug },
    ...(series.nextSlug && series.nextTitle
      ? [{ title: `Part ${series.part + 1}. ${series.nextTitle}`, slug: series.nextSlug }]
      : []),
  ];

  return (
    <div className="mb-8 font-inherit">
      <p className="text-text-secondary mb-4 leading-relaxed">
        {intro}
      </p>
      <ul className="space-y-2 pl-0 my-0 list-none">
        {items.map((item, idx) => {
          const isCurrent = item.slug === currentSlug;
          const isAvailable = Boolean(item.slug);

          return (
            <li key={idx} className="flex items-start">
              <span className="text-text-secondary mr-3 select-none flex-shrink-0">•</span>
              <div className="flex-1 min-w-0">
                {isAvailable ? (
                  isCurrent ? (
                    <span className="font-semibold text-text-primary">
                      {item.title}
                      <span className="ml-2 text-xs font-medium text-accent opacity-90 select-none">
                        (Current)
                      </span>
                    </span>
                  ) : (
                    <button
                      onClick={() => navigateTo({ page: 'writings', slug: item.slug! })}
                      className="text-left text-text-secondary hover:text-accent hover:underline transition-colors duration-150 focus:outline-none focus-visible:underline rounded-xs"
                    >
                      {item.title}
                    </button>
                  )
                ) : (
                  <span className="text-text-secondary/55 select-none">
                    {item.title}
                    <span className="ml-2 text-xs text-text-secondary/40">(Coming soon)</span>
                  </span>
                )}
              </div>
            </li>
          );
        })}
      </ul>
      <hr className="mt-8 mb-6 border-border" />
    </div>
  );
};

/**
 * Minimalist bottom navigation: simple text links for Prev / Next without bulky cards.
 */
export const SeriesBottomLinks: React.FC<SeriesNavigationProps> = ({
  series,
  navigateTo,
}) => {
  if (!series.prevSlug && !series.nextSlug) return null;

  return (
    <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm font-inherit">
      {series.prevSlug && series.prevTitle ? (
        <button
          onClick={() => navigateTo({ page: 'writings', slug: series.prevSlug! })}
          className="text-left text-text-secondary hover:text-accent transition-colors flex items-center gap-1.5 focus:outline-none"
        >
          <span>←</span>
          <span>Previous: <strong className="font-semibold text-text-primary">{series.prevTitle}</strong></span>
        </button>
      ) : (
        <div />
      )}

      {series.nextSlug && series.nextTitle && (
        <button
          onClick={() => navigateTo({ page: 'writings', slug: series.nextSlug! })}
          className="text-right text-text-secondary hover:text-accent transition-colors flex items-center gap-1.5 ml-auto focus:outline-none"
        >
          <span>Next: <strong className="font-semibold text-text-primary">{series.nextTitle}</strong></span>
          <span>→</span>
        </button>
      )}
    </div>
  );
};

// Aliases for seamless drop-in backwards compatibility
export const SeriesTopBanner = SeriesNavigation;
export const SeriesBottomProgress = SeriesBottomLinks;
export default SeriesNavigation;
