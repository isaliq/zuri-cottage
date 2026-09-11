'use client';

export default function ZuriLogo({ variant = 'light', size = 'default', showSubtitle = false }) {
  // variant: 'light' (white text/icon for dark backgrounds) or 'dark' (charcoal-brown for light backgrounds)
  const isLight = variant === 'light';
  const primaryColor = isLight ? '#FFFFFF' : '#2B2521';
  const accentColor = isLight ? '#EFE7D8' : '#B5654A';

  const isNavbar = size === 'navbar';
  const isCompact = size === 'compact';

  let iconSize = 30;
  let wordmarkSize = '1.35rem';
  let gap = '10px';

  if (isNavbar) {
    iconSize = 24;
    wordmarkSize = '1.18rem';
    gap = '9px';
  } else if (isCompact) {
    iconSize = 26;
    wordmarkSize = '1.22rem';
    gap = '10px';
  } else {
    iconSize = 34;
    wordmarkSize = '1.5rem';
    gap = '12px';
  }

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: gap,
        textDecoration: 'none',
        userSelect: 'none',
      }}
    >
      {/* Minimalist Line-Art Icon: Cottage Roof Silhouette & Pine Needle / Leaf */}
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ flexShrink: 0 }}
        aria-hidden="true"
      >
        {/* Cottage Roof Silhouette */}
        <path
          d="M4 19L18 6L32 19"
          stroke={primaryColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Subtle Chimney */}
        <path
          d="M24 11.5V8H27V14"
          stroke={primaryColor}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Pine / Leaf Sprout inside roof ridge */}
        <path
          d="M18 13V26"
          stroke={accentColor}
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M18 17L14 20"
          stroke={accentColor}
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M18 17L22 20"
          stroke={accentColor}
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M18 21L15 24"
          stroke={accentColor}
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M18 21L21 24"
          stroke={accentColor}
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>

      {/* Refined Serif Wordmark: "Zuri Cottage" */}
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '5px' }}>
          <span
            style={{
              fontFamily: 'var(--font-heading, "Playfair Display", Georgia, serif)',
              fontSize: wordmarkSize,
              fontWeight: 600,
              letterSpacing: '0.01em',
              color: primaryColor,
            }}
          >
            Zuri Cottage
          </span>
        </div>

        {showSubtitle && (
          <span
            style={{
              fontFamily: 'var(--font-sans, "Plus Jakarta Sans", sans-serif)',
              fontSize: '0.64rem',
              fontWeight: 500,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: isLight ? 'rgba(255, 255, 255, 0.7)' : '#7A726E',
              marginTop: '4px',
            }}
          >
            Pahalgam • Kashmir
          </span>
        )}
      </div>
    </div>
  );
}
