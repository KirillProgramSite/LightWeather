let cityWeatherItems = document.querySelectorAll(".city-weather__item");

let cityWeatherList = document.querySelector(".city-weather__list");
let cityWeatherLast = document.querySelector(".city-weather__last");

let searchWeatherBtn = document.querySelector(".search-weather__btn");
let searchWeatherInput = document.querySelector(".search-weather__input");
let searchWeatherInputValue = document.querySelector("#search-weather-input");
let weatherPanelIcon2 = document.querySelector(".weather-panel__icon2");

//Функционал

let mainW = [];
let lastWearther = [];

// API ключ
let apiKey = "ae7f190023f87f0ccff45c116313fbe6";
// Город погода которого нужна
let city = "";

async function iconWeather(content) {
  let cityWeatherItemImg = document.querySelector(".city-weather__item-img");
  let weatherPanelIcon2 = document.querySelector(".weather-panel__icon2");

    switch (content.weather[0]['icon']) {
      case "01d":
        cityWeatherItemImg.innerHTML = `<img src="img/icons/weather/small/Sun.svg" alt=''>`;
        weatherPanelIcon2.innerHTML = `<img src="img/icons/weather/small/Sun.svg" alt=''>`;
        break;
      case "01n":
        cityWeatherItemImg.innerHTML = `<img src="img/icons/weather/small/Sun.svg" alt=''>`;
        weatherPanelIcon2.innerHTML = `<img src="img/icons/weather/small/Sun.svg" alt=''>`;
      case "02d":
      case "02n":
        cityWeatherItemImg.innerHTML = `<img src="img/icons/weather/small/partly-cloudy-day.svg" alt=''>`;
        // weatherPanelIcon2.innerHTML = `<img src="img/icons/weather/small/partly-cloudy-day.svg" alt=''>`;
        break;
      case "03d":
      case "03n":
        cityWeatherItemImg.innerHTML = `<img src="img/icons/weather/small/cloudy.svg" alt=''>`;
        // weatherPanelIcon2.innerHTML = `<img src="img/icons/weather/small/cloudy.svg" alt=''>`;
        break;
      case "04d":
      case "04n":
        cityWeatherItemImg.innerHTML = `<img src="img/icons/weather/small/cloudy.svg" alt=''>`;
        weatherPanelIcon2.innerHTML = `<img src="img/icons/weather/small/cloudy.svg" alt=''>`;
        break;
      case "09d":
      case "09n":
        cityWeatherItemImg.innerHTML = `<img src="img/icons/weather/small/rain.svg" alt=''>`;
        weatherPanelIcon2.innerHTML = `<img src="img/icons/weather/small/rain.svg" alt=''>`;
        break;
      case "10d":
        cityWeatherItemImg.innerHTML = `<img src="img/icons/weather/small/sun and rain.svg" alt=''>`;
        weatherPanelIcon2.innerHTML = `<img src="img/icons/weather/small/sun and rain.svg" alt=''>`;
        break;
      case "10n":
        cityWeatherItemImg.innerHTML = `<img src="img/icons/weather/small/moon and rain.svg" alt=''>`;
        weatherPanelIcon2.innerHTML = `<img src="img/icons/weather/small/moon and rain.svg" alt=''>`;
      case "11d":
      case "11n":
        cityWeatherItemImg.innerHTML = `<img src="img/icons/weather/small/thunderstorm.svg" alt=''>`;
        weatherPanelIcon2.innerHTML = `<img src="img/icons/weather/small/thunderstorm.svg" alt=''>`;
        break;
      case "13d":
      case "13n":
        cityWeatherItemImg.innerHTML = `<img src="img/icons/weather/small/snow.svg" alt=''>`;
        weatherPanelIcon2.innerHTML = `<img src="img/icons/weather/small/snow.svg" alt=''>`;
        break;
      case "50d":
      case "50n":
        cityWeatherItemImg.innerHTML = `<img src="img/icons/weather/small/fog.svg" alt=''>`;
        weatherPanelIcon2.innerHTML = `<img src="img/icons/weather/small/fog.svg" alt=''>`;
        break;
      default:
        return "";
    }
}

