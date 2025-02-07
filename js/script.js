// toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika basreng menu diclick
document.querySelector("#Basreng-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//klik diluar sidebar untuk menghilangkan nav
const Basreng = document.querySelector("#Basreng-menu");

document.addEventListener("click", function (e) {
  if (!Basreng.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
