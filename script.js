
const apiKey = "db20eb80dc19413baf8191533260302";

async function fetchWeather(city) {
    const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=7&aqi=no`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        // Update Top Section
        document.getElementById('cityName').innerText = data.location.name;
        document.getElementById('temp').innerText = Math.round(data.current.temp_c);
        document.getElementById('humidity').innerText = data.current.humidity;
        document.getElementById('wind').innerText = data.current.wind_kph;
        document.getElementById('pressure').innerText = data.current.pressure_mb;
        document.getElementById('mainIcon').src = "https:" + data.current.condition.icon;

        // Update 7-Day Row
        const forecastRow = document.getElementById('forecastRow');
        forecastRow.innerHTML = ""; // Clear old icons

        data.forecast.forecastday.forEach(item => {
            const date = new Date(item.date);
            const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });

            const card = document.createElement('div');
            card.className = 'day-card';
            card.innerHTML = `
                <div class="day-name">${dayName}</div>
                <img src="https:${item.day.condition.icon}">
                <div class="day-temp">${Math.round(item.day.avgtemp_c)}°C</div>
            `;
            forecastRow.appendChild(card);
        });

    } catch (error) {
        console.log("Error fetching weather");
    }
}

document.getElementById('searchBtn').addEventListener('click', () => {
    fetchWeather(document.getElementById('cityInput').value);
});

// Load a city by default
fetchWeather("London");
