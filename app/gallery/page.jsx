'use client';

import { useState } from 'react';
import Lightbox from '../../components/Lightbox';

export default function GalleryPage() {
  const [selectedCat, setSelectedCat] = useState('all');
  const [lightboxIdx, setLightboxIdx] = useState(null);

  const galleryItems = [
    { src: '/images/facade-main.jpg', category: 'cottage', title: 'Cottage Facade with Himalayan Peaks', tag: 'Cottage' },
    { src: '/images/deluxe-room-1.jpg', category: 'rooms', title: 'Deluxe Room Mountain View', tag: 'Rooms' },
    { src: '/images/river-valley-1.jpg', category: 'mountain-views', title: 'Rushing Lidder River Behind Cottage', tag: 'Mountain Views' },
    { src: '/images/cottage-garden.jpg', category: 'garden', title: 'Lush Front Garden with Pine Backdrops', tag: 'Garden' },
    { src: '/images/cottage-hall.jpg', category: 'restaurant', title: 'Cottage Dining Hall & Reception', tag: 'Restaurant' },
    { src: '/images/deluxe-room-2.jpg', category: 'rooms', title: 'Cedar Wood Master Bedroom', tag: 'Rooms' },
    { src: '/images/river-valley-2.jpg', category: 'sunrise', title: 'Morning Light over Glacial Currents', tag: 'Sunrise' },
    { src: '/images/cottage-exterior-lawn.jpg', category: 'cottage', title: 'Cottage Exterior & Front Lawn', tag: 'Cottage' },
    { src: '/images/bathroom-1.jpg', category: 'rooms', title: 'Attached Modern Private Bathroom', tag: 'Rooms' },
    { src: '/images/deluxe-room-3.jpg', category: 'rooms', title: 'Cozy Himalayan Winter Bedding', tag: 'Rooms' },
    { src: '/images/river-valley-3.jpg', category: 'mountain-views', title: 'Panoramic Valley View of Pahalgam', tag: 'Mountain Views' },
    { src: '/images/cottage-balcony.jpg', category: 'mountain-views', title: 'Balcony Overlooking Snow-Capped Ridges', tag: 'Mountain Views' },
    { src: '/images/deluxe-room-4.jpg', category: 'rooms', title: 'Valley Facing Panoramic Bedroom Window', tag: 'Rooms' },
    { src: '/images/living-lounge.jpg', category: 'cottage', title: 'Warm Alpine Living Lounge', tag: 'Cottage' },
    { src: '/images/cottage-front.jpg', category: 'cottage', title: 'Stone & Wood Entrance Steps', tag: 'Cottage' },
    { src: '/images/deluxe-room-5.jpg', category: 'rooms', title: 'Bedroom Seating & Ambient Reading Corner', tag: 'Rooms' },
    { src: '/images/cottage-view-1.jpg', category: 'snow-season', title: 'Snow-Dusted Hills in Lidroo Valley', tag: 'Snow Season' },
    { src: '/images/bathroom-2.jpg', category: 'rooms', title: 'Modern Clean Bath with Geyser', tag: 'Rooms' },
    { src: '/images/cottage-side.jpg', category: 'cottage', title: 'Architectural Wood Craftsmanship', tag: 'Cottage' },
    { src: '/images/cottage-view-2.jpg', category: 'snow-season', title: 'Winter Pine Forests of Pahalgam', tag: 'Snow Season' },
    { src: '/images/deluxe-room-6.jpg', category: 'sunrise', title: 'Sunrise Glow in Pine Bedroom', tag: 'Sunrise' },
  ];

  const filteredItems = selectedCat === 'all'
    ? galleryItems
    : galleryItems.filter((item) => item.category === selectedCat);

  return (
    <>
      {/* Banner */}
      <section
        className="page-header-banner"
        style={{ backgroundImage: "url('/images/facade-main.jpg')" }}
      >
        <div className="hero-overlay" />
        <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '0 20px' }}>
          <span className="section-tag" style={{ color: 'var(--color-accent)' }}>Visual Sanctuary</span>
          <h1 className="figma-title" style={{ color: '#FFFFFF', fontSize: 'clamp(2.4rem, 4.5vw, 3.4rem)', justifyContent: 'center' }}>
            Photo <span>gallery</span>
          </h1>
          <p className="section-lead light" style={{ margin: '14px auto 0' }}>
            Explore 100% authentic captures from our 7 cedar suites, dining lounge, and Lidder riverfront grounds.
          </p>
        </div>
      </section>

      {/* Filter Tabs & Masonry Grid */}
      <section className="section">
        <div className="container">
          {/* Category Filter Tabs */}
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '44px' }}>
            {[
              { id: 'all', label: 'All Photos' },
              { id: 'cottage', label: 'Cottage & Grounds' },
              { id: 'rooms', label: 'Suites & Baths' },
              { id: 'restaurant', label: 'Dining Hall' },
              { id: 'mountain-views', label: 'Mountain Views' },
              { id: 'snow-season', label: 'Snow Season' },
              { id: 'garden', label: 'Garden' },
              { id: 'sunrise', label: 'Sunrise' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCat(cat.id)}
                className={`btn ${selectedCat === cat.id ? 'btn-terracotta' : 'btn-outline-walnut'}`}
                style={{ padding: '9px 20px', fontSize: '0.85rem' }}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Masonry Layout */}
          <div className="gallery-masonry-grid">
            {filteredItems.map((item, idx) => (
              <div
                key={idx}
                className="gallery-masonry-item"
                onClick={() => setLightboxIdx(idx)}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                />
                <div className="gallery-overlay-badge">
                  <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-accent)', fontWeight: 700 }}>
                    {item.tag}
                  </span>
                  <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', color: '#FFFFFF', marginTop: '4px' }}>
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIdx !== null && (
        <Lightbox
          images={filteredItems}
          currentIndex={lightboxIdx}
          onClose={() => setLightboxIdx(null)}
          onPrev={() => setLightboxIdx((lightboxIdx - 1 + filteredItems.length) % filteredItems.length)}
          onNext={() => setLightboxIdx((lightboxIdx + 1) % filteredItems.length)}
        />
      )}
    </>
  );
}
