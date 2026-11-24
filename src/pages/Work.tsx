import './Work.css';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import MovingImageProjectCard from '../components/MovingImageProjectCard';
import { workCategories } from '../data/work';
import { portfolioProjects } from '../data/projects';

function Work() {
  return (
    <div className="page-shell work-page">
      <header className="page-intro">
        <p className="eyebrow">PORTFOLIO / 02</p>
        <h1>Selected<br /><span>work.</span></h1>
        <p className="page-deck">A selection of projects across digital product, industrial, and interaction design.</p>
      </header>
      <section className="work-index">
        <SectionHeading index="01" label="Browse by practice" note="Choose a collection" />
        <div className="work-index-grid">
          {[workCategories.academic, workCategories.client].map((category, index) => (
            <Link
              to={category.path}
              className={'work-index-card index-card-' + index}
              key={category.path}
            >
              <span className="index-card-number">0{index + 1}</span>
              <div>
                <p className="eyebrow">COLLECTION / 0{index + 1}</p>
                <h2>{category.title}</h2>
                <p>{category.description}</p>
              </div>
              <span className="index-card-arrow" aria-hidden="true">↗</span>
            </Link>
          ))}
        </div>
      </section>
      <section className="existing-projects">
        <SectionHeading index="02" label="Selected case studies" note="Product, industrial & digital design" />
        {/* I replaced the draft project rows with the four case studies from my portfolio. */}
        <div className="portfolio-project-grid work-project-grid">
          {portfolioProjects.map((project, index) => (
            <ProjectCard
              project={project}
              number={'0' + (index + 1)}
              key={project.slug}
            />
          ))}
        </div>
      </section>
      <section className="moving-image-project">
        <SectionHeading index="03" label="Moving image" note="Film & reflection" />
        <MovingImageProjectCard />
      </section>
    </div>
  );
}

export default Work;
