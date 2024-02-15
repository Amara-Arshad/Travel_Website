const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classlist.toggle("sticky",window.scrollY > 0);
});

let menu =document.querySelector('#menu-icon');
let navbar =document.querySelector('.navbar');

menu.onclick =() => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
};

menu.onclick =() => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('open');
};