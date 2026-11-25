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
        <h1>Selected<br /><span>work.</span></h1>
        <p className="page-deck">A selection spanning talent platforms, market research, and moving image.</p>
      </header>

      <section className="moving-image-project">
        <SectionHeading index="01" label="Videography Project" note="Film & reflection" />
        <MovingImageProjectCard />
      </section>

      <section className="existing-projects">
        <SectionHeading index="02" label="Case studies" note="Talent platforms & market research" />
        <div className="portfolio-project-grid work-project-grid">
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
