// This simulates fetching data. In the future, replace this with your real API call.
async function fetchWeatherData(city) {
    // NOTE: Replace this mock data with your actual fetch() to OpenWeatherMap or Tomorrow.io
    // Example: const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY&units=metric`);
    
    return new Promise((resolve) => {
        setTimeout(() => {
            // Mocking a response for testing purposes
            resolve({
                city: city,
                temp: 22,
                condition: "Rainy", // Change this to "Clear", "Rainy", "Extreme Heat" to test the engine
                aqi: 85 // Air Quality Index
            });
        }, 800); // Simulate network delay
    });
}