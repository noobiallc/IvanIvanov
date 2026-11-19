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
      alert('Something went wrong. Please email us at bhdrinc@yahoo.com or call 678-656-8354.');
    }
  });
}

/* ---- Stat counter animation ---- */
(function() {
  var statEls = document.querySelectorAll('.stat-number[data-count]');
  if (!statEls.length) return;

  function animateStat(el) {
    var target = parseInt(el.getAttribute('data-count'), 10);
    var suffix = el.getAttribute('data-suffix') || '';
    var duration = 1600;
    var start = null;

    function easeOut(t) { return 1 - Math.pow(1 - t, 3); }

    function step(timestamp) {
      if (!start) start = timestamp;
      var progress = Math.min((timestamp - start) / duration, 1);
      var value = Math.round(easeOut(progress) * target);
      el.textContent = (target >= 1000 ? value.toLocaleString() : value) + suffix;
      if (progress < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  }

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        animateStat(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });

  statEls.forEach(function(el) { observer.observe(el); });
})();

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
