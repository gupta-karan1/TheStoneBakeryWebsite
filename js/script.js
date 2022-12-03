// Common JavaScript File for all HTMl files and CSS File

// toggle visibility of search form in header

let searchForm = document.querySelector(".search-form");
let searchBtn = document.querySelector("#search-btn");

// toggle the search input field visibility
searchBtn.addEventListener("click", function () {
  searchForm.classList.toggle("active");

  //   shoppingCart.classList.remove("active");
  //   loginForm.classList.remove("active");
  //   navbar.classList.remove("active");
});

// document.querySelector("#search-btn").onclick = () => {
//   searchForm.classList.toggle("active");
// };
