const KEY = "35934e2bfd811641c8956d7abbcd70bf";

const getBtn = document.getElementById("get-weather");
getBtn.addEventListener("click", getWeather);

async function getWeather(loc) {
  let response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=London&units=imperial&APPID=${KEY}`
  );
  const weather = await response.json();
  console.log(weather.main.temp);
}
