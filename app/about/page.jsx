import Link from 'next/link';

export default function AboutPage() {
  return (
    <>
      {/* Banner */}
      <section
        className="page-header-banner"
        style={{ backgroundImage: "url('/images/cottage-garden.jpg')" }}
      >
        <div className="hero-overlay" />
        <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '0 20px' }}>
          <span className="section-tag" style={{ color: 'var(--color-accent)' }}>Heritage & Heart</span>
          <h1 className="figma-title" style={{ color: '#FFFFFF', fontSize: 'clamp(2.4rem, 4.5vw, 3.4rem)', justifyContent: 'center' }}>
            Our <span>story</span>
          </h1>
          <p className="section-lead light" style={{ margin: '14px auto 0' }}>
            A boutique Himalayan refuge born from a passion for Kashmiri cedar craft, rushing glacial waters, and heartfelt hospitality.
          </p>
        </div>
      </section>

      {/* 1. OUR STORY */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '60px', alignItems: 'center' }}>
            <div>
              <div className="figma-heading-wrap" style={{ marginBottom: '16px' }}>
                <div className="figma-accent-bar" />
                <h2 className="figma-title">
                  The <span>beginning</span>
                </h2>
              </div>
              <p className="section-lead" style={{ marginBottom: '20px' }}>
                Zuri Cottage was created with a clear aspiration: to provide discerning travelers with a calm, unhurried mountain haven that captures the authentic essence of Kashmir without the sterile atmosphere of large commercial hotels.
              </p>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.96rem', lineHeight: '1.7', marginBottom: '20px' }}>
                Situated in Lidroo, just 3.5 km before Pahalgam main town, the property sits directly adjacent to the Lidder River. Here, the only soundtrack is glacial mountain waters flowing over river stones and the rustling of ancient Himalayan pine needles in the wind.
              </p>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.96rem', lineHeight: '1.7' }}>
                With just 7 private suites, Zuri Cottage remains deeply intimate, ensuring every guest enjoys personalized care from our dedicated on-site team.
              </p>
            </div>

            <div className="luxury-card" style={{ overflow: 'hidden', height: '420px' }}>
              <img
                src="/images/facade-main.jpg"
                alt="Zuri Cottage Exterior"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* FULL-WIDTH PHOTO BREAK */}
      <div style={{ height: '360px', backgroundImage: "url('/images/river-valley-1.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(35,24,21,0.45)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ fontFamily: 'var(--font-accent)', fontStyle: 'italic', fontSize: '2rem', color: '#FFFFFF', letterSpacing: '0.04em', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
            "In the stillness of the valley, time finds its gentle pace."
          </span>
        </div>
      </div>

      {/* 2. KASHMIRI HOSPITALITY & MOUNTAIN LIFESTYLE */}
      <section className="section" style={{ background: '#F4EFEB' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px' }}>
            <div className="luxury-card" style={{ padding: '40px 32px' }}>
              <span className="section-tag">Mehmaan-Nawazi</span>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', marginBottom: '14px', color: 'var(--color-primary)' }}>
                Kashmiri Hospitality
              </h3>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.94rem', lineHeight: '1.7', marginBottom: '16px' }}>
                In Kashmiri culture, welcoming a traveler is regarded as a sacred privilege. From the steaming cup of almond Kehwa handed to you upon arrival to the glowing coal bukhari warming your room, our hospitality is attentive, respectful, and genuine.
              </p>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.94rem', lineHeight: '1.7' }}>
                Our multilingual staff speak English, Hindi, Urdu, and Kashmiri, ready to assist you with local recommendations, horse trekking, and bespoke day tours.
              </p>
            </div>

            <div className="luxury-card" style={{ padding: '40px 32px' }}>
              <span className="section-tag">Valley Harmony</span>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', marginBottom: '14px', color: 'var(--color-primary)' }}>
                The Mountain Lifestyle
              </h3>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.94rem', lineHeight: '1.7', marginBottom: '16px' }}>
                Life at Zuri Cottage flows in tune with nature. Mornings begin with birdsong across the dew-soaked lawns and views of sunlight hitting snow-dusted ridges. Afternoons are spent strolling by the river or reading beside large picture windows.
              </p>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.94rem', lineHeight: '1.7' }}>
                Evenings gather friends and families around the garden firepit, sharing warm Wazwan dishes under a canopy of Himalayan stars.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MEET THE TEAM */}
      <section className="section">
        <div className="container">
          <div className="text-center">
            <span className="section-tag">Dedicated Stewards</span>
            <h2 className="section-title">Meet Your Hosts</h2>
            <p className="section-lead">The caretakers and culinary masters who ensure your Pahalgam holiday is seamless.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '32px', marginTop: '40px' }}>
            <div className="luxury-card" style={{ padding: '32px 24px', textAlign: 'center' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'var(--color-primary)', color: 'var(--color-accent)', margin: '0 auto 16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem' }}>
                👨‍💼
              </div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', marginBottom: '4px' }}>Bashir Ahmad</h4>
              <span style={{ fontSize: '0.82rem', color: 'var(--color-accent-dark)', fontWeight: 600, display: 'block', marginBottom: '10px' }}>General Manager & Concierge</span>
              <p style={{ fontSize: '0.86rem', color: 'var(--color-text-secondary)' }}>
                Lifelong Pahalgam resident with 15+ years managing Himalayan hospitality. Your go-to guide for trail permits, taxi arrangements, and local secrets.
              </p>
            </div>

            <div className="luxury-card" style={{ padding: '32px 24px', textAlign: 'center' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'var(--color-primary)', color: 'var(--color-accent)', margin: '0 auto 16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem' }}>
                👨‍🍳
              </div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', marginBottom: '4px' }}>Ustaad Ghulam Mohiuddin</h4>
              <span style={{ fontSize: '0.82rem', color: 'var(--color-accent-dark)', fontWeight: 600, display: 'block', marginBottom: '10px' }}>Head Wazwan Master Chef</span>
              <p style={{ fontSize: '0.86rem', color: 'var(--color-text-secondary)' }}>
                Trained in the classical Kashmiri Waza tradition, specializing in authentic Rogan Josh, Rista, and charcoal lawn barbeques.
              </p>
            </div>

            <div className="luxury-card" style={{ padding: '32px 24px', textAlign: 'center' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'var(--color-primary)', color: 'var(--color-accent)', margin: '0 auto 16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem' }}>
                🧳
              </div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', marginBottom: '4px' }}>Altaf & Housekeeping Team</h4>
              <span style={{ fontSize: '0.82rem', color: 'var(--color-accent-dark)', fontWeight: 600, display: 'block', marginBottom: '10px' }}>Resident Caretakers</span>
              <p style={{ fontSize: '0.86rem', color: 'var(--color-text-secondary)' }}>
                On-site 24/7 to attend to heating, fresh linens, electric blankets, luggage assistance, and late-night hot tea requests.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. HERITAGE TIMELINE */}
      <section className="section" style={{ background: 'var(--color-primary)', color: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="text-center" style={{ marginBottom: '48px' }}>
            <span className="section-tag" style={{ color: 'var(--color-accent)' }}>The Journey</span>
            <h2 className="section-title light">Milestones of Zuri Cottage</h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--color-accent)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, flexShrink: 0 }}>
                2020
              </div>
              <div>
                <h4 style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-accent)', fontSize: '1.2rem', marginBottom: '4px' }}>Conception & Cedar Wood Craftsmanship</h4>
                <p style={{ fontSize: '0.92rem', color: 'rgba(255,255,255,0.8)', lineHeight: '1.6' }}>
                  The cottage foundation was laid in Lidroo using traditional Kashmiri cedar wood, locally sourced stone masonry, and riverbank landscaping.
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--color-accent)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, flexShrink: 0 }}>
                2022
              </div>
              <div>
                <h4 style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-accent)', fontSize: '1.2rem', marginBottom: '4px' }}>Expansion into 7 Private Suites</h4>
                <p style={{ fontSize: '0.92rem', color: 'rgba(255,255,255,0.8)', lineHeight: '1.6' }}>
                  Upgraded all accommodations to deluxe alpine suites with individual geysers, 24/7 generator backup, and high-speed mountain Wi-Fi.
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--color-accent)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, flexShrink: 0 }}>
                2024
              </div>
              <div>
                <h4 style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-accent)', fontSize: '1.2rem', marginBottom: '4px' }}>Culinary Excellence & Lawn Barbeques</h4>
                <p style={{ fontSize: '0.92rem', color: 'rgba(255,255,255,0.8)', lineHeight: '1.6' }}>
                  Introduced on-site authentic Kashmiri Wazwan dining, evening firepit barbecues, and custom Kolahoi trekking itineraries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
