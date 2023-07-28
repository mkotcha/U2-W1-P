const checkNav = event => {
  if (window.scrollY > 340) document.querySelector(".top-header").classList.add("scrolled");
  else document.querySelector(".top-header").classList.remove("scrolled");
};

document.addEventListener("scroll", checkNav);
