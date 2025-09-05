import { gsap } from "gsap";

// Example: Fade in all elements with class 'fade-in' on page load
gsap.from(".fade-in", {
    opacity: 0,
    y: 30,
    duration: 1,
    stagger: 0.2,
    ease: "power2.out"
});

// Example: Animate navigation bar on scroll
const navbar = document.querySelector(".navbar");
if (navbar) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            gsap.to(navbar, { backgroundColor: "#fff", duration: 0.3 });
        } else {
            gsap.to(navbar, { backgroundColor: "transparent", duration: 0.3 });
        }
    });
}

// Example: Button hover animation
const buttons = document.querySelectorAll(".btn-animate");
buttons.forEach(btn => {
    btn.addEventListener("mouseenter", () => {
        gsap.to(btn, { scale: 1.05, duration: 0.2 });
    });
    btn.addEventListener("mouseleave", () => {
        gsap.to(btn, { scale: 1, duration: 0.2 });
    });
});