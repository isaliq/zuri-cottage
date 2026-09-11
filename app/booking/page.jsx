'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

const ROOM_OPTIONS = {
  double: { name: 'Double Room with Mountain View', price: 3500, maxGuests: 3, size: '196 sq.ft' },
  valley: { name: 'Valley View Room', price: 4800, maxGuests: 4, size: '240 sq.ft' },
  garden: { name: 'Garden Suite', price: 5600, maxGuests: 4, size: '280 sq.ft' },
  cottage: { name: 'Entire Cottage (7 Suites Buyout)', price: 24000, maxGuests: 18, size: 'Full Property' }
};

const MEAL_PLANS = {
  ep: { name: 'Room Only (European Plan)', ratePerGuest: 0 },
  cp: { name: 'Breakfast Included (Continental Plan)', ratePerGuest: 400 },
  map: { name: 'Breakfast & Dinner (Modified American Plan)', ratePerGuest: 1200 },
  ap: { name: 'All Meals & Kashmiri Wazwan Feast (American Plan)', ratePerGuest: 2200 }
};

const PACKAGE_DETAILS = {
  'winter-escape': {
    id: 'winter-escape',
    title: 'Winter Snowfall & Wazwan Getaway',
    price: '₹19,999',
    room: 'double',
    mealPlan: 'ap',
    guests: '2',
    nights: 3,
    description: '3 Nights / 4 Days Alpine Retreat for 2 guests with full Wazwan dining, heating & airport transfer'
  },
  'honeymoon-pines': {
    id: 'honeymoon-pines',
    title: 'Honeymoon Among the Pines',
    price: '₹24,999',
    room: 'valley',
    mealPlan: 'map',
    guests: '2',
    nights: 3,
    description: '3 Nights romantic retreat for couple in Valley View Suite with private balcony & candlelit dinner'
  },
  'extended-stay': {
    id: 'extended-stay',
    title: 'Lidder Valley Long Stay & Workation',
    price: '₹34,999',
    room: 'garden',
    mealPlan: 'map',
    guests: '2',
    nights: 7,
    description: '7+ Nights remote work & wellness in Garden Suite with high-speed fiber WiFi & 25% savings'
  }
};

