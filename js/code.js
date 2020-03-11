const botonmenu = document.querySelector(".menu-responsive");
const menu = document.querySelector(".list-menu");
botonmenu.addEventListener("click", toogleMenu);
function toogleMenu(){
  if (menu.classList.contains("active")) {
    menu.classList.remove("active")
  }else{
    menu.classList.add("active");
  }
}