
const API_KEY = ""

//navigator.geolocation.getCurrentPosition(ture시, false시);



function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    /*자바스크립트가 position으로 user의 위치를 전달
    positon.coords.latitude와 position.coords.longitude를 변수 저장.*/
    const weather_url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}`;
    //html화
    fetch(weather_url)
    .then(response => response.json())
    .then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });


}

function onGeoError(){
    alert("Can't find you. No weather for you.");
}


navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);

//숫자를 장소로 바꿀 api 사용 
