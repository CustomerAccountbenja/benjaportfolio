/* ============================================================
   YOUR RESULTS: edit this block only.
   Values are percentages (0-100) from your TEST set.
   Source: results/model_comparison.csv
   (regenerate when you retrain the model)
   ============================================================ */
const RESULTS = {
  bestModel: "Random Forest",
  models: {
    "Random Forest":       { accuracy: 100.00, precision: 100.00, recall: 100.00, f1: 100.00, roc_auc: 100.00 },
    "Decision Tree":       { accuracy:  99.62, precision:  41.94, recall:  92.86, f1:  57.78, roc_auc:  96.42 },
    "Logistic Regression": { accuracy:  99.77, precision:  54.90, recall: 100.00, f1:  70.89, roc_auc:  99.99 }
  }
};

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const fmt = v => (typeof v === "number" ? v.toFixed(Number.isInteger(v) ? 0 : 1) + "%" : "\u2014");

// Header: add a shadow once the page scrolls
const header = document.getElementById("site-header");
if (header) {
  const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 8);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

// Mobile menu
const btn = document.getElementById("menu-btn");
const menu = document.getElementById("mobile-menu");
if (btn && menu) {
  const setMenu = open => {
    menu.classList.toggle("is-open", open);
    btn.setAttribute("aria-expanded", String(open));
    btn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    document.body.classList.toggle("menu-open", open);
  };
  btn.addEventListener("click", () => setMenu(!menu.classList.contains("is-open")));
  menu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => setMenu(false)));
  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && menu.classList.contains("is-open")) {
      setMenu(false);
      btn.focus();
    }
  });
  window.addEventListener("resize", () => {
    if (window.innerWidth > 880 && menu.classList.contains("is-open")) setMenu(false);
  });
}

// Image fallbacks: show a placeholder if an image file is missing
document.querySelectorAll("[data-img-wrap]").forEach(wrap => {
  const img = wrap.querySelector("img");
  const fallback = wrap.querySelector("[data-img-fallback]");
  if (!img || !fallback) return;
  const showFallback = () => {
    img.style.display = "none";
    fallback.classList.add("is-visible");
  };
  img.addEventListener("error", showFallback);
  if (img.complete && img.naturalWidth === 0) showFallback();
});

// Footer year
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

// Results page: render from RESULTS
const best = RESULTS.models[RESULTS.bestModel] || {};
document.querySelectorAll("[data-best-model]").forEach(el => el.textContent = RESULTS.bestModel);
document.querySelectorAll("[data-stat]").forEach(el => {
  const v = best[el.dataset.stat];
  if (typeof v !== "number") { el.textContent = "\u2014"; return; }
  if (reduceMotion) { el.textContent = fmt(v); return; }
  el.dataset.target = v;
  el.textContent = "0%";
});

const bars = document.getElementById("bars");
if (bars) {
  const names = Object.keys(RESULTS.models);
  const allSet = names.every(n => typeof RESULTS.models[n].accuracy === "number");
  if (allSet) names.sort((a, b) => RESULTS.models[b].accuracy - RESULTS.models[a].accuracy);
  bars.innerHTML = names.map(n => {
    const v = RESULTS.models[n].accuracy;
    const has = typeof v === "number";
    return `<div class="bar-row">
      <div class="bar-top"><span>${n}</span><span>${fmt(v)}</span></div>
      <div class="bar-track"><div class="bar-fill" data-w="${has ? v : 0}"></div></div>
      ${has ? "" : '<p class="bar-note">Awaiting results</p>'}
    </div>`;
  }).join("");
}

const body = document.getElementById("perf-body");
if (body) {
  body.innerHTML = Object.entries(RESULTS.models).map(([n, m]) =>
    `<tr><th scope="row">${n}</th>` +
    ["accuracy", "precision", "recall", "f1", "roc_auc"].map(k => `<td>${fmt(m[k])}</td>`).join("") + "</tr>").join("");
}

// Scroll reveal + one-time bar/number animations
function countUp(el) {
  const target = parseFloat(el.dataset.target);
  if (isNaN(target)) return;
  const start = performance.now(), dur = 1100;
  const step = t => {
    const p = Math.min((t - start) / dur, 1), e = 1 - Math.pow(1 - p, 3);
    el.textContent = fmt(Number.isInteger(target) ? Math.round(target * e) : +(target * e).toFixed(1));
    if (p < 1) requestAnimationFrame(step); else el.textContent = fmt(target);
  };
  requestAnimationFrame(step);
}
function fillBars(root) {
  root.querySelectorAll(".bar-fill").forEach(b => { b.style.width = b.dataset.w + "%"; });
}
const io = "IntersectionObserver" in window ? new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    e.target.classList.add("in");
    fillBars(e.target);
    e.target.querySelectorAll("[data-target]").forEach(countUp);
    if (e.target.dataset.target) countUp(e.target);
    io.unobserve(e.target);
  });
}, { threshold: 0.15 }) : null;
document.querySelectorAll(".reveal").forEach(el => io ? io.observe(el) : (el.classList.add("in"), fillBars(el)));

// Home page: highlight the nav item for the section in view
const navLinks = Array.from(document.querySelectorAll(".nav-links a[href^='#']"));
if (navLinks.length && "IntersectionObserver" in window) {
  const linkFor = id => navLinks.find(a => a.getAttribute("href") === "#" + id);
  const spy = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const link = linkFor(entry.target.id);
      if (!link) return;
      if (entry.isIntersecting) {
        navLinks.forEach(a => a.removeAttribute("aria-current"));
        link.setAttribute("aria-current", "true");
      }
    });
  }, { rootMargin: "-35% 0px -55% 0px" });
  document.querySelectorAll("main section[id]").forEach(section => spy.observe(section));
}