async function bgWeather(content) {
  let weatherPanelWrapper = document.querySelector(".weather-panel__wrapper");

  let key;

  for(key in content){
    switch (content.weather[0]['icon']) {
      case "01d":
        weatherPanelWrapper.style.background = `url("https://kirillprogramsite.github.io/LightWeather/img/sun.jpg")`;
        weatherPanelWrapper.style.backgroundRepeat = 'no-repeat';
        break;
      case "01n":
        weatherPanelWrapper.style.background = `url("https://kirillprogramsite.github.io/LightWeather/img/moon.jpg")`;
        weatherPanelWrapper.style.backgroundRepeat = 'no-repeat';
      case "02d":
        weatherPanelWrapper.style.background = `url("https://kirillprogramsite.github.io/LightWeather/img/cloudy and sun.jpg")`;
        weatherPanelWrapper.style.backgroundRepeat = 'no-repeat';
        break;
      case "02n":
        weatherPanelWrapper.style.background = `url("https://kirillprogramsite.github.io/LightWeather/img/moon and cloud.jpg")`;
        weatherPanelWrapper.style.backgroundRepeat = 'no-repeat';
        break;
      case "03d":
      case "03n":
        weatherPanelWrapper.style.background = `url("https://kirillprogramsite.github.io/LightWeather/img/cloudy.jpg")`;
        weatherPanelWrapper.style.backgroundRepeat = 'no-repeat';
        break;
      case "04d":
      case "04n":
        weatherPanelWrapper.style.background = `url("https://kirillprogramsite.github.io/LightWeather/img/cloudy.jpg")`;
        weatherPanelWrapper.style.backgroundRepeat = 'no-repeat';
        break;
      case "09d":
        weatherPanelWrapper.style.background = `url("https://kirillprogramsite.github.io/LightWeather/img/rain.jpg")`;
        weatherPanelWrapper.style.backgroundRepeat = 'no-repeat';
        break;
      case "09n":
        weatherPanelWrapper.style.background = `url("https://kirillprogramsite.github.io/LightWeather/img/rain and moon.jpg")`;
        weatherPanelWrapper.style.backgroundRepeat = 'no-repeat';
        break;
      case "10d":
        weatherPanelWrapper.style.background = `url("https://kirillprogramsite.github.io/LightWeather/img/rain.jpg")`;
        weatherPanelWrapper.style.backgroundRepeat = 'no-repeat';
        break;
      case "10n":
        weatherPanelWrapper.style.background = `url("https://kirillprogramsite.github.io/LightWeather/img/rain and moon.jpg")`;
        weatherPanelWrapper.style.backgroundRepeat = 'no-repeat';
      case "11d":
        weatherPanelWrapper.style.background = `url("https://kirillprogramsite.github.io/LightWeather/img/thunderstorm sun.jpg")`;
        weatherPanelWrapper.style.backgroundRepeat = 'no-repeat';
        break;
      case "11n":
        weatherPanelWrapper.style.background = `url("https://kirillprogramsite.github.io/LightWeather/img/thunderstorm.jpg")`;
        weatherPanelWrapper.style.backgroundRepeat = 'no-repeat';
        break;
      case "13d":
      case "13n":
        weatherPanelWrapper.style.background = `url("https://kirillprogramsite.github.io/LightWeather/img/snow.jpg")`;
        weatherPanelWrapper.style.backgroundRepeat = 'no-repeat';
        break;
      case "50d":
      case "50n":
        weatherPanelWrapper.style.background = `url("https://kirillprogramsite.github.io/LightWeather/img/fog.jpg")`;
        weatherPanelWrapper.style.backgroundRepeat = 'no-repeat';
        break;
      default:
        return "";
    }
  }
}


