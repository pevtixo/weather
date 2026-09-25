// The Brain of your app. This decides if it's safe or not.
function calculateDecision(profile, weather) {
    let riskLevel = "safe"; // default
    let message = "It looks like a great day to go outside!";

    // Rule 1: Asthma + Rain
    if (profile.health === "asthma" && weather.condition === "Rainy") {
        riskLevel = "danger";
        message = "High risk of asthma trigger. Wear a mask and take your inhaler.";
    } 
    // Rule 2: Asthma + Poor Air Quality
    else if (profile.health === "asthma" && weather.aqi > 100) {
        riskLevel = "danger";
        message = "Poor air quality. Avoid outdoor walking today.";
    }
    // Rule 3: Walking + Extreme Heat
    else if (profile.commute === "walk" && weather.temp > 35) {
        riskLevel = "warning";
        message = "Extreme heat. If you must walk, carry water and stay in the shade.";
    }
    // Rule 4: Walking + Cold
    else if (profile.commute === "walk" && weather.temp < 10) {
        riskLevel = "warning";
        message = "It's cold outside. Wear warm layers to protect your lungs.";
    }

    return { riskLevel, message };
}