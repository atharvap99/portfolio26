import { Link } from 'react-router-dom';
import DoubleDiamond from './DoubleDiamond';
import SectionHeading from './SectionHeading';

type CaseStudyTemplateProps = {
  category: string;
  projectName?: string;
};

function CaseStudyTemplate({ category, projectName = 'Project title' }: CaseStudyTemplateProps) {
  return (
    <article className="case-study page-shell">
      <header className="case-hero">
        <div className="case-hero-top">
          <Link className="back-link" to="/work">← Back to work</Link>
          <span className="case-kicker">CASE STUDY / TEMPLATE</span>
        </div>
        <p className="eyebrow">{category.toUpperCase()}</p>
        <h1>{projectName}<span className="orange-period">.</span></h1>
        <p className="case-intro">
          A flexible case study framework for documenting the context, decisions,
          and design process behind a project. Replace the bracketed notes with
          your project details when you’re ready.
        </p>
        <dl className="case-facts">
          <div><dt>ROLE</dt><dd>[Add your role]</dd></div>
          <div><dt>YEAR</dt><dd>[Add project year]</dd></div>
          <div><dt>DISCIPLINE</dt><dd>[Add disciplines]</dd></div>
        </dl>
      </header>

      <section className="video-placeholder" aria-label="124-second video placeholder">
        <div className="video-mark" aria-hidden="true"><span>▶</span></div>
        <div className="video-copy">
          <p className="eyebrow">PROJECT FILM / 02:04</p>
          <h2>124-second video placeholder</h2>
          <p>Video slot reserved. Add your film when it’s ready.</p>
        </div>
        <span className="video-corner">MEDIA<br />TO COME</span>
      </section>

      <section className="case-section">
        <SectionHeading index="01" label="Context" note="Set the scene" />
        <div className="case-text-grid">
          <h2>Start with the situation.</h2>
          <p>[Add the project background, who it was for, and the conditions that shaped the work.]</p>
        </div>
      </section>

      <section className="case-section case-brief">
        <SectionHeading index="02" label="The challenge" note="Define the opportunity" />
        <div className="case-text-grid">
          <h2>What needed to change?</h2>
          <p>[Describe the user need or design challenge in your own words.]</p>
        </div>
      </section>

      <DoubleDiamond />

      <section className="case-section">
        <SectionHeading index="03" label="Exploration" note="Make the thinking visible" />
        <div className="case-text-grid">
          <h2>Show the work behind the work.</h2>
          <p>[Add research, sketches, experiments, and the key decisions that moved the project forward.]</p>
        </div>
        <div className="case-image-placeholder"><span>PROCESS IMAGE SLOT</span><small>Replace with project material</small></div>
      </section>

      <section className="case-section case-outcome">
        <SectionHeading index="04" label="Outcome" note="Bring it together" />
        <div className="case-text-grid">
          <h2>Share what took shape.</h2>
          <p>[Add the final concept or deliverables. An assessment and evaluation section can be added later.]</p>
        </div>
      </section>

      <div className="case-endmark"><span>END OF TEMPLATE</span><Link to="/contact">Discuss a project ↗</Link></div>
    </article>
  );
}

export default CaseStudyTemplate;
