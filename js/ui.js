// Handles updating the HTML
const UI = {
    elements: {
        cityInput: document.getElementById('city-input'),
        searchBtn: document.getElementById('search-btn'),
        weatherResult: document.getElementById('weather-result'),
        cityName: document.getElementById('city-name'),
        weatherTemp: document.getElementById('weather-temp'),
        weatherDesc: document.getElementById('weather-desc'),
        decisionBox: document.getElementById('decision-box'),
        decisionText: document.getElementById('decision-text'),
        healthSelect: document.getElementById('health'),
        commuteSelect: document.getElementById('commute'),
        saveProfileBtn: document.getElementById('save-profile-btn')
    },

    displayWeather(weather, decision) {
        this.elements.cityName.textContent = weather.city;
        this.elements.weatherTemp.textContent = `${weather.temp}°C`;
        this.elements.weatherDesc.textContent = weather.condition;
        
        this.elements.decisionText.textContent = decision.message;
        
        // Reset and apply correct color class
        this.elements.decisionBox.className = 'decision-box ' + decision.riskLevel;
        
        this.elements.weatherResult.classList.remove('hidden');
    },

    getProfile() {
        return {
            health: this.elements.healthSelect.value,
            commute: this.elements.commuteSelect.value
        };
    }
};