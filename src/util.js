module.exports = {
  get_WeatherIcon: (icons, rangeId, set) => {
    switch (true) {
      case rangeId >= 200 && rangeId < 232:
        set(icons.Thunderstorm);
        break;
      case rangeId >= 300 && rangeId <= 321:
        set(icons.Drizzle);
        break;
      case rangeId >= 500 && rangeId <= 521:
        set(icons.Rain );
        break;
      case rangeId >= 600 && rangeId <= 622:
        set(icons.Snow);
        break;
      case rangeId >= 701 && rangeId <= 781:
        set(icons.Atmosphere);
        break;
      case rangeId === 800:
        set(icons.Clear);
        break;
      case rangeId >= 801 && rangeId <= 804:
        set(icons.Clouds);
        break;
      default:
        set(icons.Clouds);
    }
  },

  weatherIcon: {
    Thunderstorm: "wi-thunderstorm",
    Drizzle: "wi-sleet",
    Rain: "wi-storm-showers",
    Snow: "wi-snow",
    Atmosphere: "wi-fog",
    Clear: "wi-day-sunny",
    Clouds: "wi-day-fog"
  }
}