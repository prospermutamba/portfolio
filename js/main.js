/* ══════════════════════════════════════════════
   GHOST DESIGN LAB — MAIN JAVASCRIPT
   Author: Prosper Mutamba Joseph
   ══════════════════════════════════════════════ */

'use strict';

/* ─── STATE ──────────────────────────────────── */
let currentLang    = 'en';
let currentFilter  = 'all';
let currentSlide   = 0;
let testiTimer     = null;

/* ─── PROJECT DATA ───────────────────────────── */
/* HOW TO ADD A NEW PROJECT:
   1. Add your image to /assets/images/portfolio/project-07.jpg
   2. Copy one object below and fill in your details
   3. Add a new <article> in index.html with the right data-category
   ────────────────────────────────────────────── */
const PROJECTS = [
  {
    index: 0,
    name:  { en: "Volta Energy", fr: "Volta Energy" },
    cat:   { en: "Logo · Brand Identity", fr: "Logo · Identité de Marque" },
    img:   "assets/images/portfolio/project-01.jpg",
    desc:  {
      en: "Complete brand identity for a renewable energy startup. The project included logo design, color system, typography selection, stationery and brand guidelines for digital and print use.",
      fr: "Identité de marque complète pour une startup d'énergie renouvelable. Le projet comprenait le logo, le système de couleurs, la sélection typographique, la papeterie et la charte graphique."
    },
    tags: ["Logo", "Brand", "Guidelines"],
  },
  {
    index: 1,
    name:  { en: "Noir Collective", fr: "Noir Collective" },
    cat:   { en: "Brand · UI/UX Design", fr: "Marque · Design UI/UX" },
    img:   "assets/images/portfolio/project-02.jpg",
    desc:  {
      en: "UI/UX redesign and brand system for a creative collective. Delivered Figma prototypes, design tokens and a comprehensive component library for their digital platforms.",
      fr: "Refonte UI/UX et système de marque pour un collectif créatif. Livraison de prototypes Figma, tokens de design et bibliothèque de composants pour leurs plateformes numériques."
    },
    tags: ["UI/UX", "Figma", "Prototype"],
  },
  {
    index: 2,
    name:  { en: "Bloom Studio", fr: "Bloom Studio" },
    cat:   { en: "Social Media Design", fr: "Design Réseaux Sociaux" },
    img:   "assets/images/portfolio/project-03.jpg",
    desc:  {
      en: "Social media design system for a beauty brand. Created a suite of Instagram, Facebook and LinkedIn templates that increased engagement by 40% in the first month.",
      fr: "Système de design réseaux sociaux pour une marque beauté. Création de templates Instagram, Facebook et LinkedIn qui ont augmenté l'engagement de 40% dès le premier mois."
    },
    tags: ["Instagram", "Facebook", "Templates"],
  },
  {
    index: 3,
    name:  { en: "Apex Sports", fr: "Apex Sports" },
    cat:   { en: "Logo Design", fr: "Création de Logo" },
    img:   "assets/images/portfolio/project-04.jpg",
    desc:  {
      en: "Bold, dynamic logo design for a sports apparel brand. The emblem communicates strength and movement, working seamlessly across apparel, digital and signage.",
      fr: "Logo fort et dynamique pour une marque de vêtements sportifs. L'emblème communique force et mouvement, et fonctionne parfaitement sur les vêtements, le digital et l'affichage."
    },
    tags: ["Emblem", "Apparel", "Branding"],
  },
  {
    index: 4,
    name:  { en: "Maison Noir", fr: "Maison Noir" },
    cat:   { en: "Print Design", fr: "Design Print" },
    img:   "assets/images/portfolio/project-05.jpg",
    desc:  {
      en: "Editorial print design for a luxury fashion house. Included lookbook layout, business stationery, hangtags and packaging design — all print-ready at CMYK precision.",
      fr: "Design print éditorial pour une maison de mode de luxe. Comprend le lookbook, la papeterie, les étiquettes et le design des emballages — tous livrés prêts pour impression en CMYK."
    },
    tags: ["Lookbook", "Packaging", "Editorial"],
  },
  {
    index: 5,
    name:  { en: "Kinetic Reels", fr: "Kinetic Reels" },
    cat:   { en: "Video Editing", fr: "Montage Vidéo" },
    img:   "assets/images/portfolio/project-06.jpg",
    desc:  {
      en: "Brand films and motion graphics for a production agency. Edited high-impact reels for social media, corporate presentations and event showcases using Premiere Pro and After Effects.",
      fr: "Films de marque et motion graphics pour une agence de production. Montage de reels impactants pour les réseaux sociaux, présentations corporate et événements avec Premiere Pro."
    },
    tags: ["Premiere Pro", "Motion", "Reels"],
  },
];

