document.addEventListener("DOMContentLoaded", function () {
  alert("COM Context Loaded");
});
window.addEventListener("load", function () {
  console.log("fully loaded");
});

function makeBodyPurple() {
  document.body.style.backgroundColor = "purple";
}
function makeBody(color) {
  document.body.style.backgroundColor = color;
}

const btn = document.querySelector("#teal");
btn.onclick = function () {
  makeBody("teal");
};

const violetBtn = document.querySelector("#violet");
violetBtn.addEventListener("click", function () {
  makeBody("violet");
});

document.addEventListener("mousemove", function (e) {
  console.log(e.pageX, e.pageY);
  console.log((e.pageX * 255) / window.innerWidth);
  const r = Math.round((e.pageX * 255) / window.innerWidth);
  const b = Math.round((e.pageY * 255) / window.innerHeight);
  console.log(r, 0, b);
  const color = `rgb(${r}, 0, ${b})`;
  document.body.style.backgroundColor = color;
});
