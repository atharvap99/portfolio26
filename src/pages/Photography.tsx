import './Photography.css';
import SectionHeading from '../components/SectionHeading';

const photographs = [
  {
    number: '01',
    label: 'India Gate illuminated at night',
    caption: 'Delhi / after dark',
    image: '/photography/india-gate-night.jpg',
  },
  {
    number: '02',
    label: 'Modern architecture in warm evening light',
    caption: 'Architecture / evening',
    image: '/photography/modern-architecture.jpg',
  },
  {
    number: '03',
    label: 'A monastery in the Ladakh mountains',
    caption: 'Ladakh / monastery',
    image: '/photography/ladakh-monastery.jpg',
  },
  {
    number: '04',
    label: 'Clouds gathering above a mountain summit',
    caption: 'Himalaya / weather',
    image: '/photography/mountain-clouds.jpg',
  },
  {
    number: '05',
    label: 'Qutub Minar against the sky',
    caption: 'Delhi / monument',
    image: '/photography/qutub-minar.jpg',
  },
  {
    number: '06',
    label: 'The Taj Mahal framed by its gardens',
    caption: 'Agra / symmetry',
    image: '/photography/taj-mahal.jpg',
  },
  {
    number: '07',
    label: 'Indian flags set against a Himalayan range',
    caption: 'Himalaya / high pass',
    image: '/photography/himalayan-flags.jpg',
  },
  {
    number: '08',
    label: 'A touring motorcycle on a high mountain road',
    caption: 'Ladakh / open road',
    image: '/photography/himalayan-motorcycle.jpg',
  },
  {
    number: '09',
    label: 'A motorcycle beneath the Himalayan peaks',
    caption: 'Himalaya / crossing',
    image: '/photography/mountain-crossing.jpg',
  },
  {
    number: '10',
    label: 'Snow-covered mountains beneath towering clouds',
    caption: 'Himalaya / cloud break',
    image: '/photography/snowy-valley.jpg',
  },
  {
    number: '11',
    label: 'A lone figure beside a lake at sunset',
    caption: 'Ladakh / last light',
    image: '/photography/lake-at-sunset.jpg',
  },
  {
    number: '12',
    label: 'An illuminated domed building at night',
    caption: 'Architecture / after dark',
    image: '/photography/dome-at-night.jpg',
  },
  {
    number: '13',
    label: 'A turquoise lake below snow-capped mountains',
    caption: 'Ladakh / alpine lake',
    image: '/photography/turquoise-lake.jpg',
  },
  {
    number: '14',
    label: 'Sunlight falling through an autumn forest',
    caption: 'Forest / afternoon light',
    image: '/photography/autumn-forest.jpg',
  },
];

function Photography() {
  return (
    <div className="page-shell photography-page">
      <header className="page-intro photo-intro">
        <p className="eyebrow">PHOTOGRAPHY / 14</p>
        <h1>
          Looking<br />
          <span>closer.</span>
        </h1>
        <p className="page-deck">A set of visual studies in landscape, architecture, and light, collected across India and the Himalaya.</p>
        <div className="photo-intro-foot">
          <span>PLACE / LIGHT / STRUCTURE</span>
          <span>14 PHOTOGRAPHS ↓</span>
        </div>
      </header>
      <section className="photo-archive">
        <SectionHeading index="01" label="Visual archive" note="One grid / fourteen photographs" />
        <div className="bento-grid">
          {photographs.map((photograph) => (
            <figure className="photo-frame" key={photograph.number}>
              <img
                src={photograph.image}
                alt={photograph.label}
                loading="lazy"
              />
              <figcaption>
                <span>{photograph.number}</span>
                <span>{photograph.caption}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Photography;
