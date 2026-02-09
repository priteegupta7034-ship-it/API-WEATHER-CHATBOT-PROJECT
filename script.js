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
locationInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") getWeather();
});

function getWeather() {
    const location = locationInput.value.trim();
    if (!location) {
        showError("Please enter a city name.");
        return;
    }

    // Using HTTPS to ensure GitHub Pages allows the request
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`;

    fetch(url)
        .then(response => {
            if (!response.ok) throw new Error("City not found");
            return response.json();
        })
        .then(data => {
            weatherResult.classList.remove("hidden");
            errorMsg.classList.add("hidden");
            cityName.textContent = `${data.location.name}, ${data.location.country}`;
            temperature.textContent = `Temperature: ${data.current.temp_c}°C`;
            condition.textContent = `Condition: ${data.current.condition.text}`;
            weatherIcon.src = `https:${data.current.condition.icon}`;
        })
        .catch(() => showError("Failed to fetch weather data."));
}

function showError(message) {
    errorMsg.textContent = message;
    errorMsg.classList.remove("hidden");
    weatherResult.classList.add("hidden");
}
