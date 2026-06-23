/* ============================================================
   FUT-TIME CR — app.js  ·  Powered by Nuva IA
   ============================================================ */

/* ---- Menú móvil ---- */
function toggleNav() {
  document.getElementById('navLinks').classList.toggle('open');
}
document.querySelectorAll('.nav-links a').forEach(function (a) {
  a.addEventListener('click', function () {
    document.getElementById('navLinks').classList.remove('open');
  });
});

/* ---- Countdown al próximo torneo ---- */
function initCountdown() {
  var target = new Date('2026-07-19T09:00:00-06:00').getTime(); // Liga Fut-Time Invierno · Costa Rica (UTC-6)
  // Pares de elementos: countdown principal + countdown flotante
  var els = {
    d: [document.getElementById('cd-d'), document.getElementById('fc-d')],
    h: [document.getElementById('cd-h'), document.getElementById('fc-h')],
    m: [document.getElementById('cd-m'), document.getElementById('fc-m')],
    s: [document.getElementById('cd-s'), document.getElementById('fc-s')]
  };
  if (!els.d[0] && !els.d[1]) return;

  function pad(n) { return String(n).padStart(2, '0'); }
  function set(arr, val) { arr.forEach(function (el) { if (el) el.textContent = pad(val); }); }

  function tick() {
    var diff = target - Date.now();
    if (diff < 0) diff = 0;
    set(els.d, Math.floor(diff / 86400000));
    set(els.h, Math.floor((diff % 86400000) / 3600000));
    set(els.m, Math.floor((diff % 3600000) / 60000));
    set(els.s, Math.floor((diff % 60000) / 1000));
  }
  tick();
  setInterval(tick, 1000);
}
initCountdown();

/* ---- Animaciones al hacer scroll ---- */
var io = new IntersectionObserver(function (entries) {
  entries.forEach(function (e) {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(function (el, i) {
  el.style.transitionDelay = (i % 6) * 0.06 + 's';
  io.observe(el);
});

/* ---- Formulario de pre-inscripción (demo) ---- */
function submitForm(e) {
  e.preventDefault();
  document.getElementById('formMsg').classList.add('show');
  document.getElementById('signupForm').reset();
  return false;
}
