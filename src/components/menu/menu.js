let menuBtn = document.body.querySelector(".burger");
let menu = document.body.querySelector(".menu");

menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("active");
  menu.classList.toggle("active");
  document.body.classList.toggle('locked')
});
