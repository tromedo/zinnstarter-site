/**
 * ZinnStarter — Navigation
 * Handles mobile hamburger menu toggle.
 * No external dependencies.
 */

(function () {
  'use strict';

  var nav        = document.getElementById('main-nav');
  var hamburger  = document.getElementById('hamburger');
  var mobileMenu = document.getElementById('mobile-menu');

  if (!hamburger || !mobileMenu || !nav) return;

  hamburger.addEventListener('click', function () {
    var isOpen = nav.classList.toggle('mobile-open');
    hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Close mobile menu when a link is tapped
  var links = mobileMenu.querySelectorAll('a');
  links.forEach(function (link) {
    link.addEventListener('click', function () {
      nav.classList.remove('mobile-open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });

  // Close mobile menu when clicking outside the nav
  document.addEventListener('click', function (e) {
    if (!nav.contains(e.target)) {
      nav.classList.remove('mobile-open');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });
}());
