const opener = document.querySelector("#menuOpener");
const closer = document.querySelector("#menuCloser");
const menu = document.querySelector(".menu_search");
let isOpen = false;

// opener.addEventListener("click", function () {
//   if (isOpen == false) {
//     menu.classList.remove("closeMenu");
//     menu.classList.add("openMenu");
//     isOpen == true;
//   }
// });

// closer.addEventListener("click", function () {
//   if (isOpen == true) {
//     menu.classList.remove("openMenu");
//     menu.classList.add("closeMenu");
//     isOpen == false;
//   }
// });

opener.addEventListener("click", function () {
  menu.classList.remove("closeMenu");
  menu.classList.add("openMenu");
});

closer.addEventListener("click", function () {
  menu.classList.remove("openMenu");
  menu.classList.add("closeMenu");
});
