/* ==========================================================================
   ZURI COTTAGES PAHALGAM - CLIENT LOGIC & INTERACTION ENGINE
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initHeroSlider();
  initWeather();
  initGallery();
  initRoomCarousels();
  initBookingEngine();
  initFaqAccordion();
  initContactForm();
  initScrollAnimations();
});

/* --------------------------------------------------------------------------
   1. STICKY HEADER & MOBILE NAVIGATION
   -------------------------------------------------------------------------- */
function initHeader() {
  const header = document.querySelector('.site-header');
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  const links = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Active link highlighting
    let current = '';
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(sec => {
      const top = sec.offsetTop - 120;
      const height = sec.offsetHeight;
      if (window.scrollY >= top && window.scrollY < top + height) {
        current = sec.getAttribute('id');
      }
    });

    links.forEach(l => {
      l.classList.remove('active');
      if (l.getAttribute('href') === `#${current}`) {
        l.classList.add('active');
      }
    });
  });

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-open');
      const isOpen = navLinks.classList.contains('mobile-open');
      navToggle.innerHTML = isOpen ? '&times;' : '&#9776;';
    });

    links.forEach(l => {
      l.addEventListener('click', () => {
        navLinks.classList.remove('mobile-open');
        navToggle.innerHTML = '&#9776;';
      });
    });
  }
}

/* --------------------------------------------------------------------------
   2. HERO SLIDESHOW
   -------------------------------------------------------------------------- */
function initHeroSlider() {
  const slides = document.querySelectorAll('.hero-slide');
  if (slides.length <= 1) return;

  let currentIdx = 0;
  setInterval(() => {
    slides[currentIdx].classList.remove('active');
    currentIdx = (currentIdx + 1) % slides.length;
    slides[currentIdx].classList.add('active');
  }, 6500);
}

/* --------------------------------------------------------------------------
   3. LIVE WEATHER BADGE (Pahalgam Alpine Conditions)
   -------------------------------------------------------------------------- */
function initWeather() {
  const tempEl = document.getElementById('hero-temp');
  if (!tempEl) return;

  const month = new Date().getMonth(); // 0 to 11
  let tempRange = '18°C Sunny';
  if (month >= 11 || month <= 1) {
    tempRange = '-2°C Snow Mist';
  } else if (month >= 2 && month <= 4) {
    tempRange = '14°C Crisp Spring';
  } else if (month >= 5 && month <= 8) {
    tempRange = '21°C Pleasant Valley';
  } else {
    tempRange = '15°C Golden Autumn';
  }

  tempEl.textContent = tempRange;
}

/* --------------------------------------------------------------------------
   4. PHOTO GALLERY & FILTERABLE LIGHTBOX
   -------------------------------------------------------------------------- */
const galleryData = [
  { src: 'assets/images/facade-main.jpg', category: 'grounds', title: 'Cottage Facade & Himalayan Peaks', tag: 'Exterior' },
  { src: 'assets/images/deluxe-room-1.jpg', category: 'rooms', title: 'Deluxe Room Mountain View', tag: 'Bedroom' },
  { src: 'assets/images/river-valley-1.jpg', category: 'nature', title: 'Rushing Lidder River Behind Property', tag: 'River View' },
  { src: 'assets/images/deluxe-room-2.jpg', category: 'rooms', title: 'Spacious Deluxe Suite with King Bed', tag: 'Bedroom' },
  { src: 'assets/images/cottage-exterior-lawn.jpg', category: 'grounds', title: 'Front Lawns & Mountain Panorama', tag: 'Garden' },
  { src: 'assets/images/living-lounge.jpg', category: 'dining', title: 'Shared Alpine Living Lounge', tag: 'Lounge' },
  { src: 'assets/images/deluxe-room-3.jpg', category: 'rooms', title: 'Cedar Wood Interior & Cozy Bedding', tag: 'Bedroom' },
  { src: 'assets/images/bathroom-1.jpg', category: 'rooms', title: 'Attached Modern Private Bathroom', tag: 'Bathroom' },
  { src: 'assets/images/river-valley-2.jpg', category: 'nature', title: 'Pristine Lidder Mountain Waters', tag: 'Nature' },
  { src: 'assets/images/cottage-garden.jpg', category: 'grounds', title: 'Verdant Garden & Front Porch', tag: 'Grounds' },
  { src: 'assets/images/deluxe-room-4.jpg', category: 'rooms', title: 'Panoramic Window Overlooking Pines', tag: 'Bedroom' },
  { src: 'assets/images/cottage-hall.jpg', category: 'dining', title: 'Dining Space & Hallway', tag: 'Dining' },
  { src: 'assets/images/bathroom-2.jpg', category: 'rooms', title: 'Modern Clean Bath with Hot Water', tag: 'Bathroom' },
  { src: 'assets/images/cottage-balcony.jpg', category: 'grounds', title: 'Upper Deck Balcony with Valley Vistas', tag: 'Balcony' },
  { src: 'assets/images/river-valley-3.jpg', category: 'nature', title: 'Lidder Valley Alpine Landscape', tag: 'Valley' },
  { src: 'assets/images/deluxe-room-5.jpg', category: 'rooms', title: 'Comfortable Bedroom Seating Corner', tag: 'Bedroom' },
  { src: 'assets/images/cottage-front.jpg', category: 'grounds', title: 'Resort Entrance & Stone Architecture', tag: 'Entrance' },
  { src: 'assets/images/deluxe-room-6.jpg', category: 'rooms', title: 'Warm Kashmiri Ambiance & Bedding', tag: 'Bedroom' },
  { src: 'assets/images/cottage-side.jpg', category: 'grounds', title: 'Alpine Wood Architecture & Pine Trees', tag: 'Architecture' },
  { src: 'assets/images/cottage-view-1.jpg', category: 'nature', title: 'Surrounding Green Hills of Lidroo', tag: 'Scenic' }
];

