function getWeather() {
    let city = document.getElementById('cityInput').value;
    let errorEl = document.getElementById('error');
    let resultBox = document.getElementById('weatherResult');
    
    if(city === "") {
        errorEl.innerText = "Please enter a city name";
        resultBox.classList.add('hidden');
        return;
    }
    
    errorEl.innerText = "";
    document.getElementById('cityName').innerText = city;
    document.getElementById('temp').innerText = "28°C";
    document.getElementById('desc').innerText = "Sunny ☀️";
    resultBox.classList.remove('hidden');
}

document.getElementById('cityInput').addEventListener('keypress', function(e) {
    if(e.key === 'Enter') {
        getWeather();
    }
});
