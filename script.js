const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var a = document.querySelector("#elem-container");
var fixed = document.querySelector("#fixed-image");
a.addEventListener("mouseenter", function () {
    fixed.style.display = "block";
})
a.addEventListener("mouseleave", function () {
    fixed.style.display = "none";
})


// This code use for only one element
// var elem1 = document.getElementById("elem1")
// elem1.addEventListener("mouseenter",function(){
//     var image = elem1.getAttribute('data-image')
//     fixed.style.backgroundImage =`url(${image})`
// })

var elems = document.querySelectorAll(".elem")
elems.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
        var image = e.getAttribute("data-image")
        fixed.style.backgroundImage = `url(${image})`
    })
})


function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 50,
    });
}
swiperAnimation()



//Not working menu animation
var menu = document.querySelector("nav h3")
var fullScr = document.querySelector("#full-scr")
var navImage = document.querySelector("nav img")
// var flag = 0
menu.addEventListener("click", function () {
    fullScr.style.top = 0
    navImage.style.opacity = 0
})

menu.addEventListener("mouseleave",function(){
    fullScr.style.top = '-100%'
    navImage.style.opacity = 1
})


var loader = document.querySelector("#loader")
setTimeout(function(){
    loader.style.top = '-100%'
},4000)