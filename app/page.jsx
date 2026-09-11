'use client';

import { useState } from 'react';
import Link from 'next/link';
import WeatherWidget from '../components/WeatherWidget';
import BookingWidget from '../components/BookingWidget';
import RoomCard from '../components/RoomCard';

export default function HomePage() {
  const [heroIndex, setHeroIndex] = useState(0);
  const heroImages = [
    '/images/facade-main.jpg',
    '/images/cottage-exterior-lawn.jpg',
    '/images/cottage-view-1.jpg'
  ];

  const nextHero = () => {
    setHeroIndex((prev) => (prev + 1) % heroImages.length);
  };

  const prevHero = () => {
    setHeroIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const featuredRooms = [
    {
      id: 'double',
      title: 'Double Room with Mountain View',
      price: 3500,
      size: '196 sq.ft (18 m²)',
      bed: '1 King Double Bed',
      guests: 3,
      badge: 'Mountain View',
      image: '/images/deluxe-room-1.jpg',
      gallery: [
        '/images/deluxe-room-1.jpg',
        '/images/deluxe-room-2.jpg',
        '/images/deluxe-room-3.jpg',
        '/images/bathroom-1.jpg'
      ],
      description: 'Upper-level sanctuary with panoramic pine views, warm Himalayan blankets, cedar interiors, and attached modern bathroom.',
      amenities: ['WiFi', 'Balcony Access', 'Heater', 'Hot Water', 'Mountain View', 'Room Service']
    },
    {
      id: 'valley',
      title: 'Valley View Room',
      price: 4800,
      size: '240 sq.ft (22 m²)',
      bed: '1 King Bed + Daybed',
      guests: 4,
      badge: 'Balcony & River View',
      image: '/images/deluxe-room-4.jpg',
      gallery: [
        '/images/deluxe-room-4.jpg',
        '/images/deluxe-room-5.jpg',
        '/images/cottage-balcony.jpg',
        '/images/bathroom-2.jpg'
      ],
      description: 'Generously proportioned suite with private valley balcony, morning mist views, plush seating lounge, and 24/7 hot water.',
      amenities: ['Private Balcony', 'WiFi', 'Heater', 'Private Bath', 'Valley View', 'Electric Blankets']
    },
    {
      id: 'garden',
      title: 'Garden Suite',
      price: 5600,
      size: '280 sq.ft (26 m²)',
      bed: '1 King Bed + Living Area',
      guests: 4,
      badge: 'Direct Garden Access',
      image: '/images/cottage-garden.jpg',
      gallery: [
        '/images/cottage-garden.jpg',
        '/images/living-lounge.jpg',
        '/images/deluxe-room-6.jpg',
        '/images/cottage-front.jpg'
      ],
      description: 'Ground level suite opening directly onto verdant front lawns and mountain vistas. Ideal for families and garden lovers.',
      amenities: ['Garden Access', 'Living Room', 'WiFi', 'Heater', 'Large TV', 'Private Bath']
    }
  ];

  const amenitiesList = [
    {
      title: 'Kashmiri Wazwan',
      desc: 'Authentic 7-Course Dining',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
          <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
          <line x1="6" y1="1" x2="6" y2="4" />
          <line x1="10" y1="1" x2="10" y2="4" />
          <line x1="14" y1="1" x2="14" y2="4" />
        </svg>
      )
    },
    {
      title: 'Lidder Riverfront',
      desc: 'Trout Fishing at Doorstep',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M2 12c3-2 6-2 9 0s6 2 9 0" />
          <path d="M2 17c3-2 6-2 9 0s6 2 9 0" />
          <path d="M2 7c3-2 6-2 9 0s6 2 9 0" />
        </svg>
      )
    },
    {
      title: 'High-Speed WiFi',
      desc: 'Fiber Connectivity',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 12.55a11 11 0 0 1 14.08 0" />
          <path d="M1.42 9a16 16 0 0 1 21.16 0" />
          <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
          <line x1="12" y1="20" x2="12.01" y2="20" />
        </svg>
      )
    },
    {
      title: 'Dual Heating',
      desc: 'Electric Bed Blankets',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2v20" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      )
    },
    {
      title: '24/7 Generator',
      desc: 'Uninterrupted Power',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      )
    },
    {
      title: 'Lawn & Firepit',
      desc: 'Evening Star Barbeques',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
        </svg>
      )
    }
  ];

  const instagramPhotos = [
    { src: '/images/facade-main.jpg', alt: 'Zuri Cottage exterior facade' },
    { src: '/images/deluxe-room-1.jpg', alt: 'Pine wood alpine bedroom' },
    { src: '/images/river-valley-1.jpg', alt: 'Glacial Lidder river banks' },
    { src: '/images/cottage-garden.jpg', alt: 'Verdant front lawns' },
    { src: '/images/cottage-hall.jpg', alt: 'Traditional Wazwan dining hall' },
    { src: '/images/cottage-view-1.jpg', alt: 'Snow-dusted Himalayan peaks' }
  ];

  return (
    <>
      {/* SECTION 2: FULL-BLEED HERO (With Soft Gradient & One-Line Emotional Headline) */}
      <div className="figma-hero-wrapper">
        <div
          className="figma-hero-card"
          style={{ backgroundImage: `url('${heroImages[heroIndex]}')` }}
        >
          <div className="figma-hero-overlay" />

          {/* Carousel Arrows */}
          <button
            type="button"
            className="hero-carousel-arrow left"
            onClick={prevHero}
            aria-label="Previous property photo"
          >
            &#8249;
          </button>
          <button
            type="button"
            className="hero-carousel-arrow right"
            onClick={nextHero}
            aria-label="Next property photo"
          >
            &#8250;
          </button>

          <div className="figma-hero-content">
            <div className="hero-badge" style={{ marginBottom: '22px' }}>
              <span>Boutique Mountain Retreat • Lidroo, Pahalgam</span>
            </div>

            <h1 className="figma-hero-h1">
              Where the mountains <em style={{ fontStyle: 'italic', fontWeight: 400 }}>hold their breath</em>
            </h1>

            <p className="hero-p">
              An intimate 7-suite sanctuary beside the rushing Lidder River, handcrafted with Himalayan cedar wood, heated comfort, and authentic Kashmiri warmth.
            </p>

            <div className="hero-buttons">
              <Link href="/booking" className="btn btn-terracotta">
                Book Your Stay
              </Link>
              <Link href="/rooms" className="btn btn-outline-light">
                Explore 7 Suites
              </Link>
            </div>

            <WeatherWidget />
          </div>
        </div>
      </div>

      {/* DOCKED BOOKING WIDGET (Overlapping the hero bottom edge) */}
      <BookingWidget />

      {/* SECTION 3: INTRO STRIP (2-3 Sentences of Brand Story + Link) */}
      <section className="intro-story-strip">
        <div className="container" style={{ maxWidth: '880px' }}>
          <span className="section-tag" style={{ color: 'var(--color-accent)' }}>
            A Boutique Mountain Sanctuary
          </span>
          <h2 className="intro-story-lead">
            Nestled in Lidroo beside pine woodlands, Zuri Cottage offers a calm refuge where time slows to the rhythm of the <em>Lidder River</em>.
          </h2>
          <p className="intro-story-p">
            Handcrafted with warm cedar interiors, private mountain-view balconies, and authentic Wazwan dining, our 7 suites provide an elevated cottage experience that feels deeply intimate, peaceful, and tactile.
          </p>
          <Link href="/about" className="intro-story-link">
            <span>Discover our story</span>
            <span>&rarr;</span>
          </Link>
        </div>
      </section>

      {/* SECTION 4: ROOM SHOWCASE (3-Card Grid with Large Photography & Price-From Tag) */}
      <section className="section">
        <div className="container">
          <div className="figma-section-header">
            <div className="figma-heading-wrap">
              <div className="figma-accent-bar" style={{ background: 'var(--color-accent)' }} />
              <h2 className="figma-title">
                Private <span style={{ fontWeight: 400 }}>suites & sanctuaries</span>
              </h2>
            </div>
            <Link href="/rooms" className="figma-view-all">
              <span>View all 7 suites</span>
              <span>&rarr;</span>
            </Link>
          </div>

          <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.02rem', maxWidth: '640px', marginBottom: '36px' }}>
            Generously proportioned rooms detailed with local walnut wood, electric bed blankets, and large windows framing snow-dusted Himalayan pine forests.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
            {featuredRooms.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link href="/rooms" className="btn btn-outline-terracotta" style={{ padding: '12px 32px' }}>
              Explore Entire Cottage Buyout (7 Suites) &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 5: AMENITIES GRID (Clean 6-Column Row: Icon + Short Label) */}
      <section className="section" style={{ background: 'var(--color-surface-sand)', paddingTop: '72px', paddingBottom: '72px' }}>
        <div className="container">
          <div className="text-center">
            <span className="section-tag" style={{ color: 'var(--color-accent)' }}>Crafted For Mountain Living</span>
            <h2 className="section-title" style={{ fontSize: 'clamp(2rem, 3.2vw, 2.6rem)' }}>
              Thoughtful Amenities
            </h2>
            <p className="section-lead" style={{ marginBottom: '16px' }}>
              Every detail is tailored to keep you deeply warm, well-fed, and connected in the high Himalayas.
            </p>
          </div>

          <div className="amenities-row-grid">
            {amenitiesList.map((amenity, idx) => (
              <div key={idx} className="amenity-card-item">
                <div className="amenity-card-icon">{amenity.icon}</div>
                <div>
                  <h4 className="amenity-card-label">{amenity.title}</h4>
                  <span style={{ fontSize: '0.74rem', color: 'var(--color-text-muted)', display: 'block', marginTop: '2px' }}>
                    {amenity.desc}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: FULL-WIDTH IMMERSIVE PHOTO BREAK WITH QUOTE */}
      <div
        className="quote-photo-break"
        style={{ backgroundImage: "url('/images/river-valley-1.jpg')" }}
      >
        <div className="quote-break-content">
          <blockquote className="quote-break-quote">
            "A quiet place to belong. In the stillness of the valley, time finds its gentle pace."
          </blockquote>
          <span className="quote-break-author">Zuri Cottage • Lidroo, Pahalgam</span>
        </div>
      </div>

      {/* SECTION 7: TESTIMONIALS (Curated Guest Reviews & Ratings) */}
      <section className="section">
        <div className="container">
          <div className="figma-section-header" style={{ justifyContent: 'center', textAlign: 'center' }}>
            <div className="figma-heading-wrap">
              <div className="figma-accent-bar" style={{ background: 'var(--color-accent)' }} />
              <h2 className="figma-title">
                Guest <span style={{ fontWeight: 400 }}>impressions</span>
              </h2>
            </div>
          </div>
          <p style={{ textAlign: 'center', color: 'var(--color-text-secondary)', maxWidth: '580px', margin: '-16px auto 44px' }}>
            Authentic reflections from honeymooners, families, and solo explorers who made Zuri Cottage their peaceful mountain home.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '28px' }}>
            <div className="figma-card" style={{ padding: '34px 28px', background: '#FFFFFF', border: '1px solid var(--color-border)' }}>
              <div style={{ color: 'var(--color-accent)', marginBottom: '14px', fontSize: '1.15rem' }}>★★★★★</div>
              <p style={{ fontStyle: 'italic', fontSize: '0.94rem', color: 'var(--color-text-secondary)', marginBottom: '22px', lineHeight: '1.65' }}>
                "The Lidder river sounds right behind the cottage were pure meditation. The caretakers served hot Kehwa whenever we asked and kept the room heaters running smoothly."
              </p>
              <div>
                <strong style={{ display: 'block', color: 'var(--color-primary)' }}>Abhimanyu Singh</strong>
                <span style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)' }}>Couple Stay • Mountain View Suite</span>
              </div>
            </div>

            <div className="figma-card" style={{ padding: '34px 28px', background: '#FFFFFF', border: '1px solid var(--color-border)' }}>
              <div style={{ color: 'var(--color-accent)', marginBottom: '14px', fontSize: '1.15rem' }}>★★★★★</div>
              <p style={{ fontStyle: 'italic', fontSize: '0.94rem', color: 'var(--color-text-secondary)', marginBottom: '22px', lineHeight: '1.65' }}>
                "We loved the boutique scale—only 7 suites meant it felt like our own private Himalayan lodge. The lawn barbecue with pine views was unforgettable."
              </p>
              <div>
                <strong style={{ display: 'block', color: 'var(--color-primary)' }}>Meenakshi Sharma</strong>
                <span style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)' }}>Family Tour • 4 Nights</span>
              </div>
            </div>

            <div className="figma-card" style={{ padding: '34px 28px', background: '#FFFFFF', border: '1px solid var(--color-border)' }}>
              <div style={{ color: 'var(--color-accent)', marginBottom: '14px', fontSize: '1.15rem' }}>★★★★★</div>
              <p style={{ fontStyle: 'italic', fontSize: '0.94rem', color: 'var(--color-text-secondary)', marginBottom: '22px', lineHeight: '1.65' }}>
                "Clean cedar wood rooms, instant geyser hot water, and delicious Wazwan meals. Exactly the calm luxury experience we hoped for in Kashmir."
              </p>
              <div>
                <strong style={{ display: 'block', color: 'var(--color-primary)' }}>Tariq Rashid</strong>
                <span style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)' }}>Solo Explorer • Lidder Valley</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: INSTAGRAM / GALLERY STRIP (6 Square Images with Subtle Hover Zoom) */}
      <section className="section" style={{ paddingTop: '10px', paddingBottom: '70px' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', marginBottom: '20px' }}>
            <div>
              <span className="section-tag" style={{ color: 'var(--color-accent)' }}>Moments from Lidroo</span>
              <h2 className="figma-title" style={{ fontSize: '1.9rem' }}>
                Visual <span style={{ fontWeight: 400 }}>journal</span>
              </h2>
            </div>
            <Link href="/gallery" className="figma-view-all">
              <span>View full photo gallery (21 photos)</span>
              <span>&rarr;</span>
            </Link>
          </div>

          <div className="insta-gallery-strip">
            {instagramPhotos.map((photo, i) => (
              <Link key={i} href="/gallery" className="insta-tile">
                <img src={photo.src} alt={photo.alt} loading="lazy" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: OFFERS / CTA BANNER (Dark Espresso Section, High Contrast Pop, Strong CTA) */}
      <section className="espresso-cta-banner">
        <div className="container" style={{ maxWidth: '820px' }}>
          <span className="section-tag" style={{ color: 'var(--color-accent)' }}>
            Seasonal Mountain Privileges
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2rem, 3.6vw, 3rem)',
              fontWeight: 600,
              color: '#FFFFFF',
              lineHeight: 1.2,
              marginBottom: '16px'
            }}
          >
            Plan Your Winter Escape to <em style={{ fontStyle: 'italic', fontWeight: 400, color: 'var(--color-accent)' }}>Pahalgam</em>
          </h2>
          <p style={{ fontSize: '1.08rem', color: 'rgba(255,255,255,0.85)', lineHeight: '1.65', marginBottom: '36px' }}>
            Enjoy seasonal rates including daily Kashmiri Wazwan dinners, electric blanket comfort, guided Lidder walks, and chauffeured airport transfers from Srinagar.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <Link href="/offers" className="btn btn-terracotta" style={{ padding: '14px 32px' }}>
              Explore Seasonal Packages
            </Link>
            <Link href="/booking" className="btn btn-outline-light" style={{ padding: '14px 28px' }}>
              Check Real-Time Dates
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
