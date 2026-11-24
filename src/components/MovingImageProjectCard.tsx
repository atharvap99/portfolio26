import './MovingImageProjectCard.css';
import { Link } from 'react-router-dom';
import { videographyProject } from '../data/projects';
import { MaterialIcon } from './MaterialMedia';

function MovingImageProjectCard() {
  return (
    <Link className="moving-image-card" to={'/case-study/' + videographyProject.slug}>
      <span className="moving-image-mark"><MaterialIcon name="movie" /></span>
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
