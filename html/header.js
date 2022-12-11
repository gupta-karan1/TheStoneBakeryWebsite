// toggle visibility of search form in header

let searchForm = document.querySelector(".search-form");
let searchBtn = document.querySelector("#search-btn");

// toggle the search input field visibility
searchBtn.addEventListener("click", function () {
  searchForm.classList.add("active");
  shoppingCart.classList.remove("active");
  loginForm.classList.remove("active");
  navbar.classList.remove("active");
  convertorForm.classList.remove("active");
  groceryList.classList.remove("active");

  // toggle buttons
  searchBtn.classList.add("inactive");
  closeBtn.classList.add("active");
  menuBtn.classList.remove("inactive");
  loginBtn.classList.remove("inactive");
  cartBtn.classList.remove("inactive");
});

// ---------------

// shopping cart box toggle visibility:
let shoppingCart = document.querySelector(".shopping-cart");
let cartBtn = document.querySelector("#cart-btn");

// toggle the shopping cart box visibility
cartBtn.addEventListener("click", function () {
  shoppingCart.classList.add("active");
  searchForm.classList.remove("active");
  loginForm.classList.remove("active");
  navbar.classList.remove("active");
  convertorForm.classList.remove("active");
  groceryList.classList.remove("active");

  // toggle buttons
  closeBtn.classList.add("active");
  cartBtn.classList.add("inactive");
  loginBtn.classList.remove("inactive");
  menuBtn.classList.remove("inactive");
  searchBtn.classList.remove("inactive");
});

// ---------------

// login form box toggle visibility:
let loginForm = document.querySelector(".login-form");
let loginBtn = document.querySelector("#login-btn");

// toggle the shopping cart box visibility
loginBtn.addEventListener("click", function () {
  loginForm.classList.add("active");
  searchForm.classList.remove("active");
  shoppingCart.classList.remove("active");
  navbar.classList.remove("active");
  convertorForm.classList.remove("active");
  groceryList.classList.remove("active");

  // toggle buttons
  closeBtn.classList.add("active");
  loginBtn.classList.add("inactive");
  menuBtn.classList.remove("inactive");
  cartBtn.classList.remove("inactive");
  searchBtn.classList.remove("inactive");
});

// ---------------

// menu button box
let navbar = document.querySelector(".navbar");
let menuBtn = document.querySelector("#menu-btn");

// toggle the menu navigation visibility
menuBtn.addEventListener("click", function () {
  navbar.classList.add("active");
  searchForm.classList.remove("active");
  shoppingCart.classList.remove("active");
  loginForm.classList.remove("active");
  convertorForm.classList.remove("active");
  groceryList.classList.remove("active");

  // toggle buttons
  closeBtn.classList.add("active");
  menuBtn.classList.add("inactive");
  loginBtn.classList.remove("inactive");
  cartBtn.classList.remove("inactive");
  searchBtn.classList.remove("inactive");
});

let closeBtn = document.querySelector(".close-btn");
closeBtn.addEventListener("click", function () {
  searchForm.classList.remove("active");
  shoppingCart.classList.remove("active");
  loginForm.classList.remove("active");
  navbar.classList.remove("active");
  convertorForm.classList.remove("active");
  groceryList.classList.remove("active");

  // toggle buttons
  closeBtn.classList.remove("active");
  loginBtn.classList.remove("inactive");
  menuBtn.classList.remove("inactive");
  searchBtn.classList.remove("inactive");
  cartBtn.classList.remove("inactive");
});

window.addEventListener("onscroll", function () {
  searchForm.classList.remove("active");
  shoppingCart.classList.remove("active");
  loginForm.classList.remove("active");
  navbar.classList.remove("active");
});

// script for a filterable list for searching through bakery products starts
// got input element from search field
let filterInput = document.getElementById("filterInput");

// added event listener to search field typing
filterInput.addEventListener("keyup", filterNames);

