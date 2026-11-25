export type ProjectVisual = {
  image: string;
  alt: string;
  caption: string;
};

export type PortfolioProject = {
  slug: string;
  title: string;
  discipline: string;
  category: 'academic' | 'client';
  organization: string;
  description: string;
  cover: string;
  sections: {
    title: string;
    body: string;
    points?: string[];
    visuals?: ProjectVisual[];
  }[];
};

// I added the two case studies from the supplied PDFs.
export const portfolioProjects: PortfolioProject[] = [
  {
    slug: 'participant-portal',
    title: 'Participant Portal',
    discipline: 'PRODUCT DESIGN · UX',
    category: 'client',
    organization: 'Korn Ferry · Assess',
    description: 'A dashboard redesign that brings assessments, learning, coaching, and feedback into one clearer participant experience.',
    cover: 'projects/case-studies/participant-portal/card-cover.png',
    sections: [
      {
        title: 'One place for the talent journey',
        body: 'The Unified Talent Hub brings assessments, learning, and feedback into a single platform. It gives employees a more direct way to move through tasks and take ownership of their development.',
        points: [
          'Bring assessment results, learning, and feedback together.',
          'Make peer and manager feedback part of a more complete view of growth.',
          'Give participants a clearer way to stay engaged with their development.',
        ],
        visuals: [
          {
            image: 'projects/case-studies/participant-portal/unified-hub.png',
            alt: 'Unified Talent Hub overview and the reasons for redesigning the participant experience.',
            caption: 'Unified Talent Hub and the case for a more connected participant experience.',
          },
        ],
      },
      {
        title: 'Design through iteration',
        body: 'Research was translated into user and task flows, then explored through prototypes. Feedback from testing and collaboration with product, development, and design helped refine the direction.',
        points: [
          'Simplify the interactions across participant tasks.',
          'Validate design concepts through prototypes and user testing.',
          'Keep the experience accessible and ready to grow across devices.',
        ],
        visuals: [
          {
            image: 'projects/case-studies/participant-portal/design-process.png',
            alt: 'Illustrated design process, from early ideas through iteration and refinement.',
            caption: 'Moving from early ideas to tested design decisions.',
          },
          {
            image: 'projects/case-studies/participant-portal/design-iterations.png',
            alt: 'A collection of Participant Portal dashboard wireframes and design iterations.',
            caption: 'Dashboard iterations used to explore hierarchy, tasks, and learning.',
          },
        ],
      },
      {
        title: 'A clearer dashboard to act from',
        body: 'The dashboard makes priorities easier to understand. To-do counts give an immediate overview, while assessment cards add context, deadlines, and estimated time so participants can decide what to do next.',
        points: [
          'A command centre makes current tasks and priorities visible.',
          'Self-assessment cards make the next step feel more manageable.',
          'Rater requests and feedback status sit together in one place.',
          'Learning resources connect assessment results to further development.',
        ],
        visuals: [
          {
            image: 'projects/case-studies/participant-portal/feature-directions.png',
            alt: 'Feature concepts for to-do tasks, self-assessments, rater requests, and learning.',
            caption: 'Feature directions for helping participants find a useful next step.',
          },
          {
            image: 'projects/case-studies/participant-portal/dashboard-and-feedback.png',
            alt: 'Participant dashboard and feedback screens, including assessment tasks and survey progress.',
            caption: 'Dashboard and feedback screens from the proposed experience.',
          },
        ],
      },
      {
        title: 'A more useful outcome for both sides',
        body: 'The redesign aims to give employees more clarity and confidence in their growth, while helping the business reduce administrative friction and give managers a clearer view of progress.',
        points: [
          'Help employees see what needs attention and where to develop.',
          'Reduce manual effort around multi-rater feedback.',
          'Give managers a clearer view of team progress.',
          'Create a foundation that can support future features.',
        ],
        visuals: [
          {
            image: 'projects/case-studies/participant-portal/impact.png',
            alt: 'Project reflections on the impact of the redesigned talent portal for employees and the business.',
            caption: 'The intended impact for employees, managers, and the business.',
          },
        ],
      },
      {
        title: 'Where the platform could go next',
        body: 'The report outlines future opportunities to make development more personal and collaborative, recognise progress, and fit learning into employees’ working lives.',
        points: [
          'Personalised learning suggestions informed by assessment results.',
          'Recognition and motivation through badges or completion certificates.',
          'Shared spaces for collaborative goal setting.',
          'A dedicated mobile experience for learning and feedback on the go.',
        ],
        visuals: [
          {
            image: 'projects/case-studies/participant-portal/future-opportunities.png',
            alt: 'Future opportunity concepts for personalised learning, recognition, shared goals, and mobile access.',
            caption: 'Future opportunities identified in the case study.',
          },
        ],
      },
    ],
  },
  {
    slug: 'reportseek',
    title: 'Reportseek',
    discipline: 'DIGITAL PRODUCT · UX/UI',
    category: 'academic',
    organization: 'Market research platform concept',
    description: 'A market research platform concept that helps people discover, compare, and buy industry reports with more confidence.',
    cover: 'projects/case-studies/reportseek/card-cover.png',
    sections: [
      {
        title: 'Making industry research easier to find',
        body: 'Reportseek brings reports and data for specific industries into one platform. The brief called for a simple, user-friendly experience where companies can navigate the library and find the research they need.',
        points: [
          'Support a large library of industry reports and data.',
          'Make categories and search easier to understand.',
          'Create a more engaging way to explore research before purchase.',
        ],
      },
      {
        title: 'What the market was missing',
        body: 'Reviewing existing report providers surfaced recurring problems: unclear purpose, hard-to-use search, crowded pages, weak report previews, and too little visible reassurance.',
        points: [
          'Make the search experience and its filters clearer.',
          'Reduce the amount of information competing for attention.',
          'Use report thumbnails to make listings easier to scan.',
          'Build credibility through a more considered visual presentation.',
        ],
        visuals: [
          {
            image: 'projects/case-studies/reportseek/market-analysis.png',
            alt: 'Competitor market analysis with notes on unclear navigation, information overload, and report previews.',
            caption: 'Market review notes on navigation, credibility, and report discovery.',
          },
        ],
      },
      {
        title: 'Design around what people need',
        body: 'The report highlights that people can feel overwhelmed when looking for a report and may find payment complicated. A clearer path from search to a well-presented report can make the experience more useful and engaging.',
        points: [
          'Make relevant reports easier to find.',
          'Help people understand a report before opening it.',
          'Keep the journey from discovery through checkout clear.',
          'Use stronger report previews to support engagement.',
        ],
        visuals: [
          {
            image: 'projects/case-studies/reportseek/user-flow-and-concepts.png',
            alt: 'Reportseek user flow and early concepts for the market research platform.',
            caption: 'Mapping the journey from finding a report to reviewing it.',
          },
        ],
      },
      {
        title: 'From wireframes to a connected product',
        body: 'Wireframes explored how the platform could support the full research journey, from an approachable landing page through report selection and payment.',
        points: [
          'Landing page for orientation and report discovery.',
          'Categories page for browsing industries.',
          'Filter page for narrowing the report list.',
          'Detailed report page for review before purchase.',
          'Checkout page for completing an order.',
        ],
        visuals: [
          {
            image: 'projects/case-studies/reportseek/wireframes.png',
            alt: 'Reportseek wireframes for the landing, categories, filtering, detailed report, and checkout pages.',
            caption: 'Wireframes for the key pages in the buying journey.',
          },
        ],
      },
      {
        title: 'A playful, energetic, professional direction',
        body: 'The final concept brings the platform together with a stronger visual identity and a clearer journey through industry reports, categories, saved reports, and checkout.',
        points: [
          'Use Poppins to support the intended playful, energetic tone.',
          'Bring the core research and purchase steps into one consistent experience.',
          'Present report content in a way that is easier to browse and compare.',
        ],
        visuals: [
          {
            image: 'projects/case-studies/reportseek/final-concept.png',
            alt: 'Reportseek final concept showing detailed report, checkout, and visual identity explorations.',
            caption: 'Final concept screens and the Reportseek visual direction.',
          },
        ],
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
