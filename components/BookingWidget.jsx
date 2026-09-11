'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function BookingWidget() {
  const router = useRouter();

  const today = new Date().toISOString().split('T')[0];
  const tomorrowDate = new Date();
  tomorrowDate.setDate(tomorrowDate.getDate() + 1);
  const tomorrow = tomorrowDate.toISOString().split('T')[0];

  const [activeTab, setActiveTab] = useState('suites'); // 'suites' | 'experiences' | 'buyout'
  const [area, setArea] = useState('lidroo');
  const [checkin, setCheckin] = useState(today);
  const [checkout, setCheckout] = useState(tomorrow);
  const [room, setRoom] = useState('all');
  const [priceRange, setPriceRange] = useState('any');

  const handleTabClick = (tabKey) => {
    setActiveTab(tabKey);
    if (tabKey === 'buyout') {
      setRoom('cottage');
    } else if (tabKey === 'suites' && room === 'cottage') {
      setRoom('all');
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (activeTab === 'experiences') {
      router.push('/experiences');
      return;
    }
    const params = new URLSearchParams();
    if (checkin) params.append('checkin', checkin);
    if (checkout) params.append('checkout', checkout);
    if (room && room !== 'all') params.append('room', room);
    if (priceRange && priceRange !== 'any') params.append('price', priceRange);
    router.push(`/booking?${params.toString()}`);
  };

  return (
    <div className="figma-dock-container">
      {/* Top Tabs (Figma UI: 'BUY HOTELS', 'TRAIDING', 'FEATURED') */}
      <div className="figma-dock-tabs">
        <button
          type="button"
          className={`figma-dock-tab ${activeTab === 'suites' ? 'active' : 'inactive'}`}
          onClick={() => handleTabClick('suites')}
        >
          <span style={{ color: activeTab === 'suites' ? 'var(--color-accent-dark)' : 'var(--color-accent)' }}>❖</span>
          <span>Book Suites</span>
        </button>

        <button
          type="button"
          className={`figma-dock-tab ${activeTab === 'experiences' ? 'active' : 'inactive'}`}
          onClick={() => handleTabClick('experiences')}
        >
          <span>Pahalgam Experiences</span>
        </button>

        <button
          type="button"
          className={`figma-dock-tab ${activeTab === 'buyout' ? 'active' : 'inactive'}`}
          onClick={() => handleTabClick('buyout')}
        >
          <span style={{ color: 'var(--color-accent)' }}>★</span>
          <span>Full Cottage Buyout</span>
        </button>
      </div>

      {/* Main Docked Filter Surface (Figma Horizontal Split Bar) */}
      <form className="figma-dock-box" onSubmit={handleSearch}>
        {/* Column 1: Location / Destination */}
        <div className="figma-field-col">
          <label className="figma-col-label" htmlFor="dock-area">
            Location / Area
          </label>
          <select
            id="dock-area"
            className="figma-col-select"
            value={area}
            onChange={(e) => setArea(e.target.value)}
          >
            <option value="lidroo">Lidroo, Pahalgam (Riverfront)</option>
            <option value="forest">Near Forest Block (Opp. RCP)</option>
            <option value="valley">Lidder Valley View</option>
          </select>
        </div>

        {/* Column 2: Dates (Check-In & Check-Out) */}
        <div className="figma-field-col">
          <label className="figma-col-label" htmlFor="dock-checkin">
            Check-In & Out
          </label>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <input
              type="date"
              id="dock-checkin"
              className="figma-col-input"
              value={checkin}
              min={today}
              onChange={(e) => setCheckin(e.target.value)}
              required
            />
            <span style={{ color: '#A09792', fontSize: '0.85rem' }}>→</span>
            <input
              type="date"
              id="dock-checkout"
              className="figma-col-input"
              value={checkout}
              min={checkin || today}
              onChange={(e) => setCheckout(e.target.value)}
              required
            />
          </div>
        </div>

        {/* Column 3: Property / Room Type */}
        <div className="figma-field-col">
          <label className="figma-col-label" htmlFor="dock-room">
            Suite Category
          </label>
          <select
            id="dock-room"
            className="figma-col-select"
            value={room}
            onChange={(e) => setRoom(e.target.value)}
          >
            <option value="all">All Available Suites</option>
            <option value="double">Double Room Mountain View (₹3,500)</option>
            <option value="valley">Valley View Room (₹4,800)</option>
            <option value="garden">Garden Suite (₹5,600)</option>
            <option value="cottage">Entire Cottage 7 Suites (₹24,000)</option>
          </select>
        </div>

        {/* Column 4: Price Range */}
        <div className="figma-field-col">
          <label className="figma-col-label" htmlFor="dock-price">
            Price Range
          </label>
          <select
            id="dock-price"
            className="figma-col-select"
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
          >
            <option value="any">₹3,500 → ₹24,000</option>
            <option value="3500-5000">₹3,500 → ₹5,000 / night</option>
            <option value="5000-10000">₹5,000 → ₹10,000 / night</option>
            <option value="20000+">₹24,000 Full Buyout</option>
          </select>
        </div>

        {/* Column 5: Search CTA Button (Figma style) */}
        <div>
          <button type="submit" className="figma-search-btn">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <span>SEARCH</span>
          </button>
        </div>
      </form>
    </div>
  );
}
