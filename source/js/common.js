document.createElement("picture");

var tariff = document.querySelector(".profile__link--modal");
var tariffModal = document.querySelector(".tariff-all");
var tariffClose = document.querySelector(".tariff__close");
var nav = document.querySelector(".menu");
var toggleButton = document.querySelector(".menu__toggle");

nav.classList.remove("menu--no-js");

if (tariffModal) {
  toggleButton.addEventListener('click', function () {
    nav.classList.toggle("menu--open");
  });

  tariff.addEventListener('click', function (evt) {
    evt.preventDefault();
    tariffModal.classList.add("tariff-all--open");
    setTimeout(function () {
      tariffClose.focus();
    }, 500);
  });

  tariffClose.addEventListener('click', function (evt) {
    evt.preventDefault();
    tariffModal.classList.remove("tariff-all--open");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (tariffModal.classList.contains("tariff-all--open")) {
        tariffModal.classList.remove("tariff-all--open");
      }
    }
  });
}

window.onscroll = function () {
  myFunction()
};

var header = document.getElementById("site-header__inner");

var sticky = header.offsetHeight;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("site-header__inner--fixed");
  } else {
    header.classList.remove("site-header__inner--fixed");
  }
}
