import "./style.css";
import "./reset.css";
import "boxicons";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import VanillaTilt from "vanilla-tilt";

const navToggle = document.querySelector(".toggle");
const navList = document.querySelector(".nav-list");
const navLinks = document.querySelectorAll(".nav-link");

navToggle.addEventListener("click", () => {
  navList.classList.toggle("active");
  navToggle.classList.toggle("toggle-active");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navList.classList.remove("active");
    navToggle.classList.remove("toggle-active");
  });
});

const nav = document.querySelector("nav");
const navHeight = nav.getBoundingClientRect().height;

window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  if (scrollHeight > navHeight) {
    nav.classList.add("nav-scrolled");
  } else {
    nav.classList.remove("nav-scrolled");
  }
});

gsap.from(".logo", { duration: 1.5, opacity: 0, y: -50, ease: "power4.out" });
gsap.from(".nav-link", {
  duration: 2,
  opacity: 0,
  y: -50,
  ease: "power4.out",
  delay: 0.2,
  stagger: 0.3,
});
gsap.from(".nav-icon", {
  duration: 2,
  opacity: 0,
  y: -50,
  ease: "power4.out",
  delay: 0.4,
  stagger: 0.2,
});

gsap.from(".header-img", {
  duration: 3,
  opacity: 1,
  width: 0,
  x: 50,
  ease: "power4.out",
  delay: 0.2,
});

gsap.from(".header-text", {
  duration: 3,
  opacity: 0,
  rotateX: 90,
  y: -50,
  ease: "power4.out",
  delay: 0.4,
});

gsap.from(".header-btn", {
  duration: 4,
  borderRadius: "50%",
  opacity: 0,
  y: -50,
  ease: "power4.out",
  delay: 0.4,
});

gsap.from(".main-img", {
  duration: 3,
  opacity: 0,
  y: 50,
  ease: "power4.out",
  delay: 0.2,
  scrollTrigger: {
    trigger: ".main-img",
    start: "top 80%",
  },
});

gsap.from(".main-text", {
  duration: 3,
  opacity: 0,
  x: -100,
  ease: "power4.out",
  delay: 0.4,
  scrollTrigger: {
    trigger: ".main-text",
    start: "left 80%",
  },
});

gsap.from(".main-title", {
  duration: 3,
  opacity: 0,
  y: -50,
  ease: "power4.out",
  delay: 0.4,
  scrollTrigger: {
    trigger: ".main-title",
    start: "top 80%",
  },
});

gsap.from(".main-p", {
  duration: 3,
  opacity: 0,
  y: -50,
  ease: "power4.out",
  delay: 0.4,
  scrollTrigger: {
    trigger: ".main-text",
    start: "top 80%",
  },
});

gsap.from("main-list", {
  duration: 3,
  opacity: 0,
  y: -50,
  ease: "power4.out",
  delay: 0.4,
  scrollTrigger: {
    trigger: ".main-text",
    start: "top 80%",
  },
});

gsap.from(".main-btn", {
  duration: 3,
  opacity: 0,
  y: -50,
  ease: "power4.out",
  delay: 0.4,
  scrollTrigger: {
    trigger: ".main-text",
    start: "top 80%",
  },
});

VanillaTilt.init(document.querySelectorAll(".card"), {
  max: 25,
  speed: 400,
  glare: true,
  "max-glare": 0.5,
  scale: 1.05,
  gyroscope: true,
});

gsap.from(".card", {
  duration: 3,
  scale: 0.5,
  opacity: 0,
  y: -100,
  ease: "power4.out",
  delay: 0.4,
  scrollTrigger: {
    trigger: ".card",
    start: "top 80%",
  },
});

gsap.from(".about-img", {
  duration: 3,
  opacity: 0,
  y: 50,
  ease: "power4.out",
  delay: 1,
  scrollTrigger: {
    trigger: ".about-img",
    start: "top 80%",
  },
});

gsap.from(".about-text", {
  duration: 2,
  opacity: 0,
  y: 50,
  ease: "power4.out",
  rotateX: 90,
  delay: 0.4,
  scrollTrigger: {
    trigger: ".about-text",
    start: "right 80%",
  },
});

gsap.from(".review-card", {
  duration: 3,
  delay: 0.4,
  opacity: 0,
  y: -50,
  ease: "power4.out",
  delay: 0.4,
  scrollTrigger: {
    trigger: ".review-card",
    start: "top 80%",
  },
});