function BookingForm() {
  const searchParams = useSearchParams();

  const today = new Date().toISOString().split('T')[0];
  const tomorrowDate = new Date();
  tomorrowDate.setDate(tomorrowDate.getDate() + 1);
  const tomorrow = tomorrowDate.toISOString().split('T')[0];

  const paramRoom = searchParams.get('room');
  const paramCin = searchParams.get('checkin');
  const paramCout = searchParams.get('checkout');
  const paramGuests = searchParams.get('guests');
  const paramPackage = searchParams.get('package');

  const selectedPackage = paramPackage && PACKAGE_DETAILS[paramPackage] ? PACKAGE_DETAILS[paramPackage] : null;

  // Calculate default checkout based on package if selected
  const defaultCheckout = () => {
    if (paramCout) return paramCout;
    if (selectedPackage) {
      const d = new Date();
      d.setDate(d.getDate() + selectedPackage.nights);
      return d.toISOString().split('T')[0];
    }
    return tomorrow;
  };

  const [roomType, setRoomType] = useState(
    selectedPackage ? selectedPackage.room : (ROOM_OPTIONS[paramRoom] ? paramRoom : 'double')
  );
  const [checkin, setCheckin] = useState(paramCin || today);
  const [checkout, setCheckout] = useState(defaultCheckout());
  const [guests, setGuests] = useState(selectedPackage ? selectedPackage.guests : (paramGuests || '2'));
  const [mealPlan, setMealPlan] = useState(selectedPackage ? selectedPackage.mealPlan : 'ep');
  const [guestName, setGuestName] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [specialRequests, setSpecialRequests] = useState(
    selectedPackage ? `Selected Package: ${selectedPackage.title} (${selectedPackage.price})` : ''
  );

  // Calculate nights
  const cin = new Date(checkin);
  const cout = new Date(checkout);
  const diffTime = Math.max(1, cout - cin);
  const nights = Math.max(1, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));

  const selectedRoom = ROOM_OPTIONS[roomType] || ROOM_OPTIONS.double;
  const selectedMeal = MEAL_PLANS[mealPlan] || MEAL_PLANS.ep;
  const numGuests = parseInt(guests, 10) || 2;

  const roomSubtotal = selectedRoom.price * nights;
  const mealsSubtotal = selectedMeal.ratePerGuest * numGuests * nights;
  const subtotal = roomSubtotal + mealsSubtotal;
  const gst = Math.round(subtotal * 0.12);
  const total = subtotal + gst;

  // Build WhatsApp reservation string
  const waMessage = `*Reservation Request - Zuri Cottage Pahalgam*%0A` +
    `================================%0A` +
    (selectedPackage ? `*Special Package:* ${encodeURIComponent(selectedPackage.title)} (${selectedPackage.price})%0A` : '') +
    `*Guest:* ${encodeURIComponent(guestName || 'Valued Guest')}%0A` +
    `*Phone:* ${encodeURIComponent(guestPhone || 'Provided on chat')}%0A` +
    `*Accommodation:* ${encodeURIComponent(selectedRoom.name)}%0A` +
    `*Dates:* ${checkin} to ${checkout} (${nights} Night${nights > 1 ? 's' : ''})%0A` +
    `*Number of Guests:* ${numGuests} Adult(s)%0A` +
    `*Meal Plan:* ${encodeURIComponent(selectedMeal.name)}%0A` +
    `*Room Subtotal:* ₹${roomSubtotal.toLocaleString('en-IN')}%0A` +
    (mealsSubtotal > 0 ? `*Meals Subtotal:* ₹${mealsSubtotal.toLocaleString('en-IN')}%0A` : '') +
    `*GST (12%):* ₹${gst.toLocaleString('en-IN')}%0A` +
    `*Estimated Total:* ₹${total.toLocaleString('en-IN')}%0A` +
    (specialRequests ? `*Special Requests:* ${encodeURIComponent(specialRequests)}%0A` : '') +
    `================================%0A` +
    `Kindly confirm suite availability and reservation payment link. Thank you!`;

  return (
    <div className="container">
      {selectedPackage && (
        <div
          style={{
            background: 'var(--color-surface-sand)',
            border: '1px solid var(--color-accent)',
            borderRadius: '14px',
            padding: '18px 24px',
            marginBottom: '28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '14px'
          }}
        >
          <div>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-accent)', letterSpacing: '0.08em' }}>
              ✦ Promotional Package Selected
            </span>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', color: 'var(--color-primary)', margin: '4px 0 2px' }}>
              {selectedPackage.title} — <span style={{ color: 'var(--color-accent)' }}>{selectedPackage.price}</span>
            </h3>
            <p style={{ fontSize: '0.86rem', color: 'var(--color-text-secondary)', margin: 0 }}>
              {selectedPackage.description}
            </p>
          </div>
          <Link href="/offers" className="btn btn-outline-walnut" style={{ padding: '8px 18px', fontSize: '0.8rem' }}>
            Change Package
          </Link>
        </div>
      )}

      <div className="booking-page-grid">
        {/* LEFT COLUMN: FORM */}
        <div>
          <div className="luxury-card" style={{ padding: '36px', marginBottom: '32px' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', color: 'var(--color-primary)', marginBottom: '24px' }}>
              1. Stay Details & Dates
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-text-muted)', marginBottom: '6px' }}>
                  Check-In Date
                </label>
                <input
                  type="date"
                  value={checkin}
                  min={today}
                  onChange={(e) => setCheckin(e.target.value)}
                  style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', border: '1px solid var(--color-border)', outline: 'none' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-text-muted)', marginBottom: '6px' }}>
                  Check-Out Date
                </label>
                <input
                  type="date"
                  value={checkout}
                  min={checkin || today}
                  onChange={(e) => setCheckout(e.target.value)}
                  style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', border: '1px solid var(--color-border)', outline: 'none' }}
                />
              </div>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-text-muted)', marginBottom: '6px' }}>
                Select Suite Category
              </label>
              <select
                value={roomType}
                onChange={(e) => setRoomType(e.target.value)}
                style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', border: '1px solid var(--color-border)', outline: 'none' }}
              >
                <option value="double">Double Room with Mountain View (₹3,500/night)</option>
                <option value="valley">Valley View Room with Balcony (₹4,800/night)</option>
                <option value="garden">Garden Suite with Lawn Access (₹5,600/night)</option>
                <option value="cottage">Entire Cottage 7 Suites Buyout (₹24,000/night)</option>
              </select>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-text-muted)', marginBottom: '6px' }}>
                  Number of Guests
                </label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', border: '1px solid var(--color-border)', outline: 'none' }}
                >
                  <option value="1">1 Adult</option>
                  <option value="2">2 Adults (Couple)</option>
                  <option value="3">3 Guests (with Extra Bed)</option>
                  <option value="4">4 Guests (Family)</option>
                  <option value="8">8 Guests (Group)</option>
                  <option value="14">14+ Guests (Full Cottage)</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-text-muted)', marginBottom: '6px' }}>
                  Dining & Meal Plan
                </label>
                <select
                  value={mealPlan}
                  onChange={(e) => setMealPlan(e.target.value)}
                  style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', border: '1px solid var(--color-border)', outline: 'none' }}
                >
                  <option value="ep">Room Only (EP)</option>
                  <option value="cp">Breakfast Included (CP +₹400/guest)</option>
                  <option value="map">Breakfast & Dinner (MAP +₹1,200/guest)</option>
                  <option value="ap">All Meals & Wazwan (AP +₹2,200/guest)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Guest Contact & Special Requests */}
          <div className="luxury-card" style={{ padding: '36px' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', color: 'var(--color-primary)', marginBottom: '24px' }}>
              2. Guest Details & Preferences
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-text-muted)', marginBottom: '6px' }}>
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Primary guest name"
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', border: '1px solid var(--color-border)', outline: 'none' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-text-muted)', marginBottom: '6px' }}>
                  Phone / WhatsApp
                </label>
                <input
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={guestPhone}
                  onChange={(e) => setGuestPhone(e.target.value)}
                  style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', border: '1px solid var(--color-border)', outline: 'none' }}
                />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-text-muted)', marginBottom: '6px' }}>
                Special Requests (Optional)
              </label>
              <textarea
                rows={3}
                placeholder="Airport taxi pickup from Srinagar (~86 km), anniversary flowers, dietary restrictions, extra bed..."
                value={specialRequests}
                onChange={(e) => setSpecialRequests(e.target.value)}
                style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', border: '1px solid var(--color-border)', outline: 'none' }}
              />
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: STICKY SUMMARY */}
        <div>
          <div className="sticky-booking-summary">
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', color: 'var(--color-primary)', marginBottom: '6px' }}>
              Reservation Summary
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: '20px' }}>
              Direct Booking Best Rate Guarantee
            </p>

            <div className="summary-row">
              <span>Accommodation:</span>
              <strong style={{ color: 'var(--color-primary)' }}>{selectedRoom.name}</strong>
            </div>

            <div className="summary-row">
              <span>Duration:</span>
              <span>{nights} Night{nights > 1 ? 's' : ''} ({checkin} to {checkout})</span>
            </div>

            <div className="summary-row">
              <span>Guests:</span>
              <span>{numGuests} Guest(s)</span>
            </div>

            <div className="summary-row">
              <span>Room Charges:</span>
              <span>₹{roomSubtotal.toLocaleString('en-IN')}</span>
            </div>

            {mealsSubtotal > 0 && (
              <div className="summary-row">
                <span>Meal Plan ({selectedMeal.name.split('(')[0]}):</span>
                <span>₹{mealsSubtotal.toLocaleString('en-IN')}</span>
              </div>
            )}

            <div className="summary-row">
              <span>Taxes & GST (12%):</span>
              <span>₹{gst.toLocaleString('en-IN')}</span>
            </div>

            <div className="summary-row total">
              <span>Estimated Total:</span>
              <span className="total-price">₹{total.toLocaleString('en-IN')}</span>
            </div>

            <div style={{ marginTop: '28px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a
                href={`https://wa.me/917051933349?text=${waMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ width: '100%', padding: '14px', fontSize: '0.98rem' }}
              >
                💬 Confirm Reservation on WhatsApp
              </a>

              <a
                href="tel:+917051933349"
                className="btn btn-outline-walnut"
                style={{ width: '100%', padding: '12px', fontSize: '0.88rem' }}
              >
                📞 Call Front Desk (+91 70519 33349)
              </a>
            </div>

            <div style={{ marginTop: '20px', fontSize: '0.8rem', color: 'var(--color-text-muted)', textAlign: 'center', lineHeight: '1.5' }}>
              🔒 No advance payment is charged right now. Our front desk verifies real-time cottage room status and shares a secure booking confirmation.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BookingPage() {
  return (
    <>
      {/* Banner */}
      <section
        className="page-header-banner"
        style={{ backgroundImage: "url('/images/facade-main.jpg')" }}
      >
        <div className="hero-overlay" />
        <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '0 20px' }}>
          <span className="section-tag" style={{ color: 'var(--color-accent)' }}>Direct Reservation</span>
          <h1 className="figma-title" style={{ color: '#FFFFFF', fontSize: 'clamp(2.4rem, 4.5vw, 3.4rem)', justifyContent: 'center' }}>
            Reserve <span>your stay</span>
          </h1>
          <p className="section-lead light" style={{ margin: '14px auto 0' }}>
            Enjoy guaranteed best direct rates, instant front desk confirmation, and personalized Kashmiri hospitality.
          </p>
        </div>
      </section>

      <section className="section">
        <Suspense fallback={<div style={{ textAlign: 'center', padding: '48px' }}>Loading reservation form...</div>}>
          <BookingForm />
        </Suspense>
      </section>
    </>
  );
}
