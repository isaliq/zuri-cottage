'use client';

import { useEffect } from 'react';

export default function Lightbox({ images, currentIndex, onClose, onPrev, onNext }) {
  const current = images[currentIndex];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose, onPrev, onNext]);

  if (!current) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 2000,
        background: 'rgba(20, 14, 12, 0.95)',
        backdropFilter: 'blur(16px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
      }}
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        style={{
          position: 'absolute',
          top: '24px',
          right: '28px',
          width: '46px',
          height: '46px',
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.15)',
          color: '#FFFFFF',
          fontSize: '1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '1px solid rgba(229, 169, 60, 0.3)',
          zIndex: 10,
        }}
        aria-label="Close Lightbox"
      >
        &times;
      </button>

      {/* Stage */}
      <div
        style={{
          position: 'relative',
          maxWidth: '92vw',
          maxHeight: '78vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Previous */}
        <button
          onClick={onPrev}
          style={{
            position: 'absolute',
            left: '-64px',
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            background: 'var(--color-primary)',
            color: 'var(--color-accent)',
            border: '1.5px solid var(--color-accent)',
            fontSize: '1.4rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
          aria-label="Previous image"
        >
          &#10094;
        </button>

        {/* Image */}
        <img
          src={current.src}
          alt={current.title}
          style={{
            maxWidth: '100%',
            maxHeight: '75vh',
            borderRadius: '16px',
            objectFit: 'contain',
            boxShadow: '0 20px 60px rgba(0,0,0,0.6)',
            border: '2px solid rgba(229, 169, 60, 0.4)',
          }}
        />

        {/* Next */}
        <button
          onClick={onNext}
          style={{
            position: 'absolute',
            right: '-64px',
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            background: 'var(--color-primary)',
            color: 'var(--color-accent)',
            border: '1.5px solid var(--color-accent)',
            fontSize: '1.4rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
          aria-label="Next image"
        >
          &#10095;
        </button>
      </div>

      {/* Caption & Counter */}
      <div
        style={{
          marginTop: '20px',
          textAlign: 'center',
          color: '#FFFFFF',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', color: 'var(--color-accent)' }}>
          {current.title}
        </h4>
        <p style={{ fontSize: '0.86rem', color: 'rgba(255,255,255,0.7)', marginTop: '4px' }}>
          Photo {currentIndex + 1} of {images.length} • {current.category?.toUpperCase()}
        </p>
      </div>
    </div>
  );
}
