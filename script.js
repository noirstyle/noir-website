console.log("NOIR loaded");
// =========================
// SCROLL ARROW HIDE
// =========================

const arrow = document.querySelector(".scroll-arrow");

window.addEventListener("scroll", () => {

    if (window.scrollY > 100) {
        arrow.style.opacity = "0";
    } else {
        arrow.style.opacity = "1";
    }

});
