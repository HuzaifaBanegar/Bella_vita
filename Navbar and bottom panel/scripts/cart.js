import navbar from "../../components/navbar.js"
import bottomPanel from "../../components/bottompanel.js"

let nav = document.querySelector("#bellavitanav");
    nav.innerHTML = navbar();
    
    document.getElementById("allProducts").addEventListener("click", () => {
        window.location.href= '../Products/allProducts.html';
    })

    let cartArray = [{
        "Category": "face",
        "Name": "Exfoliate Face and Body Scrub Grit, Skin Brightening, De-Tan Removal - 75gm",
        "Img_url": "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Exfoliate-01_1024x1024.jpg?v=1626345623",
        "Price1": "185",
        "Price": "165",
        "Rating": "5",
        "Review": "1524",
        "Qty": 1
    },
    {
        "Category": "hair",
        "Name": "Growth Protein Hair Spa Mask For Hairfall Control, Frizzy Hair Cream, Color Damaged Hair Repair & Growth With Keratin, Biotin, Argan, Onion, Tea Tree & Coffee, 225 g",
        "Img_url": "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/HairMasque-1_1024x1024.jpg?v=1632814654",
        "Price1": "458",
        "Price": "308",
        "Rating": "5",
        "Review": "398",
        "Qty": 1
    }];
    let parent = document.querySelector("#product_content");
    parent.style.height = "100%"

    // appendCartarray(cartArray, parent);

    const appendCartarray = (cartArray, parent) => {
        cartArray.map((el) => {
            console.log(el.Name)
            let div = document.createElement("div");
            div.style.display = "flex";
            div.style.justifyContent = "space-between"
            div.style.height = "180px"
            div.style.padding = "10px"

            let div1 = document.createElement("div");
            div1.style.width = "30%"
            div1.style.height = "100%"
            let image = document.createElement("img");
            image.style.height = "100%"
            image.src = el.Img_url;
            div1.append(image);

            let div2 = document.createElement("div");
            div2.style.width = "70%"
            div2.style.height = "100%"

            let name = document.createElement("p");
            name.textContent = el.Name;
            name.style.fontSize = "13px"

            let price = document.createElement("p");
            price.textContent = `Rs. ${el.Price}`;


            div2.append(name, price);

            div.append(div1, div2);

            parent.append(div)
        })
    }
    appendCartarray(cartArray, parent);

    import {bestsellerList} from "../../components/bestseller.js";
    var result = bestsellerList();
    // console.log(result)

    let parent1 = document.querySelector("#best_seller_slider");
    import { appendData } from "./sliderData.js";
    appendData(result, parent1);

    let thelastpanel = document.querySelector("#huz_bottom_panel");
    thelastpanel.innerHTML = bottomPanel();