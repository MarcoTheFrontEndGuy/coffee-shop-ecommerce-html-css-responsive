
// ===================================================================================================
// I want to create pure functions (DRY - Don't Repeat Yourself) 
// the functions below can be used by other listeners
// ===================================================================================================

    let menuIcon = document.getElementById("menu-btn");
    let navbar = document.querySelector(".header__navbar");         

    function showHideMenu() {
        navbar.classList.toggle("active");
        
        cartContainer.classList.remove("active");
        headerSearch.classList.remove("active");
    }

    menuIcon.addEventListener("click", showHideMenu);

// ===================================================================================================

    const allNavLinks = document.querySelectorAll(".header__navbar__a");

    function nav_Link_Click_To_Remove_Cart_Search_MobileMenu() {
        navbar.classList.remove("active");
        cartContainer.classList.remove("active");
        headerSearch.classList.remove("active");
    }

    // Remove active class from cart, menu and search when you click navbar links
    allNavLinks.forEach((eachLink) => {
        eachLink.addEventListener("click", nav_Link_Click_To_Remove_Cart_Search_MobileMenu);
    });
    
// ===================================================================================================

    const cartContainer = document.querySelector('.header__cart');
    const cartIcon = document.getElementById("cart-btn");

    function showHideCart() {
        cartContainer.classList.toggle("active");

        navbar.classList.remove("active");
        headerSearch.classList.remove("active");
    }

    cartIcon.addEventListener("click", showHideCart);

// =====================================================================================================

    const headerSearchIcon = document.getElementById("search-btn");
    const headerSearch = document.querySelector(".header__search-form");

    function showHideSearchBar() {
        headerSearch.classList.toggle("active");

        navbar.classList.remove("active");
        cartContainer.classList.remove("active");
    }

    headerSearchIcon.addEventListener("click", showHideSearchBar);

// ===================================================================================================

    let btnList = document.querySelectorAll(".btn");
        
    function testingButton(e) {
        e.preventDefault();
        console.log(e + " element was clicked");
        // return false;
    }

    btnList.forEach((eachButton) => {
        eachButton.addEventListener("click", testingButton);
    });


// ===================================================================================================
// ===================================================================================================
// ===================================================================================================
// ===================================================================================================
// ===================================================================================================
// ===================================================================================================
// ===================================================================================================
// ===================================================================================================
// ===================================================================================================
// ===================================================================================================





