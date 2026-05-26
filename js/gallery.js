/**
 * ZinnStarter — Gallery Lightbox
 * Opens real photos in a full-screen lightbox overlay.
 * Placeholder divs are skipped (they have no real src).
 * No external dependencies.
 */

/**
 * Opens the lightbox with the clicked gallery item's image.
 * Called via onclick on each .gallery-item.
 *
 * @param {HTMLElement} el - The gallery item element that was clicked
 */
function openLightbox(el) {
  var src     = el.getAttribute('data-src') || '';
  var caption = el.getAttribute('data-caption') || '';

  // Only open lightbox if there is an actual image (not a placeholder)
  // Check whether the element contains an <img> tag rather than a placeholder div
  var img = el.querySelector('img.gallery-item__img');

  if (!img) {
    // Still a placeholder — do nothing
    return;
  }

  var lightbox        = document.getElementById('lightbox');
  var lightboxImg     = document.getElementById('lightbox-img');
  var lightboxCaption = document.getElementById('lightbox-caption');

  if (!lightbox || !lightboxImg) return;

  lightboxImg.src         = img.src;
  lightboxImg.alt         = caption;
  lightboxCaption.textContent = caption;

  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
}

/**
 * Closes the lightbox.
 * Called by the close button and the overlay click handler.
 *
 * @param {MouseEvent} [e] - Optional click event (to check for overlay clicks)
 */
function closeLightbox(e) {
  if (e && e.target !== e.currentTarget) return; // clicked inside the inner box

  var lightbox = document.getElementById('lightbox');
  if (!lightbox) return;

  lightbox.classList.remove('open');
  document.body.style.overflow = '';
}

// Close lightbox on Escape key
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    closeLightbox();
  }
});
