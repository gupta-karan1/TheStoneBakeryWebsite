// Common JavaScript File for all HTMl files and CSS File

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

// script for increasing and decreasing count of item numbers with plus and minus buttons
// feature found in shopping cart modal box that appears by clicking on cart icon on top nav bar
const plus = document.querySelector(".fa-plus-circle");
const minus = document.querySelector(".fa-minus-circle");
let itemQuantity = document.getElementById("itemQuantity");
let itemNum = document.getElementById("itemNum");
let a = 0;
plus.addEventListener("click", function () {
  a++;
  a = a < 10 ? "0" + a : a;

  itemQuantity.innerText = a;
  itemNum.value = a;
});

// end of script for increasing and decreasing count

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

// swiper js for slider for testimonial cards on home page

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

// shop page menu items in banner7 authentic bakery products starts

// created array of bakery items to be fed into html
const bakeryProducts = [
  {
    id: 1,
    title: "vegan oats muffin",
    category: "muffins",
    price: 5.99,
    img: "/img/product-oatMuffin.jpg",
  },
  {
    id: 2,
    title: "french baguette",
    category: "breads",
    price: 3.99,
    img: "/img/product-breadBaguette.jpg",
  },
  {
    id: 3,
    title: "blueberry pie",
    category: "pies",
    price: 6.99,
    img: "/img/product-bluePie.jpg",
  },
  {
    id: 4,
    title: "apple pie",
    category: "pies",
    price: 4.99,
    img: "/img/product-apple-pie.jpg",
  },
  {
    id: 5,
    title: "butterscotch pastry",
    category: "pastries",
    price: 2.99,
    img: "/img/product-butterscotch-pastry.jpg",
  },
  {
    id: 6,
    title: "chococoffee pastry",
    category: "pastries",
    price: 8.99,
    img: "/img/product-chococoffee-pastry.jpg",
  },
  {
    id: 7,
    title: "dark chocolate muffin",
    category: "muffins",
    price: 7.99,
    img: "/img/product-darkchocolate-muffin.jpg",
  },
  {
    id: 8,
    title: "multigrain bread",
    category: "breads",
    price: 3.99,
    img: "/img/product-multigrain-bread.jpg",
  },
  {
    id: 9,
    title: "oat roll bread",
    category: "breads",
    price: 6.99,
    img: "/img/product-oatroll-bread.jpg",
  },
  {
    id: 10,
    title: "soda bread",
    category: "breads",
    price: 4.99,
    img: "/img/product-soda-bread.jpg",
  },
  {
    id: 11,
    title: "sourdough bread",
    category: "breads",
    price: 5.99,
    img: "/img/product-sourdough-bread.jpg",
  },
  {
    id: 12,
    title: "walnut pie",
    category: "pies",
    price: 22.99,
    img: "/img/product-walnut-pie.jpg",
  },
];

// get entire grid of bakery items class from html
const sectionCenter = document.querySelector(".section-center");
// get filter categories from html
const btnContainer = document.querySelector(".btn-container");

// load all the bakery product items and filter categories when the html do loads
// added event listener to dom loading
window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(bakeryProducts);
  displayMenuButtons();
});

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    // console.log(item);
    // used map method to write html from js file into shop page
    return `<article class="menu-item">
    <img
      src=${item.img}
      alt=${item.title}
      class="photo"
    />
    <div class="item-info">
      <header>
        <h4>${item.title}</h4>
        <h4 class="price">$${item.price}</h4>
      </header>
      <article class="counterIcons">
        <i class="fas fa-minus-circle"></i>
        <input
          type="number"
          name="quantity"
          id="itemNum"
          placeholder="0"
          title="Number of Items"
        />
        <i class="fas fa-plus-circle"></i>
      </article>
    </div>
  </article>`;
  });
  displayMenu = displayMenu.join("");
  // console.log(displayMenu);

  //write bakery menu into html file using innerHtml method
  sectionCenter.innerHTML = displayMenu;
}

// function to display multiple filter categories as buttons
function displayMenuButtons() {
  const categories = bakeryProducts.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  console.log(filterBtns);

  // function to display respective items from each category when a filter button is clicked on
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      // console.log(e.currentTarget.dataset);
      const category = e.currentTarget.dataset.id;
      const menuCategory = bakeryProducts.filter(function (menuItem) {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        displayMenuItems(bakeryProducts);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
}

// shop page menu items in banner7 authentic bakery products ends
