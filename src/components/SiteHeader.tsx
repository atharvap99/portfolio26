import './SiteHeader.css';
import { Link, NavLink } from 'react-router-dom';
import { MaterialRouteAction } from './MaterialMedia';

const navItems = [
  { to: '/work', label: 'Work' },
  { to: '/about', label: 'About' },
  { to: '/photography', label: 'Photography' },
  { to: '/contact', label: 'Contact' },
];

function SiteHeader() {
  return (
    <header className="site-header">
      <nav className="navigation" aria-label="Main navigation">
        <Link className="wordmark" to="/" aria-label="Atharva Pardeshi home">
          AP<span>.</span>
        </Link>
        <div className="navigation-links">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                isActive ? 'navigation-link is-active' : 'navigation-link'
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
        <MaterialRouteAction className="nav-availability" to="/contact" variant="outlined">
          Let’s talk
        </MaterialRouteAction>
      </nav>
    </header>
  );
}

export default SiteHeader;
