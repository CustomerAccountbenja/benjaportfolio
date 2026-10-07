/* ============================================================
   YOUR RESULTS: edit this block only.
   Enter percentages (0-100) from your TEST set. Leave null until you have them.
   The stat cards, comparison bars and table on results.html all read from here.
   ============================================================ */
const RESULTS = {
  bestModel: "Random Forest",
  models: {
    "Random Forest":       { accuracy: null, precision: null, recall: null, f1: null },
    "Decision Tree":       { accuracy: null, precision: null, recall: null, f1: null },
    "Logistic Regression": { accuracy: null, precision: null, recall: null, f1: null }
  }
};

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const fmt = v => (typeof v === "number" ? v.toFixed(Number.isInteger(v) ? 0 : 1) + "%" : "\u2014");

// Mobile menu
const btn = document.getElementById("menu-btn");
const menu = document.getElementById("mobile-menu");
if (btn && menu) {
  btn.addEventListener("click", () => {
    const open = menu.classList.toggle("hidden") === false;
    btn.setAttribute("aria-expanded", String(open));
  });
  menu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
    menu.classList.add("hidden");
    btn.setAttribute("aria-expanded", "false");
  }));
}

// Image fallbacks: show a placeholder if an image file is missing
document.querySelectorAll("[data-img-wrap]").forEach(wrap => {
  const img = wrap.querySelector("img");
  const fallback = wrap.querySelector("[data-img-fallback]");
  if (!img || !fallback) return;
  const showFallback = () => {
    img.classList.add("hidden");
    fallback.classList.remove("hidden");
    fallback.classList.add("flex");
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
    return `<div><div class="flex justify-between text-sm sm:text-base font-semibold mb-2"><span>${n}</span><span>${fmt(v)}</span></div>
      <div class="h-5 bg-white border border-navy/10 overflow-hidden"><div class="bar-fill h-full bg-lime" data-w="${has ? v : 0}"></div></div>
      ${has ? "" : '<p class="mt-1 text-xs text-navy/50">Awaiting results</p>'}</div>`;
  }).join("");
}

const body = document.getElementById("perf-body");
if (body) {
  body.innerHTML = Object.entries(RESULTS.models).map(([n, m]) =>
    `<tr class="border-t border-navy/10"><th scope="row" class="px-5 sm:px-7 py-4 text-left font-semibold whitespace-nowrap">${n}</th>` +
    ["accuracy", "precision", "recall", "f1"].map(k => `<td class="px-5 sm:px-7 py-4 text-center ${typeof m[k] === "number" ? "" : "text-navy/35"}">${fmt(m[k])}</td>`).join("") + "</tr>").join("");
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
  root.querySelectorAll(".bar-fill").forEach(b => { b.style.width = (reduceMotion ? b.dataset.w : b.dataset.w) + "%"; });
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