// created function called filterNames to run every time user starts typing in search field
function filterNames() {
  // got value of whatever bakery product user types in the search field
  let filterValue = document.getElementById("filterInput").value.toUpperCase();
  // console.log(filterValue);

  // got the complete unordered list
  let ul = document.getElementById("names");

  // got individual bakery items i.e. list items - got li from ul
  let li = ul.querySelectorAll("li.collection-item");

  // loop through all the collection items li
  for (let i = 0; i < li.length; i++) {
    // access all a tags within li items and store in variable
    let a = li[i].getElementsByTagName("a")[0];

    // if matched

    if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
// script for a filterable list for searching through bakery products ends

// script for weight and baking temperature conversion feature for baking purposes - feature is in navigation menu

// 1. got input elements

let gmsRef = document.getElementById("gms");
let ozRef = document.getElementById("oz");
let tspRef = document.getElementById("tsp");
let tbspRef = document.getElementById("tbsp");
let cupRef = document.getElementById("cups");
let mlRef = document.getElementById("ml");

let degCRef = document.getElementById("degC");
let degFRef = document.getElementById("degF");

// 2. create function to convert from one unit to other values

let convertFromGrams = () => {
  let gms = gmsRef.value;
  // using toFixed method to limit decimals to 2 digits only
  ozRef.value = (gms * 0.035274).toFixed(2);
  tbspRef.value = (gms / 17.07).toFixed(2);
  tspRef.value = (gms / 5.69).toFixed(2);
  cupRef.value = (gms / 200).toFixed(2);
  mlRef.value = (gms * 1).toFixed(1);
};

let convertFromOz = () => {
  let oz = ozRef.value;
  gmsRef.value = (oz * 28.3495).toFixed(2);
  cupRef.value = (oz / 8).toFixed(2);
  tbspRef.value = (oz * 2).toFixed(1);
  tspRef.value = (oz * 6).toFixed(1);
  mlRef.value = (oz * 30).toFixed(1);
};

let convertFromTbsp = () => {
  let tbsp = tbspRef.value;
  tspRef.value = (tbsp * 3).toFixed(1);
  gmsRef.value = (tbsp * 17.07).toFixed(2);
  cupRef.value = (tbsp / 16).toFixed(1);
  ozRef.value = (tbsp / 2).toFixed(2);
  mlRef.value = (tbsp * 15).toFixed(1);
};

let convertFromTsp = () => {
  let tsp = tspRef.value;
  tbspRef.value = (tsp / 3).toFixed(1);
  gmsRef.value = (tsp * 5.69).toFixed(2);
  cupRef.value = (tsp / 48).toFixed(2);
  ozRef.value = (tsp / 6).toFixed(2);
  mlRef.value = (tsp * 5).toFixed(1);
};

let convertFromCups = () => {
  let cups = cupRef.value;
  tbspRef.value = (cups * 16).toFixed(1);
  tspRef.value = (cups * 48).toFixed(1);
  gmsRef.value = (cups * 200).toFixed(1);
  ozRef.value = (cups * 8).toFixed(1);
  mlRef.value = (cups * 240).toFixed(1);
};

let convertFromMl = () => {
  let ml = mlRef.value;
  cupRef.value = (ml / 240).toFixed(3);
  tspRef.value = (ml / 5).toFixed(2);
  tbspRef.value = (ml / 15).toFixed(2);
  gmsRef.value = (ml * 1).toFixed(1);
  ozRef.value = (ml / 30).toFixed(2);
};

// convert baking temperatures
let convertFromDegC = () => {
  let degC = degCRef.value;
  degFRef.value = (degC * (9 / 5) + 32).toFixed(1);
};

let convertFromDegF = () => {
  let degF = degFRef.value;
  degCRef.value = ((degF - 32) * (5 / 9)).toFixed(1);
};

// adding event listeners to all input values and adding load listener to window to begin converting from 1 cup as soon as window loads

gmsRef.addEventListener("input", convertFromGrams);
ozRef.addEventListener("input", convertFromOz);
cupRef.addEventListener("input", convertFromCups);
tbspRef.addEventListener("input", convertFromTbsp);
tspRef.addEventListener("input", convertFromTsp);
mlRef.addEventListener("input", convertFromMl);

degCRef.addEventListener("input", convertFromDegC);
degFRef.addEventListener("input", convertFromDegF);

window.addEventListener("load", convertFromCups);
window.addEventListener("load", convertFromDegC);

// end of script for conversion feature for baking purposes

// script for toggling visibility of unit convertor as a modal box on screen
let unitBtn = document.getElementById("unitBtn");
let convertorForm = document.querySelector(".convertor-form");
let closeConvertor = document.getElementById("close-convertor");

unitBtn.addEventListener("click", function () {
  convertorForm.classList.add("active");
  navbar.classList.remove("active");
  navbar.classList.remove("active");
});

closeConvertor.addEventListener("click", function () {
  convertorForm.classList.remove("active");
  closeBtn.classList.remove("active");
  menuBtn.classList.remove("inactive");
});

// script for unit convertor feature ends

// script for my grocery list feature - found under unity convertor feature within the navigation menu

// adding onclick function to push button

document.querySelector("#push").onclick = function () {
  // created if statement  to check for length of input and then allowing user to add item instead telling him to add something in the input field

  if (document.querySelector("#newTask input").value.length == 0) {
    alert("Please enter a item!");
  } else {
    document.querySelector("#tasks").innerHTML += `<div class = "task">
    <span id = "taskName">
        ${document.querySelector("#newTask input").value}
    </span>
    <button class = "delete">
        <i class="fas fa-trash-alt    "></i>
    </button>
</div>`;

    //   to delete an item from the shopping list
    let current_tasks = document.querySelectorAll(".delete");
    for (let i = 0; i < current_tasks.length; i++) {
      current_tasks[i].onclick = function () {
        this.parentNode.remove();
      };
    }

    //   crossing off a bought item from the shopping list
    let tasks = document.querySelectorAll(".task");

    for (let i = 0; i < tasks.length; i++) {
      tasks[i].onclick = function () {
        this.classList.toggle("completed");
      };
    }
  }
  // clear out your input field after adding a grocery item to the list
  document.querySelector("#newTask input").value = "";
};

// scrip to toggle visibility of grocery list feature

let groceryBtn = document.getElementById("groceryBtn");
let groceryList = document.querySelector(".groceryList");

groceryBtn.addEventListener("click", function () {
  groceryList.classList.add("active");
  closeBtn.classList.add("active");
  menuBtn.classList.add("inactive");
  navbar.classList.remove("active");
});

// close grocery list on clicking the close button
let closeGroceryBtn = document.getElementById("close-grocery");
closeGroceryBtn.addEventListener("click", function () {
  groceryList.classList.remove("active");
  closeBtn.classList.remove("active");
  menuBtn.classList.remove("inactive");
});

// script for my grocery list feature ends here