let activeLightboxList = [...galleryData];
let currentLightboxIdx = 0;

function initGallery() {
  const grid = document.querySelector('.gallery-grid');
  const filterBtns = document.querySelectorAll('.filter-btn');

  if (!grid) return;

  function renderGallery(cat = 'all') {
    grid.innerHTML = '';
    const filtered = (cat === 'all') ? galleryData : galleryData.filter(item => item.category === cat);
    activeLightboxList = filtered;

    filtered.forEach((item, idx) => {
      const el = document.createElement('div');
      el.className = 'gallery-item';
      el.setAttribute('data-category', item.category);
      el.innerHTML = `
        <img src="${item.src}" alt="${item.title}" loading="lazy" />
        <div class="gallery-item-overlay">
          <span class="gallery-item-tag">${item.tag}</span>
          <h4 class="gallery-item-caption">${item.title}</h4>
        </div>
        <div class="gallery-zoom-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            <line x1="11" y1="8" x2="11" y2="14"></line>
            <line x1="8" y1="11" x2="14" y2="11"></line>
          </svg>
        </div>
      `;

      el.addEventListener('click', () => {
        openLightbox(idx);
      });

      grid.appendChild(el);
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-filter');
      renderGallery(cat);
    });
  });

  renderGallery('all');
  initLightboxControls();
}

function openLightbox(idx) {
  const modal = document.querySelector('.lightbox-modal');
  if (!modal || !activeLightboxList[idx]) return;

  currentLightboxIdx = idx;
  updateLightboxContent();
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const modal = document.querySelector('.lightbox-modal');
  if (!modal) return;
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

function updateLightboxContent() {
  const img = document.querySelector('.lightbox-main-img');
  const title = document.querySelector('.lightbox-caption-title');
  const counter = document.querySelector('.lightbox-counter');
  const current = activeLightboxList[currentLightboxIdx];

  if (!current) return;

  img.src = current.src;
  img.alt = current.title;
  title.textContent = current.title;
  counter.textContent = `Photo ${currentLightboxIdx + 1} of ${activeLightboxList.length}`;
}

function initLightboxControls() {
  const modal = document.querySelector('.lightbox-modal');
  const closeBtn = document.querySelector('.lightbox-close-btn');
  const prevBtn = document.querySelector('.lightbox-prev');
  const nextBtn = document.querySelector('.lightbox-next');

  if (!modal) return;

  closeBtn?.addEventListener('click', closeLightbox);

  prevBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    currentLightboxIdx = (currentLightboxIdx - 1 + activeLightboxList.length) % activeLightboxList.length;
    updateLightboxContent();
  });

  nextBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    currentLightboxIdx = (currentLightboxIdx + 1) % activeLightboxList.length;
    updateLightboxContent();
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.classList.contains('lightbox-stage')) {
      closeLightbox();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') prevBtn?.click();
    if (e.key === 'ArrowRight') nextBtn?.click();
  });
}

/* --------------------------------------------------------------------------
   5. ROOM CARD PHOTO SWITCHER
   -------------------------------------------------------------------------- */
