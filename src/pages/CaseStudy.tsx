import { useParams } from 'react-router-dom';
import CaseStudyTemplate from '../components/CaseStudyTemplate';
import { existingProjectSlots } from '../data/projects';

function CaseStudy() {
  const { slug = '' } = useParams();
  const project = existingProjectSlots.find((item) => item.slug === slug);
  const category = slug.startsWith('academic')
    ? 'Academic & Personal Work'
    : slug.startsWith('client')
      ? 'Contract & Client Work'
      : 'Selected Work';

  return <CaseStudyTemplate category={category} projectName={project?.title} />;
}

export default CaseStudy;
