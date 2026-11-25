import { useParams } from 'react-router-dom';

import CaseStudyTemplate from '../components/CaseStudyTemplate';
import { portfolioProjects, videographyProject } from '../data/projects';

function CaseStudy() {
  // Read the project name from the current page address.
  const { slug = '' } = useParams();

  const project = portfolioProjects.find((item) => item.slug === slug);

  const mediaProject =
    videographyProject.slug === slug ? videographyProject : undefined;

  return (
    <CaseStudyTemplate
      project={project}
      mediaProject={mediaProject}
    />
  );
}

export default CaseStudy;
