/**
 * ZinnStarter — Accordion (Past Cohorts)
 * Simple accordion for cohort.html.
 * No external dependencies.
 */

(function () {
  'use strict';

  var triggers = document.querySelectorAll('.accordion__trigger');

  triggers.forEach(function (trigger) {
    trigger.addEventListener('click', function () {
      var targetId = trigger.getAttribute('data-target');
      var body     = document.getElementById(targetId);

      if (!body) return;

      var isOpen = body.classList.contains('open');

      // Close all open panels first
      document.querySelectorAll('.accordion__body.open').forEach(function (openBody) {
        openBody.classList.remove('open');
      });
      document.querySelectorAll('.accordion__trigger.open').forEach(function (openTrigger) {
        openTrigger.classList.remove('open');
      });

      // If it was closed, open it
      if (!isOpen) {
        body.classList.add('open');
        trigger.classList.add('open');
      }
    });
  });
}());
