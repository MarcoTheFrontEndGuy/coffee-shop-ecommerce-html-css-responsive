
let menuIcon = document.getElementById("menu-btn");
let navbar = document.getElementById("navbar");         

// I want to create pure functions (DRY - Don't Repeat Yourself) 
// this function can be used by other listeners
function showHideMenu() {
    navbar.classList.toggle("active");

    cartContainer.classList.remove("active");
    headerSearch.classList.remove("active");
}

menuIcon.addEventListener("click", showHideMenu);

// ========================================================

const cartContainer = document.querySelector('.cart-items-container');
const cartIcon = document.getElementById("cart-btn");

function showHideCart() {
    cartContainer.classList.toggle("active");

    navbar.classList.remove("active");
    headerSearch.classList.remove("active");
}

cartIcon.addEventListener("click", showHideCart);
// ========================================================


const headerSearchIcon = document.getElementById("search-btn");
const headerSearch = document.querySelector(".search-form");


function showHideSearchBar() {
    headerSearch.classList.toggle("active");

    navbar.classList.remove("active");
    cartContainer.classList.remove("active");
}

headerSearchIcon.addEventListener("click", showHideSearchBar);











