var product = document.getElementById("productImage");
var images = product.dataset.images.split(",");

var current = 0;

function showImage() {
    document.getElementById("productImage").src = images[current];

    document.getElementById("dot1").innerHTML = (current==0)?"●":"○";
    document.getElementById("dot2").innerHTML = (current==1)?"●":"○";
    document.getElementById("dot3").innerHTML = (current==2)?"●":"○";
}

function next() {
    current++;
    if(current >= images.length){
        current = 0;
    }
    showImage();
}

function previous() {
    current--;
    if(current < 0){
        current = images.length - 1;
    }
    showImage();
}
function showBuy(){

    document.querySelector(".left").style.width = "50%";

    document.getElementById("rightPanel").style.display = "block";

}

function goBack(){

    document.querySelector(".left").style.display="block";

    document.getElementById("rightPanel").style.display="none";
}
function stock() {
    alert("❌ Sorry!\n\nThis product is currently OUT OF STOCK.\nPlease try again later.");

    goBack();
}

window.onload = function(){
    showImage();
	
	
}
function searchProducts() {

let text = document.getElementById("search").value.trim().toLowerCase();

if (text === "") {
    window.location.href = "index.html";
    return;
}

let output = "";

products.forEach(function(p){

if(
    p.name.toLowerCase().includes(text) ||
    p.category.toLowerCase().includes(text) ||
    p.price.includes(text) ||
    p.description.toLowerCase().includes(text)
){

    p.images.forEach(function(img){

        output += `
<div class="card" onclick="location.href='${p.page}'">



    <img src="${img}" class="searchPhoto">

    <h3>${p.name}</h3>

    <p class="rating">★★★★★</p>

    <p>
        <span class="searchprice">₹${p.price}</span>
        <span class="searcholdPrice">₹${p.oldPrice}</span>
    </p>

    <p class="searchdiscount">${p.discount}</p>
</div>
`;

    });   // <-- Close forEach here

}         // <-- Close if here

});       // <-- Close products.forEach here

document.getElementById("products").innerHTML = output;
}

// Show all products when page opens
searchProducts();






;