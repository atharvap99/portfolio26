import { useEffect } from 'react';
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import './App.css';
import './Responsive.css';
import SiteFooter from './components/SiteFooter';
import SiteHeader from './components/SiteHeader';
import About from './pages/About';
import AcademicWork from './pages/AcademicWork';
import CaseStudy from './pages/CaseStudy';
import ClientWork from './pages/ClientWork';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Photography from './pages/Photography';
import Work from './pages/Work';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

function NotFound() {
  return (
    <section className="not-found page-shell">
      <p className="eyebrow">404 / PAGE NOT FOUND</p>
      <h1>
        Lost in<br />
        <span>the margins.</span>
      </h1>
      <Link className="button button-orange" to="/">Back to home ↗</Link>
    </section>
  );
}

function App() {
  const basename = import.meta.env.BASE_URL.replace(/\/$/, '');

  return (
    <BrowserRouter basename={basename}>
      <ScrollToTop />
      <div className="site">
        <SiteHeader />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/work/academic" element={<AcademicWork />} />
            <Route path="/work/client" element={<ClientWork />} />
            {/* All case studies share the same layout. */}
            <Route path="/case-study/:slug" element={<CaseStudy />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/photography" element={<Photography />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <SiteFooter />
      </div>
    </BrowserRouter>
  );
}

export default App;
