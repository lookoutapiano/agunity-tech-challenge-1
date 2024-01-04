async function getWeatherByCoordinates() {
    const apiKey = "API-KEY-HERE";
    const latitudeInput = document.getElementById("latitudeInput") as HTMLInputElement;
    const longitudeInput = document.getElementById("longitudeInput") as HTMLInputElement;
    const weatherInfoElement = document.getElementById("weatherInfo");

    const latitude = latitudeInput.value.trim();
    const longitude = longitudeInput.value.trim();

    if (latitude === "" || longitude === "") {
        alert("Please enter both latitude and longitude");
        return;
    }

    if (weatherInfoElement) {
        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
            );
            const data = await response.json();

            const { name, main, weather } = data;
            const { humidity, temp: temperature } = main;

            const description = weather[0].description;
            weatherInfoElement.classList.remove("danger");
            weatherInfoElement.innerHTML = `<p>Location: ${name}</p><p>Temperature: ${temperature}°C</p><p>Humidity: ${humidity}°C</p><p>Description: ${description}</p>`;
        } catch (error) {
            console.error("Error fetching weather data:", error);
            weatherInfoElement.classList.add("danger");
            weatherInfoElement.innerHTML = "Failed to fetch weather data. Please try again.";
        }
    } else {
        console.error('Element with ID "weatherInfo" not found in the DOM');
    }
}
