import Link from 'next/link';
import ZuriLogo from './ZuriLogo';

export default function Footer() {
  return (
    <footer className="site-footer" style={{ background: 'var(--color-espresso, #1F1B17)', color: 'rgba(255,255,255,0.75)', borderTop: '2px solid var(--color-accent)' }}>
      <div className="container">
        {/* Statement Header Section */}
        <div
          style={{
            paddingBottom: '48px',
            marginBottom: '48px',
            borderBottom: '1px solid rgba(255,255,255,0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '24px'
          }}
        >
          <div style={{ maxWidth: '640px' }}>
            <span
              style={{
                fontFamily: 'var(--font-accent)',
                fontStyle: 'italic',
                color: 'var(--color-accent)',
                fontSize: '1.15rem',
                display: 'block',
                marginBottom: '8px'
              }}
            >
              Himalayan Hospitality in Lidroo
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.8rem, 3.2vw, 2.5rem)',
                fontWeight: 600,
                color: '#FFFFFF',
                lineHeight: 1.2,
                letterSpacing: '-0.02em'
              }}
            >
              If you seek a peaceful mountain retreat,{' '}
              <span style={{ fontWeight: 400, fontStyle: 'italic', color: 'var(--color-accent)' }}>we welcome you to Zuri.</span>
            </h2>
          </div>

          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <Link
              href="/booking"
              className="btn btn-terracotta"
              style={{ padding: '12px 28px', fontSize: '0.9rem' }}
            >
              Reserve A Suite
            </Link>
            <a
              href="https://wa.me/917051933349"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-light"
              style={{ padding: '12px 24px', fontSize: '0.9rem' }}
            >
              WhatsApp Concierge
            </a>
          </div>
        </div>

        {/* 4 Footer Columns (Figma layout: Brand, Menu, Services, Contact/Partners) */}
        <div className="footer-columns">
          {/* Column 1: Brand Info & Socials */}
          <div className="footer-column">
            <Link href="/" style={{ textDecoration: 'none', display: 'inline-block', marginBottom: '18px' }}>
              <ZuriLogo variant="light" />
            </Link>
            <p style={{ fontSize: '0.9rem', lineHeight: '1.65', maxWidth: '320px', marginBottom: '24px', color: 'rgba(255,255,255,0.7)' }}>
              An intimate 7-suite boutique mountain sanctuary in Lidroo, Pahalgam. Warm cedar wood interiors, authentic Kashmiri Wazwan, and crystal-clear Lidder River sounds.
            </p>

            <div style={{ display: 'flex', gap: '12px' }}>
              <a
                href="https://instagram.com/zuri_cottage"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram @zuri_cottage"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  transition: 'all 0.3s'
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a
                href="https://wa.me/917051933349"
                target="_blank"
                rel="noopener noreferrer"
                title="WhatsApp Direct"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#25D366',
                  transition: 'all 0.3s'
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.301-.15-1.78-.879-2.056-.98-.276-.1-.477-.15-.678.15-.2.3-.778.98-.954 1.18-.175.2-.351.226-.652.075-.3-.15-1.268-.468-2.415-1.492-.894-.798-1.498-1.784-1.674-2.085-.176-.3-.019-.463.132-.613.136-.135.301-.35.452-.526.15-.175.2-.3.301-.5.1-.2.05-.375-.025-.525-.075-.15-.678-1.635-.93-2.24-.244-.59-.493-.51-.678-.52h-.578c-.2 0-.526.075-.802.375-.276.3-1.054 1.03-1.054 2.513 0 1.482 1.079 2.912 1.23 3.113.15.2 2.122 3.24 5.14 4.545.718.31 1.278.495 1.716.634.72.23 1.374.197 1.892.12.577-.087 1.78-.727 2.03-1.43.25-.704.25-1.308.175-1.43-.075-.12-.276-.2-.577-.35z" />
                </svg>
              </a>
              <a
                href="tel:+917051933349"
                title="Direct Phone Line"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-accent)',
                  transition: 'all 0.3s'
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Menu */}
          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul className="footer-nav-list">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/rooms">Suites & Rooms</Link></li>
              <li><Link href="/restaurant">Wazwan Restaurant</Link></li>
              <li><Link href="/experiences">Pahalgam Adventures</Link></li>
              <li><Link href="/gallery">Photo Gallery</Link></li>
              <li><Link href="/about">About Zuri</Link></li>
              <li><Link href="/contact">Location & Map</Link></li>
            </ul>
          </div>

          {/* Column 3: Retreat Experiences */}
          <div className="footer-column">
            <h4>Retreat Services</h4>
            <ul className="footer-nav-list">
              <li><Link href="/rooms">Private Cottage Buyout</Link></li>
              <li><Link href="/restaurant">Authentic Kashmiri Wazwan</Link></li>
              <li><Link href="/experiences">Lidder River Trout Fishing</Link></li>
              <li><Link href="/experiences">Horse Riding to Baisaran</Link></li>
              <li><Link href="/contact">Srinagar Airport Chauffeur</Link></li>
              <li><Link href="/faq">Guest FAQs & Policies</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact & Address */}
          <div className="footer-column">
            <h4>Contact Details</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.9rem' }}>
              <div>
                <span style={{ display: 'block', color: 'var(--color-accent)', fontWeight: 600, fontSize: '0.78rem', textTransform: 'uppercase' }}>Address</span>
                <span>Near Forest Block, Opposite Hotel RCP, Lidroo, Pahalgam 192126, Jammu & Kashmir</span>
              </div>

              <div>
                <span style={{ display: 'block', color: 'var(--color-accent)', fontWeight: 600, fontSize: '0.78rem', textTransform: 'uppercase' }}>Front Desk Reservations</span>
                <a href="tel:+917051933349" style={{ color: '#FFFFFF', fontWeight: 600, display: 'block' }}>+91 70519 33349</a>
              </div>

              <div>
                <span style={{ display: 'block', color: 'var(--color-accent)', fontWeight: 600, fontSize: '0.78rem', textTransform: 'uppercase' }}>Email Inquiries</span>
                <a href="mailto:zuricottage@gmail.com" style={{ color: 'rgba(255,255,255,0.85)' }}>zuricottage@gmail.com</a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom-bar" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', color: 'rgba(255,255,255,0.5)' }}>
          <div>
            &copy; {new Date().getFullYear()} Zuri Cottage Pahalgam. All rights reserved. Lidroo Valley, Kashmir.
          </div>

          <div style={{ display: 'flex', gap: '20px', fontSize: '0.82rem' }}>
            <Link href="/faq" style={{ color: 'rgba(255,255,255,0.5)' }}>House Policies</Link>
            <span>•</span>
            <Link href="/contact" style={{ color: 'rgba(255,255,255,0.5)' }}>Directions</Link>
            <span>•</span>
            <Link href="/booking" style={{ color: 'var(--color-accent)' }}>Book Direct</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
