const KEY = "35934e2bfd811641c8956d7abbcd70bf";

const getBtn = document.getElementById("get-weather");

getBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const location = document.getElementById('loc')
  input = location.value
  location.value = '';
  getWeather(input)
});

async function getWeather(loc) {
  let response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${loc}&units=imperial&APPID=${KEY}`
  );
  const weather = await response.json();
  console.log(weather)
  return weather;
}

async function renderWeather(loc) {
  let weather = await getWeather(loc);

}