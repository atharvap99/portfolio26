import './CaseStudyTemplate.css';

import { Link } from 'react-router-dom';
import type { PortfolioProject, videographyProject } from '../data/projects';
import {
  MaterialAction,
  MaterialCard,
  MaterialChip,
} from './MaterialMedia';
import SectionHeading from './SectionHeading';

type CaseStudyTemplateProps = {
  project?: PortfolioProject;
  mediaProject?: typeof videographyProject;
};

function CaseStudyTemplate({
  project,
  mediaProject,
}: CaseStudyTemplateProps) {
  const baseUrl = import.meta.env.BASE_URL;

  // Include the site's base folder so images and media work when hosted.
  const mediaBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;

  // Show writing prompts only when this page has no project attached.
  const isTemplate = !project && !mediaProject;

  const title = project?.title ?? mediaProject?.title ?? 'Project title';

  const description =
    project?.description ??
    mediaProject?.description ??
    'A flexible case study framework for documenting the context, decisions, and design process behind a project. Replace the bracketed notes with your project details when you’re ready.';

  const areaLabel = project
    ? 'AREA'
    : mediaProject
      ? 'ROLE'
      : 'AREA';

  const areaValue =
    project?.organization ??
    (mediaProject ? 'Cinematographer' : '[Add project area]');

  const practice =
    project?.discipline ??
    (mediaProject
      ? 'Interactive media · Videography'
      : '[Add disciplines]');

  return (
    <article className="case-study page-shell">
      <header className={`case-hero${project ? ' case-hero-pdf' : ''}`}>
        <div className="case-hero-top">
          <Link className="back-link" to="/work">
            ← Back to work
          </Link>

        </div>

        <h1>
          {title}
          <span className="orange-period">.</span>
        </h1>

        <p className="case-intro">{description}</p>

        <dl className="case-facts">
          <div>
            <dt>{areaLabel}</dt>
            <dd>{areaValue}</dd>
          </div>

          <div>
            <dt>PRACTICE</dt>
            <dd>{practice}</dd>
          </div>
        </dl>
      </header>

      {/* Show the full-page design for a standard project. */}
      {project && (
        <ProjectFullPage project={project} mediaBase={mediaBase} />
      )}

      {/* Show the video and reflection for a media project. */}
      {mediaProject && (
        <MediaProjectSection
          project={mediaProject}
          mediaBase={mediaBase}
        />
      )}

      {isTemplate && <VideoPlaceholder />}
      {isTemplate && <TemplateContext />}
      {isTemplate && <TemplateExploration />}

      <div className="case-endmark">
        <span>{isTemplate ? 'END OF TEMPLATE' : 'SELECTED PROJECT'}</span>
        <Link to="/contact">Discuss a project ↗</Link>
      </div>
    </article>
  );
}

function MediaProjectSection({
  project,
  mediaBase,
}: {
  project: typeof videographyProject;
  mediaBase: string;
}) {
  return (
    <section
      className="case-media-section"
      aria-label="Project film and reflection"
    >
      <SectionHeading
        index="01"
        label="Film & reflection"
        note="Original project material"
      />

      <MaterialCard className="film-card">
        <div className="media-card-heading">
          <div>
            <MaterialChip icon="movie">VIDEOGRAPHY</MaterialChip>
            <h2>{project.reflectionTitle}</h2>
          </div>

          <MaterialAction
            href={mediaBase + project.video}
            icon="arrow_outward"
          >
            Open video
          </MaterialAction>
        </div>

        <video
          className="project-film"
          controls
          playsInline
          preload="metadata"
          poster={mediaBase + project.poster}
        >
          <source
            src={mediaBase + project.video}
            type="video/mp4"
          />
          Your browser does not support video playback.
        </video>

        <p className="media-caption">
          Cheetah perfume advertisement · Video supplied with the project
        </p>
      </MaterialCard>

      <MaterialCard className="reflection-card">
        <div className="media-card-heading">
          <div>
            <MaterialChip icon="picture_as_pdf">
              PERSONAL REFLECTION
            </MaterialChip>
            <h2>Read the shooting approach</h2>
          </div>

          <MaterialAction
            href={mediaBase + project.reflection}
            icon="arrow_outward"
          >
            Open PDF
          </MaterialAction>
        </div>

        <div className="reflection-preview">
          <figure>
            <img
              src={mediaBase + project.coverPreview}
              alt="Cover of the original Perfume Advertisement Cinematography reflection PDF"
            />
            <figcaption>Original reflection · Cover page</figcaption>
          </figure>

          <div>
            <p>
              The complete five-page reflection opens as the original PDF,
              with its layout and imagery intact.
            </p>
          </div>
        </div>
      </MaterialCard>
    </section>
  );
}

function VideoPlaceholder() {
  return (
    <section
      className="video-placeholder"
      aria-label="124-second video placeholder"
    >
      <div className="video-mark" aria-hidden="true">
        <span>▶</span>
      </div>

      <div className="video-copy">
        <p className="eyebrow">PROJECT FILM / 02:04</p>
        <h2>124-second video placeholder</h2>
        <p>Video slot reserved. Add your film when it’s ready.</p>
      </div>

      <span className="video-corner">
        MEDIA
        <br />
        TO COME
      </span>
    </section>
  );
}

function ProjectFullPage({
  project,
  mediaBase,
}: {
  project: PortfolioProject;
  mediaBase: string;
}) {
  return (
    <figure className="case-study-full-page">
      <img
        src={mediaBase + project.fullPage.image}
        alt={project.fullPage.alt}
        width={project.fullPage.width}
        height={project.fullPage.height}
        loading="eager"
        fetchPriority="high"
        decoding="async"
      />

      {project.endingNote && (
        <figcaption className="case-study-contact-note">
          <p>{project.endingNote}</p>

          <Link to="/contact">
            Let’s talk <span aria-hidden="true">↗</span>
          </Link>
        </figcaption>
      )}
    </figure>
  );
}

function TemplateContext() {
  return (
    <>
      <section className="case-section">
        <SectionHeading index="01" label="Context" note="Set the scene" />

        <div className="case-text-grid">
          <h2>Start with the situation.</h2>
          <p>
            [Add the project background, who it was for, and the conditions
            that shaped the work.]
          </p>
        </div>
      </section>

      <section className="case-section case-brief">
        <SectionHeading
          index="02"
          label="The challenge"
          note="Define the opportunity"
        />

        <div className="case-text-grid">
          <h2>What needed to change?</h2>
          <p>[Describe the user need or design challenge in your own words.]</p>
        </div>
      </section>
    </>
  );
}

function TemplateExploration() {
  return (
    <>
      <section className="case-section">
        <SectionHeading
          index="03"
          label="Exploration"
          note="Make the thinking visible"
        />

        <div className="case-text-grid">
          <h2>Show the work behind the work.</h2>
          <p>
            [Add research, sketches, experiments, and the key decisions that
            moved the project forward.]
          </p>
        </div>

        <div className="case-image-placeholder">
          <span>PROCESS IMAGE SLOT</span>
          <small>Replace with project material</small>
        </div>
      </section>

      <section className="case-section case-outcome">
        <SectionHeading
          index="04"
          label="Outcome"
          note="Bring it together"
        />

        <div className="case-text-grid">
          <h2>Share what took shape.</h2>
          <p>
            [Add the final concept or deliverables. An assessment and
            evaluation section can be added later.]
          </p>
        </div>
      </section>
    </>
  );
}

export default CaseStudyTemplate;
