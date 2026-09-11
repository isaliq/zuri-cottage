'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ZuriLogo from './ZuriLogo';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Rooms & Suites', href: '/rooms' },
    { label: 'Dining', href: '/restaurant' },
    { label: 'Experiences', href: '/experiences' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Offers', href: '/offers' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'FAQ', href: '/faq' },
  ];

  return (
    <>
      <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          {/* Refined Serif Wordmark + Line Icon: "Zuri Cottage" */}
          <Link href="/" style={{ textDecoration: 'none' }}>
            <ZuriLogo variant="light" size="navbar" showSubtitle={false} />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="nav-menu" aria-label="Desktop Navigation">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`nav-item-link ${isActive ? 'active' : ''}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Action CTA: Filled Accent Terracotta Button */}
          <div className="nav-actions">
            <Link
              href="/booking"
              className="btn btn-terracotta"
              style={{
                padding: '9px 20px',
                fontSize: '0.84rem',
                letterSpacing: '0.04em',
                borderRadius: '50px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <span>Book Now</span>
              <span style={{ fontSize: '0.72rem' }}>↗</span>
            </Link>
            <button
              className="nav-toggle-btn"
              onClick={() => setMobileOpen(true)}
              aria-label="Open mobile menu"
            >
              &#9776;
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`mobile-drawer-overlay ${mobileOpen ? 'open' : ''}`}
        onClick={() => setMobileOpen(false)}
      />
      <div className={`mobile-drawer ${mobileOpen ? 'open' : ''}`}>
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
            <Link href="/" onClick={() => setMobileOpen(false)} style={{ textDecoration: 'none' }}>
              <ZuriLogo variant="light" size="navbar" showSubtitle={false} />
            </Link>
            <button
              onClick={() => setMobileOpen(false)}
              style={{ color: '#FFFFFF', fontSize: '2rem', padding: '4px' }}
              aria-label="Close menu"
            >
              &times;
            </button>
          </div>

          <nav style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  color: pathname === item.href ? 'var(--color-accent)' : '#FFFFFF',
                  fontSize: '1.05rem',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: pathname === item.href ? 700 : 500,
                  padding: '10px 0',
                  borderBottom: '1px solid rgba(255,255,255,0.08)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <span>{item.label}</span>
                <span style={{ opacity: 0.5, fontSize: '0.85rem' }}>&rarr;</span>
              </Link>
            ))}
          </nav>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', paddingTop: '24px' }}>
          <Link
            href="/booking"
            onClick={() => setMobileOpen(false)}
            className="btn btn-terracotta"
            style={{ width: '100%', justifyContent: 'center' }}
          >
            Book Your Stay
          </Link>
          <a
            href="https://wa.me/917051933349?text=Hi%20Zuri%20Cottage,%20I%20would%20like%20to%20inquire%20about%20a%20stay"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
            style={{ width: '100%', justifyContent: 'center', fontSize: '0.88rem' }}
          >
            WhatsApp Front Desk
          </a>
        </div>
      </div>
    </>
  );
}
