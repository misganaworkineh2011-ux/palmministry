document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initHeroSlider();
  initMobileMenu();
  initAccordions();
  initModals();
  initWizard();
  initForms();
  initAudioPlayer();
  initScrollHeader();
  initScrollReveal();
  initCounters();
  initGlobalComponents();
});

function getBasePath() {
  const path = window.location.pathname;
  if (path.includes('/blog/') || path.includes('/sectors/')) return '../';
  return '';
}

function initHeader() {
  const base = getBasePath();
  const header = document.getElementById('site-header');
  if (!header) return;

  header.innerHTML = `
    <div class="container header-inner">
      <a href="${base}index.html" class="logo-link">
        <img src="${base}assets/images/logo.png" alt="PALM Ministry Logo">
        <div class="logo-text">
          PALM
          <span>Peace Advocacy Leadership Ministry</span>
        </div>
      </a>
      <button class="menu-toggle" aria-label="Toggle menu" id="menu-toggle">
        <span></span><span></span><span></span>
      </button>
      <nav class="main-nav" id="main-nav">
        <ul class="nav-list">
          <li><a href="${base}index.html" data-page="home" data-i18n="nav_home">Home</a></li>
          <li><a href="${base}about.html" data-page="about" data-i18n="nav_about">About Us</a></li>
          <li class="nav-dropdown" id="sectors-dropdown">
            <button class="nav-link" data-i18n="nav_sectors">Sectors of Ministry ▾</button>
            <ul class="nav-dropdown-menu">
              <li><a href="${base}sectors/leadership-training.html" data-i18n="sector_leadership">Peace Advocacy & Leadership Training</a></li>
              <li><a href="${base}sectors/advocacy-abused.html" data-i18n="sector_advocacy">Advocacy for the Abused</a></li>
              <li><a href="${base}sectors/peace-missionaries.html" data-i18n="sector_missionaries">Peace Missionaries Deployment</a></li>
              <li><a href="${base}sectors/creation-care.html" data-i18n="sector_creation">Creation Care & Environmental Peacebuilding</a></li>
              <li><a href="${base}sectors/football-team.html" data-i18n="sector_football">PALM Peace Football Team</a></li>
            </ul>
          </li>
          <li class="nav-dropdown" id="involved-dropdown">
            <button class="nav-link" data-i18n="nav_involved">Get Involved ▾</button>
            <ul class="nav-dropdown-menu">
              <li><a href="${base}membership.html" data-i18n="nav_membership">Membership</a></li>
              <li><a href="${base}volunteer.html" data-i18n="nav_volunteer">Volunteer</a></li>
              <li><a href="${base}events.html" data-i18n="nav_events">Events</a></li>
              <li><a href="${base}support.html" data-i18n="nav_support">Support Us</a></li>
            </ul>
          </li>
          <li><a href="${base}blog.html" data-page="blog" data-i18n="nav_blog">Blog</a></li>
          <li><a href="${base}media.html" data-page="media" data-i18n="nav_media">Media</a></li>
          <li><a href="${base}contact.html" data-page="contact" data-i18n="nav_contact">Contact</a></li>
        </ul>
        <div class="lang-toggle">
          <button class="lang-btn active" data-lang="en">EN</button>
          <button class="lang-btn" data-lang="am">አማ</button>
        </div>
      </nav>
    </div>
  `;

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });

  const currentPage = document.body.dataset.page;
  if (currentPage) {
    const pageKey = currentPage === 'blog-post' ? 'blog' : currentPage;
    const activeLink = header.querySelector(`[data-page="${pageKey}"]`);
    if (activeLink) activeLink.classList.add('active');
  }

  if (currentPage && currentPage.startsWith('sector-')) {
    header.querySelector('#sectors-dropdown .nav-link')?.classList.add('active');
  }
  if (['membership', 'volunteer', 'events', 'support'].includes(currentPage)) {
    header.querySelector('#involved-dropdown .nav-link')?.classList.add('active');
  }
}

