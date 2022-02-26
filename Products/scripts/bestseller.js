import { appendData, sortProducts } from "./productScripts.js";
import {bestsellerList} from "../../components/bestseller.js"


let cartArr = JSON.parse(localStorage.getItem("BellaVitaCart")) || [];


// Appending navbar and footer to the page by importing it from components
import navbar from "../../components/navbar.js"
import bottomPanel from "../../components/bottompanel.js"
document.getElementById("ga_navbar").innerHTML = navbar();
document.getElementById("ga_footer").innerHTML = bottomPanel();

document.getElementById("allProducts").addEventListener("click", () => {
    window.location.href = "./allProducts.html"
})

let appendTo = document.getElementById("ga_products");
let data = bestsellerList();


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