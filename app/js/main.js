const headerBtn = document.querySelector(".header__btn");
const rightsideMenu = document.querySelector(".rightside-menu");
const rightsideMenuClose = document.querySelector(".rightside-menu__close");

headerBtn.addEventListener("click", () => {
    rightsideMenu.classList.remove("rightside-menu--close");
});

rightsideMenuClose.addEventListener("click", () => {
    rightsideMenu.classList.add("rightside-menu--close");
});