import './Contact.css';
import { MaterialRouteAction } from '../components/MaterialMedia';

function Contact() {
  return (
    <div className="page-shell contact-page">
      <header className="page-intro contact-intro">
        <p className="eyebrow">LET’S CONNECT / 06</p>
        <h1>
          Good work<br />
          <span>starts here.</span>
        </h1>
        <p className="page-deck">For design opportunities, collaborations, or a thoughtful conversation.</p>
      </header>
      <section className="contact-card">
        <p className="eyebrow">EMAIL</p>
        <a className="contact-address" href="mailto:atharvadesigns99@gmail.com">
          atharvadesigns99@gmail.com <span aria-hidden="true">↗</span>
        </a>
        <div className="contact-lower">
          <p>Product design, interaction, industrial design, and the questions that connect them.</p>
          <MaterialRouteAction to="/work" variant="outlined" className="contact-work-action">
            Explore selected work
          </MaterialRouteAction>
        </div>
      </section>
    </div>
  );
}

export default Contact;
