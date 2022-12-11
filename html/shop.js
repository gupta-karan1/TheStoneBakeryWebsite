// shop page menu items in banner7 authentic bakery products starts

// create a basket array where data either will be retrieved from local storage, or it will be empty if there's no data in local storage
// use JSON intrinsic object and parse to convert JSON format to a JS object:

let basket = JSON.parse(localStorage.getItem("data")) || [];

// items added to cart will be stored in the above array

// create a reusable function to add items from a product array into a section of the html document

function createShop(section, array) {
  return (section.innerHTML = array
    .map(function (item) {
      // console.log(item);
      // used map method to write html from js file into shop page
      let { id, img, price, title } = item;
      let search = basket.find((x) => x.id === id) || [];
      return `
  <article id="product-id-${id}" class="card">
          <img src=${img} alt=${title} />
          <h2>${title}</h2>
          <article class="content">
            <p class="price">price: <span id="priceValue">$${price}</span></p>
          </article>
          <h4>Add to Cart:</h4>
          <article class="counterIcons">
          <i onclick="decrement(${id})" class="fas fa-minus-circle"></i>
          <p id="${id}" class="quantity">${search.item === undefined ? 0 : search.item}</p>
          <i onclick="increment(${id})" class="fas fa-plus-circle"></i>
        </article>
        </article>
  `;
    })
    .join(""));
}

// created array of bakery items to be fed into html
let bakeryProducts = [
  {
    id: "veganOats",
    title: "vegan oats muffin",
    category: "muffins",
    price: 5.99,
    img: "img/product-oatMuffin.jpg",
  },
  {
    id: "baguette",
    title: "french baguette",
    category: "breads",
    price: 3.99,
    img: "img/product-breadBaguette.jpg",
  },
  {
    id: "blueberry",
    title: "blueberry pie",
    category: "pies",
    price: 6.99,
    img: "img/product-bluePie.jpg",
  },
  {
    id: "apple",
    title: "apple pie",
    category: "pies",
    price: 4.99,
    img: "img/product-apple-pie.jpg",
  },
  {
    id: "butterscotch",
    title: "butterscotch pastry",
    category: "pastries",
    price: 2.99,
    img: "img/product-butterscotch-pastry.jpg",
  },
  {
    id: "chococoffee",
    title: "chococoffee pastry",
    category: "pastries",
    price: 8.99,
    img: "img/product-chococoffee-pastry.jpg",
  },
  {
    id: "darkChocolate",
    title: "dark chocolate muffin",
    category: "muffins",
    price: 7.99,
    img: "img/product-darkchocolate-muffin.jpg",
  },
  {
    id: "multigrain",
    title: "multigrain bread",
    category: "breads",
    price: 3.99,
    img: "img/product-multigrain-bread.jpg",
  },
  {
    id: "oatRoll",
    title: "oat roll bread",
    category: "breads",
    price: 6.99,
    img: "img/product-oatroll-bread.jpg",
  },
  {
    id: "soda",
    title: "soda bread",
    category: "breads",
    price: 4.99,
    img: "img/product-soda-bread.jpg",
  },
  {
    id: "sourdough",
    title: "sourdough bread",
    category: "breads",
    price: 5.99,
    img: "img/product-sourdough-bread.jpg",
  },
  {
    id: "walnut",
    title: "walnut pie",
    category: "pies",
    price: 22.99,
    img: "img/product-walnut-pie.jpg",
  },
];

// get entire grid of bakery items class from html
const bakeryProductsSection = document.querySelector(".bakeryProducts");
// get filter categories from html
const btnContainer = document.querySelector(".btn-container");

// load all the bakery product items and filter categories when the html do loads
// added event listener to dom loading
window.addEventListener("DOMContentLoaded", function () {
  // displayMenuItems(bakeryProducts);
  displayMenuButtons();
  createShop(bakeryProductsSection, bakeryProducts);
});

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
  // console.log(filterBtns);

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
        createShop(bakeryProductsSection, bakeryProducts);
      } else {
        createShop(bakeryProductsSection, menuCategory);
      }
    });
  });
}

// shop page menu items in banner7 authentic bakery products ends

