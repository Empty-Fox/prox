//////////////// hubmurgerMenu/////////////////////////////////
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const header_menu = document.querySelector(".header_menu");
const login_mobile = document.querySelector(".login_mobile");


hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    header_menu.classList.toggle("active");
    login_mobile.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");


const button = document.querySelector('#nav-logo');

button.addEventListener('click', () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    header_menu.classList.remove("active");
    login_mobile.classList.remove("active");
});






navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    header_menu.classList.remove("active");
}


////////////////paralax scroll////////////
$(function() {
  window.addEventListener("scroll", function(event){

    var top = this.pageYOffset;

    var layers = $(".parallax__layer");
    var speed, yPos;
    layers.each(function() {
      speed = $(this).attr('data-speed');
      var yPos = -(top * speed / 100);
      $(this).attr('style','transform: translate3d(0px, ' + yPos + 'px, 0px)');
    });
  });
});

//////////////////////////////////modal declaimer/////////////////////////
//////////////////terms//////////////
$('.terms_modal_open').on('click', function () {
  $('#modal_terms').show();
  $('html').css('overflow', 'hidden');
});
$('.close').on('click', function () {
  $('#modal_terms').hide();
  $('html').css('overflow', 'auto');
});

//////////////////privacy policy//////////////
$('.privacyPolicy_modal_open').on('click', function () {
  $('#modal_terms').hide();
  $('#modal_privacyPolicy').show();
  $('html').css('overflow', 'hidden');
});
$('.close').on('click', function () {
  $('#modal_privacyPolicy').hide();
  $('html').css('overflow', 'auto');
});
///////////////carousel/////////
window.onload = function () {
  var slides = document.getElementsByClassName('carousel-item'),
    addActive = function (slide) { slide.classList.add('active') },
    removeActive = function (slide) { slide.classList.remove('active') };
  addActive(slides[0]);

  setInterval(function () {
    for (var i = 0; i < slides.length; i++) {
      if (i + 1 == slides.length) {
        addActive(slides[0]);
        slides[0].style.zIndex = 100;
        setTimeout(removeActive, 300, slides[i]); //Doesn't be worked in IE-9
        break;
      }
      if (slides[i].classList.contains('active')) {
        slides[i].removeAttribute('style');
        setTimeout(removeActive, 350, slides[i]); //Doesn't be worked in IE-9
        addActive(slides[i + 1]);
        break;
      }
    }
  }, 4000);
}