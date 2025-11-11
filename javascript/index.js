const city = "Paris";
const apiKey = "344fd2b82ccb20at17163b1f587bo614";

let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

function displayTemperature(response) {
  console.log(response.data.temperature.current);
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = response.data.temperature.current;
}
axios.get(apiUrl).then(displayTemperature);
