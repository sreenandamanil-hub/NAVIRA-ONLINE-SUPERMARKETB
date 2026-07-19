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

function showBuy() {
    document.querySelector(".container").style.display = "none";
    document.getElementById("rightPanel").style.display = "block";
}

function goBack() {
    document.querySelector(".container").style.display = "flex";
    document.getElementById("rightPanel").style.display = "none";

}

function goBack() {

    document.querySelector(".left").style.display = "block";
    document.getElementById("rightPanel").style.display = "none";

}
function stock() {
    alert("❌ Sorry!\n\nThis product is currently OUT OF STOCK.\nPlease try again later.");
}

window.onload = function(){
    showImage();
	
	
};