async function getWeather(url) {
  let response = await fetch(url);
  let content = await response.json();


  async function listWeather(url, content) {
    
    for (let key in content) {
      cityWeatherList.innerHTML = `
      <div class="city-weather__item" data-idweather="${content.id}">
        <div class="city-weather__item-img">
        
    </div>
    <div class="city-weather__item-text">
        <h3>${content.name}</h3>
        <p>${Math.round(content.main.temp)}°C</p>
     </div>
     </div>  
    `;
    }

    // console.log(content);

    let cityWeatherItem = document.querySelector(".city-weather__item");

    cityWeatherItem.addEventListener("click", (event) => {
      let weatherPanel = document.querySelector(".weather-panel");
      console.log("click");

      let target = event.target;
      let weatherId = "";
      weatherId = target.dataset.idweather;

      let body = document.body;

      modalWeather(content);

      weatherPanel.style.display = "block";
      body.style.overflowY = "none";
    });
  }

  async function modalWeather(content) {
    let weatherPanel = document.querySelector(".weather-panel");

    for (let key in content) {
      weatherPanel.innerHTML = `
        <div class="container">
                <div class="weather-panel__wrapper">
                    <div class="container">
                        <div class="weather-panel__weather-wrapper">
                            <div class="weather-panel__weather">
                                <div class="weather-panel__icon2">
                                
                                </div>
                            </div>
                            <div class="weather-panel__text">
                                <h1>${Math.round(content.main.temp)}°C</h1>
                                <p>${content.name}</p>
                            </div>
                            <!-- <div class="weather-panel__btn" data-btnweather="${
                              content.id
                            }">
                              здесь должна быть кнопка
                              <img src="img/icons/heart.svg" alt="">
                              <h3>В избранное</h3> -->
                            <div class="weather-panel__info-wrapper">
                                <div class="weather-panel__info-item">
                                    <h3>Температура</h3>
                                    <p>${Math.round(content.main.temp)}°C</p>
                                </div>
                                <div class="weather-panel__info-item">
                                    <h3>Ощущается</h3>
                                    <p>${content.main.feels_like}°C</p>
                                </div>
                                <div class="weather-panel__info-item">
                                    <h3>Влажность</h3>
                                    <p>${content.main.humidity}%</p>
                                </div>
                                <div class="weather-panel__info-item">
                                    <h3>Макc. температура</h3>
                                    <p>${Math.round(
                                      content.main.temp_max
                                    )}°C</p>
                                </div>
                                <div class="weather-panel__info-item">
                                    <h3>Мин. температура</h3>
                                    <p>${Math.round(
                                      content.main.temp_min
                                    )}°C</p>
                                </div>
                                <div class="weather-panel__info-item">
                                    <h3>Облачность</h3>
                                    <p>${content.clouds.all}%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    // let weatherPanelBtn = document.querySelector(".weather-panel__btn");

    bgWeather(content);
    iconWeather(content);

    weatherPanel.addEventListener("click", (event) => {
      let target = event.target;
      let body = document.body;

      if (target.classList.contains("weather-panel")) {
        weatherPanel.style.display = "none";
        body.style.overflowY = "scroll";
      }
    });

    // weatherPanelBtn.addEventListener("click", (event) => {
    //   let target = event.target;

    //   if (target.classList.contains("weather-panel__btn")) {
    //     console.log("hi");
    //     let mainId = "";
    //     mainId = target.dataset.btnweather;
    //     mainWeather(mainId, url);
    //   }
    // });
  }

  // async function mainWeather(id, url) {
  //   let response = await fetch(url);
  //   let content = await response.json();

  //   let headerWidgetContent = document.querySelector(".header__widget-content");

  //     let newMain = {
  //       nameSity: content.name,
  //       temp: content.main.temp,
  //       country: content.sys.country,
  //   }

  //   mainW.unshift(newMain);

  //   mainW.slice(0, 1);

  //   headerWidgetContent.innerHTML = `
  //   <div class="header__widget-content-weather wrapper">
  //     <img src="img/icons/weather/small/Sun.svg" alt="">
  //     <p>${mainW.temp}</p>
  //   </div>
  //   <div class="header__widget-content-city wrapper">
  //     <p>${mainW.nameSity}, ${mainW.country}</p>
  //   </div>
  //   `;

  listWeather(url, content);
  console.log(content);
}

function deleteMainWeather(weatherId) {
  mainW.splice(weatherId, 1);
}

//UI(Связь между интерфейсом и логикой)

searchWeatherInput.addEventListener("click", () => {
  if (lastWearther.length == 0) {
    cityWeatherLast.style.display = "none";
  } else {
    cityWeatherLast.style.display = "block";
  }
});

searchWeatherBtn.addEventListener("click", () => {
  city = searchWeatherInputValue.value;
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&units=metric&appid=${apiKey}`;

  getWeather(url);
  cityWeatherList.style.display = "block";
});
