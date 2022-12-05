// Common JavaScript File for all HTMl files and CSS File

// toggle visibility of search form in header

let searchForm = document.querySelector(".search-form");
let searchBtn = document.querySelector("#search-btn");

// toggle the search input field visibility
searchBtn.addEventListener("click", function () {
  searchForm.classList.toggle("active");

  shoppingCart.classList.remove("active");
  loginForm.classList.remove("active");
  navbar.classList.remove("active");
});

// ---------------

// shopping cart box toggle visibility:
let shoppingCart = document.querySelector(".shopping-cart");
let cartBtn = document.querySelector("#cart-btn");

// toggle the shopping cart box visibility
cartBtn.addEventListener("click", function () {
  shoppingCart.classList.toggle("active");
  searchForm.classList.remove("active");

  loginForm.classList.remove("active");
  navbar.classList.remove("active");
});

// ---------------

// login form box toggle visibility:
let loginForm = document.querySelector(".login-form");
let loginBtn = document.querySelector("#login-btn");

// toggle the shopping cart box visibility
loginBtn.addEventListener("click", function () {
  loginForm.classList.toggle("active");
  searchForm.classList.remove("active");
  shoppingCart.classList.remove("active");

  navbar.classList.remove("active");
});

// ---------------

// menu button box
let navbar = document.querySelector(".navbar");
let menuBtn = document.querySelector("#menu-btn");

// toggle the menu navigation visibility
menuBtn.addEventListener("click", function () {
  navbar.classList.toggle("active");
  searchForm.classList.remove("active");
  shoppingCart.classList.remove("active");
  loginForm.classList.remove("active");
});

window.addEventListener("onscroll", function () {
  searchForm.classList.remove("active");
  shoppingCart.classList.remove("active");
  loginForm.classList.remove("active");
  navbar.classList.remove("active");
});

// swiper js for slider for review cards

var swiper = new Swiper(".review-slider", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },

  centeredSlides: true,

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});
// swiper js for slider for brand number cards

var swiper = new Swiper(".numBox-slider", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },

  centeredSlides: true,

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});

// swiper js for slider for brand logos cards

var swiper = new Swiper(".brandBox-slider", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },

  centeredSlides: true,

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 5,
    },
  },
});

// ---------------------------
