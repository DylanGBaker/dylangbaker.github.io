const pageLogo = document.querySelector(".logo");
const navLinks = document.querySelectorAll(".u-url.navlink");

function NavBarAnimations() {
    anime({
        targets: pageLogo,
        translateX: 200,
        duration: 1000,
        scale: 0.5,
        direction: "reverse",
        easing: "easeInOutSine"
    });
    
    anime({
        targets: navLinks,
        translateX: 2,
        scale: 0.5,
        duration: 1000,
        direction: "reverse",
        easing: "easeInOutSine"
    })
}

function RunApp() {
    NavBarAnimations();
}

RunApp();
