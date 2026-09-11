'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Banner */}
      <section
        className="page-header-banner"
        style={{ backgroundImage: "url('/images/river-valley-3.jpg')" }}
      >
        <div className="hero-overlay" />
        <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '0 20px' }}>
          <span className="section-tag" style={{ color: 'var(--color-accent)' }}>Get in Touch</span>
          <h1 className="figma-title" style={{ color: '#FFFFFF', fontSize: 'clamp(2.4rem, 4.5vw, 3.4rem)', justifyContent: 'center' }}>
            Contact <span>& location</span>
          </h1>
          <p className="section-lead light" style={{ margin: '14px auto 0' }}>
            We are here to assist with suite availability, airport private transfers, and customized Pahalgam mountain itineraries.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="container">
          {/* Quick Action Buttons Row */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '56px' }}>
            <a href="tel:+917051933349" className="btn btn-walnut" style={{ width: '100%', gap: '8px' }}>
              📞 Call: +91 70519 33349
            </a>
            <a
              href="https://wa.me/917051933349?text=Hi%20Zuri%20Cottage%20Pahalgam,%20I%20have%20an%20inquiry"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              style={{ width: '100%', gap: '8px' }}
            >
              💬 WhatsApp Concierge
            </a>
            <a
              href="https://maps.google.com/?q=34.11056,75.40194"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-walnut"
              style={{ width: '100%', gap: '8px' }}
            >
              📍 Navigate in Google Maps
            </a>
            <Link href="/booking" className="btn btn-terracotta" style={{ width: '100%', gap: '8px' }}>
              🗓️ Book Online Direct
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '48px' }}>
            {/* Contact Details & Inquiry Form */}
            <div>
              <div className="luxury-card" style={{ padding: '36px', marginBottom: '32px' }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.45rem', marginBottom: '16px', color: 'var(--color-primary)' }}>
                  Property Location & Coordinates
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.94rem', color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
                  <p>
                    <strong>Address:</strong><br />
                    Zuri Cottage, Near Forest Block, Opposite Hotel RCP,<br />
                    Lidroo, Pahalgam, District Anantnag, Jammu & Kashmir 192126
                  </p>
                  <p>
                    <strong>Distance from Airport:</strong><br />
                    ~86 km from Sheikh ul-Alam International Airport (Srinagar). Typically 2 to 2.5 hours via Srinagar-Pahalgam Highway through saffron towns of Pampore and Awantipora.
                  </p>
                  <p>
                    <strong>Coordinates:</strong> 34.11056° N, 75.40194° E
                  </p>
                  <p>
                    <strong>Email:</strong> <a href="mailto:zuricottage@gmail.com" style={{ color: 'var(--color-accent-dark)', fontWeight: 600 }}>zuricottage@gmail.com</a>
                  </p>
                  <p>
                    <strong>Phone Numbers:</strong><br />
                    <a href="tel:+917051933349" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>+91 70519 33349</a> (Reservations & WhatsApp)<br />
                    <a href="tel:+919682319475" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>+91 96823 19475</a> (Front Desk)
                  </p>
                </div>
              </div>

              {/* Message Form */}
              <div className="luxury-card" style={{ padding: '36px' }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.45rem', marginBottom: '8px', color: 'var(--color-primary)' }}>
                  Send an Inquiry
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', marginBottom: '20px' }}>
                  We usually respond within 30 minutes.
                </p>

                {submitted ? (
                  <div style={{ background: '#EAF7EE', border: '1px solid #48BB78', padding: '20px', borderRadius: '12px', color: '#22543D' }}>
                    <strong>Thank you!</strong> Your message has been sent to our reservations desk. We will reach back to you shortly. You can also message directly on WhatsApp: <a href="https://wa.me/917051933349" target="_blank" style={{ color: '#25D366', fontWeight: 700 }}>+91 70519 33349</a>.
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-text-muted)', marginBottom: '6px' }}>Your Name</label>
                      <input type="text" required style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', border: '1px solid var(--color-border)', outline: 'none' }} />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-text-muted)', marginBottom: '6px' }}>Phone / WhatsApp Number</label>
                      <input type="tel" required style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', border: '1px solid var(--color-border)', outline: 'none' }} />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-text-muted)', marginBottom: '6px' }}>Message or Travel Dates</label>
                      <textarea rows={4} required placeholder="Number of guests, tentative dates, or queries..." style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', border: '1px solid var(--color-border)', outline: 'none' }}></textarea>
                    </div>
                    <button type="submit" className="btn btn-terracotta" style={{ width: '100%' }}>
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Interactive Map & Driving Instructions */}
            <div>
              <div className="luxury-card" style={{ height: '440px', overflow: 'hidden', marginBottom: '28px' }}>
                <iframe
                  title="Zuri Cottage Location Map"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=75.3850%2C34.1000%2C75.4180%2C34.1200&amp;layer=mapnik&amp;marker=34.11056%2C75.40194"
                  style={{ width: '100%', height: '100%', border: 'none' }}
                  loading="lazy"
                />
              </div>

              <div className="luxury-card" style={{ padding: '32px' }}>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', marginBottom: '12px', color: 'var(--color-primary)' }}>
                  How to Reach Zuri Cottage
                </h4>
                <ul style={{ listStyle: 'disc', paddingLeft: '20px', fontSize: '0.9rem', color: 'var(--color-text-secondary)', lineHeight: '1.7' }}>
                  <li><strong>From Srinagar Airport (SXR):</strong> Take the NH44 towards Anantnag / Khanabal, then join the KP Road to Lidroo Pahalgam (~86 km).</li>
                  <li><strong>Landmarks in Lidroo:</strong> Located right near the Army Goodwill Public School & Forest Block, opposite Hotel RCP.</li>
                  <li><strong>Parking:</strong> On-site complimentary private parking available for cars and SUVs.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
