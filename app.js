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
  var target = new Date('2026-07-26T09:00:00-06:00').getTime(); // Costa Rica (UTC-6)
  var $d = document.getElementById('cd-d');
  var $h = document.getElementById('cd-h');
  var $m = document.getElementById('cd-m');
  var $s = document.getElementById('cd-s');
  if (!$d) return;

  function pad(n) { return String(n).padStart(2, '0'); }

  function tick() {
    var diff = target - Date.now();
    if (diff < 0) diff = 0;
    var d = Math.floor(diff / 86400000);
    var h = Math.floor((diff % 86400000) / 3600000);
    var m = Math.floor((diff % 3600000) / 60000);
    var s = Math.floor((diff % 60000) / 1000);
    $d.textContent = pad(d);
    $h.textContent = pad(h);
    $m.textContent = pad(m);
    $s.textContent = pad(s);
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
