import './SiteFooter.css';

import { Link } from 'react-router-dom';

function SiteFooter() {
  // This keeps the copyright year up to date.
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-lead">
        <p className="eyebrow">HAVE A PROJECT IN MIND?</p>
        <h2>Let’s make something that matters.</h2>

        <a
          className="footer-email"
          href="mailto:atharvadesigns99@gmail.com"
        >
          atharvadesigns99@gmail.com
          <span aria-hidden="true">↗</span>
        </a>
      </div>

      <div className="footer-meta">
        {/* Return to the homepage when the AP mark is clicked. */}
        <Link className="footer-mark" to="/">
          AP<span>.</span>
        </Link>

        <span className="footer-credit">
          Designed with intent

          {/* The heart is decorative, so screen readers can skip it. */}
          <svg
            className="footer-heart"
            aria-hidden="true"
            viewBox="0 0 24 24"
            focusable="false"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21l7.78-7.55 1.06-1.06a5.5 5.5 0 0 0 0-7.78Z" />
          </svg>
        </span>

        <div className="footer-meta-right">
          <span className="footer-copyright">
            © {currentYear} Atharva Pardeshi
          </span>

          <span className="footer-divider" aria-hidden="true" />

          <div className="footer-socials">
            <a
              href="https://www.linkedin.com/in/atharva-pardeshi-619515168/"
              aria-label="LinkedIn profile"
              target="_blank"
              rel="noreferrer"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
                <path d="M4.4 9h3.4v11.5H4.4V9Zm1.7-1.6a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm4.1 1.6h3.3v1.6h.1c.5-.9 1.6-1.9 3.5-1.9 3.7 0 4.4 2.4 4.4 5.6v6.2H18V15c0-1.3 0-3.1-1.9-3.1s-2.2 1.4-2.2 3v5.7h-3.5V9Z" />
              </svg>
            </a>

            <a
              href="https://www.instagram.com/mr.atharvva/"
              aria-label="Instagram profile"
              target="_blank"
              rel="noreferrer"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
                <defs>
                  <linearGradient
                    id="footer-instagram-gradient"
                    x1="3"
                    y1="21"
                    x2="21"
                    y2="3"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#feda75" />
                    <stop offset="0.5" stopColor="#fa7e1e" />
                    <stop offset="1" stopColor="#d62976" />
                  </linearGradient>
                </defs>
                <rect
                  x="3"
                  y="3"
                  width="18"
                  height="18"
                  rx="5"
                  fill="none"
                  stroke="url(#footer-instagram-gradient)"
                  strokeWidth="2.2"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="4"
                  fill="none"
                  stroke="url(#footer-instagram-gradient)"
                  strokeWidth="2.2"
                />
                <circle
                  cx="17.8"
                  cy="6.3"
                  r="1.2"
                  fill="url(#footer-instagram-gradient)"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
