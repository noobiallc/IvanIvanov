/* ============================================================
   BHDR INC. — Reusable hotel gallery + lightbox
   Reads ?hotel=<slug> and renders that hotel's gallery from
   window.BHDR_HOTELS (data/hotels.js). One template, every hotel.
   ============================================================ */
(function () {
  "use strict";

  var hotels = window.BHDR_HOTELS || [];
  var params = new URLSearchParams(window.location.search);
  var slug = params.get("hotel");
  var hotel = hotels.filter(function (h) { return h.slug === slug; })[0];

  var elTitle   = document.getElementById("gallery-title");
  var elLoc     = document.getElementById("gallery-loc");
  var elGrid    = document.getElementById("gallery-grid");
  var elDocTitle = document.querySelector("title");

  /* ---- Not found / empty state ---- */
  if (!hotel) {
    if (elTitle) elTitle.textContent = "Project not found";
    if (elLoc) elLoc.textContent = "";
    if (elGrid) {
      elGrid.innerHTML =
        '<p class="gallery-empty">We couldn\'t find that project. ' +
        '<a href="projects.html">Return to all projects</a>.</p>';
    }
    return;
  }

  var locationText = [hotel.city, hotel.state].filter(Boolean).join(", ");

  /* ---- Head / hero text ---- */
  if (elDocTitle) elDocTitle.textContent = hotel.name + " — " + locationText + " | BHDR INC";
  if (elTitle) elTitle.textContent = hotel.name;
  if (elLoc) elLoc.textContent = locationText;

  /* ---- Build the gallery grid ---- */
  var photos = hotel.photos || [];
  var frag = document.createDocumentFragment();

  photos.forEach(function (photo, i) {
    var src = hotel.dir + "/" + photo.file;
    var btn = document.createElement("button");
    btn.className = "gallery-tile";
    btn.type = "button";
    btn.setAttribute("aria-label", "Enlarge image " + (i + 1) + " of " + photos.length + ": " + (photo.alt || hotel.name));
    btn.setAttribute("data-index", i);

    var img = document.createElement("img");
    img.className = "gallery-tile__img";
    img.src = src;
    img.alt = photo.alt || (hotel.name + " renovation photo " + (i + 1));
    img.loading = i < 3 ? "eager" : "lazy";
    img.decoding = "async";

    btn.appendChild(img);
    frag.appendChild(btn);
  });

  elGrid.innerHTML = "";
  elGrid.appendChild(frag);

  /* ============================================================
     LIGHTBOX
     ============================================================ */
  var lb        = document.getElementById("lightbox");
  var lbImg     = document.getElementById("lightbox-img");
  var lbCounter = document.getElementById("lightbox-counter");
  var lbClose   = document.getElementById("lightbox-close");
  var lbPrev    = document.getElementById("lightbox-prev");
  var lbNext    = document.getElementById("lightbox-next");

  var current = 0;
  var lastFocused = null;

  function render() {
    var photo = photos[current];
    lbImg.src = hotel.dir + "/" + photo.file;
    lbImg.alt = photo.alt || (hotel.name + " renovation photo " + (current + 1));
    lbCounter.textContent = (current + 1) + " / " + photos.length;
  }

  function open(index) {
    current = index;
    lastFocused = document.activeElement;
    render();
    lb.classList.add("is-open");
    lb.setAttribute("aria-hidden", "false");
    document.body.classList.add("lb-lock");
    lbClose.focus();
  }

  function close() {
    lb.classList.remove("is-open");
    lb.setAttribute("aria-hidden", "true");
    document.body.classList.remove("lb-lock");
    lbImg.src = "";
    if (lastFocused && typeof lastFocused.focus === "function") lastFocused.focus();
  }

  function next() { current = (current + 1) % photos.length; render(); }
  function prev() { current = (current - 1 + photos.length) % photos.length; render(); }

  /* Open from grid (event delegation) */
  elGrid.addEventListener("click", function (e) {
    var tile = e.target.closest(".gallery-tile");
    if (!tile) return;
    open(parseInt(tile.getAttribute("data-index"), 10) || 0);
  });

  lbClose.addEventListener("click", close);
  lbNext.addEventListener("click", next);
  lbPrev.addEventListener("click", prev);

  /* Click backdrop (but not the image or controls) closes */
  lb.addEventListener("click", function (e) {
    if (e.target === lb || e.target.classList.contains("lightbox__stage")) close();
  });

  /* Keyboard */
  document.addEventListener("keydown", function (e) {
    if (!lb.classList.contains("is-open")) return;
    if (e.key === "Escape") close();
    else if (e.key === "ArrowRight") next();
    else if (e.key === "ArrowLeft") prev();
    else if (e.key === "Tab") {
      /* simple focus trap across the visible controls */
      var focusables = [lbClose, lbPrev, lbNext];
      var idx = focusables.indexOf(document.activeElement);
      if (idx === -1) { e.preventDefault(); lbClose.focus(); return; }
      e.preventDefault();
      var dir = e.shiftKey ? -1 : 1;
      focusables[(idx + dir + focusables.length) % focusables.length].focus();
    }
  });

  /* Swipe (mobile) */
  var touchX = null, touchY = null;
  lb.addEventListener("touchstart", function (e) {
    touchX = e.changedTouches[0].clientX;
    touchY = e.changedTouches[0].clientY;
  }, { passive: true });
  lb.addEventListener("touchend", function (e) {
    if (touchX === null) return;
    var dx = e.changedTouches[0].clientX - touchX;
    var dy = e.changedTouches[0].clientY - touchY;
    if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy)) {
      if (dx < 0) next(); else prev();
    }
    touchX = touchY = null;
  }, { passive: true });
})();
