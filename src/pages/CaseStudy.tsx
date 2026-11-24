import { useParams } from 'react-router-dom';
import CaseStudyTemplate from '../components/CaseStudyTemplate';
import { portfolioProjects, videographyProject } from '../data/projects';

function getCategoryName(slug: string, category?: 'academic' | 'client') {
  if (category === 'academic' || slug.startsWith('academic')) {
    return 'Academic & Personal Work';
  }

  if (category === 'client' || slug.startsWith('client')) {
    return 'Contract & Client Work';
  }

  return 'Selected Work';
}

function CaseStudy() {
  const { slug = '' } = useParams();
  const project = portfolioProjects.find((item) => item.slug === slug);
  const mediaProject = videographyProject.slug === slug ? videographyProject : undefined;
  const category = getCategoryName(slug, project?.category ?? mediaProject?.category);

  return (
    <CaseStudyTemplate
      category={category}
      project={project}
      mediaProject={mediaProject}
    />
  );
}

export default CaseStudy;
