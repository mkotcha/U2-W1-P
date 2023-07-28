const checkNav = event => {
  if (window.scrollY > 340) document.querySelector(".top-header").classList.add("scrolled");
  else document.querySelector(".top-header").classList.remove("scrolled");
};

document.addEventListener("scroll", checkNav);

const emme = () => {
  const elements = document.querySelectorAll("svg > g > g > g[opacity='0']");
  let rnd = Math.floor(Math.random() * elements.length);
  elements[rnd].setAttribute("opacity", "1");

  elements = document.querySelectorAll("svg > g > g > g[opacity='1']");
  rnd = Math.floor(Math.random() * elements.length);
  elements[rnd].setAttribute("opacity", "0");
};

setInterval(emme, 200);
