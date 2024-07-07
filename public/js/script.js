setInterval(() => {
  let currTime = new Date();
  let currHours = currTime.getHours();
  changeBackground(currHours);
}, 60000);
function changeBackground(currHours) {
  let body = document.querySelector("body");
  if (currHours >= 5 && currHours <= 10) {
    body.style.backgroundImage = "url(/morning.jpg)";
  } else if (currHours >= 11 && currHours <= 3) {
    body.style.backgroundImage = "url(/afternoon.jpeg)";
  } else if (currHours >= 4 && currHours <= 6) {
    body.style.backgroundImage = "url(/evening.webp)";
  } else {
    body.style.backgroundImage = "url(/night.jpg)";
  }
  body.style.backgroundSize = "cover";
}
changeBackground(new Date().getHours());
