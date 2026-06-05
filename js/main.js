/* AJ's Diamond Detailing — interactions */
(function () {
  'use strict';

  /* ---- Sticky nav shadow on scroll ---- */
  var nav = document.getElementById('nav');
  function onScroll() {
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 40);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---- Mobile hamburger menu ---- */
  var toggle = document.querySelector('.nav-toggle');
  var menu = document.getElementById('nav-links');
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var open = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    // Close menu when a link is tapped
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        menu.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---- Scroll reveal ---- */
  var faders = document.querySelectorAll('.fade-in');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    faders.forEach(function (el) { io.observe(el); });
  } else {
    faders.forEach(function (el) { el.classList.add('visible'); });
  }

  /* ---- Before / After comparison slider ---- */
  var slider = document.getElementById('ba-slider');
  if (slider) {
    var range = slider.querySelector('.ba-range');
    var beforeWrap = slider.querySelector('.ba-before-wrap');
    var handle = slider.querySelector('.ba-handle');
    function setPos(v) {
      beforeWrap.style.width = v + '%';
      handle.style.left = v + '%';
    }
    range.addEventListener('input', function () { setPos(range.value); });
    setPos(range.value);
  }

  /* ---- Footer year ---- */
  var yr = document.getElementById('year');
  if (yr) yr.textContent = new Date().getFullYear();
})();
