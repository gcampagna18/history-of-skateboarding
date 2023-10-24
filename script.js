//Hamburger Animations
const menu_btn = document.querySelector(".hamburger-menu");
const menu_btn_ham = document.querySelector(".hamburger");
const hamburger_menu = document.querySelector(".nav");
const anchors = document.querySelectorAll('a');

function openMenu(){
  menu_btn_ham.classList.toggle("is-active");
  hamburger_menu.classList.toggle("is-active");
}

menu_btn.addEventListener("click", openMenu);

anchors.forEach((e) => {
  e.addEventListener('click', openMenu)
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