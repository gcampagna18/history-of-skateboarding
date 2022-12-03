//Hamburger Animations
const menu_btn = document.querySelector(".hamburger");
const hamburger_menu = document.querySelector(".nav");

menu_btn.addEventListener("click", function () {
  menu_btn.classList.toggle("is-active");
  hamburger_menu.classList.toggle("is-active");
});

//Flickity Animations
var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true,
  //freeScroll: true,
  wrapAround: true,
  autoPlay: true,
  pauseAutoPlayOnHover: true,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel', {
  // options
});