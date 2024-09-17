//mobile menu
const burgerIco = document.querySelector('#burger');
const navbarMenu = document.querySelector('#nav-links');
const navcenter = document.querySelector('#nav-center');

burgerIco.addEventListener('click',() => {
    navbarMenu.classList.toggle('is-active');
});