// home-baking products array - baking ingredients
let bakingIngredients = [
  {
    id: "brown",
    title: "brown sugar",
    category: "baking ingredients",
    price: 3.99,
    img: "img/product-brownSugar.jpg",
  },
  {
    id: "icing",
    title: "icing sugar",
    category: "baking ingredients",
    price: 4.99,
    img: "img/product-icingSugar.jpg",
  },
  {
    id: "chocolate",
    title: "chocolate powder",
    category: "baking ingredients",
    price: 5.99,
    img: "img/product-chocolate-powder.jpg",
  },
];

const ingredientsSection = document.querySelector(".ingredients");

createShop(ingredientsSection, bakingIngredients);

// home-baking products array -  baking utensils

let bakingUtensils = [
  {
    id: "mixing",
    title: "mixing bowl",
    category: "baking utensils",
    price: 3.99,
    img: "img/product-mixing-bowl.jpg",
  },
  {
    id: "baking",
    title: "baking tray",
    category: "baking utensils",
    price: 4.99,
    img: "img/product-bakingTray.jpg",
  },
  {
    id: "rolling",
    title: "rolling pin",
    category: "baking utensils",
    price: 5.99,
    img: "img/product-rolling-pin.jpg",
  },
];

const utensilSection = document.querySelector(".utensils");

// reusing createShop function to update DOM with baking utensils array

createShop(utensilSection, bakingUtensils);

// home-baking products array -  baking guidebooks
let bakingGuidebooks = [
  {
    id: "guide",
    title: "baking guide",
    category: "baking guidebooks",
    price: 3.99,
    img: "img/product-baking-guide.jpg",
  },
  {
    id: "cookbook",
    title: "baking cookbook",
    category: "baking guidebooks",
    price: 4.99,
    img: "img/product-cookBook.jpg",
  },
  {
    id: "recipe",
    title: "recipe book",
    category: "baking guidebooks",
    price: 5.99,
    img: "img/product-recipebook.jpg",
  },
];

const guidebooksSection = document.querySelector(".guidebooks");

// reusing createShop function to update DOM with baking guidebooks array

createShop(guidebooksSection, bakingGuidebooks);

// creating increment and decrement functions for plus and minus buttons and to add items to the cart:

// every time a user clicks on plus button, increment function will run
let increment = (id) => {
  let selectedItem = id;

  // currently if we click on plus button of an item more than once, it will push it multiple times, which makes the array very long. We use a find method to add item only if it's not already added to the array before

  let search = basket.find((x) => x.id === selectedItem.id);

  // the above function matches the id of a parameter x with the id of the selected Item

  // create an if else statement to check if item already exists

  if (search === undefined) {
    // if item doesn't exist in cart, then push it in the array
    basket.push({
      id: selectedItem.id,
      item: 1,
    });
  } else {
    // else increase the item number of products
    search.item += 1;
  }

  // console.log(basket);

  // update function should run after this to update the number of items
  update(selectedItem.id);

  // store the data in local storage to be used to display on the cart page
  // local storage items remain even after the browser is refreshed
  // convert basket array into JSON format
  localStorage.setItem("data", JSON.stringify(basket));
};

// every time a user clicks on minus button, decrement function will run
let decrement = (id) => {
  let selectedItem = id;
  // console.log(selectedItem.id);
  let search = basket.find((x) => x.id === selectedItem.id);
  // if the item number goes below 0, the function will not be executed, using return statement
  if (search === undefined) return;
  else if (search.item === 0) return;
  else {
    // else increase the item number of products
    search.item -= 1;
  }
  // console.log(basket);

  // update function should run after this to update the number of items
  update(selectedItem.id);

  // the object should be removed from the local storage after the item quantity is reduced to 0
  // remove all the objects with the item equal to 0 and store only those not equal to 0
  basket = basket.filter((x) => x.item !== 0);

  localStorage.setItem("data", JSON.stringify(basket));
};

// item quantity will update with the update function when user clicks on plus or minus button
let update = (id) => {
  let search = basket.find((x) => x.id === id);

  // get the item number from search object above
  // console.log(search.item);

  // update the above item number in the html
  document.getElementById(id).innerHTML = search.item;

  // run the calculation function to display total items at the top of the cart icon on the header
  calculation();
};

let calculation = () => {
  let cartIcon = document.getElementById("headerItemCount");
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};
calculation();

// --------------------------------
