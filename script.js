"use strict";

// Informe o número com DDI e DDD, somente com dígitos. Exemplo: "5511999999999".
const WHATSAPP_NUMBER = "";

function getWhatsAppUrl(message) {
  const destination = WHATSAPP_NUMBER ? `https://wa.me/${WHATSAPP_NUMBER}` : "https://wa.me/";
  return `${destination}?text=${encodeURIComponent(message)}`;
}

document.querySelectorAll("[data-whatsapp]").forEach((link) => {
  link.href = getWhatsAppUrl(link.dataset.whatsapp);
});

const yearElement = document.querySelector("[data-current-year]");
if (yearElement) yearElement.textContent = new Date().getFullYear();

const header = document.querySelector("[data-header]");
const menuButton = document.querySelector("[data-menu-toggle]");
const mobileMenu = document.querySelector("[data-mobile-menu]");

function updateHeader() {
  header?.classList.toggle("is-scrolled", window.scrollY > 24);
}

function setMenu(open) {
  if (!menuButton || !mobileMenu) return;

  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
  mobileMenu.hidden = !open;
  document.body.classList.toggle("menu-open", open);
}

menuButton?.addEventListener("click", () => {
  setMenu(menuButton.getAttribute("aria-expanded") !== "true");
});

mobileMenu?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => setMenu(false));
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setMenu(false);
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) setMenu(false);
});

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const revealElements = document.querySelectorAll(".reveal, .hero-reveal");

if (reduceMotion || !("IntersectionObserver" in window)) {
  revealElements.forEach((element) => element.classList.add("is-visible"));
} else {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.14, rootMargin: "0px 0px -40px" },
  );

  revealElements.forEach((element) => revealObserver.observe(element));
}

const heroImage = document.querySelector("[data-hero-image]");
let animationFrame = 0;

function updateParallax() {
  animationFrame = 0;
  if (!heroImage || reduceMotion || window.innerWidth < 768) return;

  const progress = Math.min(1, Math.max(0, window.scrollY / Math.max(window.innerHeight, 1)));
  heroImage.style.transform = `translate3d(0, ${progress * 9}%, 0)`;
}

if (heroImage && !reduceMotion) {
  window.addEventListener(
    "scroll",
    () => {
      if (!animationFrame) animationFrame = window.requestAnimationFrame(updateParallax);
    },
    { passive: true },
  );
}
