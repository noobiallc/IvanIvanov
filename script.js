/* BHDR INC. — script.js */

/* ---- Mobile nav toggle ---- */
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobile-nav');

if (hamburger && mobileNav) {
  hamburger.addEventListener('click', function() {
    const isOpen = mobileNav.classList.toggle('open');
    hamburger.classList.toggle('is-open', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
  });

  document.addEventListener('click', function(e) {
    if (!hamburger.contains(e.target) && !mobileNav.contains(e.target)) {
      mobileNav.classList.remove('open');
      hamburger.classList.remove('is-open');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });
}

/* ---- Mobile Products accordion ---- */
const mobileProductsToggle = document.getElementById('mobile-products-toggle');
const mobileProductsAccordion = document.getElementById('mobile-products-accordion');

if (mobileProductsToggle && mobileProductsAccordion) {
  mobileProductsToggle.addEventListener('click', function(e) {
    e.stopPropagation();
    const isOpen = mobileProductsAccordion.classList.toggle('open');
    mobileProductsToggle.classList.toggle('open', isOpen);
  });
}

/* ---- Active nav link ---- */
(function() {
  const current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__link').forEach(function(link) {
    const href = link.getAttribute('href');
    if (href && (href === current || (current === '' && href === 'index.html'))) {
      link.classList.add('active');
    }
  });
})();

/* ---- Products mega menu dropdown ---- */
const dropdowns = document.querySelectorAll('.nav-dropdown');
dropdowns.forEach(function(dropdown) {
  const toggle = dropdown.querySelector('.nav-dropdown-toggle');
  if (!toggle) return;
  toggle.addEventListener('click', function(e) {
    e.stopPropagation();
    const isOpen = dropdown.classList.contains('open');
    dropdowns.forEach(function(d) { d.classList.remove('open'); });
    if (!isOpen) {
      dropdown.classList.add('open');
      toggle.setAttribute('aria-expanded', 'true');
    } else {
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
});

document.addEventListener('click', function() {
  dropdowns.forEach(function(d) {
    d.classList.remove('open');
    const t = d.querySelector('.nav-dropdown-toggle');
    if (t) t.setAttribute('aria-expanded', 'false');
  });
});

/* ---- Project filter (projects.html) ---- */
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card[data-category]');

filterBtns.forEach(function(btn) {
  btn.addEventListener('click', function() {
    filterBtns.forEach(function(b) { b.classList.remove('active'); });
    btn.classList.add('active');
    const cat = btn.getAttribute('data-filter');
    projectCards.forEach(function(card) {
      if (cat === 'all' || card.getAttribute('data-category') === cat) {
        card.classList.remove('project-card--hidden');
      } else {
        card.classList.add('project-card--hidden');
      }
    });
  });
});

/* ---- Consultation form (contact.html) ---- */
const consultForm = document.getElementById('consultation-form');
if (consultForm) {
  const pageUrlField = consultForm.querySelector('input[name="page_url"]');
  if (pageUrlField) pageUrlField.value = window.location.href;

  consultForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    const submitBtn = consultForm.querySelector('[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending…';
    submitBtn.disabled = true;

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(new FormData(consultForm)).toString(),
      });
      if (response.ok) {
        consultForm.style.display = 'none';
        const success = document.getElementById('form-success');
        if (success) success.classList.add('show');
      } else {
        throw new Error('error');
      }
    } catch (_) {
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
      alert('Something went wrong. Please email us at info@bhdrinc.com or call (000) 000-0000.');
    }
  });
}

/* ---- Scroll reveal ---- */
(function() {
  const revealEls = document.querySelectorAll('.reveal');
  if (!revealEls.length) return;
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  revealEls.forEach(function(el) { observer.observe(el); });
})();
