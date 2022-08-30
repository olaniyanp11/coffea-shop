function mey() {
  var x = document.getElementById("put");
  x.classList.toggle("show");
}
function cart() {
  const cartOpn = document.getElementById("cartmenu");
  cartOpn.classList.toggle("showcart");
  cartOpn.classList.toggle("bb");
}
function right1() {
  var righ = document.getElementById("move");
  if (righ.style.marginLeft === "3%") {
    righ.style.marginLeft = "-100%";
  } else if (righ.style.marginLeft === "-100%") {
    righ.style.marginLeft = "-200%";
  } else {
    righ.style.marginLeft = "3%";
  }
}
function left1() {
  var righ = document.getElementById("move");
  if (righ.style.marginLeft === "3%") {
    righ.style.marginLeft = "3%";
  } else if (righ.style.marginLeft === "-100%") {
    righ.style.marginLeft = "3%";
  } else {
    righ.style.marginLeft = "-100%";
  }
}
function barshow() {
  var ham = document.querySelector(".bass");
  ham.classList.toggle("sho");
  var hamdi = document.querySelector(".ham");
  hamdi.classList.toggle("exx");
}
