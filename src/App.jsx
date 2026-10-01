import { useState } from 'react'
import './App.css'

const locationData = {
  countries: [
    ['Country 1', 'XX%'],
    ['Country 2', 'XX%'],
    ['Country 3', 'XX%'],
  ],
  states: [
    ['State 1', 'XX%'],
    ['State 2', 'XX%'],
    ['State 3', 'XX%'],
  ],
  cities: [
    ['City 1', 'XX%'],
    ['City 2', 'XX%'],
    ['City 3', 'XX%'],
  ],
}

const contentPillars = [
  {
    title: 'Motherhood & Family',
    description: 'Placeholder Reel description for a future motherhood or family post.',
    metrics: ['XX views', 'XX likes', 'XX saves'],
  },
  {
    title: 'Affordable Mom Style',
    description: 'Placeholder Reel description for a future everyday style post.',
    metrics: ['XX views', 'XX likes', 'XX shares'],
  },
  {
    title: 'Thrifting & Budget Finds',
    description: 'Placeholder Reel description for a future thrift or budget find.',
    metrics: ['XX views', 'XX saves', 'XX shares'],
  },
  {
    title: 'Kids & Family Finds',
    description: 'Placeholder Reel description for a future kid or family find.',
    metrics: ['XX views', 'XX likes', 'XX saves'],
  },
]

const brandPartnerships = [
  {
    id: 'brand-partner-1',
    brand: 'Brand Partner',
    description: 'Placeholder description for a future brand collaboration and the content created for it.',
    metrics: ['XX views', 'XX saves', 'XX shares'],
    contentUrl: null,
  },
  {
    id: 'brand-partner-2',
    brand: 'Brand Partner',
    description: 'Placeholder description for a future brand collaboration and the content created for it.',
    metrics: ['XX views', 'XX saves', 'XX shares'],
    contentUrl: null,
  },
]

const haileeEmail = 'replace-with-hailees-email@example.com'

function ReelPlaceholder({ label, compact = false }) {
  return (
    <div
      className={`reel-placeholder${compact ? ' reel-placeholder--compact' : ''}`}
      role="img"
      aria-label={`${label} video placeholder`}
    >
      <span className="reel-placeholder__play" aria-hidden="true">▶</span>
      <span className="reel-placeholder__label">{label}</span>
    </div>
  )
}

function ContentPillar({ pillar, index, onSelect }) {
  return (
    <article className="content-pillar">
      <header className="content-pillar__header">
        <p className="content-pillar__number">0{index + 1}</p>
        <h3>{pillar.title}</h3>
      </header>

      <div className="content-pillar__featured">
        <button
          className="content-pillar__video-button"
          type="button"
          onClick={() => onSelect(pillar)}
          aria-haspopup="dialog"
          aria-label={`Open ${pillar.title} Reel details`}
        >
          <ReelPlaceholder label="Featured Reel" />
        </button>
      </div>
    </article>
  )
}

function VideoModal({ pillar, onClose }) {
  return (
    <div className="video-modal" role="presentation" onClick={onClose}>
      <div
        className="video-modal__dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="video-modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button className="video-modal__close" type="button" onClick={onClose}>
          Close <span aria-hidden="true">×</span>
        </button>
        <div className="video-modal__video">
          <ReelPlaceholder label="Featured Reel" />
        </div>
        <div className="video-modal__details">
          <p className="video-modal__eyebrow">Content category</p>
          <h3 id="video-modal-title">{pillar.title}</h3>
          <p className="video-modal__description">{pillar.description}</p>
          <ul className="video-modal__metrics" aria-label="Placeholder Reel metrics">
            {pillar.metrics.map((metric) => <li key={metric}>{metric}</li>)}
          </ul>
        </div>
      </div>
    </div>
  )
}

function PartnershipCard({ partnership }) {
  return (
    <article className="partnership-card">
      <div
        className="partnership-card__placeholder"
        role="img"
        aria-label={`${partnership.brand} partnership content placeholder`}
      >
        <span>Reel</span>
      </div>
      <div className="partnership-card__details">
        <p className="partnership-card__eyebrow">Featured collaboration</p>
        <h3>{partnership.brand}</h3>
        <p className="partnership-card__description">{partnership.description}</p>
        <ul className="partnership-card__metrics" aria-label="Placeholder partnership metrics">
          {partnership.metrics.map((metric) => <li key={metric}>{metric}</li>)}
        </ul>
        {partnership.contentUrl && (
          <a href={partnership.contentUrl} target="_blank" rel="noreferrer">
            View Content <span aria-hidden="true">↗</span>
          </a>
        )}
      </div>
    </article>
  )
}

