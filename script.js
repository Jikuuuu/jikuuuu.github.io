/* =========================================================
   1) TUS DATOS — editá esto, no necesitás tocar el HTML/CSS
========================================================= */

// Un bloque por cada creador. "videos" es la lista de videos que le editaste.
// Para agregar un video real: sacá el ID de la URL de YouTube.
// Ej: https://www.youtube.com/watch?v=dQw4w9WgXcQ  ->  el id es "dQw4w9WgXcQ"
// Si todavía no tenés el id, dejá youtubeId: "" y se va a mostrar una placa vacía.
const CREADORES = [
  {
    nombre: "ChinaSSJ",
    rol: "Edición de contenido",
    videos: [
      { titulo: "IRL — mi humilde mansión 🏠", youtubeId: "XIRlE-jJgPA" },
      { titulo: "Gameplay — ", youtubeId: "XmYB4425aHY" },
      { titulo: "Reacción — re zorrita", youtubeId: "Ln520EsfG9A" }
    ]
  },
  {
    nombre: "Oscurlod",
    rol: "Edición de contenido",
    videos: [
      { titulo: "Video 1 — 10 GRANJAS NUEVAS EN MI MUNDO", youtubeId: "fRC6KIhJTT8" },
      { titulo: "Video 2 — ESTOY EN MI PRIME DE FORTNITE", youtubeId: "i913AKhwpJQ&t" }
    ]
  },
  {
    nombre: "Lokonazo1",
    rol: "Edición de contenido",
    videos: [
      { titulo: "Video 1 — FUI ARBITRO DE LA FINAL DEL MUNDO", youtubeId: "4Ykwxej781Q" },
      { titulo: "Video 2 — SPREEN me DONÓ para que ESTÉ 1 AÑO EN STREAM", youtubeId: "yZ7Z37moNbE&t" },
    ]
  },
  {
    nombre: "AlexOmar",
    rol: "Edición de contenido",
    videos: [
      { titulo: "Video 1 — UN EXTRAÑO LLEGA A MI HOTEL… | Fears To Fathom", youtubeId: "o3fiLM1SAVA" },
      { titulo: "Video 2 — MAMÁ SE CREE QUE MANDA", youtubeId: "1RK8vEJJMfU" }
    ]
  }
];

// Todas las miniaturas juntas, sin dividir por creador.
// "src" puede ser una imagen local (ej: "assets/thumbnails/mini1.jpg")
// o una URL. Mientras no tengas las tuyas, se genera un placeholder automático.
const MINIATURAS = [
  { titulo: "Miniatura 1", src: "assets/thumbnails/Tomodachi2" },
  { titulo: "Miniatura 2", src: "assets/thumbnails/Five-Nights-At-Freddy" }
];

// Tus contactos / redes.
const CONTACTOS = [
  { label: "Email", href: "mailto:riverotomass16@gmail.com" },
  { label: "Instagram", href: "https://instagram.com/tomasrmmv" },
  { label: "Discord", href: "https://discord.gg/tuinvite" }
];

/* =========================================================
   2) A partir de acá es lógica, no hace falta tocarlo
========================================================= */

