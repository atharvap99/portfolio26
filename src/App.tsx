import './App.css';

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
} from 'react-router-dom';

import Home from './pages/Home';
import Work from './pages/Work';
import About from './pages/About';
import Photography from './pages/Photography';


function Navbar() {

  const location = useLocation();

  return (
    <header className="header">

      <nav className="navbar">

        {/* Logo */}

        <Link to="/" className="logo">
          AP.
        </Link>


        {/* Navigation */}

        <div className="nav-links">

          <Link
            to="/"
            className={location.pathname === '/' ? 'active' : ''}
          >
            Home
          </Link>

          <Link
            to="/work"
            className={location.pathname === '/work' ? 'active' : ''}
          >
            Work
          </Link>

          <Link
            to="/about"
            className={location.pathname === '/about' ? 'active' : ''}
          >
            About
          </Link>

          <Link
            to="/photography"
            className={
              location.pathname === '/photography'
                ? 'active'
                : ''
            }
          >
            Photography
          </Link>

        </div>


        {/* Contact */}

        <a
          href="mailto:your.email@example.com"
          className="nav-contact"
        >
          Let's talk →
        </a>

      </nav>

    </header>
  );
}



function Footer() {

  return (

    <footer className="footer">

      <div className="footer-main">

        <div>

          <p className="footer-label">
            HAVE A PROJECT IN MIND?
          </p>

          <a
            href="mailto:atharvadesigns99@gmail.com"
            className="footer-email"
          >
            atharvadesigns99@gmail.com
          </a>

        </div>


        <div className="footer-links">

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn ↗
          </a>

          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram ↗
          </a>

        </div>

      </div>


      <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()} Atharva Pardeshi
        </p>

        <p>
          Designed & built by Atharva
        </p>

      </div>

    </footer>

  );
}



function App() {

  return (

    <BrowserRouter>

      <div className="site">

        <Navbar />

        <main>

          <Routes>

            <Route
              path="/"
              element={<Home />}
            />

            <Route
              path="/work"
              element={<Work />}
            />

            <Route
              path="/about"
              element={<About />}
            />

            <Route
              path="/photography"
              element={<Photography />}
            />

          </Routes>

        </main>

        <Footer />

      </div>

    </BrowserRouter>

  );
}


export default App;