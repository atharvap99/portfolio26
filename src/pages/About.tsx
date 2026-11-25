import './About.css';

import designerDoodle from '../assets/designer-doodle.png';
import SectionHeading from '../components/SectionHeading';
import { Link } from 'react-router-dom';

// Keep the skills together by category.
const skillGroups = [
  {
    title: 'UX / PRODUCT',
    skills: [
      'UX Design',
      'Product Design',
      'Interaction Design',
      'User Research',
      'Prototyping',
    ],
  },
  {
    title: 'VISUAL',
    skills: [
      'UI Design',
      'Visual Design',
      'Design Systems',
      'Typography',
      'Branding',
    ],
  },
  {
    title: 'TOOLS',
    skills: ['Figma', 'Framer', 'Adobe', 'AI Design Tools'],
  },
];

// Each entry is one experience shown on the page.
const experiences = [
  {
    years: '2026 — PRESENT',
    company: 'University of Limerick',
    role: 'Master’s in Interaction and Experience Design',
    detail: 'Global Ambassador · Content Creation',
  },
  {
    years: 'DEC 2025 — MAY 2026',
    company: 'Freelance',
    role: 'Freelance Designer',
    detail: 'Independent practice',
  },
  {
    years: '2021 — 2025',
    company: 'Korn Ferry',
    role: 'Product Designer',
    detail: 'UX · Product Design · SaaS',
  },

  {
    years: '2020 — 2021',
    company: 'Harissons Bags',
    role: 'Industrial Design',
    detail: 'Product Design · Research · CMF',
  },
];

function About() {
  return (
    <div className="page-shell about-page">
      <header className="page-intro">
        <p className="eyebrow">A LITTLE ABOUT ME / 05</p>

        <h1>
          Designer,
          <br />
          <span>problem solver.</span>
        </h1>

        <p className="page-deck">
          I enjoy understanding people, technology, and the systems that
          connect them.
        </p>
      </header>

      <section className="about-story">
        <SectionHeading
          index="01"
          label="My story"
          note="From objects to interfaces"
        />

        <div className="about-story-grid">
          <figure className="about-portrait">
            <img
              src={designerDoodle}
              alt="Hand-drawn designer illustration with product and interface sketches"
            />
            <figcaption>
              INDUSTRIAL DESIGN / DIGITAL PRODUCTS
            </figcaption>
          </figure>

          <div className="about-prose">
            <p className="prose-lead">
              Industrial design gave me a whole-system perspective. I now bring
              it to UX and digital product design.
            </p>

            <p>
              I work across product thinking, research, interaction design, and
              visual design—connecting an interface to the experience around
              it.
            </p>

            <p>
              I enjoy working on complex problems and transforming them into
              simple, useful, and engaging experiences.
            </p>

            <Link className="text-link" to="/contact">
              Start a conversation <span>↗</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="about-experience">
        <SectionHeading
          index="02"
          label="Experience"
          note="A few chapters"
        />

        <div className="experience-list">
          {experiences.map((experience, index) => (
            <article className="experience-row" key={experience.company}>
              <span className="experience-date">{experience.years}</span>

              <div>
                <h2>{experience.company}</h2>
                <p>{experience.role}</p>
                <small>{experience.detail}</small>
              </div>

              <span className="experience-index">0{index + 1}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="about-skills">
        <SectionHeading
          index="03"
          label="Capabilities"
          note="Tools and ways of thinking"
        />

        <div className="skills-grid">
          {skillGroups.map((group, i) => (
            <div className="skill-column" key={group.title}>
              <span className="skill-index">0{i + 1}</span>
              <h3>{group.title}</h3>

              <ul>
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default About;
