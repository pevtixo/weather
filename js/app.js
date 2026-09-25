// The main controller that ties it all together
document.addEventListener('DOMContentLoaded', () => {
    
    // Load saved profile from LocalStorage
    const savedProfile = JSON.parse(localStorage.getItem('userProfile'));
    if (savedProfile) {
        UI.elements.healthSelect.value = savedProfile.health;
        UI.elements.commuteSelect.value = savedProfile.commute;
    }

    // Handle Profile Save
    UI.elements.saveProfileBtn.addEventListener('click', () => {
        const profile = UI.getProfile();
        localStorage.setItem('userProfile', JSON.stringify(profile));
        alert('Profile saved! Your Decision Engine is now personalized.');
    });

    // Handle Weather Search
    UI.elements.searchBtn.addEventListener('click', async () => {
        const city = UI.elements.cityInput.value.trim();
        if (!city) return alert('Please enter a city name');

        UI.elements.weatherResult.classList.add('hidden');
        
        // 1. Fetch Weather
        const weather = await fetchWeatherData(city);
        
        // 2. Get User Profile
        const profile = UI.getProfile();
        
        // 3. Calculate Decision
        const decision = calculateDecision(profile, weather);
        
        // 4. Update UI
        UI.displayWeather(weather, decision);
    });

    // Allow pressing "Enter" to search
    UI.elements.cityInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') UI.elements.searchBtn.click();
    });
});