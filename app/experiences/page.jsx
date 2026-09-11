import Link from 'next/link';

export default function ExperiencesPage() {
  const experiences = [
    {
      id: 'horse-riding',
      title: 'Horse Riding to Baisaran Meadow',
      subtitle: '"Mini Switzerland" Pine Ascent',
      image: '/images/cottage-view-1.jpg',
      duration: 'Half Day (3–4 Hours)',
      difficulty: 'Easy–Moderate',
      distance: '6 km from Cottage',
      description: 'Ride sure-footed Kashmiri ponies up winding forested trails to Baisaran, a breathtaking hilltop meadow encircled by dense deodar trees and snow-clad Himalayan ridges.'
    },
    {
      id: 'trout-fishing',
      title: 'Trout Fishing in Lidder River',
      subtitle: 'World-Renowned Glacial Angling',
      image: '/images/river-valley-1.jpg',
      duration: '2 to 3 Hours',
      difficulty: 'Easy',
      distance: 'Directly at Cottage Doorstep',
      description: 'Cast your line into the fast-flowing, crystal-clear glacial currents of the Lidder River right behind Zuri Cottage. Renowned globally for Brown and Rainbow Trout.'
    },
    {
      id: 'trekking',
      title: 'Mountain Trekking to Kolahoi Base',
      subtitle: 'Alpine Wilderness & Glacial Moraines',
      image: '/images/river-valley-2.jpg',
      duration: 'Full Day (6–8 Hours)',
      difficulty: 'Challenging',
      distance: 'Trail starts from Aru (13 km)',
      description: 'Guided trek through pine woods and shepherd hamlets towards the great Kolahoi Glacier, the iconic "Goddess of Light" feeding the Lidder and Jhelum river systems.'
    },
    {
      id: 'aru-valley',
      title: 'Aru Valley & Overa Biosphere',
      subtitle: 'Serene Eco-Hamlet & River Banks',
      image: '/images/cottage-view-2.jpg',
      duration: 'Half to Full Day',
      difficulty: 'Scenic Leisure',
      distance: '13 km from Cottage (~25 mins drive)',
      description: 'A serene hamlet set amidst rolling green hills and traditional wooden houses. Base camp for alpine lake expeditions and an ideal destination for serene family picnics.'
    },
    {
      id: 'betab-valley',
      title: 'Betaab Valley Exploration',
      subtitle: 'Bollywood Meadow & Willow Streams',
      image: '/images/river-valley-3.jpg',
      duration: '3 to 4 Hours',
      difficulty: 'Easy Walking',
      distance: '8 km from Cottage (~15 mins drive)',
      description: 'Named after the legendary film, this picturesque valley boasts lush meadows, willow trees, and mountain waters framed by dramatic snow-capped peaks.'
    },
    {
      id: 'baisaran-meadow',
      title: 'Baisaran Hilltop Picnic & Zorbing',
      subtitle: 'Highland Lawn & Alpine Views',
      image: '/images/cottage-garden.jpg',
      duration: '4 Hours',
      difficulty: 'Moderate',
      distance: '6 km via Pony or Hike',
      description: 'Relax on boundless grassy slopes overlooking the entire Pahalgam valley. Enjoy zorbing, traditional Kashmiri dress photoshoots, and warm tea under pine shades.'
    }
  ];

  return (
    <>
      {/* Banner */}
      <section
        className="page-header-banner"
        style={{ backgroundImage: "url('/images/river-valley-2.jpg')" }}
      >
        <div className="hero-overlay" />
        <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '0 20px' }}>
          <span className="section-tag" style={{ color: 'var(--color-accent)' }}>Valley of Shepherds</span>
          <h1 className="figma-title" style={{ color: '#FFFFFF', fontSize: 'clamp(2.4rem, 4.5vw, 3.4rem)', justifyContent: 'center' }}>
            Pahalgam <span>experiences</span>
          </h1>
          <p className="section-lead light" style={{ margin: '14px auto 0' }}>
            Immerse yourself in crystal glacial rivers, fragrant pine trails, and high-altitude Himalayan explorations.
          </p>
        </div>
      </section>

      {/* Experiences Grid */}
      <section className="section">
        <div className="container">
          <div className="figma-section-header">
            <div className="figma-heading-wrap">
              <div className="figma-accent-bar" />
              <h2 className="figma-title">
                Curated <span>adventures</span>
              </h2>
            </div>
            <Link href="/booking" className="btn btn-terracotta" style={{ padding: '10px 22px', fontSize: '0.86rem' }}>
              Plan Excursion Stay &rarr;
            </Link>
          </div>
          <p style={{ color: 'var(--color-text-secondary)', maxWidth: '640px', marginTop: '-14px', marginBottom: '40px', fontSize: '1.02rem', lineHeight: '1.65' }}>
            Our concierge arranges verified local pony guides, certified mountain escorts, Lidder trout fishing permits, and private chauffeured day trips.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '36px' }}>
            {experiences.map((exp) => (
              <article key={exp.id} className="luxury-card" style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ height: '240px', position: 'relative', overflow: 'hidden' }}>
                  <img
                    src={exp.image}
                    alt={exp.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform var(--transition-slow)' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '16px',
                      left: '16px',
                      background: 'rgba(35,24,21,0.85)',
                      backdropFilter: 'blur(8px)',
                      color: 'var(--color-accent)',
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      padding: '6px 14px',
                      borderRadius: 'var(--radius-pill)',
                      border: '1px solid var(--color-accent)'
                    }}
                  >
                    {exp.distance}
                  </div>
                </div>

                <div style={{ padding: '28px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <span style={{ fontSize: '0.82rem', fontFamily: 'var(--font-accent)', fontStyle: 'italic', color: 'var(--color-accent-dark)', fontWeight: 600 }}>
                    {exp.subtitle}
                  </span>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', color: 'var(--color-primary)', margin: '4px 0 12px' }}>
                    {exp.title}
                  </h3>

                  <div style={{ display: 'flex', gap: '14px', fontSize: '0.82rem', color: 'var(--color-text-muted)', marginBottom: '14px', paddingBottom: '12px', borderBottom: '1px solid var(--color-border)' }}>
                    <span>⏱️ {exp.duration}</span>
                    <span>•</span>
                    <span>🧗 {exp.difficulty}</span>
                  </div>

                  <p style={{ fontSize: '0.92rem', color: 'var(--color-text-secondary)', lineHeight: '1.6', marginBottom: '24px', flexGrow: 1 }}>
                    {exp.description}
                  </p>

                  <a
                    href={`https://wa.me/917051933349?text=Hi%20Zuri%20Cottage%20Pahalgam,%20I%20would%20like%20to%20arrange%20the%20${encodeURIComponent(exp.title)}%20experience`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-walnut"
                    style={{ width: '100%', textAlign: 'center' }}
                  >
                    Arrange with Concierge &rarr;
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '56px', background: '#F4EFEB', padding: '36px', borderRadius: 'var(--radius-card)', border: '1px solid var(--color-border)' }}>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', color: 'var(--color-primary)', marginBottom: '8px' }}>
              Looking for a Customized Kashmir Itinerary?
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)', maxWidth: '620px', margin: '0 auto 20px' }}>
              We also arrange day trips to Chandanwari snow sledging, the historic Mamleshwar Temple, and Pahalgam 18-hole Golf Course.
            </p>
            <Link href="/contact" className="btn btn-terracotta">
              Contact Concierge Desk
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
