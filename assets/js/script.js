const checkNav = event => {
  if (window.scrollY > 340) document.querySelector(".top-header").classList.add("scrolled");
  else document.querySelector(".top-header").classList.remove("scrolled");
};

document.addEventListener("scroll", checkNav);

const emme = () => {
  const elements = document.querySelectorAll("svg > g > g > g");

  const rnd1 = Math.floor(Math.random() * elements.length);
  const rnd2 = Math.floor(Math.random() * elements.length);

  elements[rnd1].setAttribute("opacity", "1");
  elements[rnd2].setAttribute("opacity", "0");
};

setInterval(emme, 200);
