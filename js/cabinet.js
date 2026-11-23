/* Trophy cabinet: high school awards, 2018–21.
 * To add an item: add one entry to ITEMS and put its image in assets/img/hs/.
 * kind: medal | certificate | plaque | photo   level: School | City | Provincial | Regional | National
 * An entry with img: null renders as a dashed "photo coming" slot (not clickable).
 * Optional: zoom = a ~2200 px copy for the large view; w, h = pixel size of img (stops layout jumps);
 * short_en = a shorter title for the shelf label (the large view always shows title_en).
 * level = the level of the contest or award (a provincial prize stays Provincial).
 */
(function () {
  "use strict";

  var SHELVES = [
    { id: "2018–19", grade: "Grade 10" },
    { id: "2019–20", grade: "Grade 11" },
    { id: "2020–21", grade: "Grade 12" }
  ];

  var ITEMS = [
    { year: 2019, shelf: "2018–19", kind: "medal", title_en: "Regional Olympiad, Bronze Medal, Literature", short_en: "Regional Olympiad, Bronze Medal", level: "Regional",
      issuer_en: "12th Olympiad of gifted high schools, Northern Delta and Coastal Areas, Quang Ninh", date: "April 2019",
      img: "assets/img/hs/hs-regional-bronze.webp", zoom: "assets/img/hs/hs-regional-bronze-2200.webp", w: 610, h: 1500,
      alt: "Bronze medal on a red and yellow ribbon from the 12th Olympiad of gifted high schools in the Northern Delta and Coastal Areas, held in Quang Ninh" },
    { year: 2019, shelf: "2018–19", kind: "certificate", title_en: "Excellent Student, Grade 10", level: "School",
      issuer_en: "Principal, Hoang Le Kha High School for the Gifted", date: "May 2019",
      img: "assets/img/hs/hs-g10-excellent.webp", zoom: "assets/img/hs/hs-g10-excellent-2200.webp", w: 1500, h: 1054,
      alt: "Giấy khen (certificate of merit) from the Principal of Trường THPT Chuyên Hoàng Lê Kha to student Lê Phan Phương Nguyên, class 10V, for the title Học sinh Giỏi (Excellent Student), school year 2018–2019" },
    { year: 2019, shelf: "2018–19", kind: "photo", title_en: "[TBD] photo coming", img: null },

    { year: 2019, shelf: "2019–20", kind: "certificate", title_en: "Provincial Third Prize, Literature", level: "Provincial",
      issuer_en: "Hoang Le Kha High School for the Gifted, for the Tay Ninh provincial excellent-student contest", date: "December 2019",
      img: "assets/img/hs/hs-prov-third-lit.webp", zoom: "assets/img/hs/hs-prov-third-lit-2200.webp", w: 1500, h: 1086,
      alt: "Giấy khen from the Principal of Trường THPT Chuyên Hoàng Lê Kha to student Lê Phan Phương Nguyên, class 11V, for Giải Ba môn Ngữ văn (Third Prize in Literature) in the provincial excellent-student contest, school year 2019–2020" },
    { year: 2020, shelf: "2019–20", kind: "certificate", title_en: "City award for the provincial Third Prize", level: "City",
      issuer_en: "Chairman, Tay Ninh City Study Promotion Association", date: "June 2020",
      img: "assets/img/hs/hs-city-assoc.webp", zoom: "assets/img/hs/hs-city-assoc-2200.webp", w: 1500, h: 1061,
      alt: "Giấy khen from the Chairman of Hội Khuyến học Thành phố Tây Ninh (Tay Ninh City Study Promotion Association) to Lê Phan Phương Nguyên, class 11 Văn, Trường THPT Chuyên Hoàng Lê Kha, for the provincial Third Prize in Literature, school year 2019–2020" },
    { year: 2020, shelf: "2019–20", kind: "certificate", title_en: "Excellent Student, Grade 11", level: "School",
      issuer_en: "Principal, Hoang Le Kha High School for the Gifted", date: "July 2020",
      img: "assets/img/hs/hs-g11-excellent.webp", zoom: "assets/img/hs/hs-g11-excellent-2200.webp", w: 1500, h: 1083,
      alt: "Giấy khen from the Principal of Trường THPT Chuyên Hoàng Lê Kha to student Lê Phan Phương Nguyên, class 11V, for the title Học sinh Giỏi (Excellent Student), school year 2019–2020" },
    { year: 2020, shelf: "2019–20", kind: "certificate", title_en: "Le Quy Don Award 2019–20", level: "Provincial",
      issuer_en: "Chairman, Tay Ninh Provincial People’s Committee", date: "July 2020",
      img: "assets/img/hs/hs-lqd-1920.webp", zoom: "assets/img/hs/hs-lqd-1920-2200.webp", w: 1500, h: 1047,
      alt: "Framed Bằng khen from the Chairman of Ủy ban Nhân dân tỉnh Tây Ninh to Lê Phan Phương Nguyên, Trường THPT chuyên Hoàng Lê Kha, for outstanding study and the Giải thưởng Lê Quý Đôn (Le Quy Don Award), school year 2019–2020" },
    { year: 2020, shelf: "2019–20", kind: "plaque", title_en: "Team member, national excellent-student contest, 2019–20", short_en: "National contest team, 2019–20", level: "School",
      issuer_en: "Hoang Le Kha High School for the Gifted, team member plaque", date: "School year 2019–20",
      img: "assets/img/hs/hs-natl-team-1920.webp", zoom: "assets/img/hs/hs-natl-team-1920-2200.webp", w: 1496, h: 1500,
      alt: "Glass plaque from Trường THPT Chuyên Hoàng Lê Kha: Chứng nhận, Thành viên đội tuyển HSG Quốc gia (member of the team for the national excellent-student contest), school year 2019–2020" },

    { year: 2021, shelf: "2020–21", kind: "certificate", title_en: "Provincial First Prize, Literature", level: "Provincial",
      issuer_en: "Hoang Le Kha High School for the Gifted, for the Tay Ninh provincial excellent-student contest", date: "January 2021",
      img: "assets/img/hs/hs-prov-first-lit.webp", zoom: "assets/img/hs/hs-prov-first-lit-2200.webp", w: 1500, h: 1050,
      alt: "Giấy khen from the Principal of Trường THPT Chuyên Hoàng Lê Kha to student Lê Phan Phương Nguyên, class 12V, for Giải Nhất môn Ngữ văn (First Prize in Literature) in the provincial excellent-student contest, school year 2020–2021" },
    { year: 2021, shelf: "2020–21", kind: "plaque", title_en: "Team member, national excellent-student contest, Literature, 2020–21", short_en: "National contest team, 2020–21", level: "School",
      issuer_en: "Hoang Le Kha High School for the Gifted, team member plaque", date: "School year 2020–21",
      img: "assets/img/hs/hs-natl-team-2021.webp", zoom: "assets/img/hs/hs-natl-team-2021-2200.webp", w: 1319, h: 1500,
      alt: "Glass plaque from Trường THPT Chuyên Hoàng Lê Kha: Chứng nhận, Lê Phan Phương Nguyên, Thành viên đội tuyển môn Ngữ văn tham dự kỳ thi chọn học sinh giỏi quốc gia (member of the literature team at the national excellent-student contest), school year 2020–2021" },
    { year: 2021, shelf: "2020–21", kind: "certificate", title_en: "Excellent Student, Grade 12", level: "School",
      issuer_en: "Principal, Hoang Le Kha High School for the Gifted", date: "May 2021",
      img: "assets/img/hs/hs-g12-excellent.webp", zoom: "assets/img/hs/hs-g12-excellent-2200.webp", w: 1500, h: 1071,
      alt: "Giấy khen from the Principal of Trường THPT Chuyên Hoàng Lê Kha to student Lê Phan Phương Nguyên, class 12V, for the title Học sinh Giỏi (Excellent Student), school year 2020–2021" },
    { year: 2021, shelf: "2020–21", kind: "certificate", title_en: "Le Quy Don Award 2020–21", level: "Provincial",
      issuer_en: "Chairman, Tay Ninh Provincial People’s Committee", date: "May 2021",
      img: "assets/img/hs/hs-lqd-2021.webp", zoom: "assets/img/hs/hs-lqd-2021-2200.webp", w: 1500, h: 1012,
      alt: "Framed Bằng khen from the Chairman of Ủy ban Nhân dân tỉnh Tây Ninh to student Lê Phan Phương Nguyên, Trường THPT chuyên Hoàng Lê Kha, for outstanding study and the Giải thưởng Lê Quý Đôn (Le Quy Don Award), school year 2020–2021" },
    { year: 2021, shelf: "2020–21", kind: "photo", title_en: "[TBD] photo coming", img: null }
  ];

  // Newest first: Grade 12 shelf on top, latest award first on each shelf.
  SHELVES.reverse();
  ITEMS.reverse();
  ITEMS = ITEMS.filter(function (it) { return it.img; }); // photo slots with no image stay hidden until a photo arrives

  var root = document.getElementById("cabinet");
  if (!root) return;
  var list = root.querySelector(".tc__shelves");
  var doc = document.documentElement;
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
  var real = ITEMS.filter(function (it) { return !!it.img; });
  var buttons = [];

  /* keep the last two words together so a caption never ends on one short word */
  function glue(s) { return s.replace(/ (\S+)$/, "\u00a0$1").replace(/(\d{4})–(\d{2})/g, "$1\u2011$2").replace(/Le Quy Don/g, "Le\u00a0Quy\u00a0Don"); }

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  /* ---------- render ---------- */
  SHELVES.forEach(function (s, si) {
    var li = el("li", "tc__shelf");
    li.style.setProperty("--si", si);
    var yr = el("p", "tc__yr");
    yr.appendChild(el("b", null, s.id));
    yr.appendChild(el("span", null, s.grade));
    var view = el("div", "tc__view");
    var track = el("div", "tc__track");
    track.setAttribute("role", "list");
    track.setAttribute("aria-label", s.id + ", " + s.grade);
    var j = 0;
    ITEMS.forEach(function (it) {
      if (it.shelf !== s.id) return;
      var d = si * 70 + j * 20;
      j++;
      if (!it.img) {
        var slot = el("div", "tc__slot");
        slot.setAttribute("role", "listitem");
        slot.style.setProperty("--d", d + "ms");
        var o = el("span", "tc__obj");
        o.appendChild(el("span", null, "[TBD]"));
        slot.appendChild(o);
        var c0 = el("span", "tc__cap");
        c0.appendChild(el("span", "tc__t", glue(it.title_en)));
        slot.appendChild(c0);
        track.appendChild(slot);
        return;
      }
      var wrapLi = el("div");
      wrapLi.setAttribute("role", "listitem");
      wrapLi.style.display = "contents";
      var b = el("button", "tc__item");
      b.type = "button";
      b.style.setProperty("--d", d + "ms");
      b.setAttribute("aria-label", it.title_en + ", " + it.level + ", " + it.date + ". Open larger view");
      var obj = el("span", "tc__obj");
      var img = el("img");
      var portrait = it.w && it.h ? it.w / it.h < 1.1 : (it.kind === "medal" || it.kind === "plaque");
      img.src = it.img;
      img.alt = "";
      img.width = it.w || (portrait ? 80 : 142);
      img.height = it.h || 100;
      img.loading = "lazy";
      img.decoding = "async";
      if (portrait) { img.setAttribute("data-ar", "portrait"); b.classList.add("is-narrow"); }
      if (it.kind === "medal") b.classList.add("is-medal");
      img.addEventListener("error", function () { b.classList.add("is-broken"); });
      obj.appendChild(img);
      b.appendChild(obj);
      var cap = el("span", "tc__cap");
      cap.appendChild(el("span", "tc__t", glue(it.short_en || it.title_en)));
      cap.appendChild(el("span", "tc__lv", it.level));
      b.appendChild(cap);
      b._idx = real.indexOf(it);
      b.addEventListener("click", function () { open(b._idx, b); });
      buttons[b._idx] = b;
      wrapLi.appendChild(b);
      track.appendChild(wrapLi);
    });
    view.appendChild(track);
    li.appendChild(yr);
    li.appendChild(view);
    list.appendChild(li);
  });

  /* ---------- reveal once ---------- */
  function reveal() {
    root.classList.add("is-in");
    setTimeout(function () { root.classList.add("is-done"); }, 700);
  }
  if ("IntersectionObserver" in window && doc.classList.contains("motion")) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { reveal(); io.disconnect(); } });
    }, { threshold: 0.18 });
    io.observe(root);
  } else {
    reveal();
  }

  /* ---------- arrow keys between items ---------- */
  root.addEventListener("keydown", function (e) {
    var i = buttons.indexOf(document.activeElement);
    if (i < 0) return;
    var n = -1;
    if (e.key === "ArrowRight") n = i + 1;
    else if (e.key === "ArrowLeft") n = i - 1;
    else if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      var shelf = buttons[i].closest(".tc__shelf");
      var shelves = Array.prototype.slice.call(root.querySelectorAll(".tc__shelf"));
      var k = shelves.indexOf(shelf) + (e.key === "ArrowDown" ? 1 : -1);
      if (k >= 0 && k < shelves.length) {
        var t = shelves[k].querySelector(".tc__item");
        if (t) n = buttons.indexOf(t);
      }
    } else if (e.key === "Home") n = 0;
    else if (e.key === "End") n = buttons.length - 1;
    if (n >= 0 && n < buttons.length) {
      e.preventDefault();
      buttons[n].focus();
      buttons[n].scrollIntoView({ block: "nearest", inline: "nearest", behavior: reduce.matches ? "auto" : "smooth" });
    }
  });

  /* ---------- zoom view ---------- */
  var lb = el("div", "tc-lb");
  lb.hidden = true;
  lb.setAttribute("role", "dialog");
  lb.setAttribute("aria-modal", "true");
  lb.setAttribute("aria-labelledby", "tc-lb-t");
  lb.tabIndex = -1;
  var bg = el("div", "tc-lb__bg");
  var stage = el("div", "tc-lb__stage");
  var big = el("img", "tc-lb__img");
  big.decoding = "async";
  /* never show the image larger than 1x of its real pixels */
  function capSize() {
    if (!big.naturalWidth) return;
    var dpr = window.devicePixelRatio || 1;
    big.style.maxWidth = "min(100%, " + Math.round(big.naturalWidth / dpr) + "px)";
    big.style.maxHeight = "min(100%, " + Math.round(big.naturalHeight / dpr) + "px)";
  }
  big.addEventListener("load", capSize);
  stage.appendChild(big);
  var panel = el("div", "tc-lb__panel");
  var cap = el("figure", "tc-lb__cap");
  cap.style.margin = "0";
  var tt = el("h3", "tc-lb__t");
  tt.id = "tc-lb-t";
  var mm = el("p", "tc-lb__m");
  cap.appendChild(tt);
  cap.appendChild(mm);
  var bar = el("div", "tc-lb__bar");
  var counter = el("span", "tc-lb__n");
  counter.setAttribute("aria-live", "polite");
  var prev = el("button", "tc-lb__b", "‹");
  prev.type = "button";
  prev.setAttribute("aria-label", "Previous award");
  var next = el("button", "tc-lb__b", "›");
  next.type = "button";
  next.setAttribute("aria-label", "Next award");
  var close = el("button", "tc-lb__b tc-lb__b--x", "Close ×");
  close.type = "button";
  close.setAttribute("aria-label", "Close larger view");
  bar.appendChild(counter);
  bar.appendChild(prev);
  bar.appendChild(next);
  bar.appendChild(close);
  panel.appendChild(cap);
  panel.appendChild(bar);
  lb.appendChild(bg);
  lb.appendChild(stage);
  lb.appendChild(panel);
  document.body.appendChild(lb);

  var cur = -1, opener = null, busy = false;
  var saved = { h: "", b: "" };

  function fill(i) {
    var it = real[i];
    var dpr = window.devicePixelRatio || 1;
    var want = dpr > 1 && it.zoom ? it.zoom : it.img;
    if (big.getAttribute("src") !== want) big.src = want; else capSize();
    big.alt = it.alt;
    big.classList.toggle("is-cut", it.kind === "medal" || it.kind === "plaque");
    tt.textContent = it.title_en;
    mm.textContent = "";
    var lv = el("b", null, it.level);
    mm.appendChild(lv);
    mm.appendChild(document.createTextNode(it.issuer_en + " · " + it.date));
    counter.textContent = (i + 1) + " / " + real.length;
    prev.disabled = i === 0;
    next.disabled = i === real.length - 1;
  }

  function thumbRect(i) {
    var b = buttons[i];
    if (!b) return null;
    var r = b.querySelector("img").getBoundingClientRect();
    if (r.width < 4 || r.bottom < 0 || r.top > window.innerHeight || r.right < 0 || r.left > window.innerWidth) return null;
    return r;
  }

  function flip(from, reverse, done) {
    var to = big.getBoundingClientRect();
    if (!from || reduce.matches || !doc.classList.contains("motion") && !window.__tcForceMotion || to.width < 4) {
      big.style.transition = "opacity var(--t-mid) var(--ease)";
      big.style.opacity = reverse ? "0" : "1";
      if (!reverse) { big.style.opacity = "0"; void big.offsetWidth; big.style.opacity = "1"; }
      setTimeout(done || function () {}, reverse ? 320 : 0);
      return;
    }
    var sx = from.width / to.width, sy = from.height / to.height;
    var tf = "translate(" + (from.left - to.left) + "px," + (from.top - to.top) + "px) scale(" + sx + "," + sy + ")";
    big.style.opacity = "1";
    if (!reverse) {
      big.style.transition = "none";
      big.style.transform = tf;
      void big.offsetWidth;
      big.style.transition = "transform var(--t-mid) var(--ease)";
      big.style.transform = "none";
      setTimeout(done || function () {}, 330);
    } else {
      big.style.transition = "transform var(--t-mid) var(--ease-in)";
      big.style.transform = tf;
      setTimeout(done || function () {}, 300);
    }
  }

  function lock(on) {
    if (on) {
      saved.h = doc.style.overflow; saved.b = document.body.style.overflow;
      var sw = window.innerWidth - doc.clientWidth;
      doc.style.overflow = "hidden"; document.body.style.overflow = "hidden";
      if (sw > 0) document.body.style.paddingRight = sw + "px";
    } else {
      doc.style.overflow = saved.h; document.body.style.overflow = saved.b;
      document.body.style.paddingRight = "";
    }
  }

  function open(i, from) {
    if (busy || i < 0) return;
    opener = from || buttons[i];
    cur = i;
    fill(i);
    lock(true);
    lb.hidden = false;
    big.style.transform = ""; big.style.opacity = "0";
    var go = function () {
      void lb.offsetWidth;
      lb.classList.add("is-open");
      flip(thumbRect(i), false);
      close.focus({ preventScroll: true });
    };
    if (big.complete && big.naturalWidth) go();
    else { big.onload = function () { big.onload = null; go(); }; }
  }

  function shut() {
    if (lb.hidden || busy) return;
    busy = true;
    lb.classList.remove("is-open");
    var b = buttons[cur];
    if (b) b.scrollIntoView({ block: "nearest", inline: "nearest" });
    flip(thumbRect(cur), true, function () {
      lb.hidden = true;
      big.style.transform = ""; big.style.transition = "";
      lock(false);
      busy = false;
      var t = buttons[cur] || opener;
      if (t) t.focus({ preventScroll: true });
    });
  }

  function go(d) {
    var n = cur + d;
    if (n < 0 || n >= real.length || busy) return;
    cur = n;
    big.style.transition = "none"; big.style.transform = "none"; big.style.opacity = "0";
    fill(n);
    var show = function () {
      void big.offsetWidth;
      big.style.transition = "opacity var(--t-fast) var(--ease), transform var(--t-mid) var(--ease)";
      if (!reduce.matches) { big.style.transform = "translateX(" + (d * 24) + "px)"; void big.offsetWidth; big.style.transform = "none"; }
      big.style.opacity = "1";
    };
    if (big.complete && big.naturalWidth) show(); else big.onload = function () { big.onload = null; show(); };
  }

  prev.addEventListener("click", function () { go(-1); });
  next.addEventListener("click", function () { go(1); });
  close.addEventListener("click", shut);
  bg.addEventListener("click", shut);
  stage.addEventListener("click", function (e) { if (e.target === stage) shut(); });

  lb.addEventListener("pointerdown", function (e) {
    if (!e.target.closest("button")) lb.focus({ preventScroll: true });
  });
  document.addEventListener("keydown", function (e) {
    if (lb.hidden) return;
    if (e.key === "Escape") { e.preventDefault(); shut(); return; }
    if (e.key === "ArrowRight") { e.preventDefault(); go(1); return; }
    if (e.key === "ArrowLeft") { e.preventDefault(); go(-1); return; }
    if (e.key === "Tab") {
      var f = [prev, next, close].filter(function (x) { return !x.disabled; });
      var a = f.indexOf(document.activeElement);
      if (e.shiftKey && (a <= 0)) { e.preventDefault(); f[f.length - 1].focus(); }
      else if (!e.shiftKey && (a === f.length - 1 || a < 0)) { e.preventDefault(); f[0].focus(); }
    }
  });

  /* swipe: left/right = next/previous, down = close */
  var sx0 = 0, sy0 = 0, tracking = false;
  stage.addEventListener("touchstart", function (e) {
    if (e.touches.length !== 1) return;
    tracking = true; sx0 = e.touches[0].clientX; sy0 = e.touches[0].clientY;
  }, { passive: true });
  stage.addEventListener("touchmove", function (e) {
    if (!tracking) return;
    var dy = e.touches[0].clientY - sy0, dx = e.touches[0].clientX - sx0;
    if (dy > 0 && Math.abs(dy) > Math.abs(dx) && !reduce.matches) {
      big.style.transition = "none";
      big.style.transform = "translateY(" + dy * 0.6 + "px)";
      bg.style.opacity = String(Math.max(0.35, 1 - dy / 400));
    }
  }, { passive: true });
  stage.addEventListener("touchend", function (e) {
    if (!tracking) return;
    tracking = false;
    var t = e.changedTouches[0], dx = t.clientX - sx0, dy = t.clientY - sy0;
    bg.style.opacity = "";
    if (dy > 90 && Math.abs(dy) > Math.abs(dx)) { big.style.transform = ""; shut(); return; }
    big.style.transition = "transform var(--t-fast) var(--ease)"; big.style.transform = "none";
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) go(dx < 0 ? 1 : -1);
  });
})();
