// jQuery 
// $(document).ready(function() {
//     $(".menu-toggle").on("click", function(){
//         $(".menu-toggle").toggleClass("active");
//         $("nav").toggleClass("active");
//     })
// });

// js
function setUpEvents() {
    let btn = document.querySelector(".menu-toggle");
    let nav = document.querySelector("nav");
    
    btn.addEventListener("click", toggleMenu);
    function toggleMenu() {
        btn.classList.toggle("active");
        nav.classList.toggle("active");
    }
}
window.onload = function() {
    setUpEvents();
}