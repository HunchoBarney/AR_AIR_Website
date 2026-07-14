const navToggle = document.querySelector(".mobile-toggle");
const navLinks = document.querySelector(".air-nav__links, .nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      navLinks.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
}

const icons = {
  phone: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.32 1.77.6 2.61a2 2 0 0 1-.45 2.11L8 9.7a16 16 0 0 0 6.3 6.3l1.26-1.26a2 2 0 0 1 2.11-.45c.84.28 1.71.48 2.61.6A2 2 0 0 1 22 16.92z"/></svg>',
  message: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"/></svg>',
  clock: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>',
  shield: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.68 0C7.5 20.5 4 18 4 13V5a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.2 1.2 0 0 1 1.52 0C14.5 2.8 17 4 19 4a1 1 0 0 1 1 1z"/></svg>',
  wrench: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-3-3z"/></svg>'
};

document.querySelectorAll("[data-icon]").forEach((node) => {
  const key = node.getAttribute("data-icon");
  if (key && icons[key]) node.insertAdjacentHTML("afterbegin", icons[key]);
});

const revealItems = document.querySelectorAll("[data-reveal]");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const lottieStages = document.querySelectorAll("[data-lottie-src]");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -12% 0px", threshold: 0.16 }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

lottieStages.forEach((stage) => {
  const path = stage.getAttribute("data-lottie-src");
  if (!path || !window.lottie) return;

  const animation = window.lottie.loadAnimation({
    container: stage,
    renderer: "svg",
    loop: !prefersReducedMotion,
    autoplay: !prefersReducedMotion,
    path
  });

  if (prefersReducedMotion) {
    animation.addEventListener("DOMLoaded", () => animation.goToAndStop(0, true));
  }
});

const contactForms = document.querySelectorAll(".contact-form");

contactForms.forEach((form) => {
  form.addEventListener("submit", () => {
    const subject = encodeURIComponent("AR Air service request");
    const fields = [...form.elements]
      .filter((element) => element.name)
      .map((element) => `${element.name}: ${element.value || ""}`)
      .join("\\n");
    const body = encodeURIComponent(fields || "Name:\\nPhone:\\nService needed:\\nCity:\\nMessage:\\n");
    form.setAttribute("action", `mailto:service@arairpro.com?subject=${subject}&body=${body}`);
  });
});

const pricingSearch = document.querySelector("#pricing-search");
const pricingRows = document.querySelectorAll(".air-price-list > div");
const pricingGroups = document.querySelectorAll(".air-price-group[data-price-category]");
const pricingFilterButtons = document.querySelectorAll("[data-price-filter]");
const pricingClearButton = document.querySelector("[data-price-clear]");
const pricingHighlights = document.querySelectorAll("[data-price-query]");
const pricingCount = document.querySelector("#pricing-result-count");
const pricingEmpty = document.querySelector(".air-price-empty");
let activePricingFilter = "all";

const getPricingLabel = () => {
  const activeButton = document.querySelector(`[data-price-filter="${activePricingFilter}"]`);
  return activeButton ? activeButton.textContent.trim() : "All";
};

const updatePricingResults = () => {
  if (!pricingRows.length) return;

  const query = pricingSearch ? pricingSearch.value.trim().toLowerCase() : "";
  let visibleRows = 0;

  pricingFilterButtons.forEach((button) => {
    button.classList.toggle("is-active", button.getAttribute("data-price-filter") === activePricingFilter);
  });

  pricingRows.forEach((row) => {
    const group = row.closest(".air-price-group[data-price-category]");
    const category = group ? group.getAttribute("data-price-category") : "";
    const matchesCategory = activePricingFilter === "all" || category === activePricingFilter;
    const matchesQuery = !query || row.textContent.toLowerCase().includes(query);
    const isVisible = matchesCategory && matchesQuery;

    row.hidden = !isVisible;
    row.classList.toggle("is-match", Boolean(query && isVisible));
    if (isVisible) visibleRows += 1;
  });

  pricingGroups.forEach((group) => {
    const hasVisibleRows = [...group.querySelectorAll(".air-price-list > div")].some((row) => !row.hidden);
    group.hidden = !hasVisibleRows;
  });

  if (pricingCount) {
    const total = pricingRows.length;
    const label = getPricingLabel();
    const queryText = query ? ` matching "${pricingSearch.value.trim()}"` : "";
    pricingCount.textContent = `Showing ${visibleRows} of ${total} ${label === "All" ? "common repairs" : label.toLowerCase() + " repairs"}${queryText}.`;
  }

  if (pricingEmpty) {
    pricingEmpty.hidden = visibleRows > 0;
  }
};

if (pricingSearch) {
  pricingSearch.addEventListener("input", updatePricingResults);
}

pricingFilterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activePricingFilter = button.getAttribute("data-price-filter") || "all";
    updatePricingResults();
  });
});

if (pricingClearButton) {
  pricingClearButton.addEventListener("click", () => {
    if (pricingSearch) pricingSearch.value = "";
    activePricingFilter = "all";
    updatePricingResults();
    pricingSearch?.focus();
  });
}

pricingHighlights.forEach((button) => {
  button.addEventListener("click", () => {
    if (pricingSearch) {
      pricingSearch.value = button.getAttribute("data-price-query") || "";
    }
    activePricingFilter = "all";
    updatePricingResults();
    document.querySelector(".air-price-layout")?.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth", block: "start" });
  });
});

updatePricingResults();
