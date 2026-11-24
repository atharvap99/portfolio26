export type PortfolioProject = {
  slug: string;
  title: string;
  discipline: string;
  category: 'academic' | 'client';
  organization: string;
  description: string;
  cover: string;
  sections: { title: string; body: string; points?: string[] }[];
};

// I added these four case studies from my portfolio PDF.
export const portfolioProjects: PortfolioProject[] = [
  {
    slug: 'participant-portal',
    title: 'Participant Portal',
    discipline: 'PRODUCT DESIGN · UX',
    category: 'client',
    organization: 'Korn Ferry · Assess',
    description: 'A dashboard redesign within Korn Ferry One that brings assessments, learning, coaching, and feedback into one participant experience.',
    cover: 'projects/case-studies/korn-ferry-06.jpg',
    sections: [
      {
        title: 'A disconnected starting point',
        body: 'Participants previously moved across several platforms to complete tasks. The experience felt fragmented, and the existing dashboard offered little support for motivation or career development.',
      },
      {
        title: 'Bring the essentials together',
        body: 'The redesign brought the participant’s core tools into one place, with a clearer path through day-to-day tasks and longer-term development.',
        points: ['Assessments and results', 'Learning and coaching resources', 'Feedback and progress information', 'Responsive access across devices'],
      },
      {
        title: 'A calmer dashboard',
        body: 'Task cards, due dates, estimated completion times, and learning modules help participants understand what needs attention and keep their progress visible.',
      },
      {
        title: 'What the work reinforced',
        body: 'The portfolio describes user research, iterative feedback, and testing as important to balancing participant needs with business goals. Multi-rater assessments are noted as future scope for the platform.',
      },
    ],
  },
  {
    slug: 'buddito',
    title: 'Buddito',
    discipline: 'INDUSTRIAL · PRODUCT DESIGN',
    category: 'client',
    organization: 'Harissons Bags',
    description: 'A multifunctional diaper bag designed to make everyday travel with a baby more manageable.',
    cover: 'projects/case-studies/buddito-11.jpg',
    sections: [
      {
        title: 'Designed around the realities of care',
        body: 'Interviews and hands-on testing informed a bag for parents on the move. Existing alternatives such as tote bags and baskets made essentials harder to organise and reach.',
      },
      {
        title: 'Useful details, thoughtfully placed',
        body: 'The final concept balances access, hygiene, comfort, and flexibility within material and manufacturing constraints.',
        points: ['Organised, accessible compartments', 'A semi-rigid lightweight structure', 'An integrated baby carrier that folds away', 'An insulated bottle pocket', 'A dedicated used-diaper compartment with activated-charcoal lining', 'Expandable storage for longer outings'],
      },
      {
        title: 'Three rounds of prototyping',
        body: 'The first prototype tested core compartment and carrier functions. The second explored materials and placement. The third brought together refinements and tested the complete set of features with users.',
      },
      {
        title: 'Working with production',
        body: 'The project explored how to balance durability, weight, accessibility, and manufacturability. Material selection and production constraints shaped the design alongside user feedback.',
      },
    ],
  },
  {
    slug: 'trailo',
    title: 'Trailo',
    discipline: 'INDUSTRIAL · PRODUCT DESIGN',
    category: 'academic',
    organization: 'Travel & trekking concept',
    description: 'A portable blender concept that can cool or heat drinks for travel and trekking.',
    cover: 'projects/case-studies/trailo-15.jpg',
    sections: [
      {
        title: 'A compact companion for the trail',
        body: 'Trailo responds to travellers and trekkers looking for compact, multifunctional gear. The concept combines blending with the ability to cool or heat a drink on the move.',
      },
      {
        title: 'Materials and form',
        body: 'The concept pairs a transparent polycarbonate flask with a silicone base for stability and a blend of durable materials for travel.',
        points: ['ABS plastic body', 'Copper cooling and heating components', 'Stainless steel details', 'Transparent flask for viewing the blend'],
      },
      {
        title: 'Beyond blending',
        body: 'An LED ring communicates status, while a built-in torch supports use during night-time adventures. The concept is intended for cold smoothies, hot drinks, and changing conditions outdoors.',
      },
    ],
  },
  {
    slug: 'vairam',
    title: 'Vairam',
    discipline: 'UX/UI · RESPONSIVE WEB',
    category: 'academic',
    organization: 'Custom jewellery experience',
    description: 'A responsive jewellery customisation experience that helps people move from inspiration to enquiry with more clarity.',
    cover: 'projects/case-studies/vairam-19.jpg',
    sections: [
      {
        title: 'Reducing uncertainty',
        body: 'People interested in custom jewellery hesitated over unclear pricing, hidden costs, and an unfamiliar process. The experience needed to feel premium while making each step easier to understand.',
      },
      {
        title: 'A decision journey with room to explore',
        body: 'The page guides people through orientation, understanding, trust, comparison, and action, introducing information as it becomes useful.',
        points: ['Progressive disclosure keeps the page from overwhelming visitors', 'Intent-based content sequencing introduces proof before action', 'An on-demand comparison helps visitors assess their options'],
      },
      {
        title: 'Built for desktop and mobile',
        body: 'The mobile experience adapts the desktop structure around the same intent, making the information easier to scan in a narrower layout.',
      },
      {
        title: 'A more confident next step',
        body: 'Clearer process and pricing help visitors make informed decisions and begin more meaningful conversations with the designer.',
      },
    ],
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
