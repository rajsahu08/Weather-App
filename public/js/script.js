// Set an interval to update the background image based on the current hour every 60 seconds
setInterval(() => {
  let currTime = new Date();
  let currHours = currTime.getHours();
  changeBackground(currHours);
}, 60000);
// Function to change the background image based on the current hour
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
// Initial call to set the background image based on the current hour
changeBackground(new Date().getHours());

// mode toggling
let modeColor = "white";
const mode = document.querySelector(".mode");
const innermode = document.querySelector(".innermode");
// Event listener to toggle between white and black mode
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

// Event listener to handle the search button click for fetching weather data
const searchBtn = document.querySelector(".searchBtn");
let city = "";
let result;
searchBtn.addEventListener("click", async () => {
  const search = document.querySelector(".search");
  city = search.value;
  let url = `https://open-weather13.p.rapidapi.com/city/${city}/EN`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "5bae2b20b3mshfa5923da98afd77p138521jsnce7c2c61fc0e",
      "x-rapidapi-host": "open-weather13.p.rapidapi.com",
    },
  };
  try {
    const response = await fetch(url, options);
    result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }

  // GET CITY STATE AND COUNTRY
  const url2 = `https://geodatasource-geodatasource-location-search-web-service-v1.p.rapidapi.com/city/?lng=${latitude}&key=TWNDUWYRVQPIZ3H4TSIRZDQX0LPG3ULU&lat=${longitude}`;
  const options2 = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "5bae2b20b3mshfa5923da98afd77p138521jsnce7c2c61fc0e",
      "x-rapidapi-host":
        "geodatasource-geodatasource-location-search-web-service-v1.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url2, options2);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
});

// Thought of the day
async function findThought() {
  const urlThought = "https://thought-of-the-day.p.rapidapi.com/thought";
  const optionsThought = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "5bae2b20b3mshfa5923da98afd77p138521jsnce7c2c61fc0e",
      "x-rapidapi-host": "thought-of-the-day.p.rapidapi.com",
    },
  };

  try {
    const thought = await fetch(urlThought, optionsThought);
    const resultThought = await thought.json();
    const quote = document.querySelector(".quote");
    quote.textContent = resultThought.data;
    console.log(resultThought.data);
  } catch (error) {
    console.error(error);
  }
}
findThought();
