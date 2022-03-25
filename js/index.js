
const listMenu = document.getElementById("list-menu");

const openMenu = document.getElementById("open-menu");
const closeMenu = document.getElementById("close-menu");

const btnHome = document.getElementById("btn-home");
const btnAbout = document.getElementById("btn-about");
const btnProjects = document.getElementById("btn-projects");
const btnContact = document.getElementById("btn-contact");

const openListMenu = () => {
    
    listMenu.style.display = "flex";
    listMenu.style.top = "0";

    closeMenu.style.display = "fixed";
};

const closeListMenu = () => {
  listMenu.style.top = "-1000vh";
};

window.onload = () => {

    openMenu.addEventListener("click", openListMenu);

    closeMenu.addEventListener("click", closeListMenu);

    btnHome.addEventListener("click", closeListMenu);
    btnAbout.addEventListener("click", closeListMenu);
    btnProjects.addEventListener("click", closeListMenu);
    btnContact.addEventListener("click", closeListMenu);
};
