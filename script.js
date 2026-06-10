/* ============================================================
   FUT-TIME CR — JS compartido
   ============================================================ */

/* ---- Navbar móvil ---- */
function toggleNav() {
  const links = document.getElementById("navLinks");
  if (links) links.classList.toggle("open");
}

/* ---- Cuenta regresiva ---- */
function initCountdown() {
  const el = document.getElementById("countdown");
  if (!el) return;

  // Fecha objetivo del próximo torneo (demo): 26 jul 2026, 9:00am
  const target = new Date("2026-07-26T09:00:00-06:00").getTime();

  const boxes = {
    d: document.getElementById("cd-d"),
    h: document.getElementById("cd-h"),
    m: document.getElementById("cd-m"),
    s: document.getElementById("cd-s"),
  };

  function tick() {
    const now = Date.now();
    let diff = Math.max(0, target - now);

    const day = Math.floor(diff / 86400000); diff -= day * 86400000;
    const hr  = Math.floor(diff / 3600000);  diff -= hr * 3600000;
    const min = Math.floor(diff / 60000);    diff -= min * 60000;
    const sec = Math.floor(diff / 1000);

    const pad = (n) => String(n).padStart(2, "0");
    if (boxes.d) boxes.d.textContent = pad(day);
    if (boxes.h) boxes.h.textContent = pad(hr);
    if (boxes.m) boxes.m.textContent = pad(min);
    if (boxes.s) boxes.s.textContent = pad(sec);
  }

  tick();
  setInterval(tick, 1000);
}

/* ---- Animaciones al hacer scroll ---- */
function initReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window) || !items.length) {
    items.forEach((i) => i.classList.add("in"));
    return;
  }
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          obs.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  items.forEach((i) => obs.observe(i));
}

/* ---- Formulario de inscripción (demo) ---- */
function initForm() {
  const form = document.getElementById("inscripcionForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const msg = document.getElementById("formMsg");
    const equipo = document.getElementById("equipo");
    const nombre = equipo ? equipo.value.trim() : "tu equipo";

    if (msg) {
      msg.innerHTML =
        "✅ <strong>¡Listo, " +
        (nombre || "equipo") +
        "!</strong> Recibimos tu pre-inscripción. Te escribimos por WhatsApp para confirmar el cupo. <em>(Demo — no se envía nada real todavía.)</em>";
      msg.classList.add("show");
    }
    form.reset();
    if (msg) msg.scrollIntoView({ behavior: "smooth", block: "center" });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initCountdown();
  initReveal();
  initForm();
});
