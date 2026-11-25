import WorkCategory from './WorkCategory';

import { workCategories } from '../data/work';
import { portfolioProjects } from '../data/projects';

function ClientWork() {
  const category = workCategories.client;

  // Show only projects marked as client work.
  const projects = portfolioProjects.filter(
    (project) => project.category === 'client',
  );

  return (
    <WorkCategory
      title={category.title}
      index="02"
      description={category.description}
      slug={category.slug}
      projects={projects}
    />
  );
}

export default ClientWork;
