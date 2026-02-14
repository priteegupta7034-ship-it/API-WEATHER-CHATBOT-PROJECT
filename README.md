
[index.html](https://github.com/user-attachments/files/25317949/index.html)
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Weather App</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div class="app-wrapper">
        <div class="search-container">
            <input type="text" id="cityInput" placeholder="Enter City Name...">
            <button id="searchBtn">Search</button>
        </div>

        <div class="current-weather">
            <div class="info-left">
                <h1 id="cityName">London</h1>
                <p id="currentDay">Friday</p>
                <div class="details">
                    <p>💧 <span id="humidity">--</span>%</p>
                    <p>💨 <span id="wind">--</span> KPH</p>
                    <p>🧭 <span id="pressure">--</span> hPa</p>
                </div>
            </div>
            <div class="info-right">
                <img id="mainIcon" src="" alt="weather icon">
                <h2 class="main-temp"><span id="temp">--</span>°C</h2>
            </div>
        </div>

        <div class="forecast-grid" id="forecastRow">
        </div>
    </div>
    <script src="script.js"></script>
</body>

</html>
