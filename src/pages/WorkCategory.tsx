import './Work.css';

import { Link } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import MovingImageProjectCard from '../components/MovingImageProjectCard';
import type { PortfolioProject } from '../data/projects';

type WorkCategoryProps = {
  title: string;
  index: string;
  description: string;
  slug: string;
  projects?: PortfolioProject[];
  showMovingImage?: boolean;
};

function WorkCategory({
  title,
  index,
  description,
  slug,
  projects = [],
  showMovingImage = false,
}: WorkCategoryProps) {
  return (
    <div className="page-shell category-page">
      <header className="page-intro">
        <Link className="back-link" to="/work">
          ← All work
        </Link>

        <h1>
          {title}
          <span className="orange-period">.</span>
        </h1>

        <p className="page-deck">{description}</p>
      </header>

      <section className="category-content">
        <SectionHeading
          index="01"
          label="Projects in this category"
          note={
            showMovingImage
              ? `${projects.length} case studies and 1 film`
              : `${projects.length} case studies`
          }
        />

        {/* Show the project cards when this category has projects. */}
        {projects.length ? (
          <>
            <div className="portfolio-project-grid">
              {projects.map((project, projectIndex) => (
                <ProjectCard
                  project={project}
                  number={'0' + (projectIndex + 1)}
                  key={project.slug}
                />
              ))}
            </div>

            {showMovingImage && (
              <div className="category-moving-image">
                <p className="eyebrow">MOVING IMAGE</p>
                <MovingImageProjectCard />
              </div>
            )}
          </>
        ) : (
          /* Show the template card when the category has no projects yet. */
          <div className="archive-card">
            <div className="archive-visual">
              <span className="archive-number">{index}</span>
              <span className="archive-cross" aria-hidden="true">
                +
              </span>
              <span className="archive-caption">
                PROJECT MATERIAL
                <br />
                TO BE ADDED
              </span>
            </div>

            <div className="archive-details">
              <div>
                <p className="eyebrow">CASE STUDY TEMPLATE</p>
                <h2>Project title</h2>
                <p className="archive-placeholder">
                  Project details and original imagery can be added here.
                </p>
              </div>

              <Link className="text-link" to={'/case-study/' + slug}>
                Open case study template{' '}
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

export default WorkCategory;
