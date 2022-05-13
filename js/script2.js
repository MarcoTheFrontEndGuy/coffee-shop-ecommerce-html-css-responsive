const heroSection = document.getElementById("hero");

function resetStyleOnClick() {
    heroSection.style.cssText = "margin: 0; background-color: red;"
}

heroSection.addEventListener("click", resetStyleOnClick);