const apiKey = '#'; // 여기서 YOUR_API_KEY를 OpenWeatherMap에서 받은 API 키로 바꿔주세요
const button = document.getElementById('getWeather');
const cityInput = document.getElementById('city');

button.addEventListener('click', () => {
    const city = cityInput.value;
    if (city) {
        getWeather(city);
    } else {
        alert('Please enter a city name');
    }
});

function getWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=kr`;
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                const temperature = data.main.temp;
                const description = data.weather[0].description;
                const humidity = data.main.humidity;
                const windSpeed = data.wind.speed;

                document.getElementById('temperature').innerText = `온도: ${temperature}°C`;
                document.getElementById('description').innerText = `날씨: ${description}`;
                document.getElementById('humidity').innerText = `습도: ${humidity}%`;
                document.getElementById('windSpeed').innerText = `바람 속도: ${windSpeed} m/s`;
            } else {
                alert('City not found!');
            }
        })
        .catch(error => alert('Error fetching weather data'));
}