function placeholderThumb(label, seed){
  const colors = [
    ["#4dffea", "#0e0e12"],
    ["#ff4da6", "#0e0e12"],
    ["#f2f1ed", "#1f1f27"]
  ];
  const [accent, base] = colors[seed % colors.length];
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="480" height="${300 + (seed % 3) * 60}">
      <rect width="100%" height="100%" fill="${base}"/>
      <rect x="0" y="0" width="100%" height="6" fill="${accent}"/>
      <text x="24" y="44" font-family="JetBrains Mono, monospace" font-size="16" fill="${accent}">MINIATURA</text>
      <text x="24" y="74" font-family="Bebas Neue, sans-serif" font-size="30" fill="#f2f1ed">${label}</text>
      <text x="24" y="${300 + (seed % 3) * 60 - 24}" font-family="JetBrains Mono, monospace" font-size="12" fill="#8a8a94">reemplazá esta imagen</text>
    </svg>`;
  return "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(svg)));
}

function renderCreadores(){
  const list = document.getElementById("creadoresList");
  list.innerHTML = CREADORES.map(creador => `
    <article class="creator-card">
      <div class="creator-card__head">
        <h3 class="creator-card__name">${creador.nombre}</h3>
        <span class="creator-card__role">${creador.rol}</span>
      </div>
      <div class="clip-rack">
        ${creador.videos.map(v => `
          <div class="clip">
            <div class="clip__frame ${v.youtubeId ? "" : "clip__frame--empty"}">
              ${v.youtubeId
                ? `<iframe src="https://www.youtube.com/embed/${v.youtubeId}" title="${v.titulo}" loading="lazy" allowfullscreen></iframe>`
                : `<div class="play-ic">▶</div><span>Agregá el youtubeId<br>en js/script.js</span>`
              }
            </div>
            <p class="clip__title">${v.titulo}</p>
          </div>
        `).join("")}
      </div>
    </article>
  `).join("");
}

function renderMiniaturas(){
  const grid = document.getElementById("miniaturasGrid");
  grid.innerHTML = MINIATURAS.map((m, i) => {
    const src = m.src || placeholderThumb(String(i + 1).padStart(2, "0"), i);
    return `
      <figure class="thumb" data-index="${i}">
        <img src="${src}" alt="${m.titulo}" loading="lazy">
        <figcaption class="thumb__label">${m.titulo}</figcaption>
      </figure>
    `;
  }).join("");

  grid.querySelectorAll(".thumb").forEach(el => {
    el.addEventListener("click", () => {
      const i = Number(el.dataset.index);
      openLightbox(MINIATURAS[i], el.querySelector("img").src);
    });
  });
}

function renderContactos(){
  const wrap = document.getElementById("contactoLinks");
  wrap.innerHTML = CONTACTOS.map(c => `
    <a class="contact-pill" href="${c.href}" target="_blank" rel="noopener">${c.label}</a>
  `).join("");
}

/* Lightbox */
function openLightbox(miniatura, src){
  const lb = document.getElementById("lightbox");
  document.getElementById("lightboxImg").src = src;
  document.getElementById("lightboxImg").alt = miniatura.titulo;
  document.getElementById("lightboxCaption").textContent = miniatura.titulo;
  lb.classList.add("is-open");
  lb.setAttribute("aria-hidden", "false");
}
function closeLightbox(){
  const lb = document.getElementById("lightbox");
  lb.classList.remove("is-open");
  lb.setAttribute("aria-hidden", "true");
}

/* Playhead en la regla de tiempo, según el scroll */
function updatePlayhead(){
  const playhead = document.getElementById("playhead");
  const doc = document.documentElement;
  const scrollable = doc.scrollHeight - doc.clientHeight;
  const pct = scrollable > 0 ? (doc.scrollTop / scrollable) * 100 : 0;
  playhead.style.left = pct + "%";
}

/* Resalta el link activo del nav según la sección visible */
function setupActiveNav(){
  const sections = ["inicio", "creadores", "miniaturas", "contacto"]
    .map(id => document.getElementById(id));
  const links = document.querySelectorAll(".timeline-nav__links a");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        links.forEach(l => l.classList.toggle(
          "active",
          l.dataset.section === entry.target.id
        ));
      }
    });
  }, { rootMargin: "-40% 0px -50% 0px" });

  sections.forEach(s => s && observer.observe(s));
}

/* Menú mobile */
function setupMobileNav(){
  const toggle = document.getElementById("navToggle");
  const links = document.querySelector(".timeline-nav__links");
  toggle.addEventListener("click", () => {
    const isOpen = links.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
  links.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      links.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

/* Timecode falso del hero, solo estético */
function setupHeroTimecode(){
  const el = document.getElementById("heroTimecode");
  let frame = 0;
  setInterval(() => {
    frame = (frame + 1) % 24;
    const s = Math.floor(frame / 24);
    el.textContent = `00:00:0${s}:${String(frame).padStart(2, "0")}`;
  }, 1000 / 24);
}

document.addEventListener("DOMContentLoaded", () => {
  renderCreadores();
  renderMiniaturas();
  renderContactos();
  setupActiveNav();
  setupMobileNav();
  setupHeroTimecode();
  document.getElementById("year").textContent = new Date().getFullYear();

  window.addEventListener("scroll", updatePlayhead, { passive: true });
  updatePlayhead();

  document.getElementById("lightboxClose").addEventListener("click", closeLightbox);
  document.getElementById("lightbox").addEventListener("click", (e) => {
    if (e.target.id === "lightbox") closeLightbox();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
  });
});
