let categoryButtonsCreated = false;
let categoryButtonsVisible = false;
let productCardCreated = false;
let productCardVisible = false;

function showAllProducts() {
  fetch('https://fakestoreapi.com/products')
    .then((res) => res.json())
    .then((products) => displayProducts(products));
}

function fetchCategory(category) {
  fetch(`https://fakestoreapi.com/products/category/${category}`)
    .then((res) => res.json())
    .then((products) => {
      displayProducts(products);
    })
    .catch((error) => {
      console.error('Error at loading category:', error);
    });
}

function createCategoryButtons(categories) {
  const categoryButtonsContainer = document.querySelector('.category-btns');
  categories.forEach((category) => {
    const button = document.createElement('button');
    button.textContent = category;
    button.className = 'category-btn';
    button.addEventListener('click', () => {
      fetchCategory(category);
    });
    categoryButtonsContainer.appendChild(button);
  });
  categoryButtonsCreated = true;
  showCategoryButtons();
}

function displayProducts(products) {
  const productsContainer = document.querySelector('.product-container');
  productsContainer.innerHTML = '';

  products.forEach((product) => {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    productCard.innerHTML = `<h2>${product.title}</h2>
    <img src="https://www.freepnglogos.com/uploads/cat-png/transparent-images-cat-19.png"></>
    <p class = "price">Price: $${product.price}</p>
    <p>${product.description}</p>`;
    productsContainer.appendChild(productCard);
  });
  productCardCreated = true;
  showProductCards();
}
function toggleCategoryButtons() {
  const categoryBtn = document.querySelector('.all-category-btn');
  const categoryButtonsContainer = document.querySelector('.category-btns');
  if (categoryButtonsVisible) {
    categoryBtn.textContent = 'Category';
    categoryButtonsContainer.style.display = 'none';
    categoryButtonsVisible = false;
  } else {
    categoryBtn.textContent = 'Hide ';
    categoryButtonsContainer.style.display = 'block';
    categoryButtonsVisible = true;
  }
}
function toggleProductCards() {
  const productCardContainer = document.querySelector('.product-container');

  if (productCardVisible) {
    productCardContainer.style.display = 'none';

    productCardVisible = false;
  } else {
    productCardContainer.style.display = 'block';

    productCardVisible = true;
  }
}
function showProductCards() {
  const productCardContainer = document.querySelector('.product-container');
  productCardContainer.style.display = 'block';
  productCardVisible = true;
}
function showCategoryButtons() {
  const categoryButtonsContainer = document.querySelector('.category-btns');
  categoryButtonsContainer.style.display = 'block';
  categoryButtonsVisible = true;
}
function createSortByPriceBtn(products) {
  const sortByPrice = document
    .createElement('button')
    .addEventListener('click', () => {
      products.sort((a, b) => a.price - b.price);
    });
  sortByPrice.textContent = 'Sort by price';
  sortByPrice.className = 'sortByPriceBtn';
  const buttonContainer = document.querySelector('.btn-container');
  buttonContainer.appendChild(sortByPrice);
}

document.addEventListener('DOMContentLoaded', function () {
  const categoryBtn = document.querySelector('.all-category-btn');
  categoryBtn.addEventListener('click', () => {
    if (!categoryButtonsCreated) {
      fetch('https://fakestoreapi.com/products/categories')
        .then((res) => res.json())
        .then((categories) => {
          createCategoryButtons(categories);
        })
        .catch((error) => {
          console.error('Error at loading category:', error);
        });
    } else {
      toggleCategoryButtons();
      toggleProductCards();
    }
  });
  const allProductBtn = document.querySelector('.all-products-btn');
  allProductBtn.addEventListener('click', () => {
    if (!productCardCreated) {
      showAllProducts();
      allProductBtn.textContent = 'Hide';
    } else {
      toggleProductCards();
      allProductBtn.textContent = 'Show all products';
      productCardCreated = false;
    }
  });
});
