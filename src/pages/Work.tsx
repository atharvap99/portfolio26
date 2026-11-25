import './Work.css';

import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import MovingImageProjectCard from '../components/MovingImageProjectCard';
import { portfolioProjects } from '../data/projects';

function Work() {
  return (
    <div className="page-shell work-page">
      <header className="page-intro">
        <p className="eyebrow">PORTFOLIO / 02</p>

        <h1>
          Selected
          <br />
          <span>work.</span>
        </h1>

        <p className="page-deck">
          Three projects across moving image, talent platforms, and market
          research.
        </p>
      </header>

      <section className="selected-case-studies">
        <SectionHeading
          index="01"
          label="Case studies"
          note="Film · talent platforms · market research"
        />

        <MovingImageProjectCard />

        <div className="portfolio-project-grid work-project-grid">
          {/* Create one card for each project in the list. */}
          {portfolioProjects.map((project, index) => (
            <ProjectCard
              project={project}
              number={'0' + (index + 2)}
              key={project.slug}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Work;