/* ═══════════════════════════════════════════════
   LOADER
   ═══════════════════════════════════════════════ */
function initLoader() {
  const loader   = document.getElementById('loader');
  const progress = document.getElementById('loader-progress');
  if (!loader) return;

  let pct = 0;
  const tick = setInterval(() => {
    pct += Math.random() * 18 + 6;
    if (pct >= 100) {
      pct = 100;
      clearInterval(tick);
      progress.style.width = '100%';
      setTimeout(() => {
        loader.classList.add('hidden');
        document.body.classList.add('hero-loaded');
        triggerHeroAnimations();
      }, 400);
    } else {
      progress.style.width = pct + '%';
    }
  }, 100);
}

function triggerHeroAnimations() {
  // Trigger reveal-up elements in hero
  document.querySelectorAll('.hero .reveal-up, .hero .reveal-right').forEach(el => {
    el.classList.add('visible');
  });
  // Start counter
  initCounters();
}

/* ═══════════════════════════════════════════════
   CUSTOM CURSOR
   ═══════════════════════════════════════════════ */
function initCursor() {
  const cursor   = document.getElementById('cursor');
  const follower = document.getElementById('cursor-follower');
  if (!cursor || !follower) return;
  if (window.matchMedia('(pointer: coarse)').matches) return;

  let mouseX = 0, mouseY = 0;
  let follX  = 0, follY  = 0;

  document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = mouseX + 'px';
    cursor.style.top  = mouseY + 'px';
  });

  function animateFollower() {
    follX += (mouseX - follX) * 0.12;
    follY += (mouseY - follY) * 0.12;
    follower.style.left = follX + 'px';
    follower.style.top  = follY + 'px';
    requestAnimationFrame(animateFollower);
  }
  animateFollower();

  // Hover effect on interactive elements
  const hoverTargets = 'a, button, .portfolio-card, .service-card, .filter-btn';
  document.querySelectorAll(hoverTargets).forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.classList.add('hovering');
      follower.classList.add('hovering');
    });
    el.addEventListener('mouseleave', () => {
      cursor.classList.remove('hovering');
      follower.classList.remove('hovering');
    });
  });
}

/* ═══════════════════════════════════════════════
   NAVIGATION
   ═══════════════════════════════════════════════ */
function initNav() {
  const nav    = document.getElementById('nav');
  const burger = document.getElementById('burger');
  const mMenu  = document.getElementById('mobile-menu');
  const mLinks = document.querySelectorAll('.mobile-link');

  // Scroll behaviour
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    nav.classList.toggle('scrolled', y > 60);
    lastScroll = y;
    updateActiveLink();
  }, { passive: true });

  // Burger
  burger.addEventListener('click', () => {
    const open = burger.classList.toggle('open');
    burger.setAttribute('aria-expanded', open);
    mMenu.classList.toggle('open', open);
    mMenu.setAttribute('aria-hidden', !open);
    document.body.style.overflow = open ? 'hidden' : '';
  });

  // Close on mobile link click
  mLinks.forEach(link => {
    link.addEventListener('click', () => {
      burger.classList.remove('open');
      burger.setAttribute('aria-expanded', false);
      mMenu.classList.remove('open');
      mMenu.setAttribute('aria-hidden', true);
      document.body.style.overflow = '';
    });
  });

  // Close on outside click
  mMenu.addEventListener('click', e => {
    if (e.target === mMenu) {
      burger.classList.remove('open');
      mMenu.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
}

function updateActiveLink() {
  const sections = ['hero','about','services','portfolio','skills','testimonials','contact'];
  const offset   = 120;
  let current    = 'hero';

  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el && window.scrollY >= el.offsetTop - offset) current = id;
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href').replace('#', '');
    link.classList.toggle('active', href === current);
  });
}

/* ═══════════════════════════════════════════════
   LANGUAGE SWITCHER
   ═══════════════════════════════════════════════ */
function initLang() {
  // All lang buttons (nav + mobile)
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      if (lang === currentLang) return;
      setLang(lang);
    });
  });

  // Load from localStorage or default EN
  const saved = localStorage.getItem('gdl_lang') || 'en';
  setLang(saved, false);
}

