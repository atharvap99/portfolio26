import './Home.css';

import { Link } from 'react-router-dom';
import designerDoodle from '../assets/designer-doodle.png';
import SectionHeading from '../components/SectionHeading';
import Testimonials from '../components/Testimonials';
import { MaterialRouteAction } from '../components/MaterialMedia';
import MovingImageProjectCard from '../components/MovingImageProjectCard';

function Home() {
  return (
    <div className="home-page">
      {/* Main introduction and portrait. */}
      <section className="home-hero page-shell">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot" /> UX / PRODUCT DESIGNER · INDUSTRIAL DESIGN ROOTS
          </p>

          <h1>
            Atharva
            <br />
            <span>Pardeshi</span>
            <i>.</i>
          </h1>

          <div className="hero-bottom">
            <p>
              Designing thoughtful digital products and experiences, grounded
              in how people actually live and work.
            </p>

            <div className="hero-actions">
              <Link className="button button-orange" to="/work">
                Explore Work
              </Link>
              <Link className="button button-outline" to="/about">
                A little about me
              </Link>
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
          <span>
            SCROLL TO EXPLORE <b>↓</b>
          </span>
          <span>DESIGN / RESEARCH / MAKING</span>
        </div>
      </section>

      {/* A short description of the design approach. */}
      <section className="intro-section page-shell">
        <SectionHeading
          index="01"
          label="Approach"
          note="Human by nature. Systems by design."
        />

        <div className="intro-statement">
          <h2>
            Make the complex
            <br />
            feel <em>considered.</em>
          </h2>

          <div>
            <p>
              My background in Industrial Design shapes how I think about
              digital products: as connected systems, not isolated screens.
            </p>
            <p>
              I bring research, interaction design, visual craft, and product
              thinking together to make experiences feel clear and useful.
            </p>

            <Link className="text-link" to="/about">
              More about my approach <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Feature a project before moving into the testimonials. */}
      <section className="work-preview page-shell">
        <SectionHeading
          index="02"
          label="Selected work"
          note="Film & reflection"
        />

        <div className="home-featured-project">
          <MovingImageProjectCard />
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

      {/* Introduce the experience behind the work. */}
      <section className="home-about-band">
        <div className="home-about-inner page-shell">
          <p className="eyebrow">A NOTE ON THE PRACTICE</p>

          <h2>
            From physical things
            <br />
            to digital <span>worlds.</span>
          </h2>

          <div className="home-about-bottom">
            <p>
              Experience across product design, SaaS, research, and material
              thinking.
            </p>

            <MaterialRouteAction
              className="about-material-action"
              to="/about"
            >
              Meet Atharva
            </MaterialRouteAction>
          </div>
        </div>
      </section>

      {/* Link to the photography page. */}
      <section className="home-photo-link page-shell">
        <SectionHeading
          index="04"
          label="Outside the frame"
          note="Photography / observation"
        />

        <div className="photo-teaser">
          <div className="photo-teaser-graphic">
            <span>LIGHT / FORM / PLACE</span>
            <span className="photo-teaser-mark">
              LOOK
              <br />
              CLOSER.
            </span>
          </div>

          <div>
            <h2>
              Paying attention
              <br />
              is a practice.
            </h2>
            <p>
              Photography is a way to slow down and notice small details in the
              world around me.
            </p>

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
