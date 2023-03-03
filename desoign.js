let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector('.header .navbar');

menu.onclick= () => {
    menu.classList.toggle('fas-times');
    navbar.classList.toggle('active'); I
}

window.onsroll = () => {
    menu.classList.remove("fa-times");
    navbar.classList.remove("active");
}
let silde =document.querySelector('.home .slide');
let inbox = 0;

function next() {
    slides[inbox].classList.remove('active');
    inbox =(inbox + 1) % slides. length;
    slides[inbox].classList.add('active');
}

function prev() {
    slides[inbox].classList.remove('active');
    inbox =(inbox - 1 + slides.length) % slides. length;
    slides[inbox].classList.add('active');
}
