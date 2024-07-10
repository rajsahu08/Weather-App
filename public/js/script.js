setInterval(() => {
  let currTime = new Date();
  let currHours = currTime.getHours();
  changeBackground(currHours);
}, 60000);
function changeBackground(currHours) {
  console.log(currHours);
  let body = document.querySelector("body");
  if (currHours >= 5 && currHours <= 10) {
    body.style.backgroundImage = "url(/morning.jpg)";
  } else if (currHours >= 11 && currHours <= 15) {
    body.style.backgroundImage = "url(/afternoon.jpeg)";
  } else if (currHours >= 16 && currHours <= 18) {
    body.style.backgroundImage = "url(/evening.webp)";
  } else {
    body.style.backgroundImage = "url(/night.jpg)";
  }
  body.style.backgroundSize = "cover";
}
changeBackground(new Date().getHours());

let modeColor = "white";
const mode = document.querySelector(".mode");
const innermode = document.querySelector(".innermode");
mode.addEventListener("click", () => {
  if (modeColor === "white") {
    modeColor = "black";
    mode.style.backgroundColor = "white";
    innermode.style.backgroundColor = "black";
    innermode.classList.remove("left");
    innermode.classList.add("right");
  } else {
    modeColor = "white";
    mode.style.backgroundColor = "black";
    innermode.style.backgroundColor = "white";
    innermode.classList.add("left");
    innermode.classList.remove("right");
  }
});
