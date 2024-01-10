const respon = document.querySelector(".toggle");
const mainMenu = document.querySelector(".main-menu");
const h1 = document.querySelector(".logo>h1");
let isClose = false;
respon.addEventListener("click", () => {
  if (isClose) {
    mainMenu.style.display = "none";
    h1.style.display = "block";
    isClose = false;
  } else {
    mainMenu.style.display = "inline-block";
    h1.style.display = "none";
    isClose = true;
  }
});