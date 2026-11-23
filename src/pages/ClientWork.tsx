import WorkCategory from './WorkCategory';
import { workCategories } from '../data/work';

function ClientWork() {
  const category = workCategories.client;
  return <WorkCategory title={category.title} index="02" description={category.description} slug={category.slug} />;
}

export default ClientWork;
