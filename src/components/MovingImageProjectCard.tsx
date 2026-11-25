import './MovingImageProjectCard.css';

import { Link } from 'react-router-dom';

import { videographyProject } from '../data/projects';
import { MaterialIcon } from './MaterialMedia';

function MovingImageProjectCard() {
  const baseUrl = import.meta.env.BASE_URL;

  // Add a slash so the poster path works on the hosted site too.
  const mediaBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;

  return (
    <Link
      className="moving-image-card"
      to={`/case-study/${videographyProject.slug}`}
    >
      <span className="moving-image-thumbnail">
        {/* The project title gives the link its name, so this image is decorative. */}
        <img
          src={mediaBase + videographyProject.poster}
          alt=""
          loading="lazy"
        />

        <span className="moving-image-play" aria-hidden="true">
          <MaterialIcon name="movie" />
        </span>
      </span>

      <span className="moving-image-copy">
        <span className="eyebrow">{videographyProject.discipline}</span>
        <strong>{videographyProject.title}</strong>
        <span>{videographyProject.description}</span>
      </span>

      <span className="moving-image-link">
        View project
        <MaterialIcon name="arrow_outward" />
      </span>
    </Link>
  );
}

export default MovingImageProjectCard;