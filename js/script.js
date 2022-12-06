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
