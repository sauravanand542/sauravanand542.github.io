(function () {
  var root = document.documentElement;
  var toggle = document.getElementById("theme-toggle");
  var label = toggle ? toggle.querySelector(".theme-label") : null;

  function currentTheme() {
    return root.getAttribute("data-theme") === "dark" ? "dark" : "light";
  }

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    if (!toggle) return;
    var dark = theme === "dark";
    toggle.setAttribute("aria-pressed", dark ? "true" : "false");
    var nextLabel = dark ? "Light theme" : "Dark theme";
    if (label) label.textContent = nextLabel;
    toggle.setAttribute("aria-label", dark ? "Switch to light theme" : "Switch to dark theme");
  }

  applyTheme(currentTheme());

  if (toggle) {
    toggle.addEventListener("click", function () {
      var next = currentTheme() === "dark" ? "light" : "dark";
      applyTheme(next);
      try {
        localStorage.setItem("theme", next);
      } catch (error) {
        /* Storage can be blocked; the choice still applies for this view. */
      }
    });
  }

  var media = window.matchMedia("(prefers-color-scheme: dark)");
  function onSchemeChange(event) {
    var stored = null;
    try {
      stored = localStorage.getItem("theme");
    } catch (error) {
      stored = null;
    }
    if (stored === "light" || stored === "dark") return;
    applyTheme(event.matches ? "dark" : "light");
  }
  if (typeof media.addEventListener === "function") {
    media.addEventListener("change", onSchemeChange);
  }

  var navLinks = document.querySelectorAll('.site-nav a[href^="#"]');
  var sections = [];
  navLinks.forEach(function (link) {
    var id = link.getAttribute("href").slice(1);
    var section = document.getElementById(id);
    if (section) sections.push({ link: link, section: section });
  });

  if (!("IntersectionObserver" in window) || !sections.length) return;

  var visible = new Map();
  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        visible.set(entry.target, entry.isIntersecting ? entry.intersectionRatio : 0);
      });
      var active = null;
      var best = 0;
      sections.forEach(function (item) {
        var ratio = visible.get(item.section) || 0;
        if (ratio > best) {
          best = ratio;
          active = item;
        }
      });
      sections.forEach(function (item) {
        if (item === active) item.link.setAttribute("aria-current", "true");
        else item.link.removeAttribute("aria-current");
      });
    },
    { rootMargin: "-20% 0px -55% 0px", threshold: [0, 0.15, 0.4, 0.75] }
  );

  sections.forEach(function (item) {
    observer.observe(item.section);
  });
})();
