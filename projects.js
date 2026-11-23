/* ============================================================
   BHDR INC. — Projects page: render hotel cards from data
   Each card's featured photo links to the hotel's gallery,
   opening in a new tab. Source: window.BHDR_HOTELS.
   ============================================================ */
(function () {
  "use strict";

  var hotels = window.BHDR_HOTELS || [];
  var grid = document.getElementById("projects-grid");
  if (!grid) return;

  if (!hotels.length) {
    grid.innerHTML = '<p class="gallery-empty">Projects are being added &mdash; please check back soon.</p>';
    return;
  }

  var frag = document.createDocumentFragment();

  hotels.forEach(function (hotel, i) {
    // Featured card image: the photo named by hotel.featured (so its alt text
    // carries over), falling back to the first gallery photo. The photos[]
    // array and gallery order are never changed by this.
    var featured = null;
    if (hotel.photos && hotel.photos.length) {
      if (hotel.featured) {
        featured = hotel.photos.filter(function (p) { return p.file === hotel.featured; })[0] || null;
      }
      if (!featured) featured = hotel.photos[0];
    }
    if (!featured) return;

    var locationText = [hotel.city, hotel.state].filter(Boolean).join(", ");

    var card = document.createElement("a");
    card.className = "project-card project-card--link";
    card.href = "gallery.html?hotel=" + encodeURIComponent(hotel.slug);
    card.target = "_blank";
    card.rel = "noopener";
    card.style.animationDelay = (i * 0.08) + "s";
    card.setAttribute("aria-label", "View the " + hotel.name + " renovation gallery (" + locationText + "), opens in a new tab");

    card.innerHTML =
      '<div class="project-card__frame">' +
        '<img class="project-card__img" src="' + hotel.dir + "/" + featured.file + '" ' +
          'alt="' + (featured.alt || (hotel.name + " renovation")) + '" loading="lazy" decoding="async">' +
        '<span class="project-card__view">View Gallery</span>' +
      '</div>' +
      '<div class="project-card__body">' +
        '<p class="project-card__name">' + hotel.name + '</p>' +
        '<p class="project-card__loc">' + locationText + '</p>' +
      '</div>';

    frag.appendChild(card);
  });

  grid.innerHTML = "";
  grid.appendChild(frag);
})();
