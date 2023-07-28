const checkNav = event => {
  if (window.scrollY > 340) document.querySelector(".top-header").classList.add("scrolled");
  else document.querySelector(".top-header").classList.remove("scrolled");
};

document.addEventListener("scroll", checkNav);

const emme = () => {
  const elements0 = document.querySelectorAll("svg > g > g > g[opacity='0']");
  const elements1 = document.querySelectorAll("svg > g > g > g[opacity='1']");

  let rnd = Math.floor(Math.random() * elements0.length);
  elements0[rnd].setAttribute("opacity", "1");

  rnd = Math.floor(Math.random() * elements1.length);
  elements1[rnd].setAttribute("opacity", "0");
};

setInterval(emme, 200);
