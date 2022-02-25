import navbar from "./navbar.js"
    // console.log(navbar)

    let nav = document.querySelector("#bellavitanav");
    nav.innerHTML = navbar();

    document.getElementById("allProducts").addEventListener("click", () => {
    window.location.href= '../../Products/allProducts.html';
})

    let thumbnail = document.getElementsByClassName("ga_thumbnail");
    // console.log(thumbnail)

    let leftButton = document.getElementById("slideleft");
    let rightButton = document.getElementById("slideRight");

    leftButton.addEventListener("click", () => {

        for (let i = 0; i < thumbnail.length; i++) {

            document.getElementById("ga_slider").scrollLeft -= 20;

        }
    })

    rightButton.addEventListener("click", () => {

        for (let i = 0; i < thumbnail.length; i++) {

            document.getElementById("ga_slider").scrollLeft += 20;

        }
    })

    // let thumbnail = document.getElementsByClassName("ga_thumbnail");
    // console.log(clip)
    for (var i = 0; i < thumbnail.length; i++) {
        thumbnail[i].addEventListener("mouseenter", function (e) {
            e.toElement.play()
        })
        thumbnail[i].addEventListener("mouseout", function (e) {
            e.srcElement.pause()
        })

    }

    // --------------------------------------------------------------------------------------BEST SELLER
    import {bestsellerList,newArrivalList, comboList} from "./bestseller.js";
    var result = bestsellerList();
    // console.log(result)

    let parent1 = document.querySelector("#best_seller_slider");
    import { appendData } from "../Navbar and bottom panel/scripts/sliderData.js";
    appendData(result, parent1);
    // ---------------------------------------------------------------------------------
    var result2= newArrivalList();
    let parent2= document.querySelector("#new_arrival_slider");
    console.log(result2);
    appendData(result2, parent2);

    // ------------------------------------------------------------------------------------

    var result3= comboList();
    let parent3= document.querySelector("#combolist_slider");
    appendData(result3, parent3)

    //------------------------------------------------------------------------------

    import bottompanel from "./bottompanel.js";

    let thelastpanel = document.querySelector("#huz_bottom_panel");
    thelastpanel.innerHTML = bottompanel();
