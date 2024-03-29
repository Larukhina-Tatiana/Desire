const headerBtn = document.querySelector(".header__btn");
const rightsideMenu = document.querySelector(".rightside-menu");
const rightsideMenuClose = document.querySelector(".rightside-menu__close");

headerBtn.addEventListener("click", () => {
  rightsideMenu.classList.remove("rightside-menu--close");
});
rightsideMenuClose.addEventListener("click", () => {
  rightsideMenu.classList.add("rightside-menu--close");
});

$(".header__btn-menu").on("click", function () {
  $(".menu").toggleClass("menu--open");
});
$(".header__btn-menu").on("click", function () {
  $(".header__inner").toggleClass("header__inner-btn--open");
});

if ($(window).width() < 641) {
  $(".works-path__item--measurements").appendTo($(".works-path__items-box"));
}


$(function () {
  $(".top__slider").slick({
    arrows: false,
    dots: true,
    fade: true,
    autoplay: true,
  });

  $(".contacts-slider__list").slick({
    slidesToShow: 10,
    slidesToScroll: 10,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 1781,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 8,
          dots: true,
        },
      },
      {
        breakpoint: 1511,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
        },
      },
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 841,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 551,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 376,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".article-slider__box").slick({
    prevArrow:
      '<button type="button" class="article-slider__arrow article-slider__arrow--left"><img src="./images/prev.svg" alt="icon prev"></button>',
    nextArrow:
      '<button type="button" class="article-slider__arrow article-slider__arrow--right"><img src="./images/next.svg" alt="icon next"></button>',
  });
});

var mixer = mixitup(".gallery__inner", {
  load: {
    filter: ".office",
  },
});
