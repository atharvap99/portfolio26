import './Home.css';
import { Link } from 'react-router-dom';
import designerDoodle from '../assets/designer-doodle.png';
import SectionHeading from '../components/SectionHeading';
import Testimonials from '../components/Testimonials';
import { MaterialRouteAction } from '../components/MaterialMedia';
import { workCategories } from '../data/work';

function Home() {
  return (
    <div className="home-page">
      <section className="home-hero page-shell">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot" /> UX / PRODUCT DESIGNER · INDUSTRIAL DESIGN ROOTS
          </p>
          <h1>
            Atharva<br />
            <span>Pardeshi</span><i>.</i>
          </h1>
          <div className="hero-bottom">
            <p>Designing thoughtful digital products and experiences, grounded in how people actually live and work.</p>
            <div className="hero-actions">
              <MaterialRouteAction className="hero-material-action" to="/work">
                Explore work
              </MaterialRouteAction>
              <Link className="button button-outline" to="/about">A little about me</Link>
            </div>
          </div>
        </div>
        <div className="hero-art">
          <div className="portrait-frame">
            <img
              src={designerDoodle}
              alt="Hand-drawn illustration of a designer with a pencil, bag, camera, and interface sketches"
            />
          </div>
          <div className="hero-stamp">
            <span>PEOPLE</span>
            <span>×</span>
            <span>PRODUCT</span>
          </div>
        </div>
        <div className="hero-bottomline">
          <span>PORTFOLIO / 2026</span>
          <span>SCROLL TO EXPLORE <b>↓</b></span>
          <span>DESIGN / RESEARCH / MAKING</span>
        </div>
      </section>

      <section className="intro-section page-shell">
        <SectionHeading index="01" label="Approach" note="Human by nature. Systems by design." />
        <div className="intro-statement">
          <h2>
            Make the complex<br />
            feel <em>considered.</em>
          </h2>
          <div>
            <p>My background in Industrial Design shapes how I think about digital products: as connected systems, not isolated screens.</p>
            <p>I bring research, interaction design, visual craft, and product thinking together to make experiences feel clear and useful.</p>
            <Link className="text-link" to="/about">
              More about my approach <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="work-preview page-shell">
        <SectionHeading index="02" label="Selected work" note="Two parts of the practice" />
        <div className="category-grid">
          <Link className="category-card academic-card" to={workCategories.academic.path}>
            <div className="category-art art-academic">
              <span className="art-index">01</span>
              <span className="art-ring ring-one" />
              <span className="art-ring ring-two" />
              <span className="art-cross">+</span>
              <span className="art-label">STUDY / EXPLORE / MAKE</span>
            </div>
            <div className="category-meta">
              <div>
                <p>ACADEMIC & PERSONAL</p>
                <h3>Questions worth<br />following.</h3>
              </div>
              <span className="arrow-circle" aria-hidden="true">↗</span>
            </div>
          </Link>
          <Link className="category-card client-card" to={workCategories.client.path}>
            <div className="category-art art-client">
              <span className="art-index">02</span>
              <span className="art-panel" />
              <span className="art-label">PARTNER / DESIGN / DELIVER</span>
            </div>
            <div className="category-meta">
              <div>
                <p>CONTRACT & CLIENT</p>
                <h3>Work made<br />together.</h3>
              </div>
              <span className="arrow-circle" aria-hidden="true">↗</span>
            </div>
          </Link>
        </div>
        <div className="work-preview-footer">
          <span>PROJECT ARCHIVE / IN PROGRESS</span>
          <Link className="text-link" to="/work">
            View all work <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>

      <Testimonials />

      <section className="design-quote page-shell">
        <p className="eyebrow">DESIGN / VALUE</p>
        <blockquote>“Good design is good business.”</blockquote>
        <div>
          <span>Thomas J. Watson</span>
          <span>Chairman of IBM</span>
        </div>
      </section>

      <section className="home-about-band">
        <div className="home-about-inner page-shell">
          <p className="eyebrow">A NOTE ON THE PRACTICE</p>
          <h2>
            From physical things<br />
            to digital <span>worlds.</span>
          </h2>
          <div className="home-about-bottom">
            <p>Experience across product design, SaaS, research, and material thinking.</p>
            <MaterialRouteAction className="about-material-action" to="/about">
              Meet Atharva
            </MaterialRouteAction>
          </div>
        </div>
      </section>

      <section className="home-photo-link page-shell">
        <SectionHeading index="04" label="Outside the frame" note="Photography / observation" />
        <div className="photo-teaser">
          <div className="photo-teaser-graphic">
            <span>LIGHT / FORM / PLACE</span>
            <span className="photo-teaser-mark">LOOK<br />CLOSER.</span>
          </div>
          <div>
            <h2>Paying attention<br />is a practice.</h2>
            <p>Photography is a way to slow down and notice small details in the world around me.</p>
            <Link className="text-link" to="/photography">
              Explore photography <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
