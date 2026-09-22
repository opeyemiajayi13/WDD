const temperature = 25;
const windSpeed = 10;

function calculateWindChill(temp, speed) {
return 13.12 + (0.6215 * temp) - (11.37 * Math.pow(speed, 0.16)) + (0.3965 * temp * Math.pow(speed, 0.16));
}

if (temperature <= 10 && windSpeed > 4.8) {
document.querySelector("#wind-chill").textContent =
"${calculateWindChill(temperature, windSpeed).toFixed(1)} °C";
} else {
document.querySelector("#wind-chill").textContent = "N/A";
}

document.querySelector("#currentyear").textContent = new Date().getFullYear();

document.querySelector("#lastModified").textContent = document.lastModified;