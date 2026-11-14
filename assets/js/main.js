// Small progressive enhancements. The site works fully without this file.
(function () {
  document.documentElement.classList.add("js");

  // Header hairline once the page is scrolled
  var header = document.querySelector(".site-header");
  if (header) {
    var onScroll = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  // Work filters: buttons use data-filter, cards use data-category="a b"
  var buttons = document.querySelectorAll(".filters button");
  var cards = document.querySelectorAll(".card[data-category]");
  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      var filter = button.dataset.filter;
      buttons.forEach(function (b) {
        b.setAttribute("aria-pressed", String(b === button));
      });
      cards.forEach(function (card) {
        var match = filter === "all" || card.dataset.category.split(" ").indexOf(filter) !== -1;
        card.hidden = !match;
        if (match) card.classList.add("is-in");
      });
    });
  });

  // Fade sections in as they enter the viewport
  var items = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px" }
    );
    items.forEach(function (el) { observer.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add("is-in"); });
  }

  // Current year in the footer
  var year = document.querySelector("[data-year]");
  if (year) year.textContent = new Date().getFullYear();
})();
