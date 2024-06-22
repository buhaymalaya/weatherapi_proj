require('dotenv').config();

const apiKey = process.env.OPENWEATHERMAP_API_KEY;
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

const checkWeatherBtn = document.getElementById('check-weather-btn');
const weatherInfo = document.getElementById('weather-info');
const weatherImg = document.getElementById('weather-img');
const tempOption = document.getElementById('temp-option');
const locationInput = document.getElementById('location-input');
const stateInput = document.getElementById('state-input');
const countryInput = document.getElementById('country-input');

console.log("DOM loaded");

const checkWeather = async () => {
    console.log("Connecting to Open Weather API...");
    const location = locationInput.value;
    const state = stateInput.value; 
    const country = countryInput.value; 
    const unit = document.querySelector('input[name="unit"]:checked').value;

    try {
        const response = await fetch(`${apiUrl}?q=${location},${state},${country}&appid=${apiKey}&units=${unit}`);
        const data = await response.json();
        displayWeatherInfo(data, unit);
    } catch (error) {
        console.error("Error finding location:", error);
        alert('Apologies! Location not found. Please try again.');
    }
}


const displayWeatherInfo = (data, unit) => {
    console.log("Displaying weather for:", data.name);

    const temperature = Math.round(data.main.temp);
    const tempHigh = Math.round(data.main.temp_max);
    const tempLow = Math.round(data.main.temp_min);
    
    weatherInfo.innerHTML = `
        <h2>${data.name}</h2>
        <p>Condition: ${data.weather[0].main}</p>
        <p>Temperature: ${temperature} ${getTemperatureUnit(unit)}</p>
        <p>High: ${tempHigh} ${getTemperatureUnit(unit)}</p>
        <p>Low: ${tempLow} ${getTemperatureUnit(unit)}</p>
        <p>Humidity: ${data.main.humidity}%</p>
    `;

    setBackgroundByWeather(data.weather[0].main);
}

const getTemperatureUnit = (unit) => {
    return unit === 'metric' ? '°C' : '°F';
}

checkWeatherBtn.addEventListener('click', checkWeather);

const setBackgroundByWeather = (weatherCondition) => {
    let imageUrl;

    switch (weatherCondition.toLowerCase()) {
        case 'clear':
            imageUrl = 'pexels-jess-loiterton-4319752.jpg';
            break;
        case 'clouds':
            imageUrl = 'pexels-fabian-wiktor-994605.jpg';
            break;
        case 'rain':
            imageUrl = 'pexels-iurii-laimin-14431017.jpg';
            break;
        case 'snow':
            imageUrl = 'pexels-kasuma-908644.jpg';
            break;
        
    }

    weatherImg.style.backgroundImage = `url(${imageUrl})`;
};
