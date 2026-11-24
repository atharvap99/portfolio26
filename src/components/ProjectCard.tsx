import './ProjectCard.css';
import { Link } from 'react-router-dom';
import type { PortfolioProject } from '../data/projects';
import { MaterialIcon } from './MaterialMedia';

type ProjectCardProps = {
  project: PortfolioProject;
  number?: string;
};

function ProjectCard({ project, number }: ProjectCardProps) {
  const baseUrl = import.meta.env.BASE_URL;
  const assetBase = baseUrl.endsWith('/') ? baseUrl : baseUrl + '/';

  return (
    <Link className="portfolio-project-card" to={'/case-study/' + project.slug}>
      {/* I use the image from my original project portfolio. */}
      <figure className="portfolio-project-image">
        <img
          src={assetBase + project.cover}
          alt={`Project presentation image for ${project.title}`}
          loading="lazy"
        />
        {number && <span className="portfolio-project-number">{number}</span>}
      </figure>
      <div className="portfolio-project-copy">
        <p className="portfolio-project-client">{project.organization}</p>
        <h2>{project.title}</h2>
        <p className="portfolio-project-description">{project.description}</p>
        <div className="portfolio-project-foot">
          <span>{project.discipline}</span>
          <MaterialIcon name="arrow_outward" />
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard;
