//Responsive Navigation Bar
const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-list");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("nav-active");

  // Burger Animation
  burger.classList.toggle("toggle");
});
