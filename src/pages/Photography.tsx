import './Photography.css';
import SectionHeading from '../components/SectionHeading';

// Build each image path using the site's base address.
const photographyAsset = (fileName: string) =>
  `${import.meta.env.BASE_URL.replace(/\/$/, '')}/photography/${fileName}`;

// The order here matches the photos used in the grid below.
const photographs = [
  {
    number: '01',
    label: 'India Gate illuminated at night',
    caption: 'Delhi / after dark',
    image: photographyAsset('india-gate-night.jpg'),
  },
  {
    number: '02',
    label: 'Modern architecture in warm evening light',
    caption: 'Architecture / evening',
    image: photographyAsset('modern-architecture.jpg'),
  },
  {
    number: '03',
    label: 'A monastery in the Ladakh mountains',
    caption: 'Ladakh / monastery',
    image: photographyAsset('ladakh-monastery.jpg'),
  },
  {
    number: '04',
    label: 'Clouds gathering above a mountain summit',
    caption: 'Himalaya / weather',
    image: photographyAsset('mountain-clouds.jpg'),
  },
  {
    number: '05',
    label: 'Qutub Minar against the sky',
    caption: 'Delhi / monument',
    image: photographyAsset('qutub-minar.jpg'),
  },
  {
    number: '06',
    label: 'The Taj Mahal framed by its gardens',
    caption: 'Agra / symmetry',
    image: photographyAsset('taj-mahal.jpg'),
  },
  {
    number: '07',
    label: 'Indian flags set against a Himalayan range',
    caption: 'Himalaya / high pass',
    image: photographyAsset('himalayan-flags.jpg'),
  },
  {
    number: '08',
    label: 'A touring motorcycle on a high mountain road',
    caption: 'Ladakh / open road',
    image: photographyAsset('himalayan-motorcycle.jpg'),
  },
  {
    number: '09',
    label: 'A motorcycle beneath the Himalayan peaks',
    caption: 'Himalaya / crossing',
    image: photographyAsset('mountain-crossing.jpg'),
  },
  {
    number: '10',
    label: 'Snow-covered mountains beneath towering clouds',
    caption: 'Himalaya / cloud break',
    image: photographyAsset('snowy-valley.jpg'),
  },
  {
    number: '11',
    label: 'A lone figure beside a lake at sunset',
    caption: 'Ladakh / last light',
    image: photographyAsset('lake-at-sunset.jpg'),
  },
  {
    number: '12',
    label: 'An illuminated domed building at night',
    caption: 'Architecture / after dark',
    image: photographyAsset('dome-at-night.jpg'),
  },
  {
    number: '13',
    label: 'A turquoise lake below snow-capped mountains',
    caption: 'Ladakh / alpine lake',
    image: photographyAsset('turquoise-lake.jpg'),
  },
  {
    number: '14',
    label: 'Sunlight falling through an autumn forest',
    caption: 'Forest / afternoon light',
    image: photographyAsset('autumn-forest.jpg'),
  },
];

type Photograph = (typeof photographs)[number];

// Use the same image and caption layout for each larger photo.
function PhotoFrame({
  photograph,
  className,
}: {
  photograph: Photograph;
  className: string;
}) {
  return (
    <figure className={`photo-frame ${className}`}>
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
  );
}

function Photography() {
  return (
    <div className="page-shell photography-page">
      <header className="page-intro photo-intro">
        <p className="eyebrow">PHOTOGRAPHY / 14</p>

        <h1>
          Looking
          <br />
          <span>closer.</span>
        </h1>

        <p className="page-deck">
          A set of visual studies in landscape, architecture, and light,
          collected across India and the Himalaya.
        </p>

        <div className="photo-intro-foot">
          <span>PLACE / LIGHT / STRUCTURE</span>
          <span>14 PHOTOGRAPHS ↓</span>
        </div>
      </header>

      <section className="photo-archive">
        <SectionHeading
          index="01"
          label="Visual archive"
          note="One grid / fourteen photographs"
        />

        <div className="bento-grid">
          <PhotoFrame
            photograph={photographs[0]}
            className="photo-feature"
          />

          <div
            className="photo-strip"
            aria-label="Three smaller photo studies"
          >
            {photographs.slice(1, 4).map((photograph) => (
              <figure
                className="photo-strip-frame"
                key={photograph.number}
              >
                <img
                  src={photograph.image}
                  alt={photograph.label}
                  loading="lazy"
                />
                <span className="photo-strip-number">
                  {photograph.number}
                </span>
              </figure>
            ))}
          </div>

          <PhotoFrame
            photograph={photographs[4]}
            className="photo-column-one-foot"
          />

          <PhotoFrame
            photograph={photographs[5]}
            className="photo-column-two-main"
          />

          <figure className="photo-frame photo-stat-card">
            <img
              src={photographs[6].image}
              alt={photographs[6].label}
              loading="lazy"
            />

            <figcaption>
              <span>14</span>
              <span>Photographs / India &amp; Himalaya</span>
            </figcaption>
          </figure>

          <PhotoFrame
            photograph={photographs[7]}
            className="photo-column-three-top"
          />

          <PhotoFrame
            photograph={photographs[8]}
            className="photo-column-three-foot"
          />

          <aside className="photo-callout">
            <p className="photo-callout-kicker">FIELD NOTES / 01</p>
            <h2>Collected along the way.</h2>

            <div
              className="photo-callout-portraits"
              aria-label="More photographs from the collection"
            >
              {photographs.slice(9, 13).map((photograph) => (
                <img
                  key={photograph.number}
                  src={photograph.image}
                  alt={photograph.label}
                  loading="lazy"
                />
              ))}
            </div>

            <p className="photo-callout-foot">
              INDIA / HIMALAYA / ELSEWHERE
            </p>
          </aside>

          <PhotoFrame
            photograph={photographs[13]}
            className="photo-column-four-foot"
          />
        </div>
      </section>
    </div>
  );
}

export default Photography;