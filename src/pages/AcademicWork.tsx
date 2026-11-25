import WorkCategory from './WorkCategory';
import { workCategories } from '../data/work';
import { portfolioProjects } from '../data/projects';

function AcademicWork() {
  const category = workCategories.academic;

  // Show only projects marked as academic.
  const projects = portfolioProjects.filter(
    (project) => project.category === 'academic',
  );

  return (
    <WorkCategory
      title={category.title}
      index="01"
      description={category.description}
      slug={category.slug}
      projects={projects}
      showMovingImage
    />
  );
}

export default AcademicWork;