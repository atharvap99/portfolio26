import './SiteFooter.css';
import { Link } from 'react-router-dom';

function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-lead">
        <p className="eyebrow">HAVE A PROJECT IN MIND?</p>
        <h2>Let’s make something that matters.</h2>
        <a className="footer-email" href="mailto:atharvadesigns99@gmail.com">
          atharvadesigns99@gmail.com <span aria-hidden="true">↗</span>
        </a>
      </div>
      <div className="footer-meta">
        <Link className="footer-mark" to="/">AP<span>.</span></Link>
        <span className="footer-credit">
          Designed with intent
          <svg className="footer-heart" aria-hidden="true" viewBox="0 0 24 24" focusable="false">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21l7.78-7.55 1.06-1.06a5.5 5.5 0 0 0 0-7.78Z" />
          </svg>
        </span>
        <div className="footer-meta-right">
          <span className="footer-copyright">© {currentYear} Atharva Pardeshi</span>
          <span className="footer-divider" aria-hidden="true" />
          <div className="footer-socials">
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
              Instagram ↗
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
