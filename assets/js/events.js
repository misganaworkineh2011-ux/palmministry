const palmEvents = [
  {
    id: 'leadership-workshop-june',
    date: '2026-06-20',
    time: '09:00 AM',
    location: { en: 'Addis Ababa — PALM Training Center', am: 'አዲስ አበባ — PALM Training Center' },
    title: { en: 'Transformational Leadership Workshop', am: 'Transformational Leadership Workshop' },
    desc: { en: 'Module 2 intensive for pastors and church elders.', am: 'Module 2 intensive for pastors and church elders.' },
    category: { en: 'Training', am: 'Training' },
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80',
    register: 'volunteer.html'
  },
  {
    id: 'green-day-july',
    date: '2026-07-05',
    time: '07:00 AM',
    location: { en: 'Bole Sub-City, Addis Ababa', am: 'ቦሌ ክ/ከተማ, አዲስ አበባ' },
    title: { en: 'National Green Day — Tree Planting', am: 'National Green Day — Tree Planting' },
    desc: { en: 'Join 500+ volunteers planting seedlings for Ethiopia\'s Green Legacy.', am: 'Join 500+ volunteers planting seedlings.' },
    category: { en: 'Creation Care', am: 'Creation Care' },
    image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&q=80',
    register: 'volunteer.html'
  },
  {
    id: 'peace-match-july',
    date: '2026-07-18',
    time: '03:00 PM',
    location: { en: 'Addis Ababa Stadium', am: 'አዲስ አበባ Stadium' },
    title: { en: 'PALM Peace Football — Community Match', am: 'PALM Peace Football — Community Match' },
    desc: { en: 'Local peace match bringing youth communities together.', am: 'Local peace match bringing youth together.' },
    category: { en: 'Youth', am: 'Youth' },
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&q=80',
    register: 'sectors/football-team.html'
  },
  {
    id: 'break-silence-panel',
    date: '2026-08-08',
    time: '10:00 AM',
    location: { en: 'Addis Ababa — PALM Media Hub', am: 'አዲስ አበባ — PALM Media Hub' },
    title: { en: 'Break the Silence — Panel Discussion', am: 'Break the Silence — Panel Discussion' },
    desc: { en: 'Religious leaders discuss institutional accountability and healing.', am: 'Religious leaders discuss accountability and healing.' },
    category: { en: 'Advocacy', am: 'Advocacy' },
    image: 'https://images.unsplash.com/photo-1478737270239-2f02ca77fc88?w=600&q=80',
    register: 'contact.html'
  }
];

function formatEventDate(dateStr, lang) {
  return new Date(dateStr + 'T12:00:00').toLocaleDateString(lang === 'am' ? 'am-ET' : 'en-US', {
    weekday: 'short', month: 'long', day: 'numeric', year: 'numeric'
  });
}

function renderEventCard(event, lang, base, compact) {
  const d = new Date(event.date);
  const day = d.getDate();
  const month = d.toLocaleDateString(lang === 'am' ? 'am-ET' : 'en-US', { month: 'short' });
  return `
    <article class="event-card${compact ? ' event-card-compact' : ''}">
      <div class="event-date-badge">
        <span class="event-day">${day}</span>
        <span class="event-month">${month}</span>
      </div>
      <div class="event-card-image">
        <img src="${event.image}" alt="" loading="lazy">
        <span class="event-category">${event.category[lang]}</span>
      </div>
      <div class="event-card-body">
        <h3>${event.title[lang]}</h3>
        <p class="event-meta">🕐 ${event.time} · 📍 ${event.location[lang]}</p>
        <p>${event.desc[lang]}</p>
        <a href="${base}${event.register}" class="event-register-btn">${lang === 'am' ? 'Register' : 'Register'} →</a>
      </div>
    </article>
  `;
}

function initEventsPreview() {
  const el = document.getElementById('events-preview');
  if (!el || typeof palmEvents === 'undefined') return;

  function render() {
    const lang = localStorage.getItem('palm-lang') || 'en';
    const base = typeof getBasePath === 'function' ? getBasePath() : '';
    const upcoming = [...palmEvents]
      .filter(e => new Date(e.date) >= new Date('2026-06-01'))
      .sort((a, b) => new Date(a.date) - new Date(b.date))
      .slice(0, 3);
    el.innerHTML = upcoming.map(e => renderEventCard(e, lang, base, true)).join('');
  }

  render();
  window.addEventListener('palm-lang-change', render);
}

function initEventsListing() {
  const el = document.getElementById('events-list');
  if (!el || typeof palmEvents === 'undefined') return;

  function render() {
    const lang = localStorage.getItem('palm-lang') || 'en';
    const base = typeof getBasePath === 'function' ? getBasePath() : '';
    const sorted = [...palmEvents].sort((a, b) => new Date(a.date) - new Date(b.date));
    el.innerHTML = sorted.map(e => renderEventCard(e, lang, base, false)).join('');
  }

  render();
  window.addEventListener('palm-lang-change', render);
}

document.addEventListener('DOMContentLoaded', () => {
  initEventsPreview();
  initEventsListing();
});
