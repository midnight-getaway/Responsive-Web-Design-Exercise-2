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

function closeMobileNav(focusToggle) {
    if (!navToggle || !primaryNav || !mobileMediaQuery.matches) {
        return;
    }
    navToggle.setAttribute("aria-expanded", "false");
    primaryNav.hidden = true;
    if (focusToggle) {
        navToggle.focus();
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

    primaryNav.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", () => {
            if (mobileMediaQuery.matches) {
                closeMobileNav(false);
            }
        });
    });

    document.addEventListener("keydown", (event) => {
        if (event.key !== "Escape" || !mobileMediaQuery.matches) {
            return;
        }
        if (navToggle.getAttribute("aria-expanded") !== "true") {
            return;
        }
        event.preventDefault();
        closeMobileNav(true);
    });

    if (typeof mobileMediaQuery.addEventListener === "function") {
        mobileMediaQuery.addEventListener("change", collapseNavForMobile);
    } else if (typeof mobileMediaQuery.addListener === "function") {
        mobileMediaQuery.addListener(collapseNavForMobile);
    }
}
