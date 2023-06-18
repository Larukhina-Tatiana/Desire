const headerBtn = document.querySelector(".header__btn");
const rightsideMenu = document.querySelector(".rightside-menu");
const rightsideMenuClose = document.querySelector(".rightside-menu__close");

headerBtn.addEventListener("click", () => {
    rightsideMenu.classList.remove("rightside-menu--close");
});

rightsideMenuClose.addEventListener("click", () => {
    rightsideMenu.classList.add("rightside-menu--close");
});

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
        // autoplay: true,
    });

    var mixer = mixitup(".gallery__inner", {
        load: {
            filter: ".office",
        },
    });

});