function App() {
  const [locationView, setLocationView] = useState('countries')
  const [selectedPillar, setSelectedPillar] = useState(null)

  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__content">
          <p className="hero__eyebrow">Brand partnerships</p>
          <h1 id="hero-title">@medschoolwife</h1>
          <p className="hero__tagline">
            Real motherhood, affordable style &amp; life with a husband in residency.
          </p>
          <div className="hero__bio">
            <p>
              I’m raising a family while my husband is in residency—so around
              here, life is equal parts kid chaos, quick dinners, and figuring it
              out as we go.
            </p>
            <p>
              I share the thrift finds, affordable outfits, marriage moments, mom
              fails, and family chaos that make up our everyday life.
            </p>
          </div>
          <button className="hero__button" type="button">
            Work With Hailee
          </button>
        </div>

        <div className="hero__media">
          <div
            className="hero__image"
            role="img"
            aria-label="Photo placeholder for Hailee"
          >
            <span>Photo coming soon</span>
          </div>

          <dl className="hero__metrics" aria-label="Creator performance at a glance">
            <div className="hero__metric">
              <dt>Instagram followers</dt>
              <dd>22.6K</dd>
            </div>
            <div className="hero__metric">
              <dt>Average Reel views</dt>
              <dd>—</dd>
            </div>
            <div className="hero__metric">
              <dt>Engagement rate</dt>
              <dd>—</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="audience" aria-labelledby="audience-title">
        <div className="audience__intro">
          <p className="audience__eyebrow">Her community</p>
          <h2 id="audience-title">Audience</h2>
          <div className="audience__stat">
            <p className="audience__label">Gender</p>
            <p className="audience__value">XX% women</p>
          </div>
        </div>

        <div className="audience__chart audience__chart--age">
          <p className="audience__label">Age</p>
          <ul className="audience__bars" aria-label="Age distribution placeholder data">
            <li className="audience__bar-row">
              <span>18–24</span><span className="audience__bar"><i></i></span><b>XX%</b>
            </li>
            <li className="audience__bar-row">
              <span>25–34</span><span className="audience__bar"><i></i></span><b>XX%</b>
            </li>
            <li className="audience__bar-row">
              <span>35+</span><span className="audience__bar"><i></i></span><b>XX%</b>
            </li>
          </ul>
        </div>

        <div className="audience__chart audience__chart--locations">
          <div className="audience__chart-heading">
            <p className="audience__label">Top locations</p>
            <div className="audience__tabs" role="tablist" aria-label="Location views">
              {Object.keys(locationData).map((view) => (
                <button
                  key={view}
                  id={`location-tab-${view}`}
                  type="button"
                  role="tab"
                  aria-selected={locationView === view}
                  aria-controls={`location-panel-${view}`}
                  onClick={() => setLocationView(view)}
                >
                  {view.charAt(0).toUpperCase() + view.slice(1)}
                </button>
              ))}
            </div>
          </div>
          <ul
            id={`location-panel-${locationView}`}
            className="audience__bars"
            role="tabpanel"
            aria-labelledby={`location-tab-${locationView}`}
            aria-label={`Top ${locationView} placeholder data`}
          >
            {locationData[locationView].map(([location, value]) => (
              <li className="audience__bar-row" key={location}>
                <span>{location}</span><span className="audience__bar"><i></i></span><b>{value}</b>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="content-performance" aria-labelledby="content-performance-title">
        <div className="content-performance__heading">
          <p className="content-performance__eyebrow">What she shares</p>
          <h2 id="content-performance-title">Content &amp; Performance</h2>
          <p>Sample Reel placements and placeholders for future performance data.</p>
        </div>

        <div className="content-performance__grid">
          {contentPillars.map((pillar, index) => (
            <ContentPillar
              key={pillar.title}
              pillar={pillar}
              index={index}
              onSelect={setSelectedPillar}
            />
          ))}
        </div>
        <a
          className="content-performance__link"
          href="https://www.instagram.com/medschoolwife/"
          target="_blank"
          rel="noreferrer"
        >
          View more on Instagram <span aria-hidden="true">↗</span>
        </a>
      </section>

      <section className="partnerships" aria-labelledby="partnerships-title">
        <div className="partnerships__heading">
          <p className="partnerships__eyebrow">Collaborations</p>
          <h2 id="partnerships-title">Selected Brand Partnerships</h2>
        </div>
        <div className="partnerships__grid">
          {brandPartnerships.map((partnership) => (
            <PartnershipCard key={partnership.id} partnership={partnership} />
          ))}
        </div>
      </section>

      <section className="work-with-hailee" aria-labelledby="work-with-hailee-title">
        <div className="work-with-hailee__message">
          <p className="work-with-hailee__eyebrow">Let&apos;s work together</p>
          <h2 id="work-with-hailee-title">Work With @medschoolwife</h2>
          <p className="work-with-hailee__closing">
            Interested in working together?<br />
            I’d love to hear what you have in mind.
          </p>
          <p className="work-with-hailee__note">
            Open to sponsored content, product integrations, and ongoing brand partnerships.
          </p>
        </div>
        <div className="work-with-hailee__contact">
          <a className="work-with-hailee__button" href={`mailto:${haileeEmail}`}>
            Get in touch
          </a>
        </div>
      </section>
      {selectedPillar && (
        <VideoModal pillar={selectedPillar} onClose={() => setSelectedPillar(null)} />
      )}
    </main>
  )
}

export default App
