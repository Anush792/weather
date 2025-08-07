function getWeather() {
  const city = document.getElementById('cityInput').value.trim().toLowerCase();
  const resultDiv = document.getElementById('weatherResult');

  const weatherData = {
    kathmandu: { temp: 26, condition: 'Partly cloudy' },
    pokhara: { temp: 24, condition: 'Rainy' },
    biratnagar: { temp: 30, condition: 'Sunny' },
    butwal: { temp: 28, condition: 'Humid and sunny' },
    lalitpur: { temp: 25, condition: 'Clear skies' }
  };

  if (weatherData[city]) {
    const { temp, condition } = weatherData[city];
    resultDiv.innerHTML = `
      <h3>${capitalize(city)}, Nepal</h3>
      <p>🌡️ Temperature: ${temp}°C</p>
      <p>☁️ Condition: ${condition}</p>
    `;
  } else {
    resultDiv.innerHTML = 'City not found. Try Kathmandu, Pokhara, etc.';
  }
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
