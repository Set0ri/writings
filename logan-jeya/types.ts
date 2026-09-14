
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

export interface Project {
    title: string;
    slug: string;
    image: string;
    description: string;
    details: string;
    technicalDetails?: string;
    architectureDiagram?: string;
    codeExample?: {
        language: string;
        code: string;
    };
    analysis?: string;
    roi?: {
        title: string;
        calculation: string;
    };
    date?: string;
    skills?: string[];
}

export interface Investment {
    name: string;
    logo: string;
    description: string;
    date: string;
}

export interface MediaLink {
    title: string;
    url: string;
    source: string;
}

export interface Role {
    title: string;
    duration: string;
    description: string;
    media?: MediaLink;
}

export interface Experience {
    company: string;
    logo: string;
    location?: string;
    totalDuration?: string;
    roles: Role[];
}

export interface Education {
    institution: string;
    logo: string;
    degree: string;
    duration: string;
    description: string;
}