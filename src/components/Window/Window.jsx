import { Indicator } from "components/Indicator";
import css from "./Window.module.css";
import array from "store/weather.json";
import { showWind, showUv } from "components/scripts";

export const Window = ({ unit, weatherDataFromApi }) => {
  if (!weatherDataFromApi) {
    return null;
  }

  const current = weatherDataFromApi.current;
  const forecastDay = weatherDataFromApi.forecast.forecastday[0];
  const location = weatherDataFromApi.location;
  const date = new Date(location.localtime).toLocaleString("en", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const time = new Date(location.localtime).getHours();
  const codeReceived = current.condition.code;
  const weatherItem = array.filter((item) => item.code === codeReceived);

  const showWeatherIcon = () => {
    if (time > 18 || time < 6) {
      return weatherItem[0].night;
    } else {
      return weatherItem[0].day;
    }
  };

  return (
    <div className={css.window}>
      <div className={css.primary}>
        <div className={css.primary__icon}>
          <img alt="current weather icon" src={showWeatherIcon()} />
        </div>
        <div className={css.primary__indication}>
          <div className={css.primary__temp}>
            {unit ? Math.round(current.temp_c) : Math.round(current.temp_f)}
            &deg;
          </div>
          <div className={css.primary__condition}>{current.condition.text}</div>
          <div className={css.primary__city}>{location.name}</div>
          <div className={css.primary__country}>{location.country}</div>
          <div className={css.primary__date}>{date}</div>
        </div>
      </div>
      <div className={css.secondary}>
        <div className={css.secondary__day}>
          <Indicator
            head={"Local Time"}
            parameter={new Date(location.localtime).toLocaleString("en-US", {
              hour: "numeric",
              minute: "numeric",
            })}
          />
          <Indicator
            head={"Feels like"}
            parameter={Math.round(current.feelslike_c) + "°"}
            img={"./images/weatherIcons/thermometer.svg"}
          />
          <Indicator
            head={"Humidity"}
            parameter={current.humidity}
            img={"./images/weatherIcons/humidity.svg"}
          />
          <Indicator
            head={"Wind speed"}
            parameter={Math.round(current.wind_mph) + " mph"}
            img={showWind(Math.round(current.wind_mph))}
          />
          <Indicator head={"Visibility"} parameter={current.vis_km} />
          <Indicator
            head={"Precipitation"}
            parameter={current.precip_mm + " mm"}
            img={"./images/weatherIcons/raindrops.svg"}
          />
          <Indicator
            head={"Ultraviolet index"}
            parameter={current.uv}
            img={showUv(current.uv)}
          />

          <Indicator
            head={"Sunrise"}
            parameter={forecastDay.astro.sunrise}
            img={"./images/weatherIcons/sunrise.svg"}
          />
          <Indicator
            head={"Sunset"}
            parameter={forecastDay.astro.sunset}
            img={"./images/weatherIcons/sunset.svg"}
          />
          <Indicator
            head={"Minimum temperature"}
            parameter={
              unit
                ? Math.round(forecastDay.day.mintemp_c)
                : Math.round(forecastDay.day.mintemp_f)
            }
            img={"./images/weatherIcons/thermometer-colder.svg"}
          />
          <Indicator
            head={"Maximum temperature"}
            parameter={
              unit
                ? Math.round(forecastDay.day.maxtemp_c)
                : Math.round(forecastDay.day.maxtemp_f)
            }
            img={"./images/weatherIcons/thermometer-warmer.svg"}
          />
          <div className={css.secondary__forecastDay}></div>
        </div>
        <div className={css.secondary__forecastThreeDays}></div>
      </div>
    </div>
  );
};
