const apiKey = "db20eb80dc19413baf8191533260302";
const searchBtn = document.getElementById("searchBtn");
const locationInput = document.getElementById("locationInput");

const weatherResult = document.getElementById("weatherResult");
const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const condition = document.getElementById("condition");
const weatherIcon = document.getElementById("weatherIcon");
const errorMsg = document.getElementById("errorMsg");

searchBtn.addEventListener("click", getWeather);
locationInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") getWeather();
});

function getWeather() {
    const location = locationInput.value.trim();

    if (!location) {
        showError("Please enter a city name.");
        return;
    }

    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`;

    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error("City not found");
            }
            return response.json();
        })
        .then((data) => {
            displayWeather(data);
        })
        .catch((error) => {
            showError(error.message);
        });
}

function displayWeather(data) {
    errorMsg.classList.add("hidden");
    weatherResult.classList.remove("hidden");

    cityName.textContent = `${data.location.name}, ${data.location.country}`;
    temperature.textContent = `Temperature: ${data.current.temp_c}°C`;
    condition.textContent = `Condition: ${data.current.condition.text}`;
    weatherIcon.src = "https:" + data.current.condition.icon;
}

function showError(message) {
    weatherResult.classList.add("hidden");
    errorMsg.textContent = message;
    errorMsg.classList.remove("hidden");
}
