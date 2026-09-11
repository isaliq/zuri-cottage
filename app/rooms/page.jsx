'use client';

import { useState } from 'react';
import Link from 'next/link';
import RoomCard from '../../components/RoomCard';

export default function RoomsPage() {
  const [selectedRoom, setSelectedRoom] = useState(null);

  const rooms = [
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
      description: 'An intimate alpine sanctuary on the upper level, offering sweeping views of pine-clad mountain ridges and clear Himalayan skies. Handcrafted wooden finishes and traditional Kashmiri blankets create a deeply calming sanctuary.',
      amenities: ['Free High-Speed WiFi', 'Balcony Access', 'Room Heater & Electric Blankets', 'Flat-Screen TV', 'Private Bathroom with 24h Hot Geyser', 'Garden View'],
      houseRules: [
        'Check-in: 02:00 PM | Check-out: 11:00 AM',
        'Valid Government ID required for all adult guests',
        'Smoking allowed in designated outdoor garden areas only',
        'Pets are not permitted'
      ]
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
      description: 'Spacious and flooded with soft mountain daylight, this room opens onto a private wooden balcony framing the Lidder river valley. Ideal for couples seeking panoramic views or small families traveling together.',
      amenities: ['Private Mountain Balcony', 'High-Speed WiFi', 'Dual Heating & Heated Bedding', 'Smart TV', 'Spacious Private Bathroom', 'Luggage Area'],
      houseRules: [
        'Check-in: 02:00 PM | Check-out: 11:00 AM',
        'Extra mattress available upon request (nominal charge)',
        'Outside food permitted',
        'Quiet hours after 10:30 PM to preserve valley serenity'
      ]
    },
    {
      id: 'garden',
      title: 'Garden Suite',
      price: 5600,
      size: '280 sq.ft (26 m²)',
      bed: '1 King Bed + Living Lounge',
      guests: 4,
      badge: 'Direct Garden Access',
      image: '/images/cottage-garden.jpg',
      gallery: [
        '/images/cottage-garden.jpg',
        '/images/living-lounge.jpg',
        '/images/deluxe-room-6.jpg',
        '/images/cottage-front.jpg'
      ],
      description: 'Located on the ground floor with direct step-out access to our landscaped green lawns and seasonal flowers. Features a dedicated sitting area, warm cedar wood trim, and immediate proximity to the dining hall.',
      amenities: ['Direct Garden Access', 'Separate Living Area', 'High-Speed WiFi', 'Room Heater', 'Modern Bath with Shower Gel & Towels', 'Tea/Coffee Service'],
      houseRules: [
        'Check-in: 02:00 PM | Check-out: 11:00 AM',
        'Direct lawn access for early morning walks & tea',
        'Government ID verification upon check-in',
        'Alcohol consumption not allowed within premises'
      ]
    },
    {
      id: 'cottage',
      title: 'Entire Cottage (7 Suites Buyout)',
      price: 24000,
      size: 'Entire 2-Level Property',
      bed: '7 Suites (Multiple Beds)',
      guests: 18,
      badge: 'Exclusive Private Buyout',
      image: '/images/facade-main.jpg',
      gallery: [
        '/images/facade-main.jpg',
        '/images/cottage-exterior-lawn.jpg',
        '/images/cottage-hall.jpg',
        '/images/living-lounge.jpg'
      ],
      description: 'The ultimate luxury for family reunions, wedding parties, or executive retreats. Full exclusive buyout of all 7 suites, private living lounge, exclusive lawn firepit, and dedicated private chef services.',
      amenities: ['Exclusive Property Access', 'Private Chef & Dining Staff', 'Private Lawns & Firepit', '24/7 Dedicated Caretaker', 'Exclusive Parking', 'Tailored Itineraries'],
      houseRules: [
        'Check-in: 02:00 PM | Check-out: 11:00 AM',
        'Advance reservation deposit required',
        'Custom banquet & BBQ menu tailored to your preferences',
        'Events and celebrations permitted'
      ]
    }
  ];

  return (
    <>
      {/* Header Banner */}
      <section
        className="page-header-banner"
        style={{ backgroundImage: "url('/images/deluxe-room-2.jpg')" }}
      >
        <div className="hero-overlay" />
        <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '0 20px' }}>
          <span className="section-tag" style={{ color: 'var(--color-accent)' }}>Accommodations</span>
          <h1 className="figma-title" style={{ color: '#FFFFFF', fontSize: 'clamp(2.4rem, 4.5vw, 3.4rem)', justifyContent: 'center' }}>
            Rooms <span style={{ color: 'rgba(255,255,255,0.85)' }}>& suites</span>
          </h1>
          <p className="section-lead light" style={{ margin: '14px auto 0' }}>
            Handcrafted with warm Himalayan cedar wood, framed by Lidder river murmurs, and prepared for your deep restorative sleep.
          </p>
        </div>
      </section>

      {/* Category Filter & Rooms Grid */}
      <section className="section">
        <div className="container">
          {/* Figma Section Header */}
          <div className="figma-section-header">
            <div className="figma-heading-wrap">
              <div className="figma-accent-bar" />
              <h2 className="figma-title">
                Available <span>suites</span>
              </h2>
            </div>
            <Link href="/booking" className="btn btn-terracotta" style={{ padding: '10px 22px', fontSize: '0.86rem' }}>
              Check Real-Time Dates &rarr;
            </Link>
          </div>

          {/* Rooms Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
            {rooms.map((room) => (
              <RoomCard
                key={room.id}
                room={room}
                onOpenDetails={(r) => setSelectedRoom(r)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Room Detail Modal */}
      {selectedRoom && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1500,
            background: 'rgba(20, 14, 12, 0.85)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px'
          }}
          onClick={() => setSelectedRoom(null)}
        >
          <div
            style={{
              background: '#FFFFFF',
              borderRadius: 'var(--radius-card)',
              maxWidth: '740px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              border: '1.5px solid var(--color-accent)',
              boxShadow: 'var(--shadow-lift)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div style={{ position: 'relative', height: '280px', overflow: 'hidden' }}>
              <img
                src={selectedRoom.image}
                alt={selectedRoom.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <button
                onClick={() => setSelectedRoom(null)}
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'rgba(35,24,21,0.7)',
                  color: '#FFFFFF',
                  fontSize: '1.4rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                &times;
              </button>
              <div
                style={{
                  position: 'absolute',
                  bottom: '20px',
                  left: '24px',
                  background: 'rgba(35,24,21,0.85)',
                  padding: '8px 18px',
                  borderRadius: 'var(--radius-pill)',
                  color: 'var(--color-accent)',
                  fontWeight: 700,
                  fontSize: '0.95rem'
                }}
              >
                ₹{selectedRoom.price.toLocaleString('en-IN')} / night
              </div>
            </div>

            {/* Modal Content */}
            <div style={{ padding: '32px' }}>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', color: 'var(--color-primary)', marginBottom: '8px' }}>
                {selectedRoom.title}
              </h2>
              <div style={{ display: 'flex', gap: '16px', color: 'var(--color-text-muted)', fontSize: '0.88rem', marginBottom: '16px' }}>
                <span>{selectedRoom.size}</span>
                <span>•</span>
                <span>{selectedRoom.bed}</span>
                <span>•</span>
                <span>Up to {selectedRoom.guests} Guests</span>
              </div>

              <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.96rem', lineHeight: '1.65', marginBottom: '24px' }}>
                {selectedRoom.description}
              </p>

              {/* Gallery Thumbnails */}
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', marginBottom: '12px' }}>Suite Gallery</h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px', marginBottom: '24px' }}>
                {selectedRoom.gallery.map((g, i) => (
                  <div key={i} style={{ height: '80px', borderRadius: '10px', overflow: 'hidden' }}>
                    <img src={g} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                ))}
              </div>

              {/* Amenities */}
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', marginBottom: '12px' }}>Included Amenities</h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px', marginBottom: '24px' }}>
                {selectedRoom.amenities.map((a, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: 'var(--color-text-primary)' }}>
                    <span style={{ color: 'var(--color-accent-dark)' }}>✓</span>
                    <span>{a}</span>
                  </div>
                ))}
              </div>

              {/* House Rules */}
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', marginBottom: '12px' }}>Good to Know</h4>
              <ul style={{ listStyle: 'disc', paddingLeft: '20px', color: 'var(--color-text-secondary)', fontSize: '0.88rem', marginBottom: '28px' }}>
                {selectedRoom.houseRules.map((rule, idx) => (
                  <li key={idx} style={{ marginBottom: '6px' }}>{rule}</li>
                ))}
              </ul>

              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <Link
                  href={`/booking?room=${selectedRoom.id}`}
                  className="btn btn-terracotta"
                  style={{ flexGrow: 1 }}
                >
                  Proceed to Reservation
                </Link>
                <a
                  href={`https://wa.me/917051933349?text=Hi%20Zuri%20Cottage%20Pahalgam,%20I%20am%20interested%20in%20the%20${encodeURIComponent(selectedRoom.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                >
                  Inquire on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
