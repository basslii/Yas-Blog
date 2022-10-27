let toggle = document.querySelector("#header .toggle-btn");
let collapse = document.querySelectorAll("#header .collapse");


toggle.addEventListener('click', function(){
    collapse.forEach(col => col.classList.toggle("collapse-toggle"));
})

//with masonry
// new Masonry("#posts .grid", {
//     itemSelector: '.card',
//     gutter: 100
// });

//swiper library initialization
new Swiper('.swiper-container', {
    
    direction: 'horizontal',
    loop: true,
    slidesPerView: 5,
    spaceBetween: 0,
    autoplay:{
        delay:3000, 
    },

    //responsive breakpoints
    breakpoints: {
        //more than 0px
        0: { 
            slidesPerView: 2
        },

        //more than 574px
        574: { //more than 888px
            slidesPerView: 3
        },

        //more than 768px
        768: { 
            slidesPerView: 4
        },

        //more than 1000px
        1000: { 
            slidesPerView: 5
        }
    }

});

//Sticky navigation

window.onscroll = function(){myFunction()};

//get the current value
let navbar = document.getElementById("header");

//get teh nacbar position
let sticky = navbar.offsetTop;

//Sticky fuction
function myFunction(){
    if(window.pageYOffset >= sticky){
        navbar.classList.add("sticky");
    }else{
        navbar.classList.remove("sticky");
    }
}