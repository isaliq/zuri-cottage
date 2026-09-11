'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function FaqPage() {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: 'How far is Zuri Cottage from Srinagar Airport, and can you arrange a pickup?',
      a: 'Zuri Cottage is located approximately 86 km from Sheikh ul-Alam International Airport in Srinagar. The drive typically takes between 2 to 2.5 hours along the scenic Srinagar-Pahalgam Highway through saffron fields and apple groves. We gladly arrange reliable private transfers in comfortable sedans or SUVs directly to our cottage gates on request.'
    },
    {
      q: 'How does the heating work during cold Pahalgam winters and snowfall?',
      a: 'We understand mountain winters. All our suites are equipped with electric room heaters and thermal heating blankets. Every private attached bathroom features a dedicated geyser for continuous 24-hour hot water. In addition, our on-site heavy-duty power backup generator guarantees uninterrupted heat and lighting during mountain power outages.'
    },
    {
      q: 'Can we order authentic Kashmiri Wazwan at the cottage?',
      a: 'Yes! Our on-site kitchen prepares classical Kashmiri Wazwan dishes like Rogan Josh, Gushtaba, Rista, Tabakh Maaz, and aromatic saffron Kehwa. Fixed-menu 3-course meals are available at approximately ₹1,200 per person per meal. Outside food is also accommodated with pleasure.'
    },
    {
      q: 'How does renting the Entire Cottage (7 Suites Buyout) work?',
      a: 'Groups of up to 18 guests can book all 7 private suites exclusively. This buyout grants your party exclusive private access to the front lawn, shared living lounge, outdoor firepit, and dedicated kitchen staff. It is the premier choice for family reunions, wedding parties, and executive getaways.'
    },
    {
      q: 'What are the check-in and check-out timings and ID requirements?',
      a: 'Standard check-in time is 02:00 PM and check-out is 11:00 AM. Early check-in or late check-out can be requested in advance and is accommodated based on availability. All adult guests must present valid government photo identification (Passport, Aadhaar, Driving License, or Voter ID) upon arrival.'
    },
    {
      q: 'How do we reach Pahalgam sightseeing spots like Betaab Valley and Aru Valley?',
      a: 'Betaab Valley is just 8 km away (~15 mins drive), Aru Valley is 13 km (~25 mins drive), and Chandanwari is 16 km away. As per local Pahalgam tourist taxi regulations, local sightseeing valleys are operated by registered union cabs; our front desk will happily coordinate certified cabs or local pony guides directly from our gates for your convenience.'
    },
    {
      q: 'Is there parking available on the property?',
      a: 'Yes, Zuri Cottage provides secure, complimentary private on-site parking for cars, SUVs, and traveler tempo travelers with easy all-weather access to the Lidroo main road.'
    },
    {
      q: 'Are pets or indoor smoking permitted?',
      a: 'To maintain pristine alpine hygiene and respect the safety of handcrafted wooden interiors, indoor smoking and pets are not permitted. Designated smoking areas are available in the open outdoor garden.'
    }
  ];

  return (
    <>
      {/* Banner */}
      <section
        className="page-header-banner"
        style={{ backgroundImage: "url('/images/river-valley-1.jpg')" }}
      >
        <div className="hero-overlay" />
        <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '0 20px' }}>
          <span className="section-tag" style={{ color: 'var(--color-accent)' }}>Help & Guidelines</span>
          <h1 className="figma-title" style={{ color: '#FFFFFF', fontSize: 'clamp(2.4rem, 4.5vw, 3.4rem)', justifyContent: 'center' }}>
            Frequently <span>asked questions</span>
          </h1>
          <p className="section-lead light" style={{ margin: '14px auto 0' }}>
            Everything you need to know about your upcoming Himalayan stay in Lidroo, Pahalgam.
          </p>
        </div>
      </section>

      {/* Accordion */}
      <section className="section">
        <div className="container" style={{ maxWidth: '840px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {faqs.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div
                  key={idx}
                  className="luxury-card"
                  style={{
                    border: isOpen ? '1.5px solid var(--color-accent)' : '1px solid var(--color-border)',
                    overflow: 'hidden',
                    transition: 'all var(--transition-smooth)'
                  }}
                >
                  <button
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                    style={{
                      width: '100%',
                      padding: '22px 28px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '16px',
                      textAlign: 'left',
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.15rem',
                      color: 'var(--color-primary)',
                      background: isOpen ? '#FAF5ED' : '#FFFFFF',
                      cursor: 'pointer'
                    }}
                  >
                    <span>{faq.q}</span>
                    <span style={{ color: 'var(--color-accent)', fontSize: '1.2rem', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}>
                      ▼
                    </span>
                  </button>

                  {isOpen && (
                    <div style={{ padding: '0 28px 24px', background: '#FAF5ED', fontSize: '0.94rem', color: 'var(--color-text-secondary)', lineHeight: '1.7' }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div style={{ marginTop: '56px', textAlign: 'center', background: '#FFFFFF', padding: '36px', borderRadius: 'var(--radius-card)', border: '1px solid var(--color-border)' }}>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', color: 'var(--color-primary)', marginBottom: '8px' }}>
              Have a Specific Question?
            </h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem', marginBottom: '20px' }}>
              Our on-site manager and concierge team are available 24/7 on WhatsApp.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
              <a
                href="https://wa.me/917051933349?text=Hi%20Zuri%20Cottage%20Pahalgam,%20I%20have%20a%20question"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                Chat on WhatsApp (+91 70519 33349)
              </a>
              <Link href="/contact" className="btn btn-outline-walnut">
                Contact Page & Directions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