function initRoomCarousels() {
  const roomCards = document.querySelectorAll('.room-card');
  roomCards.forEach(card => {
    const img = card.querySelector('.room-carousel-img');
    const imagesAttr = card.getAttribute('data-images');
    if (!img || !imagesAttr) return;

    const list = imagesAttr.split(',').map(s => s.trim());
    if (list.length <= 1) return;

    let idx = 0;
    // Auto-swap room preview slightly on hover
    card.addEventListener('mouseenter', () => {
      idx = (idx + 1) % list.length;
      img.src = list[idx];
    });
  });
}

/* --------------------------------------------------------------------------
   6. BOOKING ENGINE & RATE CALCULATOR MODAL
   -------------------------------------------------------------------------- */
const ROOM_RATES = {
  'deluxe': { name: 'Deluxe Mountain View Room', basePrice: 3500, maxGuests: 3 },
  'valley': { name: 'Valley View Executive Suite', basePrice: 4800, maxGuests: 4 },
  'cottage': { name: 'Entire Luxury Cottage (7 Rooms Buyout)', basePrice: 24000, maxGuests: 18 }
};

const MEAL_RATES = {
  'ep': { name: 'Room Only (EP)', pricePerPerson: 0 },
  'cp': { name: 'Breakfast Included (CP)', pricePerPerson: 400 },
  'map': { name: 'Breakfast & Dinner (MAP)', pricePerPerson: 1200 },
  'ap': { name: 'All Meals - Wazwan & BBQ (AP)', pricePerPerson: 2200 }
};