function initFooter() {
  const base = getBasePath();
  const footer = document.getElementById('site-footer');
  if (!footer) return;

  footer.innerHTML = `
    <div class="newsletter-bar">
      <div class="container newsletter-inner">
        <div class="newsletter-text">
          <h4 data-i18n="newsletter_title">Stay Connected with PALM</h4>
          <p data-i18n="newsletter_desc">Receive updates on events, teachings, and peace advocacy resources.</p>
        </div>
        <form class="newsletter-form" data-form="newsletter">
          <input type="email" name="email" data-i18n-placeholder="newsletter_placeholder" placeholder="Your email address" required>
          <button type="submit" class="btn btn-primary btn-sm" data-i18n="newsletter_btn">Subscribe</button>
        </form>
        <div class="newsletter-success form-success">
          <span data-i18n="newsletter_success">✓ You're subscribed. Thank you!</span>
        </div>
      </div>
    </div>
    <div class="footer-top-accent">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <img src="${base}assets/images/logo.png" alt="PALM Ministry">
          <p data-i18n="footer_desc">Peace Advocacy Leadership Ministry — envisioning a society where structural and cultural justice prevails through transformational leadership and gospel peace.</p>
        </div>
        <div class="footer-col">
          <h4 data-i18n="footer_quick">Quick Links</h4>
          <ul>
            <li><a href="${base}index.html" data-i18n="nav_home">Home</a></li>
            <li><a href="${base}about.html" data-i18n="nav_about">About Us</a></li>
            <li><a href="${base}team.html" data-i18n="nav_team">Our Team</a></li>
            <li><a href="${base}faq.html" data-i18n="nav_faq">FAQ</a></li>
            <li><a href="${base}contact.html" data-i18n="nav_contact">Contact</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4 data-i18n="footer_get_involved">Get Involved</h4>
          <ul>
            <li><a href="${base}membership.html" data-i18n="nav_membership">Membership</a></li>
            <li><a href="${base}volunteer.html" data-i18n="nav_volunteer">Volunteer</a></li>
            <li><a href="${base}events.html" data-i18n="nav_events">Events</a></li>
            <li><a href="${base}support.html" data-i18n="nav_support">Support Us</a></li>
            <li><a href="${base}blog.html" data-i18n="nav_blog">Blog</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4 data-i18n="footer_sectors">Ministries</h4>
          <ul>
            <li><a href="${base}sectors/leadership-training.html" data-i18n="sector_leadership">Leadership Training</a></li>
            <li><a href="${base}sectors/advocacy-abused.html" data-i18n="sector_advocacy">Advocacy for the Abused</a></li>
            <li><a href="${base}sectors/creation-care.html" data-i18n="sector_creation">Creation Care</a></li>
            <li><a href="${base}sectors/football-team.html" data-i18n="sector_football">Football Team</a></li>
            <li><a href="${base}media.html" data-i18n="nav_media">Media Hub</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span data-i18n="footer_rights">© 2026 PALM Ministry. All rights reserved.</span>
        <div class="footer-legal">
          <a href="${base}privacy.html" data-i18n="nav_privacy">Privacy Policy</a>
        </div>
        <div class="footer-values">
          <span class="footer-value">🕊️ <span data-i18n="footer_peace">Peace</span></span>
          <span class="footer-value">👥 <span data-i18n="footer_leadership">Leadership</span></span>
          <span class="footer-value">💚 <span data-i18n="footer_healing">Healing</span></span>
          <span class="footer-value">🔄 <span data-i18n="footer_transformation">Transformation</span></span>
        </div>
      </div>
    </div>
    </div>
  `;

  if (typeof setLanguage === 'function') {
    setLanguage(localStorage.getItem('palm-lang') || 'en');
  }
}

document.addEventListener('DOMContentLoaded', initFooter);

function initHeroSlider() {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.hero-dot');
  if (!slides.length) return;

  let current = 0;
  const total = slides.length;

  function goTo(index) {
    slides[current].classList.remove('active');
    dots[current]?.classList.remove('active');
    current = index;
    slides[current].classList.add('active');
    dots[current]?.classList.add('active');
  }

  dots.forEach((dot, i) => dot.addEventListener('click', () => goTo(i)));
  setInterval(() => goTo((current + 1) % total), 5000);
}

function initMobileMenu() {
  document.addEventListener('click', e => {
    const toggle = e.target.closest('#menu-toggle');
    const nav = document.getElementById('main-nav');
    if (toggle && nav) nav.classList.toggle('open');

    const dropdownBtn = e.target.closest('.nav-dropdown .nav-link');
    if (dropdownBtn && window.innerWidth <= 768) {
      dropdownBtn.closest('.nav-dropdown').classList.toggle('open');
    }
  });
}

function initAccordions() {
  document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const item = header.closest('.accordion-item');
      const wasOpen = item.classList.contains('open');
      item.closest('.accordion')?.querySelectorAll('.accordion-item').forEach(i => i.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    });
  });
}

function initModals() {
  document.querySelectorAll('[data-modal]').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const modal = document.getElementById(trigger.dataset.modal);
      if (modal) modal.classList.add('open');
    });
  });

  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', e => {
      if (e.target === overlay || e.target.closest('.modal-close')) {
        overlay.classList.remove('open');
      }
    });
  });
}

