
export interface Writing {
  title: string;
  detailTitle?: string;
  excerpt: string;
  link?: string; // Retained for compatibility, but slug is used for routing
  slug: string;
  content: string;
  publicationDate: string;
  views: number;
  series?: {
    name: string;
    part: number;
    totalParts: number;
    prevSlug?: string;
    prevTitle?: string;
    nextSlug?: string;
    nextTitle?: string;
  };
}