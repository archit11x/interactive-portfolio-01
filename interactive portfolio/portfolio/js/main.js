/* =========================================================
   PORTFOLIO — main.js (matching original Nahuel61920 behavior)
   Loader · Hexagon particles · Dark mode (body.dark) ·
   Clip-path mobile menu · Header shadow · Scroll-top ·
   Swiper slider · Project modal · FAQ accordion
   ========================================================= */

(function () {
  'use strict';

  /* ---------- 1. Loading screen (exact original timing) ---------- */
  function hideLoader() {
    var loader = document.querySelector('.loading-pag');
    if (!loader) return;
    loader.classList.add('hidden');
    setTimeout(function () { loader.style.display = 'none'; }, 700);
  }
  window.addEventListener('load', function () {
    setTimeout(hideLoader, 2000);
  });
  setTimeout(hideLoader, 4000); // safety fallback

  /* ---------- 2. Particles — 6 big breathing hexagons (matches original tsparticles config) ---------- */
  function initParticles() {
    var canvas = document.getElementById('particles-canvas');
    if (!canvas) return;
    var ctx = canvas.getContext('2d');
    var particles = [];

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    var COUNT = 6;           // number.value: 6
    var BASE_SIZE = 160;     // size.value: 160
    var MIN_SIZE = 40;       // size.anim.size_min: 40
    var SPEED = 0.6;         // move.speed: 8 (scaled)
    var COLORS_DARK = ['#1b1e34', '#1b1e34', '#1b1e34'];
    var COLORS_LIGHT = ['#b9c7e8', '#a4b6de', '#1b1e34'];

    for (var i = 0; i < COUNT; i++) {
      var dir = Math.random() * Math.PI * 2;
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: Math.cos(dir) * SPEED,
        vy: Math.sin(dir) * SPEED,
        phase: Math.random() * Math.PI * 2,
        rot: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.004,
        opacity: 0.18 + Math.random() * 0.18   // opacity.value 0.3 random
      });
    }

    function drawHexagon(cx, cy, size, rot) {
      ctx.beginPath();
      for (var k = 0; k < 6; k++) {
        var ang = rot + (Math.PI / 3) * k;
        var px = cx + Math.cos(ang) * size;
        var py = cy + Math.sin(ang) * size;
        if (k === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
      }
      ctx.closePath();
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      var isDark = document.body.classList.contains('dark');
      var palette = isDark ? COLORS_DARK : COLORS_LIGHT;

      for (var i = 0; i < particles.length; i++) {
        var p = particles[i];
        p.x += p.vx; p.y += p.vy; p.rot += p.rotSpeed;

        // out_mode "out" — wrap around edges
        if (p.x < -BASE_SIZE) p.x = canvas.width + BASE_SIZE;
        if (p.x > canvas.width + BASE_SIZE) p.x = -BASE_SIZE;
        if (p.y < -BASE_SIZE) p.y = canvas.height + BASE_SIZE;
        if (p.y > canvas.height + BASE_SIZE) p.y = -BASE_SIZE;

        // breathing size 40 -> 160
        p.phase += 0.09;
        var t = (Math.sin(p.phase) + 1) / 2;
        var size = MIN_SIZE + (BASE_SIZE - MIN_SIZE) * t;

        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = palette[i % palette.length];
        drawHexagon(p.x, p.y, size / 2, p.rot);
        ctx.fill();
        ctx.globalAlpha = 1;
      }
      requestAnimationFrame(draw);
    }
    draw();
  }

  /* ---------- 3. Dark / light mode (body.dark like original) ---------- */
  function initTheme() {
    var saved = localStorage.getItem('theme');
    if (saved === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.add('light');
    }
    var btn = document.getElementById('darkMode');
    if (!btn) return;
    btn.addEventListener('click', function () {
      var isDark = document.body.classList.contains('dark');
      document.body.classList.toggle('dark', !isDark);
      document.body.classList.toggle('light', isDark);
      localStorage.setItem('theme', !isDark ? 'dark' : 'light');
    });
  }

  /* ---------- 4. Mobile menu (clip-path dropdown like original) ---------- */
  function initMobileMenu() {
    var btn = document.getElementById('menu-btn');
    var navbar = document.querySelector('.navbar');
    if (!btn || !navbar) return;

    btn.addEventListener('click', function () {
      navbar.classList.toggle('activar');
      btn.classList.toggle('fa-times');
      btn.classList.toggle('fa-bars');
    });

    // Close menu on scroll (original behavior) + header shadow
    window.addEventListener('scroll', function () {
      var header = document.querySelector('.site-header');
      if (header) header.classList.toggle('activar', window.scrollY > 0);
      navbar.classList.remove('activar');
      btn.classList.remove('fa-times');
      btn.classList.add('fa-bars');
    }, { passive: true });

    navbar.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        navbar.classList.remove('activar');
        btn.classList.add('fa-bars');
        btn.classList.remove('fa-times');
      });
    });
  }

  /* ---------- 5. Scroll-to-top button ---------- */
  function initScrollTop() {
    var up = document.querySelector('.cm-up');
    if (!up) return;
    window.addEventListener('scroll', function () {
      up.classList.toggle('show', window.scrollY > 600);
    }, { passive: true });
    up.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ---------- 6. Active nav link per page ---------- */
  function initActiveNav() {
    var path = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.navbar a').forEach(function (a) {
      if (a.getAttribute('href') === path) a.classList.add('active');
    });
  }

  /* ---------- 7. FAQ accordion (services) ---------- */
  function initAccordion() {
    document.querySelectorAll('.accordion .accordion-heading').forEach(function (head) {
      head.addEventListener('click', function () {
        var item = head.parentElement;
        var wasActive = item.classList.contains('active');
        document.querySelectorAll('.accordion').forEach(function (acc) {
          acc.classList.remove('active');
        });
        if (!wasActive) item.classList.add('active');
      });
    });
  }

  /* ---------- 8. Project modal ---------- */
  function initModal() {
    var overlay = document.querySelector('.overlay');
    if (!overlay) return;
    var closeBtn = overlay.querySelector('.boton-cerrar');

    document.querySelectorAll('.projects__item').forEach(function (item) {
      item.addEventListener('click', function () {
        var id = item.dataset.modal;
        var target = document.getElementById(id);
        if (!target) return;
        // hide all modal contents, show selected
        overlay.querySelectorAll('.contenedor-modal').forEach(function (m) {
          m.style.display = 'none';
        });
        target.style.display = 'block';
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    });

    function close() {
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    }
    if (closeBtn) closeBtn.addEventListener('click', close);
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) close();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') close();
    });
  }

  /* ---------- 9. Swiper slider (projects — original uses Swiper 8) ---------- */
  function initSwiper() {
    if (typeof Swiper === 'undefined') return;
    if (!document.querySelector('.proyectos-slider')) return;
    new Swiper('.proyectos-slider', {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      grabCursor: true,
      autoplay: { delay: 3500, disableOnInteraction: false },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
      },
      breakpoints: {
        0:    { slidesPerView: 1 },
        768:  { slidesPerView: 2 },
        1200: { slidesPerView: 3 }
      }
    });
  }

  /* ---------- 10. Footer current year ---------- */
  function initYear() {
    document.querySelectorAll('.year').forEach(function (el) {
      el.textContent = new Date().getFullYear();
    });
  }

  /* ---------- Init all ---------- */
  document.addEventListener('DOMContentLoaded', function () {
    initTheme();
    initParticles();
    initMobileMenu();
    initScrollTop();
    initActiveNav();
    initAccordion();
    initModal();
    initSwiper();
    initYear();
  });
})();
