export type PortfolioProject = {
  slug: string;
  title: string;
  discipline: string;
  category: 'academic' | 'client';
  organization: string;
  description: string;
  cover: string;
  fullPage: {
    image: string;
    width: number;
    height: number;
    alt: string;
  };
};

// I keep the two supplied PDF studies as single continuous page views.
export const portfolioProjects: PortfolioProject[] = [
  {
    slug: 'participant-portal',
    title: 'Participant Portal',
    discipline: 'PRODUCT DESIGN · UX',
    category: 'client',
    organization: 'Korn Ferry · Assess',
    description: 'A talent dashboard that brings assessments, learning, coaching, and feedback into one place.',
    cover: 'projects/case-studies/participant-portal/card-cover.png',
    fullPage: {
      image: 'projects/case-studies/participant-portal/full-page.jpg',
      width: 1800,
      height: 17505,
      alt: 'The complete Participant Portal case study, shown as one continuous page from the supplied PDF.',
    },
  },
  {
    slug: 'reportseek',
    title: 'Reportseek',
    discipline: 'DIGITAL PRODUCT · UX/UI',
    category: 'academic',
    organization: 'Market research platform concept',
    description: 'A market research platform concept for finding, reviewing, and purchasing industry reports.',
    cover: 'projects/case-studies/reportseek/card-cover.png',
    fullPage: {
      image: 'projects/case-studies/reportseek/full-page.jpg',
      width: 1800,
      height: 16065,
      alt: 'The complete Reportseek case study, shown as one continuous page from the supplied PDF.',
    },
  },
];

export const videographyProject = {
  slug: 'interactive-media-videography',
  title: 'Videography Project',
  category: 'academic' as const,
  discipline: 'INTERACTIVE MEDIA · VIDEOGRAPHY',
  reflectionTitle: 'Perfume Advertisement Cinematography',
  description: 'A perfume advertisement film, accompanied by a personal reflection on the cinematography and shooting approach.',
  video: 'projects/interactive-media-videography/cheetah-perfume.mp4',
  poster: 'projects/interactive-media-videography/perfume-advertisement-poster.png',
  reflection: 'projects/interactive-media-videography/personal-reflection-blog.pdf',
  coverPreview: 'projects/interactive-media-videography/reflection-cover-1.jpg',
};
