import { Link } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';
import { workCategories } from '../data/work';
import { existingProjectSlots } from '../data/projects';

function Work() {
  return (
    <div className="page-shell work-page">
      <header className="page-intro">
        <p className="eyebrow">PORTFOLIO / 02</p>
        <h1>Work in<br /><span>progress.</span></h1>
        <p className="page-deck">A growing archive across academic, personal, contract, and client work.</p>
      </header>
      <section className="work-index">
        <SectionHeading index="01" label="Browse by practice" note="Choose a collection" />
        <div className="work-index-grid">
          {[workCategories.academic, workCategories.client].map((category, i) => (
            <Link to={category.path} className={'work-index-card index-card-' + i} key={category.path}>
              <span className="index-card-number">0{i + 1}</span>
              <div><p className="eyebrow">COLLECTION / 0{i + 1}</p><h2>{category.title}</h2><p>{category.description}</p></div>
              <span className="index-card-arrow">↗</span>
            </Link>
          ))}
        </div>
      </section>
      <section className="existing-projects">
        <SectionHeading index="02" label="Project slots" note="Existing draft labels" />
        <div className="existing-project-list">
          {existingProjectSlots.map((project, i) => (
            <Link className="existing-project-row" to={'/case-study/' + project.slug} key={project.slug}>
              <span className="existing-project-number">0{i + 1}</span>
              <h2>{project.title}</h2>
              <span className="existing-project-discipline">{project.discipline}</span>
              <span className="existing-project-arrow">↗</span>
            </Link>
          ))}
        </div>
      </section>
      <div className="template-note"><span className="note-mark">i</span><p>Project cards and imagery are intentionally left as editable placeholders until original project material is added.</p></div>
    </div>
  );
}

export default Work;
