import { allProducts } from "./productsData.js";
import { appendData, sortProducts } from "./productScripts.js";

let appendTo = document.getElementById("ga_products");
let data = allProducts();

appendData(data,appendTo);

const sortFun = () => {
    sortProducts(data,appendData,appendTo);
}

document.getElementById("ga_sort_select").addEventListener("change", sortFun);

let sidebar = document.getElementById("ga_sidebar");

const mediumMedia = (x) => {
    if(x.matches) {
        sidebar.innerHTML = "";
    }
}

let medium = window.matchMedia("(max-width: 1025px)");
// mediumMedia(medium);

