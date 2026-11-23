import { Link } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';

type WorkCategoryProps = {
  title: string;
  index: string;
  description: string;
  slug: string;
};

function WorkCategory({ title, index, description, slug }: WorkCategoryProps) {
  return (
    <div className="page-shell category-page">
      <header className="page-intro">
        <Link className="back-link" to="/work">← All work</Link>
        <p className="eyebrow">{index} / WORK</p>
        <h1>{title}<span className="orange-period">.</span></h1>
        <p className="page-deck">{description}</p>
      </header>
      <section className="category-content">
        <SectionHeading index="01" label="Project archive" note="A growing collection" />
        <div className="archive-card">
          <div className="archive-visual">
            <span className="archive-number">{index}</span>
            <span className="archive-cross" aria-hidden="true">+</span>
            <span className="archive-caption">PROJECT MATERIAL<br />TO BE ADDED</span>
          </div>
          <div className="archive-details">
            <div>
              <p className="eyebrow">CASE STUDY TEMPLATE</p>
              <h2>Project title</h2>
              <p className="archive-placeholder">Project details and original imagery can be added here.</p>
            </div>
            <Link className="text-link" to={'/case-study/' + slug}>Open case study template <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WorkCategory;
