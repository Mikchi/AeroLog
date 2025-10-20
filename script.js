const apiKey = "e600c8a9abbf7e3b4a73e32bca0d0864";
const city = "Hacienda Heights";
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    const humidity = data.main.humidity;
    const wind = Math.round(data.wind.speed);
    const temp = Math.round(data.main.temp);
    const lat = data.coord.lat;
    const lon = data.coord.lon;

    document.getElementById("humidityNum").textContent = `${humidity}%`;
    document.getElementById("windNum").textContent = `${wind} mph`;
    document.getElementById("tempNum").textContent = `${temp}°F`;

    // 🔹 Now get AQI using the coordinates
    const aqiUrl = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    return fetch(aqiUrl);
  })
  .then(response => response.json())
  .then(aqiData => {
    const aqiValue = aqiData.list[0].main.aqi; // This is the AQI number (1–5)
    document.getElementById("aqiNum").textContent = aqiValue;
  })
  .catch(error => console.error("Error:", error));
