const mobileMenu = document.querySelector("#mobile-menu");
const mobileNav = document.querySelector("#mobile-nav");
const desktopNav = document.querySelector("#desktop-nav");
const bars = document.querySelector("#bars");

mobileMenu.addEventListener("click", function() {
    mobileNav.classList.toggle("d-none");
    mobileNav.classList.toggle("opacity-anim");
    desktopNav.classList.toggle("desktop-nav-white");

    if(bars.classList.contains("fa-xmark")) {
        bars.classList.remove("fa-xmark");
        bars.classList.add("fa-bars");
    } else {
        bars.classList.add("fa-xmark");
        bars.classList.remove("fa-bars");
    }
});