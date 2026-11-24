import './Photography.css';
import SectionHeading from '../components/SectionHeading';
import mountainValley from '../assets/place-mountain-valley.jpg';
import monastery from '../assets/place-monastery.jpg';
import mountainRoad from '../assets/place-mountain-road.jpg';
import monasteryWindow from '../assets/place-monastery-window.jpg';
import chortenDusk from '../assets/place-chorten-dusk.jpg';
import alpineLake from '../assets/place-alpine-lake.jpg';

const studies = [
  {
    number: '01',
    label: 'Monastery above a high mountain valley',
    caption: 'Monastery / hillside',
    image: monastery,
    className: 'photo-frame photo-frame-west',
  },
  {
    number: '02',
    label: 'A river crossing a high desert valley',
    caption: 'River / valley',
    image: mountainValley,
    className: 'photo-frame photo-frame-north-left',
  },
  {
    number: '03',
    label: 'Still water beneath a mountain range',
    caption: 'Lake / mountain',
    image: alpineLake,
    className: 'photo-frame photo-frame-north-right',
  },
  {
    number: '04',
    label: 'Weathered timber window in a monastery courtyard',
    caption: 'Material / detail',
    image: monasteryWindow,
    className: 'photo-frame photo-frame-east',
  },
  {
    number: '05',
    label: 'Mountain road winding across the high desert',
    caption: 'Road / landscape',
    image: mountainRoad,
    className: 'photo-frame photo-frame-south-left',
  },
  {
    number: '06',
    label: 'A white chorten overlooking a mountain ridge at dusk',
    caption: 'Chorten / dusk',
    image: chortenDusk,
    className: 'photo-frame photo-frame-south-right',
  },
  {
    number: '07',
    label: 'Reserved slot for a short portfolio film',
    caption: 'Video / 02:04',
    className: 'photo-frame photo-video-frame',
  },
];

function Photography() {
  return (
    <div className="page-shell photography-page">
      <header className="page-intro photo-intro">
        <p className="eyebrow">PHOTOGRAPHY / 07</p>
        <h1>
          Looking<br />
          <span>closer.</span>
        </h1>
        <p className="page-deck">A set of visual studies in landscape, architecture, and light. The images below are generated placeholders, not personal photographs.</p>
        <div className="photo-intro-foot">
          <span>PLACE / LIGHT / STRUCTURE</span>
          <span>GENERATED IMAGE PLACEHOLDERS ↓</span>
        </div>
      </header>
      <section className="photo-archive">
        <SectionHeading index="01" label="Visual archive" note="One grid / six studies + a video slot" />
        <div className="bento-grid">
          {studies.map((study) => (
            <figure className={study.className} key={study.number}>
              {study.image ? (
                <>
                  <img
                    src={study.image}
                    alt={study.label}
                    loading="lazy"
                  />
                  <figcaption>
                    <span>{study.number}</span>
                    <span>{study.caption}</span>
                  </figcaption>
                </>
              ) : (
                <>
                  <div className="photo-video-art" role="img" aria-label="Video placeholder, 124-second film">
                    <span className="photo-video-kicker">VIDEO / 02:04</span>
                    <span className="photo-video-play" aria-hidden="true">▶</span>
                  </div>
                  <figcaption>
                    <span>{study.number}</span>
                    <span>124-second film placeholder</span>
                  </figcaption>
                </>
              )}
            </figure>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Photography;
