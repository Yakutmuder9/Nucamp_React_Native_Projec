// ============================================
// ; Title: index.js
// ; Author: Yakut Ahmedin
// ; Date: 03 Jan 2023
// ; WEB-330 GitHub Page: https://github.com/buwebdev/web-330/tree/master/portfolio
// ; Description:  Personal Portfolio Landing Page
// ;===========================================

/* Fade out the body when a link is clicked */
document.addEventListener("DOMContentLoaded", function () {
  let navbar = document.querySelector(".navbar");
  let links = document.getElementsByTagName("a");

  navbar.classList.add("slide-down");
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function (event) {
      event.preventDefault();
      let url = this.getAttribute("href");
      document.body.classList.add("fade-out");
      setTimeout(function () {
        window.location = url;
      }, 500);
    });
  }

  // button to toggle the menu, and a list of links in the menu.
  const menuToggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu");

  menuToggle.addEventListener("click", function () {
    menuToggle.classList.toggle("active");
    menu.classList.toggle("active");
  });
});
