/* --- NAVBAR --- */
const navbar = document.getElementById("header")

document.addEventListener ("scroll", function () {
    let scrollPosition = window.scrollY;
    if ( scrollPosition > 100 ) {
        navbar.style.backgroundColor = "#355592"
      } else {
        navbar.style.backgroundColor = "transparent"
      }
})


/* --- MOBILE MENU ---*/
const menuButton = document.getElementById("mobile-menu-button");
console.log(menuButton);
let mobileMenu = document.querySelector (".mobile-menu");
console.log(mobileMenu);

menuButton.addEventListener("click", () =>{
    mobileMenu.classList.toggle("active")
});

/* --- CLASS TABS --- */
function showTab(panelId) {
    const allTabs = document.querySelectorAll(".classTab");

    allTabs.forEach(classTab => classTab.classList.add("hide"))
    document.getElementById(panelId).classList.remove("hide")
};

function showActive(btnId) {
    const tabBtn = document.querySelectorAll(".tabBtn")
  
    tabBtn.forEach(tabBtn => tabBtn.classList.remove("active"))
    document.getElementById(btnId).classList.add("active")
};

/* --- BMI CALCULATOR --- */
let height = document.getElementById("height");
let weight = document.getElementById("weight");
let bmiOutput = document.getElementById("bmi-output");
let indicatorArrow = document.getElementById("BMI-indicator");

function result() {
     let a = Number(weight.value);
     let b = Number(height.value);
     if (a / (b*b) * 10000 > 62) {
        return 62;
     } else {
        return (a / (b*b) * 10000);
     } 
} 
     
function addition() {
    bmiOutput.innerText = result().toFixed(1);
}

function indicator() {
    indicatorArrow.style.left = result() * 1.3 + "%";
}

height.addEventListener("input", addition);
height.addEventListener("input", indicator);
weight.addEventListener("input", addition);
weight.addEventListener("input", indicator);





