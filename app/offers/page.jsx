'use client';

import Link from 'next/link';

export default function OffersPage() {
  const packages = [
    {
      id: 'winter-escape',
      title: 'Winter Snowfall & Wazwan Getaway',
      subtitle: '3 Nights / 4 Days Alpine Retreat',
      price: '₹19,999',
      pricePer: 'for 2 guests (All-Inclusive)',
      badge: 'Winter Special (Nov–Feb)',
      image: '/images/cottage-view-1.jpg',
      description: 'Experience the magic of fresh Himalayan snowfall in Lidroo with seamless heating, slow-simmered Wazwan feasts, and chauffeured convenience.',
      inclusions: [
        '3 Nights accommodation in Mountain View Suite',
        'Daily authentic Kashmiri Breakfast & 4-Course Wazwan Dinner',
        'Continuous room heating with dual thermal bed warmers',
        'Complimentary roundtrip airport transfer from Srinagar (SXR)',
        'Unlimited hot Saffron Kehwa served beside the cedar fire'
      ]
    },
    {
      id: 'honeymoon-pines',
      title: 'Honeymoon Among the Pines',
      subtitle: 'Romantic Mountain Escape for Two',
      price: '₹24,999',
      pricePer: '3 Nights Couple Package',
      badge: 'Romantic Retreat',
      image: '/images/cottage-balcony.jpg',
      description: 'An intimate hideaway designed for newlyweds. Enjoy quiet mountain dawns, private valley balcony breakfasts, and memorable Pahalgam meadow walks.',
      inclusions: [
        '3 Nights in Valley View Suite with private scenic balcony',
        'Candlelit lawn dining experience under starry Himalayan skies',
        'Guided pony ride for two to Baisaran ("Mini Switzerland")',
        'Fresh almond & saffron kehwa welcome ritual',
        'Late check-out until 02:00 PM (subject to availability)'
      ]
    },
    {
      id: 'extended-stay',
      title: 'Lidder Valley Long Stay & Workation',
      subtitle: '7+ Nights Remote Work & Wellness',
      price: '₹34,999',
      pricePer: 'per week (25% Savings Included)',
      badge: 'Extended Stay (7+ Nights)',
      image: '/images/living-lounge.jpg',
      description: 'Trade city traffic for rushing river melodies. High-speed optical fiber internet, serene cedar work corners, and nutritious home-style meals.',
      inclusions: [
        '7 Nights in spacious Garden Suite or Valley View Suite',
        'High-speed fiber WiFi with power backup guarantee',
        'Daily wholesome Kashmiri & North Indian breakfast + dinner',
        'Weekly laundry and daily housekeeping service',
        'Quiet hours and peaceful pine lawn seating for focused work'
      ]
    }
  ];

  return (
    <>
      {/* Header Banner */}
      <section
        className="page-header-banner"
        style={{ backgroundImage: "url('/images/facade-main.jpg')" }}
      >
        <div className="hero-overlay" />
        <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '0 20px' }}>
          <span className="section-tag" style={{ color: 'var(--color-accent)' }}>Exclusive Mountain Getaways</span>
          <h1 className="figma-title" style={{ color: '#FFFFFF', fontSize: 'clamp(2.4rem, 4.5vw, 3.4rem)', justifyContent: 'center' }}>
            Offers <span style={{ color: 'rgba(255,255,255,0.85)' }}>& packages</span>
          </h1>
          <p className="section-lead light" style={{ margin: '14px auto 0' }}>
            Curated seasonal escapes combining cedar suites, traditional Wazwan dining, and guided Pahalgam valley excursions.
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="section">
        <div className="container">
          <div className="figma-section-header">
            <div className="figma-heading-wrap">
              <div className="figma-accent-bar" style={{ background: 'var(--color-accent)' }} />
              <h2 className="figma-title">
                Seasonal <span>curations</span>
              </h2>
            </div>
            <a
              href="https://wa.me/917051933349?text=Hi%20Zuri%20Cottage,%20I%20am%20interested%20in%20a%20seasonal%20package"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-terracotta"
              style={{ padding: '10px 22px', fontSize: '0.86rem' }}
            >
              Custom Itinerary Inquiry &rarr;
            </a>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '36px' }}>
            {packages.map((pkg) => (
              <article key={pkg.id} className="figma-card" style={{ background: '#FFFFFF', border: '1px solid var(--color-border)' }}>
                <div style={{ height: '230px', position: 'relative', overflow: 'hidden' }}>
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <span
                    style={{
                      position: 'absolute',
                      top: '14px',
                      left: '14px',
                      background: 'rgba(31, 27, 23, 0.85)',
                      backdropFilter: 'blur(8px)',
                      color: 'var(--color-accent)',
                      fontSize: '0.74rem',
                      fontWeight: 700,
                      padding: '5px 12px',
                      borderRadius: '50px',
                      border: '1px solid var(--color-accent)'
                    }}
                  >
                    {pkg.badge}
                  </span>
                </div>

                <div style={{ padding: '28px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <span style={{ fontSize: '0.82rem', fontFamily: 'var(--font-accent)', fontStyle: 'italic', color: 'var(--color-accent)', fontWeight: 600 }}>
                    {pkg.subtitle}
                  </span>

                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', color: 'var(--color-primary)', margin: '6px 0 10px' }}>
                    {pkg.title}
                  </h3>

                  <div style={{ marginBottom: '16px' }}>
                    <span style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-accent)' }}>{pkg.price}</span>{' '}
                    <span style={{ fontSize: '0.84rem', color: 'var(--color-text-muted)' }}>{pkg.pricePer}</span>
                  </div>

                  <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', marginBottom: '20px', lineHeight: '1.6' }}>
                    {pkg.description}
                  </p>

                  <div style={{ marginBottom: '24px', flexGrow: 1 }}>
                    <h4 style={{ fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-text-muted)', marginBottom: '10px' }}>
                      Package Inclusions:
                    </h4>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.86rem', color: 'var(--color-text-secondary)' }}>
                      {pkg.inclusions.map((inc, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                          <span style={{ color: 'var(--color-accent)', fontWeight: 700 }}>✓</span>
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div style={{ paddingTop: '16px', borderTop: '1px solid var(--color-border)', display: 'flex', gap: '12px' }}>
                    <Link
                      href={`/booking?package=${pkg.id}`}
                      className="btn btn-terracotta"
                      style={{ flexGrow: 1, padding: '10px 16px', fontSize: '0.86rem', justifyContent: 'center' }}
                    >
                      Book Package
                    </Link>
                    <a
                      href={`https://wa.me/917051933349?text=Hi%20Zuri%20Cottage,%20I%20would%20like%20to%20reserve%20the%20${encodeURIComponent(pkg.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-whatsapp"
                      style={{ padding: '10px 16px', fontSize: '0.86rem', justifyContent: 'center' }}
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Terms & Policies Note */}
      <section className="section" style={{ background: 'var(--color-surface-sand)', paddingTop: '56px', paddingBottom: '56px' }}>
        <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
          <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', marginBottom: '10px' }}>
            Booking Terms & Flexible Rescheduling
          </h3>
          <p style={{ fontSize: '0.92rem', color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
            All packages require advance reservation to guarantee chauffeur and kitchen scheduling. Free date change allowed up to 7 days prior to check-in. Custom honeymoon decor and private bonfire evenings can be coordinated directly with our resident host.
          </p>
        </div>
      </section>
    </>
  );
}
