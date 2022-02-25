import navbar from "../../components/navbar.js"
import bottomPanel from "../../components/bottompanel.js"

let nav = document.querySelector("#bellavitanav");
    nav.innerHTML = navbar();
    
    document.getElementById("allProducts").addEventListener("click", () => {
        window.location.href= '../Products/allProducts.html';
    })
    // ----------------------------------------------------------------------------Cart calculations
    let cartArray=JSON.parse(localStorage.getItem("BellaVitaCart"))||[];
    console.log(cartArray);

    let nos= cartArray.length;
    var subtotal = cartArray.reduce(function (ac, el) {
        return ac + Number(el.Price*el.Qty);//Price
    }, 0);
    console.log(+(subtotal))
    document.querySelector("#cartValue").textContent=`Rs.${subtotal}`

    let parent = document.querySelector("#product_content");
    parent.style.height = "100%"

    const appendCartarray = (cartArray, parent) => {
        parent.innerHTML=""
        cartArray.map((el, index) => {
           console.log(el.Qty, el.Price)
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
            price.textContent = `Rs. ${el.Price*el.Qty}`;

            let quanDiv= document.createElement("div");
            quanDiv.style.display="flex";
            quanDiv.style.width="100px"
            quanDiv.style.marginTop="10px"
            // quanDiv.justifyContent="space-between";

            let inc= document.createElement("button");
            inc.textContent="+";
            inc.style.width="50px"
            inc.style.fontSize="20px"
            inc.style.backgroundColor="white"
            inc.style.border="0.5px solid black"
            let inputval= document.createElement("div");
            inputval.textContent=el.Qty;
            inputval.style.width="50px"
            inputval.style.textAlign="center"
            let dec= document.createElement("button");
            dec.textContent="-"; 
            dec.style.width="50px"
            dec.style.fontSize="20px"
            dec.style.backgroundColor="white"
            dec.style.border="0.5px solid black"

            //-------------------------------------------quantity inc/dec

            inc.addEventListener("click",()=>{
                addFunction(el)
            })

            dec.addEventListener("click", ()=>{
               decFunction(el)
            })

            
            quanDiv.append(dec, inputval, inc);

         
            var remove = document.createElement("button");
            remove.textContent = "X Remove ";
            remove.style.backgroundColor="white";
            remove.style.border="none"
            remove.style.marginTop="10px"
            remove.addEventListener("click", ()=>{
                removeFunction(index);
            });
//Qty: 1
            div2.append(name, price,quanDiv, remove);

            div.append(div1, div2);

            parent.append(div)
        })
    }
    appendCartarray(cartArray, parent);

    function removeFunction(index) {
        console.log(index)
        cartArray.splice(index, 1);
        localStorage.setItem("BellaVitaCart", JSON.stringify(cartArray));
        appendCartarray(cartArray, parent);
        console.log(cartArray);
        let nos= cartArray.length;
        var subtotal = cartArray.reduce(function (ac, el) {
        return ac + Number(el.Price*el.Qty);//Price
         }, 0);
         console.log(+(subtotal))
    document.querySelector("#cartValue").textContent=`Rs.${subtotal}`
    }

    function addFunction(el){
        el.Qty++;
        appendCartarray(cartArray, parent)
                
        // inputval.textContent=el.Qty
        // price.textContent=el.Price*el.Qty
        var subtotal = cartArray.reduce(function (ac, el) {
            return ac + Number(el.Price*el.Qty);//Price
             }, 0);
             console.log(+(subtotal))
        document.querySelector("#cartValue").textContent=`Rs.${subtotal}` 
    }

    function decFunction(el){
        el.Qty--;
        if(el.Qty==0)
        {
            el.Qty=1  
        }
        else
        {
            appendCartarray(cartArray, parent)
            // inputval.textContent=el.Qty;
            // price.textContent=el.Price*el.Qty
            var subtotal = cartArray.reduce(function (ac, el) {
                return ac + Number(el.Price*el.Qty);//Price
                 }, 0);
                 console.log(+(subtotal))
            document.querySelector("#cartValue").textContent=`Rs.${subtotal}`
        }
    }

    import {bestsellerList} from "../../components/bestseller.js";
    var result = bestsellerList();
    // console.log(result)

    let parent1 = document.querySelector("#best_seller_slider");
    import { appendData } from "./sliderData.js";
    appendData(result, parent1);

    let thelastpanel = document.querySelector("#huz_bottom_panel");
    thelastpanel.innerHTML = bottomPanel();