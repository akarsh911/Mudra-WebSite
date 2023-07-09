let navBar = document.querySelector(".navbar");
window.addEventListener("scroll", (event) => {
  let scroll = this.scrollY;
  if (scroll < 20) {
    navBar.classList.add("scroll");
  } else {
    navBar.classList.remove("scroll");
  }
});