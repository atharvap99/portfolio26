import WorkCategory from './WorkCategory';
import { workCategories } from '../data/work';

function AcademicWork() {
  const category = workCategories.academic;
  return <WorkCategory title={category.title} index="01" description={category.description} slug={category.slug} />;
}

export default AcademicWork;
