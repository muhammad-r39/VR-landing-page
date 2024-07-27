"use strict";

// Responsive Menu
const menuIcon = document.querySelector(".menu-icon");

menuIcon.addEventListener("click", function () {
  const nav = document.querySelector(".site-navigation nav");
  const parent = document.querySelector(".site-navigation");
  const header = document.querySelector("header");

  if (parent.classList.contains("open")) {
    // Set max-height to 0 to collapse
    nav.style.maxHeight = "0";
    parent.classList.remove("open");
    header.classList.remove("open");
  } else {
    // Set max-height to scrollHeight to expand
    nav.style.maxHeight = nav.scrollHeight + "px";
    parent.classList.add("open");
    header.classList.add("open");
  }
});

// Sticky Menu
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 0) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});

// Active Menu with Smooth Scroll
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".main-menu a");

  const removeActiveClass = () =>
    navLinks.forEach((link) => link.classList.remove("active"));

  const addActiveClass = () => {
    let current = "";
    const scrollPosition = window.scrollY + window.innerHeight / 2.5;
    document.querySelectorAll("section").forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        current = section.getAttribute("id");
      }
    });
    removeActiveClass();
    navLinks.forEach((link) => {
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  };

  navLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  window.addEventListener("scroll", addActiveClass);
});
