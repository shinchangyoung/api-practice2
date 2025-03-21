const apiKey = 'YOUR_API_KEY';  // OpenWeatherMap에서 받은 API 키를 입력하세요

function getWeather() {
    const city = document.getElementById('city').value;
    if (city === '') {
        alert('도시 이름을 입력하세요!');
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=kr`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === '404') {
                document.getElementById('weather-info').innerHTML = '도시를 찾을 수 없습니다.';
            } else {
                const temperature = data.main.temp;
                const description = data.weather[0].description;
                const humidity = data.main.humidity;

                document.getElementById('weather-info').innerHTML = `
                    <h2>${city}의 날씨</h2>
                    <p>기온: ${temperature}°C</p>
                    <p>상태: ${description}</p>
                    <p>습도: ${humidity}%</p>
                `;
            }
        })
        .catch(error => {
            console.error('오류:', error);
            document.getElementById('weather-info').innerHTML = '날씨 정보를 불러올 수 없습니다.';
        });
}
