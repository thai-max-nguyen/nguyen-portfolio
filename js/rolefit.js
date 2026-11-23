/* rolefit.js: small additions without touching main.js.
   1. Tabs: Home / End jump to the first / last tab (arrows stay in main.js).
   2. Cabinet: mark the empty photo slots as placeholders (.rf-todo). */
(function () {
  var tabs = Array.prototype.slice.call(document.querySelectorAll(".tabs__b"));
  tabs.forEach(function (t) {
    t.addEventListener("keydown", function (e) {
      var n = e.key === "Home" ? tabs[0] : e.key === "End" ? tabs[tabs.length - 1] : null;
      if (!n) return;
      e.preventDefault();
      n.click();
      n.focus();
    });
  });
  function tagSlots() {
    document.querySelectorAll(".tc__slot").forEach(function (s) { s.classList.add("rf-todo"); });
  }
  tagSlots();
  window.addEventListener("load", tagSlots);
})();
