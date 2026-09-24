const root = document.documentElement;
const themeToggle = document.querySelector<HTMLButtonElement>("#theme-toggle");
const navToggle = document.querySelector<HTMLButtonElement>("#nav-toggle");
const navMenu = document.querySelector<HTMLElement>("#nav-menu");

const themeColors: Record<string, string> = {
  dark: "#100e0c",
  light: "#f3eee6",
};

function currentTheme(): "light" | "dark" {
  return root.getAttribute("data-theme") === "light" ? "light" : "dark";
}

function applyTheme(theme: "light" | "dark") {
  root.setAttribute("data-theme", theme);
  root.style.colorScheme = theme;
  const meta = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
  if (meta) meta.setAttribute("content", themeColors[theme]);
  if (!themeToggle) return;
  const next = theme === "dark" ? "light" : "dark";
  themeToggle.setAttribute("aria-label", `Switch to ${next} theme`);
}

applyTheme(currentTheme());

themeToggle?.addEventListener("click", () => {
  const next = currentTheme() === "dark" ? "light" : "dark";
  applyTheme(next);
  try {
    localStorage.setItem("theme", next);
  } catch {
    /* storage can be blocked; the toggle still works for this view */
  }
});

function setMenu(open: boolean) {
  if (!navToggle || !navMenu) return;
  navToggle.setAttribute("aria-expanded", String(open));
  navMenu.classList.toggle("is-open", open);
}

navToggle?.addEventListener("click", () => {
  setMenu(navToggle.getAttribute("aria-expanded") !== "true");
});

navMenu?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => setMenu(false));
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setMenu(false);
});

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const revealNodes = document.querySelectorAll<HTMLElement>("[data-reveal]");

if (reduceMotion || !("IntersectionObserver" in window)) {
  revealNodes.forEach((node) => node.classList.add("is-in"));
} else {
  const viewHeight = window.innerHeight || 0;
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-in");
        revealObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.14, rootMargin: "0px 0px -8% 0px" },
  );
  revealNodes.forEach((node) => {
    const rect = node.getBoundingClientRect();
    const inView = rect.top < viewHeight * 0.92 && rect.bottom > 0;
    node.classList.add("reveal");
    if (inView) node.classList.add("is-in");
    else revealObserver.observe(node);
  });
}

const sections = [...document.querySelectorAll<HTMLElement>("main section[id]")];
const navLinks = [...document.querySelectorAll<HTMLAnchorElement>("#nav-menu a")];

if (sections.length > 0 && navLinks.length > 0 && "IntersectionObserver" in window) {
  const spy = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      const id = `#${visible.target.id}`;
      navLinks.forEach((link) => {
        if (link.getAttribute("href") === id) link.setAttribute("aria-current", "true");
        else link.removeAttribute("aria-current");
      });
    },
    { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5] },
  );
  sections.forEach((section) => spy.observe(section));
}
