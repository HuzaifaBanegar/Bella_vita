import { allProducts } from "./productsData.js";
import { appendData, sortProducts } from "./productScripts.js";


let cartArr = JSON.parse(localStorage.getItem("BellaVitaCart")) || [];


// Appending navbar and footer to the page by importing it from components
import navbar from "../../components/navbar.js"
import bottomPanel from "../../components/bottompanel.js"
document.getElementById("ga_navbar").innerHTML = navbar();
document.getElementById("ga_footer").innerHTML = bottomPanel();

//files path
document.getElementById("bestSeller").addEventListener("click", () => {
    window.location.href = "./bestseller.html"
})
document.getElementById("cartIcon").addEventListener("click", () => {
    window.location.href = "../../Navbar and bottom panel/cart.html";
})
document.getElementById("cartIcon2").addEventListener("click", () => {
    window.location.href = "../../Navbar and bottom panel/cart.html";
})
//////

let appendTo = document.getElementById("ga_products");
let data = allProducts();


// adding items to the cart
const cartFun = (data) => {
    cartArr.push(data);
    localStorage.setItem("BellaVitaCart", JSON.stringify(cartArr));
}

appendData(data,appendTo,cartFun);

const sortFun = () => {
    sortProducts(data,appendData,appendTo);
}

document.getElementById("ga_sort_select").addEventListener("change", sortFun);

let sidebar = document.getElementById("ga_sidebar");

const mediumMedia = (x) => {
    if(x.matches) {
        sidebar.innerHTML = "";
        console.log("hello");
        sidebar.width = "0px";
    }
}

let medium = window.matchMedia("(max-width: 1025px)");
// mediumMedia(medium);
medium.addListener(mediumMedia);