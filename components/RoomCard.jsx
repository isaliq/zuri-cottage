'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function RoomCard({ room, onOpenDetails }) {
  const images = room.gallery && room.gallery.length > 0 ? room.gallery : [room.image];
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const nextImage = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const toggleBookmark = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsBookmarked(!isBookmarked);
  };

  return (
    <article className="figma-card">
      {/* Card Image Viewport with Figma Overlays */}
      <div className="card-image-box">
        <img
          src={images[currentImgIndex]}
          alt={room.title}
          loading="lazy"
        />

        {/* Wishlist Bookmark Button (Figma top-right bookmark) */}
        <button
          type="button"
          className={`card-bookmark-btn ${isBookmarked ? 'active' : ''}`}
          onClick={toggleBookmark}
          aria-label={isBookmarked ? 'Remove from wishlist' : 'Save to wishlist'}
          title={isBookmarked ? 'Saved to favorites' : 'Save to favorites'}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill={isBookmarked ? 'currentColor' : 'none'}
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
          </svg>
        </button>

        {/* Carousel Pagination Dots (Figma top-center dots) */}
        {images.length > 1 && (
          <div className="card-dots">
            {images.map((_, idx) => (
              <span
                key={idx}
                className={`card-dot ${idx === currentImgIndex ? 'active' : ''}`}
              />
            ))}
          </div>
        )}

        {/* Subtle Next / Prev Controls on Hover */}
        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={prevImage}
              style={{
                position: 'absolute',
                left: '8px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                background: 'rgba(0,0,0,0.4)',
                color: '#FFFFFF',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                opacity: 0.8,
                zIndex: 3
              }}
              aria-label="Previous image"
            >
              &#8249;
            </button>
            <button
              type="button"
              onClick={nextImage}
              style={{
                position: 'absolute',
                right: '8px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                background: 'rgba(0,0,0,0.4)',
                color: '#FFFFFF',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                opacity: 0.8,
                zIndex: 3
              }}
              aria-label="Next image"
            >
              &#8250;
            </button>
          </>
        )}
      </div>

      {/* Card Body */}
      <div style={{ padding: '24px 26px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        {/* Location Pin Row */}
        <div className="card-location-row">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ color: 'var(--color-accent)' }}
          >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <span>Lidroo, Pahalgam • Riverfront</span>
        </div>

        {/* Pricing Display */}
        <div className="card-price-display">
          ₹{room.price.toLocaleString('en-IN')}{' '}
          <span>/ night</span>
        </div>

        {/* Title */}
        <h3 className="card-title-text">{room.title}</h3>

        {/* Meta details */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.84rem', color: '#7E7570', marginBottom: '14px' }}>
          <span>{room.size}</span>
          <span>•</span>
          <span>{room.bed}</span>
          <span>•</span>
          <span>Up to {room.guests} Guests</span>
        </div>

        <p style={{ fontSize: '0.88rem', color: 'var(--color-text-secondary)', marginBottom: '18px', flexGrow: 1, lineHeight: '1.55' }}>
          {room.description}
        </p>

        {/* Action Row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px',
            paddingTop: '16px',
            borderTop: '1px solid var(--color-border)',
          }}
        >
          <Link
            href={`/booking?room=${room.id}`}
            className="btn btn-terracotta"
            style={{
              padding: '10px 20px',
              fontSize: '0.85rem',
              borderRadius: '50px',
              flexGrow: 1,
              justifyContent: 'center',
            }}
          >
            Book Suite
          </Link>

          {onOpenDetails ? (
            <button
              type="button"
              onClick={() => onOpenDetails(room)}
              className="btn btn-outline-walnut"
              style={{
                padding: '10px 18px',
                fontSize: '0.82rem',
                borderRadius: '50px',
              }}
            >
              Details
            </button>
          ) : (
            <Link
              href="/rooms"
              className="btn btn-outline-walnut"
              style={{
                padding: '10px 18px',
                fontSize: '0.82rem',
                borderRadius: '50px',
              }}
            >
              Details
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