function setLang(lang, animate = true) {
  if (!TRANSLATIONS[lang]) return;
  currentLang = lang;
  localStorage.setItem('gdl_lang', lang);

  // Update <html> lang
  document.documentElement.lang = lang;

  // Update meta description for SEO
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc && lang === 'fr') {
    metaDesc.content = "Ghost Design Lab par Prosper Mutamba Joseph. Création de logo premium, identité de marque, UI/UX, design réseaux sociaux et montage vidéo. Disponible pour projets freelance.";
  } else if (metaDesc) {
    metaDesc.content = "Ghost Design Lab by Prosper Mutamba Joseph. Premium logo design, brand identity, UI/UX, social media design and video editing. Available for freelance projects worldwide.";
  }

  // Translate all data-key elements
  const t = TRANSLATIONS[lang];
  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.dataset.key;
    if (!t[key]) return;
    const value = t[key];

    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = value;
    } else if (el.tagName === 'OPTION') {
      el.textContent = value;
    } else {
      // Support \n line breaks
      el.innerHTML = value.replace(/\n/g, '<br>');
    }
  });

  // Update active lang buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    const active = btn.dataset.lang === lang;
    btn.classList.toggle('active', active);
    btn.setAttribute('aria-pressed', active);
  });

  // Animate body on lang change
  if (animate) {
    document.body.style.opacity = '0.85';
    setTimeout(() => { document.body.style.opacity = '1'; }, 200);
  }
}

/* ═══════════════════════════════════════════════
   SCROLL REVEAL
   ═══════════════════════════════════════════════ */
function initScrollReveal() {
  const targets = document.querySelectorAll(
    '.reveal-up:not(.hero .reveal-up), .reveal-right:not(.hero .reveal-right), .service-card, .portfolio-item'
  );

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  targets.forEach(el => observer.observe(el));
}

/* ═══════════════════════════════════════════════
   COUNTER ANIMATION
   ═══════════════════════════════════════════════ */
function initCounters() {
  document.querySelectorAll('[data-count]').forEach(el => {
    const target  = parseInt(el.dataset.count, 10);
    const dur     = 1600;
    const start   = performance.now();

    function step(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / dur, 1);
      // ease out quad
      const eased = 1 - (1 - progress) * (1 - progress);
      el.textContent = Math.floor(eased * target);
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = target;
    }
    requestAnimationFrame(step);
  });
}

/* ═══════════════════════════════════════════════
   PORTFOLIO FILTER
   ═══════════════════════════════════════════════ */
function initPortfolio() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const items      = document.querySelectorAll('.portfolio-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;
      if (filter === currentFilter) return;
      currentFilter = filter;

      // Update active button
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Show/hide items
      items.forEach((item, i) => {
        const cats = item.dataset.category || '';
        const show = filter === 'all' || cats.includes(filter);

        if (show) {
          item.classList.remove('hidden');
          // stagger reveal
          setTimeout(() => item.classList.add('visible'), i * 60);
        } else {
          item.classList.add('hidden');
          item.classList.remove('visible');
        }
      });
    });
  });

  // Open modal on portfolio card click
  document.querySelectorAll('.portfolio-card').forEach(card => {
    card.addEventListener('click', () => {
      const item  = card.closest('.portfolio-item');
      const index = parseInt(item.dataset.index, 10);
      openModal(index);
    });
  });
}

/* ═══════════════════════════════════════════════
   MODAL
   ═══════════════════════════════════════════════ */
function openModal(index) {
  const overlay = document.getElementById('modal-overlay');
  const body    = document.getElementById('modal-body');
  const project = PROJECTS[index];
  if (!project || !overlay || !body) return;

  const lang = currentLang;
  body.innerHTML = `
    <img src="${project.img}" alt="${project.name[lang]}" class="modal-img" loading="lazy" />
    <p class="modal-cat">${project.cat[lang]}</p>
    <h2 class="modal-title">${project.name[lang]}</h2>
    <p class="modal-desc">${project.desc[lang]}</p>
    <div style="display:flex;gap:0.5rem;flex-wrap:wrap;margin-top:1.5rem;">
      ${project.tags.map(t => `<span style="font-size:.7rem;padding:4px 12px;border:1px solid rgba(255,255,255,.12);border-radius:100px;color:#888;letter-spacing:.08em;">${t}</span>`).join('')}
    </div>
  `;

  overlay.removeAttribute('hidden');
  document.body.style.overflow = 'hidden';

  // Focus trap
  setTimeout(() => {
    document.getElementById('modal-close').focus();
  }, 50);
}

function closeModal() {
  const overlay = document.getElementById('modal-overlay');
  if (!overlay) return;
  overlay.setAttribute('hidden', '');
  document.body.style.overflow = '';
}

function initModal() {
  const overlay = document.getElementById('modal-overlay');
  const closeBtn = document.getElementById('modal-close');
  if (!overlay || !closeBtn) return;

  closeBtn.addEventListener('click', closeModal);

  overlay.addEventListener('click', e => {
    if (e.target === overlay) closeModal();
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });
}

/* ═══════════════════════════════════════════════
   SKILL BARS
   ═══════════════════════════════════════════════ */
function initSkillBars() {
  const bars = document.querySelectorAll('.skill-bar-fill');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const fill = entry.target;
        const pct  = fill.dataset.pct;
        fill.style.width = pct + '%';
        observer.unobserve(fill);
      }
    });
  }, { threshold: 0.5 });

  bars.forEach(bar => observer.observe(bar));
}

