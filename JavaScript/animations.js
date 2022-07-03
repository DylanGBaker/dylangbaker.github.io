const pageLogo = document.querySelector(".logo");
const navLinks = document.querySelectorAll(".u-url.navlink");

anime({
    targets: pageLogo,
    translateX: 200,
    duration: 2000,
    direction: "reverse",
    easing: "easeInOutSine"
});

anime({
    targets: navLinks,
    translateX: 2,
    scale: 1.5,
    duration: 2000,
    direction: "reverse",
    easing: "easeInOutSine"
})