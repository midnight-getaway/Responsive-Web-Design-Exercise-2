document.documentElement.classList.add("has-js");

const navToggle = document.querySelector(".nav-toggle");
const primaryNav = document.getElementById("primary-nav");
const mobileMediaQuery = window.matchMedia("(max-width: 767px)");

function collapseNavForMobile() {
    if (!navToggle || !primaryNav) {
        return;
    }

    const isExpanded = navToggle.getAttribute("aria-expanded") === "true";

    if (mobileMediaQuery.matches) {
        primaryNav.hidden = !isExpanded;
    } else {
        primaryNav.hidden = false;
        navToggle.setAttribute("aria-expanded", "false");
    }
}

if (navToggle && primaryNav) {
    collapseNavForMobile();

    navToggle.addEventListener("click", () => {
        const isExpanded = navToggle.getAttribute("aria-expanded") === "true";
        const nextExpanded = !isExpanded;

        navToggle.setAttribute("aria-expanded", String(nextExpanded));
        primaryNav.hidden = !nextExpanded;
    });

    if (typeof mobileMediaQuery.addEventListener === "function") {
        mobileMediaQuery.addEventListener("change", collapseNavForMobile);
    } else if (typeof mobileMediaQuery.addListener === "function") {
        mobileMediaQuery.addListener(collapseNavForMobile);
    }
}
