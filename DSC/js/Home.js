const nav = document.querySelector("#nav");

window.addEventListener("scroll", (e) => {
  nav.classList.toggle("over", window.scrollY > 0);
});
nav.addEventListener("mouseover", function () {
  this.classList.add("over");
});
nav.addEventListener("mouseout", function () {
  if (window.scrollY > 0) return;
  this.classList.remove("over");
});
