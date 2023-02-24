const todayWeather = document.querySelector(".weatherToday .weatherTitle");
const city = document.querySelector(".weatherToday .weatherCity");
const weatherIcon = document.querySelector(".weatherToday .weatherIcon");
const API_KEY = "d02ff35f90db91218989a90c4d15d123";

const weatherIconList = {
  "01": "fas fa-sun",
  "02": "fas fa-cloud-sun",
  "03": "fas fa-cloud",
  "04": "fas fa-cloud-meatball",
  "09": "fas fa-cloud-sun-rain",
  10: "fas fa-cloud-showers-heavy",
  11: "fas fa-poo-storm",
  13: "far fa-snowflake",
  50: "fas fa-smog",
};
const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const current = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  const daily = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  
  fetch(current)
    .then((response) => response.json())
    .then((data) => {
      const icon = data.weather[0].icon.substr(0, 2);
      todayWeather.textContent = `${data.weather[0].main} / ${data.main.temp}º`;
      city.textContent = data.name;
      weatherIcon.innerHTML = `<i class="${weatherIconList[icon]}"></i>`;
      
    });
    fetch(daily)
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < 4; i++) {
        const dailyWeatherIcon = document.querySelector(`.weatherDaily.row${i} .weatherIcon`);
        const dailyWeek = document.querySelector(`.weatherDaily.row${i} .weatherDay`);
        const dailyTempMax = document.querySelector(`.weatherDaily.row${i} .weatherTemp_max`);
        const dailyTempMin = document.querySelector(`.weatherDaily.row${i} .weatherTemp_min`);
        if (dailyWeatherIcon) {
          const icon = data.daily[i].weather[0].icon.substr(0, 2);
          const day = new Date(data.daily[i].dt * 1000).getDay();
          dailyWeatherIcon.innerHTML = `<i class="${weatherIconList[icon]}"></i>`;
          dailyWeek.textContent = `${week[day]}`;
          dailyTempMax.textContent = `${Math.floor(data.daily[i].temp.max)}º`;
          dailyTempMin.textContent = `${Math.floor(data.daily[i].temp.min)}º`;
        }
      }
    });
}
function onGeoError() {
  alert("can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);