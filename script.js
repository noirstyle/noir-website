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
// =========================
// ACCOUNT MENU
// =========================

const accountBtn = document.querySelector(".account-btn");
const accountMenu = document.querySelector(".account-menu");

accountBtn.addEventListener("click", () => {
    accountMenu.classList.toggle("active");
});
