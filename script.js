// Reveal-on-scroll + scroll progress — restrained, precise motion.
(function () {
  "use strict";

  // Staggered reveal via IntersectionObserver
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry, i) {
          if (entry.isIntersecting) {
            var el = entry.target;
            setTimeout(function () {
              el.classList.add("is-visible");
            }, Math.min(i * 60, 240));
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    revealEls.forEach(function (el) {
      io.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  // Scroll progress bar
  var bar = document.querySelector(".progress__bar");
  if (bar) {
    var ticking = false;
    var update = function () {
      var h = document.documentElement;
      var max = h.scrollHeight - h.clientHeight;
      var pct = max > 0 ? (h.scrollTop / max) * 100 : 0;
      bar.style.width = pct + "%";
      ticking = false;
    };
    window.addEventListener(
      "scroll",
      function () {
        if (!ticking) {
          window.requestAnimationFrame(update);
          ticking = true;
        }
      },
      { passive: true }
    );
    update();
  }

  // Live clock (KST) — subtle telemetry detail
  var clock = document.getElementById("clock");
  if (clock) {
    var pad = function (n) { return n < 10 ? "0" + n : "" + n; };
    var tick = function () {
      // KST = UTC+9, derived from UTC so it is correct regardless of viewer TZ
      var now = new Date();
      var k = new Date(now.getTime() + (now.getTimezoneOffset() + 540) * 60000);
      clock.textContent = pad(k.getHours()) + ":" + pad(k.getMinutes()) + ":" + pad(k.getSeconds()) + " KST";
    };
    tick();
    setInterval(tick, 1000);
  }
})();
