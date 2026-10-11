
import { getWeatherIcon } from "./ForcastDay";

function CurrentWeather({ weather }) {
  if (!weather) return null;

  const date = new Date(weather.time);
  const formattedDate = Number.isNaN(date.getTime())
    ? ""
    : date.toLocaleDateString("en-US", { weekday: "long" });
  const formattedTime = typeof weather.time === "string"
    ? weather.time.slice(11, 16)
    : "";
  const description = typeof weather.description === "string"
    ? weather.description.toLowerCase()
    : "weather unavailable";

  return (
    <section className="current-weather">
      <div className="weather-details">
        <h1>{weather.city}</h1>
        <p>
          {formattedDate} {formattedTime},{" "}
          {description}
        </p>
        <p>
          Humidity: <strong>{weather.humidity}%</strong>,
          Wind: <strong> {weather.wind} km/h</strong>
        </p>
      </div>
      <div className="temperature">
        <span className="current-icon">{getWeatherIcon(weather.code)}</span>
        <span className="temperature-number">{weather.temperature}</span>
        <span className="temperature-unit">°C</span>
      </div>
    </section>
  );
}

export default CurrentWeather;
