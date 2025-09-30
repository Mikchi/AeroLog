const apiKey = "e600c8a9abbf7e3b4a73e32bca0d0864";
const city = "Hacienda Heights";
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;


fetch (url)
    .then(response => response.json())
    .then (data=>{
        const humidity = data.main.humidity;
        const wind = Math.round(data.wind.speed);
        const temp = Math.round(data.main.temp);
        console.log(humidity);
        console.log(wind);
        console.log(temp);


        const humidityNum = document.getElementById("humidityNum");
        const humidityDesc = document.getElementById("humidityDescription");
        humidityNum.textContent = `${humidity}%`;

        const windNum = document.getElementById("windNum");
        windNum.textContent = `${wind} mph`;

        const tempNum = document.getElementById("tempNum");
        tempNum.textContent = `${temp}°F`;
    })
.catch(error => console.error('Error:', error));

