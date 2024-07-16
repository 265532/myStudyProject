const findDom = document.querySelector.bind(document);
const findDoms = document.querySelectorAll.bind(document);
// 登录下拉菜单
const triggerLogin = findDom("#triggerLogin");

triggerLogin.addEventListener("click", function () {
  this.parentElement
    .querySelector(".nav-dropdown-menu")
    .classList.toggle("show");
});

const navTogglerBtn = findDom("#navTogglerBtn");
navTogglerBtn.addEventListener("click", function () {
  findDom("#navCollapse").classList.toggle("show");
});
