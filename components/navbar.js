const navbar = () => {
    return ` 
    <div id="headnav">
        <img src="../../Navbar and bottom panel/images/Screenshot (110).png">
    </div>
    <div id="navmobile">
        <div class="navmobfirst">
            <img src="../../Navbar and bottom panel/images/743930_button_512x512.png">
            <img src="../../Navbar and bottom panel/images/magnifying-glass-icon-13.png">
        </div>
        <div><img src="../../Navbar and bottom panel/images/Screenshot (109).png" style="cursor:pointer" onclick="window.location.href='../../index.html'"></div>
        <div class="navmoblast">
            <img src="../../Navbar and bottom panel/images/OIP.jpg">
            <img id="cartIcon" src="../../Navbar and bottom panel/images/img_290616.png">
        </div>
    </div>
    <div id="huznav">
        <a href="../../index.html"><img style="cursor:pointer" src="../../Navbar and bottom panel/images/Screenshot (109).png"></a>
        <div class="huz_content">
            <p id="allProducts">ALL PRODUCTS</p>
            <p id="bestSeller">BESTSELLERS</p>
            <p>OFFERS</p>
            <p>SELFIE SWITCH</p>
            <p>BUILD A BOX</p>
            <p>BY CATEGORY</p>
            <p>BY CONTENT</p>
            <p>BY CONCERN</p>
            <p>BY INGREDIENTS</p>
            <p>BY COMBOS</p>
            <p>OUR CELEBRITIES</p>
            <p>NATURAL SOAP</p>
            <p>MORE</p>
        </div>
        <div class="navicons">
            <img src="../../Navbar and bottom panel/images/magnifying-glass-icon-13.png" class="query_icon"/>
            <img src="../../Navbar and bottom panel/images/OIP.jpg">
            <img id="cartIcon2" src="../../Navbar and bottom panel/images/img_290616.png">
        </div>
    </div>
    <input type="text" id="query" placeholder="search">`
} 
export default navbar;