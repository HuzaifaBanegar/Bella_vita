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
document.getElementById("bestSeller2").addEventListener("click", () => {
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



//Filter by Product Category
let skin = document.getElementById("ga_skin").addEventListener("click", () => {
    var new_data = [];

    data.map((elem) => {

        if(elem.Category == "skin") {
            appendTo.innerHTML = "";
            new_data.push(elem);
        }
    })

    appendData(new_data,appendTo,cartFun);
    // console.log(new_data)
})

let body = document.getElementById("ga_body").addEventListener("click", () => {
    var new_data = [];

    data.map((elem) => {

        if(elem.Category == "body") {
            appendTo.innerHTML = "";
            new_data.push(elem);
        }
    })

    appendData(new_data,appendTo,cartFun);
    // console.log(new_data)
})


let hair = document.getElementById("ga_hair").addEventListener("click", () => {
    var new_data = [];

    data.map((elem) => {

        if(elem.Category == "hair") {
            appendTo.innerHTML = "";
            new_data.push(elem);
        }
    })

    appendData(new_data,appendTo,cartFun);
    // console.log(new_data)
})


let face = document.getElementById("ga_face").addEventListener("click", () => {
    var new_data = [];

    data.map((elem) => {

        if(elem.Category == "face") {
            appendTo.innerHTML = "";
            new_data.push(elem);
        }
    })

    appendData(new_data,appendTo,cartFun);
    // console.log(new_data)
    
})

// -----------------------------------------------------------------------Search Function

document.querySelector(".query_icon").addEventListener("click", ()=>{
    let searchvalue= document.querySelector("#query");
    searchvalue.style.display="flex";
    searchvalue.addEventListener("keypress", function(event){
        if(event.key=="Enter")
        {
            let searchArray=[];
            data.map(function(el){
                var rightSearch=(el.Name.split(" "));
                for(let i=0; i<rightSearch.length; i++)
                {
                    if(searchvalue.value==rightSearch[i])
                    {
                        searchArray.push(el);
                       
                    }   
                }
               
            });
           console.log(searchArray)
        //    appendData(searchArray,appendTo,cartFun)
         }
     });
})

// let searchvalue= document.querySelector("#query");//Input id is "query",with variable "searchvalue"; 