/* ═══════════════════════════════════════════════
   TESTIMONIALS SLIDER
   ═══════════════════════════════════════════════ */
function initTestimonials() {
  const slides   = document.querySelectorAll('.testi-slide');
  const dots     = document.querySelectorAll('.testi-dot');
  const prevBtn  = document.getElementById('testi-prev');
  const nextBtn  = document.getElementById('testi-next');
  if (!slides.length) return;

  function goTo(i) {
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    currentSlide = (i + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
  }

  prevBtn.addEventListener('click', () => { clearInterval(testiTimer); goTo(currentSlide - 1); startAutoplay(); });
  nextBtn.addEventListener('click', () => { clearInterval(testiTimer); goTo(currentSlide + 1); startAutoplay(); });

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      clearInterval(testiTimer);
      goTo(parseInt(dot.dataset.index, 10));
      startAutoplay();
    });
  });

  function startAutoplay() {
    testiTimer = setInterval(() => goTo(currentSlide + 1), 5000);
  }
  startAutoplay();
}

/* ═══════════════════════════════════════════════
   CONTACT FORM
   ═══════════════════════════════════════════════ */
function initContactForm() {
  const form    = document.getElementById('contact-form');
  const submit  = document.getElementById('form-submit');
  const success = document.getElementById('form-success');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const t = TRANSLATIONS[currentLang];

    // Validation
    let valid = true;

    const name    = form.querySelector('#contact-name');
    const email   = form.querySelector('#contact-email');
    const message = form.querySelector('#contact-message');

    const errName    = document.getElementById('error-name');
    const errEmail   = document.getElementById('error-email');
    const errMessage = document.getElementById('error-message');

    [errName, errEmail, errMessage].forEach(e => { if (e) e.textContent = ''; });

    if (!name.value.trim()) {
      if (errName) errName.textContent = t.form_error_name;
      name.focus();
      valid = false;
    }
    const emailRx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRx.test(email.value.trim())) {
      if (errEmail) errEmail.textContent = t.form_error_email;
      if (valid) email.focus();
      valid = false;
    }
    if (!message.value.trim()) {
      if (errMessage) errMessage.textContent = t.form_error_message;
      if (valid) message.focus();
      valid = false;
    }

    if (!valid) return;

    // Submit (Formspree or Netlify — configure endpoint below)
    submit.classList.add('loading');
    submit.disabled = true;

    // ── OPTION A: Formspree ──────────────────────
    // 1. Create a free account at https://formspree.io
    // 2. Create a form and get your endpoint (e.g. https://formspree.io/f/xxxxxabc)
    // 3. Replace the URL below:
    const FORM_ENDPOINT = 'https://formspree.io/f/mlgkpgwp';

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          name:    name.value.trim(),
          email:   email.value.trim(),
          service: form.querySelector('#contact-service').value,
          message: message.value.trim(),
        })
      });

      if (res.ok) {
        form.reset();
        success.hidden = false;
        success.textContent = t.form_success;
      } else {
        throw new Error('Network error');
      }
    } catch {
      // Fallback: open mailto
      const mailBody = encodeURIComponent(
        `Name: ${name.value}\nEmail: ${email.value}\nMessage: ${message.value}`
      );
      window.location.href = `mailto:ghostdesignlab46@gmail.com?subject=Project Inquiry&body=${mailBody}`;
    } finally {
      submit.classList.remove('loading');
      submit.disabled = false;
    }
  });
}

/* ═══════════════════════════════════════════════
   SMOOTH SCROLL (anchor links)
   ═══════════════════════════════════════════════ */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const id = link.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if (!el) return;
      e.preventDefault();
      const offset = 80;
      const y = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    });
  });
}

/* ═══════════════════════════════════════════════
   FOOTER YEAR
   ═══════════════════════════════════════════════ */
function initFooter() {
  const el = document.getElementById('footer-year');
  if (el) el.textContent = new Date().getFullYear();
}

/* ═══════════════════════════════════════════════
   PARALLAX (subtle, on desktop only)
   ═══════════════════════════════════════════════ */
function initParallax() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (window.innerWidth < 768) return;

  const grid = document.querySelector('.hero-bg-grid');
  window.addEventListener('scroll', () => {
    if (!grid) return;
    const y = window.scrollY;
    grid.style.transform = `translateY(${y * 0.3}px)`;
  }, { passive: true });
}

/* ═══════════════════════════════════════════════
   INIT ALL
   ═══════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  initLoader();
  initCursor();
  initNav();
  initLang();
  initScrollReveal();
  initPortfolio();
  initModal();
  initSkillBars();
  initTestimonials();
  initContactForm();
  initSmoothScroll();
  initFooter();
  initParallax();
});
