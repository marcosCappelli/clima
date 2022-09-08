// Variáveis e seleção de elementos

const apiKey = "5537995649e11d4cb6bc71900c96a056";
const apiCountryUrl = "https://countryflagsapi.com/png/";

const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");

const cityElement = document.querySelector("#city");
const tempElement = document.querySelector("#temperature span");
const descElement = document.querySelector("#description");
const weatherIconElement = document.querySelector("#weather-icon");
const countryElement = document.querySelector("#country");
const umidityElement = document.querySelector("#umidity span");
const windElement = document.querySelector("#windy span");


//Funções
const getWeatherData = async(city) => {

    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;

    const res = await fetch(apiWeatherURL)
    const data = await res.json()

    console.log(data);

}

const showWeatherData = (city) => {
    getWeatherData(city);
}

//Eventos
searchBtn.addEventListener("click", (e) => {

    e.preventDefault();

    const city = cityInput.value;


    showWeatherData(city);
});

