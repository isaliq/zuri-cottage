'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function RestaurantPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [dietFilter, setDietFilter] = useState('all'); // 'all', 'veg', 'non-veg'

  const menuItems = [
    {
      id: 1,
      name: 'Kashmiri Mutton Rogan Josh',
      category: 'wazwan',
      isVeg: false,
      price: '₹750',
      description: 'Slow-cooked tender Kashmiri lamb simmered with Kashmiri red chillies, fennel seeds, and aromatic spices.'
    },
    {
      id: 2,
      name: 'Gushtaba (King of Wazwan)',
      category: 'wazwan',
      isVeg: false,
      price: '₹800',
      description: 'Silken minced meatballs hand-pounded and cooked in a rich, velvety yoghurt and cardamon gravy.'
    },
    {
      id: 3,
      name: 'Rista in Red Saffron Gravy',
      category: 'wazwan',
      isVeg: false,
      price: '₹750',
      description: 'Handcrafted spiced meatballs poached in a fragrant saffron and shallot reduction.'
    },
    {
      id: 4,
      name: 'Crispy Tabakh Maaz',
      category: 'wazwan',
      isVeg: false,
      price: '₹700',
      description: 'Succulent lamb ribs twice-cooked: poached in milk and cloves, then pan-crisped in pure desi ghee.'
    },
    {
      id: 5,
      name: 'Traditional Kashmiri Dum Aloo',
      category: 'wazwan',
      isVeg: true,
      price: '₹450',
      description: 'Golden baby potatoes pierced and simmered in an unctuous fennel and dry ginger Kashmiri gravy.'
    },
    {
      id: 6,
      name: 'Nadru Yakhni (Lotus Stem in Yoghurt)',
      category: 'wazwan',
      isVeg: true,
      price: '₹480',
      description: 'Crispy lotus stems from Kashmir lakes cooked in a mild yoghurt broth infused with mint and black cardamom.'
    },
    {
      id: 7,
      name: 'Saffron Kehwa with Almonds',
      category: 'beverages',
      isVeg: true,
      price: '₹180',
      description: 'Green tea simmered with pure Pampore saffron strands, cinnamon, green cardamom, and slivered almonds.'
    },
    {
      id: 8,
      name: 'Lawn Barbeque Platter (Chicken & Paneer)',
      category: 'bbq',
      isVeg: false,
      price: '₹850',
      description: 'Smoky skewered kebabs grilled live over glowing coals on the front garden lawn with mint chutney.'
    },
    {
      id: 9,
      name: 'Paneer Butter Masala & Garlic Naan',
      category: 'north-indian',
      isVeg: true,
      price: '₹480',
      description: 'Fresh cottage cheese simmered in a creamy tomato-cashew reduction served with buttered tandoori bread.'
    },
    {
      id: 10,
      name: 'Warm Kashmiri Nun Chai (Pink Salt Tea)',
      category: 'beverages',
      isVeg: true,
      price: '₹140',
      description: 'Traditional pink salted tea brewed with baking soda and milk, paired with crispy local bakarkhani.'
    },
    {
      id: 11,
      name: 'Mountain Breakfast (Eggs, Parathas & Fruit)',
      category: 'breakfast',
      isVeg: false,
      price: '₹450',
      description: 'Farm eggs to order, spiced potato parathas with homemade butter, seasonal fruits, and hot tea.'
    }
  ];

  const filteredItems = menuItems.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCat = activeCategory === 'all' || item.category === activeCategory;
    const matchesDiet = dietFilter === 'all' ||
                        (dietFilter === 'veg' && item.isVeg) ||
                        (dietFilter === 'non-veg' && !item.isVeg);
    return matchesSearch && matchesCat && matchesDiet;
  });

  return (
    <>
      {/* Banner */}
      <section
        className="page-header-banner"
        style={{ backgroundImage: "url('/images/cottage-hall.jpg')" }}
      >
        <div className="hero-overlay" />
        <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '0 20px' }}>
          <span className="section-tag" style={{ color: 'var(--color-accent)' }}>Kashmiri Culinary Heritage</span>
          <h1 className="figma-title" style={{ color: '#FFFFFF', fontSize: 'clamp(2.4rem, 4.5vw, 3.4rem)', justifyContent: 'center' }}>
            The cottage <span>restaurant</span>
          </h1>
          <p className="section-lead light" style={{ margin: '14px auto 0' }}>
            Savor authentic Wazwan, lawn firepit barbecues, and comforting multi-cuisine delights prepared with genuine Himalayan warmth.
          </p>
        </div>
      </section>

      {/* Featured "Taste Kashmir" Section */}
      <section className="section" style={{ background: '#FFFFFF' }}>
        <div className="container">
          <div className="figma-section-header" style={{ justifyContent: 'center', textAlign: 'center' }}>
            <div className="figma-heading-wrap">
              <div className="figma-accent-bar" />
              <h2 className="figma-title">
                Taste <span>kashmir: royal wazwan</span>
              </h2>
            </div>
          </div>
          <p style={{ textAlign: 'center', color: 'var(--color-text-secondary)', maxWidth: '640px', margin: '-16px auto 36px', fontSize: '1.02rem', lineHeight: '1.65' }}>
            A culinary tradition dating back to the 14th century, Kashmiri Wazwan is cooked with profound respect for slow simmering, wild mountain herbs, and Kashmiri saffron.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px', marginTop: '36px' }}>
            <div className="luxury-card" style={{ padding: '24px', textAlign: 'center' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-primary)', marginBottom: '8px' }}>Rogan Josh</h3>
              <p style={{ fontSize: '0.86rem', color: 'var(--color-text-secondary)' }}>Slow-cooked lamb with fragrant dried Kashmiri chillies and mountain herbs.</p>
            </div>
            <div className="luxury-card" style={{ padding: '24px', textAlign: 'center' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-primary)', marginBottom: '8px' }}>Gushtaba</h3>
              <p style={{ fontSize: '0.86rem', color: 'var(--color-text-secondary)' }}>Silken hand-pounded meatballs in a delicate yoghurt-cardamom broth.</p>
            </div>
            <div className="luxury-card" style={{ padding: '24px', textAlign: 'center' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-primary)', marginBottom: '8px' }}>Rista</h3>
              <p style={{ fontSize: '0.86rem', color: 'var(--color-text-secondary)' }}>Fiery saffron-shallot broth poaching succulent meatballs.</p>
            </div>
            <div className="luxury-card" style={{ padding: '24px', textAlign: 'center' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-primary)', marginBottom: '8px' }}>Tabakh Maaz</h3>
              <p style={{ fontSize: '0.86rem', color: 'var(--color-text-secondary)' }}>Twice-cooked crispy lamb ribs with a tender melt-in-mouth center.</p>
            </div>
            <div className="luxury-card" style={{ padding: '24px', textAlign: 'center' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-primary)', marginBottom: '8px' }}>Saffron Kehwa</h3>
              <p style={{ fontSize: '0.86rem', color: 'var(--color-text-secondary)' }}>Steaming green tea brewed with cardamom, cinnamon, and slivered almonds.</p>
            </div>
          </div>

          <div style={{ background: '#F9F5EE', padding: '20px 28px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', marginTop: '36px', textAlign: 'center' }}>
            <strong>Dining Option:</strong> Fixed menu 3-course dining package available at approx. <strong>₹1,200 per person/meal</strong>. Outside food is also permitted at the cottage.
          </div>
        </div>
      </section>

      {/* Searchable Menu & Filter Tabs */}
      <section className="section" style={{ background: 'var(--color-background)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '32px' }}>
            <span className="section-tag">Our Selections</span>
            <h2 className="section-title">Explore the Dining Menu</h2>
          </div>

          {/* Controls */}
          <div style={{ maxWidth: '800px', margin: '0 auto 36px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Search Input */}
            <input
              type="text"
              placeholder="Search dishes (e.g., Rogan Josh, Kehwa, Paneer)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '14px 20px',
                borderRadius: 'var(--radius-pill)',
                border: '1.5px solid var(--color-border)',
                background: '#FFFFFF',
                fontSize: '1rem',
                outline: 'none'
              }}
            />

            {/* Category Tabs */}
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
              {[
                { id: 'all', label: 'All Items' },
                { id: 'wazwan', label: 'Kashmiri Wazwan' },
                { id: 'bbq', label: 'Lawn Barbeque' },
                { id: 'north-indian', label: 'North Indian' },
                { id: 'breakfast', label: 'Breakfast' },
                { id: 'beverages', label: 'Teas & Kehwa' }
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`btn ${activeCategory === cat.id ? 'btn-terracotta' : 'btn-outline-walnut'}`}
                  style={{ padding: '8px 18px', fontSize: '0.84rem' }}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Veg / Non-Veg Toggle */}
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', alignItems: 'center' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>FILTER:</span>
              <button
                onClick={() => setDietFilter('all')}
                style={{
                  padding: '6px 14px',
                  borderRadius: '20px',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  background: dietFilter === 'all' ? 'var(--color-primary)' : '#FFFFFF',
                  color: dietFilter === 'all' ? '#FFFFFF' : 'var(--color-primary)',
                  border: '1px solid var(--color-border)'
                }}
              >
                All
              </button>
              <button
                onClick={() => setDietFilter('veg')}
                style={{
                  padding: '6px 14px',
                  borderRadius: '20px',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  background: dietFilter === 'veg' ? '#22C55E' : '#FFFFFF',
                  color: dietFilter === 'veg' ? '#FFFFFF' : '#15803D',
                  border: '1px solid #22C55E'
                }}
              >
                🟢 Pure Veg
              </button>
              <button
                onClick={() => setDietFilter('non-veg')}
                style={{
                  padding: '6px 14px',
                  borderRadius: '20px',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  background: dietFilter === 'non-veg' ? '#EF4444' : '#FFFFFF',
                  color: dietFilter === 'non-veg' ? '#FFFFFF' : '#B91C1C',
                  border: '1px solid #EF4444'
                }}
              >
                🔴 Non-Veg (100% Halal)
              </button>
            </div>
          </div>

          {/* Menu Items List */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
            {filteredItems.map((dish) => (
              <div
                key={dish.id}
                className="luxury-card"
                style={{ padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ fontSize: '0.75rem' }}>{dish.isVeg ? '🟢' : '🔴'}</span>
                      <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem', color: 'var(--color-primary)' }}>
                        {dish.name}
                      </h4>
                    </div>
                    <span style={{ fontWeight: 700, color: 'var(--color-accent-dark)', fontSize: '1.05rem' }}>
                      {dish.price}
                    </span>
                  </div>
                  <p style={{ fontSize: '0.88rem', color: 'var(--color-text-secondary)', lineHeight: '1.5' }}>
                    {dish.description}
                  </p>
                </div>

                <div style={{ marginTop: '16px', paddingTop: '12px', borderTop: '1px solid #F0ECE4', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-text-muted)' }}>
                    {dish.category}
                  </span>
                  <Link
                    href={`/booking?meal=${encodeURIComponent(dish.name)}`}
                    style={{ fontSize: '0.82rem', color: 'var(--color-accent-dark)', fontWeight: 600 }}
                  >
                    Include in Stay &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div style={{ textAlign: 'center', padding: '48px', color: 'var(--color-text-muted)' }}>
              No dishes found matching your search. Please try another keyword.
            </div>
          )}
        </div>
      </section>
    </>
  );
}