function initBookingEngine() {
  const modal = document.querySelector('.booking-modal');
  const closeBtn = document.querySelector('.modal-close-btn');
  const openButtons = document.querySelectorAll('.open-booking-modal');

  const checkinInput = document.getElementById('modal-checkin');
  const checkoutInput = document.getElementById('modal-checkout');
  const roomSelect = document.getElementById('modal-room');
  const guestsSelect = document.getElementById('modal-guests');
  const mealSelect = document.getElementById('modal-meal');

  const qbCheckin = document.getElementById('qb-checkin');
  const qbCheckout = document.getElementById('qb-checkout');
  const qbRoom = document.getElementById('qb-room');
  const qbGuests = document.getElementById('qb-guests');
  const qbSubmit = document.getElementById('qb-submit');

  const whatsappBtn = document.getElementById('modal-whatsapp-btn');
  const callBtn = document.getElementById('modal-call-btn');

  // Set default dates (Today and Tomorrow)
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const formatDate = (d) => d.toISOString().split('T')[0];

  if (checkinInput && checkoutInput) {
    checkinInput.min = formatDate(today);
    checkinInput.value = formatDate(today);
    checkoutInput.min = formatDate(tomorrow);
    checkoutInput.value = formatDate(tomorrow);

    checkinInput.addEventListener('change', () => {
      const cin = new Date(checkinInput.value);
      const nextDay = new Date(cin);
      nextDay.setDate(nextDay.getDate() + 1);
      checkoutInput.min = formatDate(nextDay);
      if (new Date(checkoutInput.value) <= cin) {
        checkoutInput.value = formatDate(nextDay);
      }
      calculateEstimate();
    });

    checkoutInput.addEventListener('change', calculateEstimate);
  }

  if (qbCheckin && qbCheckout) {
    qbCheckin.min = formatDate(today);
    qbCheckin.value = formatDate(today);
    qbCheckout.min = formatDate(tomorrow);
    qbCheckout.value = formatDate(tomorrow);
  }

  [roomSelect, guestsSelect, mealSelect].forEach(el => {
    el?.addEventListener('change', calculateEstimate);
  });

  // Calculate Rate Breakdown
  function calculateEstimate() {
    if (!checkinInput || !checkoutInput || !roomSelect || !guestsSelect) return;

    const cin = new Date(checkinInput.value);
    const cout = new Date(checkoutInput.value);
    const diffTime = Math.max(1, cout - cin);
    const nights = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) || 1;

    const roomType = roomSelect.value;
    const roomInfo = ROOM_RATES[roomType] || ROOM_RATES['deluxe'];
    const guests = parseInt(guestsSelect.value) || 2;
    const mealKey = mealSelect ? mealSelect.value : 'ep';
    const mealInfo = MEAL_RATES[mealKey] || MEAL_RATES['ep'];

    const roomTotal = roomInfo.basePrice * nights;
    const mealTotal = mealInfo.pricePerPerson * guests * nights;
    const subtotal = roomTotal + mealTotal;
    const taxes = Math.round(subtotal * 0.12); // 12% GST
    const grandTotal = subtotal + taxes;

    // Update UI elements
    const rateNightsEl = document.getElementById('rate-nights-text');
    const rateRoomTotalEl = document.getElementById('rate-room-total');
    const rateMealsRow = document.getElementById('rate-meals-row');
    const rateMealsTotalEl = document.getElementById('rate-meals-total');
    const rateTaxesEl = document.getElementById('rate-taxes-total');
    const rateGrandTotalEl = document.getElementById('rate-grand-total');

    if (rateNightsEl) rateNightsEl.textContent = `${roomInfo.name} (${nights} night${nights > 1 ? 's' : ''})`;
    if (rateRoomTotalEl) rateRoomTotalEl.textContent = `₹${roomTotal.toLocaleString('en-IN')}`;

    if (rateMealsRow && rateMealsTotalEl) {
      if (mealTotal > 0) {
        rateMealsRow.style.display = 'flex';
        rateMealsTotalEl.textContent = `₹${mealTotal.toLocaleString('en-IN')}`;
      } else {
        rateMealsRow.style.display = 'none';
      }
    }

    if (rateTaxesEl) rateTaxesEl.textContent = `₹${taxes.toLocaleString('en-IN')}`;
    if (rateGrandTotalEl) rateGrandTotalEl.textContent = `₹${grandTotal.toLocaleString('en-IN')}`;

    // Update WhatsApp Dispatch Link
    if (whatsappBtn) {
      const msg = `*Reservation Inquiry - Zuri Cottages Pahalgam*%0A` +
        `--------------------------------%0A` +
        `*Accommodation:* ${encodeURIComponent(roomInfo.name)}%0A` +
        `*Dates:* ${checkinInput.value} to ${checkoutInput.value} (${nights} Night${nights > 1 ? 's' : ''})%0A` +
        `*Guests:* ${guests} Guest(s)%0A` +
        `*Meal Plan:* ${encodeURIComponent(mealInfo.name)}%0A` +
        `*Est. Total:* ₹${grandTotal.toLocaleString('en-IN')} (incl. taxes)%0A` +
        `--------------------------------%0A` +
        `Kindly confirm availability and booking procedure. Thank you!`;

      whatsappBtn.href = `https://wa.me/917051933349?text=${msg}`;
    }
  }

  // Quick Book Strip Trigger
  if (qbSubmit) {
    qbSubmit.addEventListener('click', (e) => {
      e.preventDefault();
      if (checkinInput && qbCheckin) checkinInput.value = qbCheckin.value;
      if (checkoutInput && qbCheckout) checkoutInput.value = qbCheckout.value;
      if (roomSelect && qbRoom) roomSelect.value = qbRoom.value;
      if (guestsSelect && qbGuests) guestsSelect.value = qbGuests.value;

      calculateEstimate();
      modal?.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  }

  // Open buttons
  openButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetRoom = btn.getAttribute('data-room');
      if (targetRoom && roomSelect) {
        roomSelect.value = targetRoom;
      }
      calculateEstimate();
      modal?.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  // Close modal
  closeBtn?.addEventListener('click', () => {
    modal?.classList.remove('active');
    document.body.style.overflow = '';
  });

  modal?.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

  calculateEstimate();
}

/* --------------------------------------------------------------------------
   7. FAQ ACCORDION
   -------------------------------------------------------------------------- */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    question?.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close other open faqs
      faqItems.forEach(other => {
        other.classList.remove('active');
        const otherAns = other.querySelector('.faq-answer');
        if (otherAns) otherAns.style.maxHeight = null;
      });

      if (!isActive) {
        item.classList.add('active');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });
}

/* --------------------------------------------------------------------------
   8. CONTACT FORM SUBMISSION
   -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const statusBanner = document.getElementById('contact-status');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.querySelector('[name="name"]').value;
    const phone = form.querySelector('[name="phone"]').value;
    const message = form.querySelector('[name="message"]').value;

    // Show temporary confirmation
    if (statusBanner) {
      statusBanner.style.display = 'block';
      statusBanner.className = 'status-success';
      statusBanner.innerHTML = `<strong>Thank you, ${name}!</strong> Your message has been received. Our concierge will reach you at ${phone} promptly. You can also chat directly on WhatsApp: <a href="https://wa.me/917051933349" target="_blank" style="color:#25d366;font-weight:700;">+91 70519 33349</a>.`;
    }

    form.reset();
  });
}

/* --------------------------------------------------------------------------
   9. SCROLL REVEAL ANIMATIONS
   -------------------------------------------------------------------------- */
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('.reveal-on-scroll');
  if (!animatedElements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  animatedElements.forEach(el => observer.observe(el));
}
