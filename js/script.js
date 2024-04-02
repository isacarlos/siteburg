const menu = document.querySelector('.menu');
const NavMenu = document.querySelector('.nav-menu');

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    NavMenu.classList.toggle('ativo');
})

document.addEventListener("DOMContentLoaded", function() {
    var sliderPrincipal = document.querySelector('.slider-principal');
    sliderPrincipal.classList.add('active');
});




var topNav = document.querySelector('.top-nav');
const searchIcon = document.getElementById('search-icon');
searchButton.addEventListener('click', function(e) {
  topNav.classList.toggle('search-input-active');
});