function initWizard() {
  const wizard = document.getElementById('membership-wizard');
  if (!wizard) return;

  let step = 1;
  const totalSteps = 3;
  const panels = wizard.querySelectorAll('.wizard-panel');
  const steps = wizard.querySelectorAll('.wizard-step');

  const nextBtn = wizard.querySelector('#wizard-next');
  const backBtn = wizard.querySelector('#wizard-back');
  const submitBtn = wizard.querySelector('#wizard-submit');

  function updateWizardButtons() {
    if (backBtn) backBtn.style.visibility = step > 1 ? 'visible' : 'hidden';
    if (nextBtn) nextBtn.style.display = step < totalSteps ? 'inline-flex' : 'none';
    if (submitBtn) submitBtn.style.display = step === totalSteps ? 'inline-flex' : 'none';
  }

  function showStep(n) {
    step = n;
    panels.forEach((p, i) => p.classList.toggle('active', i + 1 === step));
    steps.forEach((s, i) => {
      s.classList.toggle('active', i + 1 === step);
      s.classList.toggle('completed', i + 1 < step);
    });
    updateWizardButtons();
  }

  wizard.querySelector('#wizard-next')?.addEventListener('click', () => {
    if (step === 1) {
      const dob = wizard.querySelector('#mem-dob')?.value;
      if (dob) {
        const age = Math.floor((Date.now() - new Date(dob)) / (365.25 * 24 * 60 * 60 * 1000));
        if (age < 18) {
          alert('You must be 18 years or older to apply for membership (Article 16).');
          return;
        }
      }
    }
    if (step === 2) {
      const yes = wizard.querySelector('input[name="covenant"]:checked');
      if (!yes || yes.value !== 'yes') {
        alert('You must fully subscribe to PALM\'s Statement of Faith and vision to apply.');
        return;
      }
    }
    if (step < totalSteps) showStep(step + 1);
  });

  wizard.querySelector('#wizard-back')?.addEventListener('click', () => {
    if (step > 1) showStep(step - 1);
  });

  wizard.querySelector('#wizard-submit')?.addEventListener('click', e => {
    e.preventDefault();
    wizard.querySelector('.form-section')?.style.setProperty('display', 'none');
    wizard.querySelector('.success-message')?.classList.add('show');
  });
}

function initForms() {
  document.querySelectorAll('form[data-form]').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const parent = form.closest('.newsletter-inner') || form.parentElement;
      const success = parent?.querySelector('.form-success') || form.querySelector('.form-success');
      if (success) {
        form.style.display = 'none';
        success.classList.add('show');
      }
    });
  });
}

function initAudioPlayer() {
  document.querySelectorAll('.audio-track').forEach(track => {
    track.addEventListener('click', () => {
      document.querySelectorAll('.audio-track').forEach(t => t.classList.remove('playing'));
      track.classList.add('playing');
      const btn = track.querySelector('.track-play');
      if (btn) btn.textContent = '⏸';
    });
  });
}

function initScrollHeader() {
  const header = document.getElementById('site-header');
  if (!header) return;
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 20);
  });
}

function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  reveals.forEach(el => observer.observe(el));
}

function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  const formatNum = (n, el) => {
    const suffix = el.dataset.suffix || (n >= 1000 ? '+' : '+');
    if (n >= 10000) return '10K+';
    if (n >= 1000) return Math.floor(n / 1000) + 'K+';
    return n + suffix;
  };

  const animate = el => {
    const target = parseInt(el.dataset.count, 10);
    const duration = 1800;
    const start = performance.now();

    const tick = now => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(target * eased);
      el.textContent = formatNum(current, el);
      if (progress < 1) requestAnimationFrame(tick);
      else el.textContent = formatNum(target, el);
    };

    requestAnimationFrame(tick);
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animate(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(el => observer.observe(el));
}

function initGlobalComponents() {
  const base = getBasePath();
  if (!document.getElementById('floating-help')) {
    const help = document.createElement('a');
    help.id = 'floating-help';
    help.className = 'floating-help';
    help.href = `${base}sectors/advocacy-abused.html`;
    help.title = 'Confidential Support';
    help.innerHTML = `<span class="floating-help-icon">🔒</span><span class="floating-help-text" data-i18n="float_help">Get Help</span>`;
    document.body.appendChild(help);
  }

  if (!document.getElementById('back-to-top')) {
    const btn = document.createElement('button');
    btn.id = 'back-to-top';
    btn.className = 'back-to-top';
    btn.setAttribute('aria-label', 'Back to top');
    btn.innerHTML = '↑';
    document.body.appendChild(btn);
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    window.addEventListener('scroll', () => {
      btn.classList.toggle('visible', window.scrollY > 400);
    });
  }

  if (typeof setLanguage === 'function') {
    document.querySelectorAll('#floating-help [data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const lang = localStorage.getItem('palm-lang') || 'en';
      if (translations?.[lang]?.[key]) el.textContent = translations[lang][key];
    });
  }
}
