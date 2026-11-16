import { Link } from 'react-router-dom';

import profileImage from '../assets/profile.jpg';


function Home() {

  return (

    <div className="page">


      {/* ================= HERO ================= */}

      <section className="hero">

        <div className="hero-text">

          <p className="eyebrow">
            UX / PRODUCT DESIGNER
          </p>

          <h1>
            Atharva
            <br />
            Pardeshi.
          </h1>

          <p className="hero-description">

            Product Designer with a background in Industrial
            Design, creating thoughtful digital products,
            meaningful interactions and experiences for
            real people.

          </p>


          <div className="hero-buttons">

            <Link
              to="/work"
              className="button primary"
            >
              View my work →
            </Link>

            <Link
              to="/about"
              className="button secondary"
            >
              About me
            </Link>

          </div>

        </div>


        {/* Profile image */}

        <div className="hero-image">

          <img
            src={profileImage}
            alt="Atharva Pardeshi"
          />

        </div>

      </section>



      {/* ================= INTRO ================= */}

      <section className="section intro">

        <p className="section-label">
          01 — APPROACH
        </p>


        <div className="intro-content">

          <h2>
            I turn complex problems into
            <span> simple experiences.</span>
          </h2>

          <p>
            My approach combines user research, interaction
            design, visual design and product thinking to
            create experiences that are useful, intuitive
            and engaging.
          </p>

        </div>

      </section>



      {/* ================= SELECTED WORK ================= */}

      <section className="section">

        <div className="section-heading">

          <p className="section-label">
            02 — SELECTED WORK
          </p>

          <Link
            to="/work"
            className="view-link"
          >
            View all work →
          </Link>

        </div>


        <div className="project-grid">


          {/* Project 01 */}

          <Link
            to="/work"
            className="project-card"
          >

            <div className="project-image">

              <span>
                PROJECT IMAGE
              </span>

            </div>

            <div className="project-info">

              <div>

                <p>
                  PRODUCT DESIGN · UX
                </p>

                <h3>
                  Project One
                </h3>

              </div>

              <span>
                01
              </span>

            </div>

          </Link>



          {/* Project 02 */}

          <Link
            to="/work"
            className="project-card"
          >

            <div className="project-image">

              <span>
                PROJECT IMAGE
              </span>

            </div>

            <div className="project-info">

              <div>

                <p>
                  UX · INTERACTION DESIGN
                </p>

                <h3>
                  Project Two
                </h3>

              </div>

              <span>
                02
              </span>

            </div>

          </Link>

        </div>

      </section>



      {/* ================= CTA ================= */}

      <section className="section home-contact">

        <p className="eyebrow">
          LET'S CONNECT
        </p>

        <h2>
          Have a project
          <br />
          in mind?
        </h2>

        <a
          href="mailto:your.email@example.com"
          className="large-link"
        >
          Let's talk →
        </a>

      </section>

    </div>

  );
}


export default Home;