/* ============================================================
   提瓦特导览 · 交互脚本
   1) 滚动淡入  2) 返回顶部
   说明：所有效果都是"锦上添花"，JS 失效时页面内容依然完整显示
   ============================================================ */

/* 标记：让 CSS 知道 JS 可用了，才启用淡入效果 */
document.documentElement.classList.add("js");

(function () {
  "use strict";

  /* ---------- 返回顶部 ---------- */
  var topBtn = document.getElementById("toTop");
  if (topBtn) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 420) {
        topBtn.classList.add("show");
      } else {
        topBtn.classList.remove("show");
      }
    });

    topBtn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ---------- 滚动淡入 ---------- */
  var items = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    items.forEach(function (el) { io.observe(el); });
  } else {
    /* 老浏览器直接显示，不做动画 */
    items.forEach(function (el) { el.classList.add("in"); });
  }
})();
