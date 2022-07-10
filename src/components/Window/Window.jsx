import { showWind, showUv } from "components/scripts";
import { Indicator } from "components/Indicator";
import { TodayForecast } from "components/TodayForecast";
import array from "store/weather.json";
import css from "./Window.module.scss";

export const Window = ({ unit, weatherDataFromApi, correctCity, error }) => {
  if (!weatherDataFromApi) {
    return <div className={css.error}>{error}</div>;
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
  const currentHours = new Date(location.localtime).getHours();
  const codeCurrentReceived = current.condition.code;
  const forecastDayReceivedArray = forecastDay.hour.map((item) => item);
  const weatherItemsArrayByHour = forecastDayReceivedArray.filter(
    (item) => new Date(item.time).getHours() > currentHours
  );

  const weatherItem = array.filter((item) => item.code === codeCurrentReceived);
  const showCurrentWeatherIcon = () => {
    if (currentHours >= 21 && currentHours <= 6) {
      return weatherItem[0].night;
    } else {
      return weatherItem[0].day;
    }
  };

  const showForWholeDayWeatherIcon = (item) => {
    const weatherItem = array.filter((el) => el.code === item.condition.code);
    const hour = new Date(item.time).getHours();
    if (hour >= 21 || hour <= 6) return weatherItem[0].night;
    else return weatherItem[0].day;
  };

  return (
    <div className={css.window}>
      <div className={css.primary}>
        <div className={css.primary__icon}>
          <img alt="current weather icon" src={showCurrentWeatherIcon()} />
        </div>
        <div className={css.primary__indication}>
          <div className={css.primary__temp}>
            {unit ? Math.round(current.temp_c) : Math.round(current.temp_f)}
            &deg;
          </div>
          <div className={css.primary__condition}>{current.condition.text}</div>
          <div className={css.primary__city}>
            {correctCity ? correctCity : location.name}
          </div>
          <div className={css.primary__country}>{location.country}</div>
          <div className={css.primary__date}>{date}</div>
        </div>
      </div>
      <div className={css.secondary}>
        <div className={css.secondary__day}>
          <Indicator
            head={"Local Time"}
            parameter={new Date(location.localtime).toLocaleString("ru-RU", {
              hour: "numeric",
              minute: "numeric",
            })}
          />
          <Indicator
            head={"Feels like"}
            parameter={
              unit
                ? Math.round(current.feelslike_c) + "°"
                : Math.round(current.feelslike_f) + "°"
            }
            img={"./images/weatherIcons/thermometer.svg"}
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
            head={"Humidity"}
            parameter={current.humidity}
            img={"./images/weatherIcons/humidity.svg"}
          />
          <Indicator
            head={"Min temperature"}
            parameter={
              unit
                ? Math.round(forecastDay.day.mintemp_c) + "°"
                : Math.round(forecastDay.day.mintemp_f) + "°"
            }
            img={"./images/weatherIcons/thermometer-colder.svg"}
          />
          <Indicator
            head={"Max temperature"}
            parameter={
              unit
                ? Math.round(forecastDay.day.maxtemp_c) + "°"
                : Math.round(forecastDay.day.maxtemp_f) + "°"
            }
            img={"./images/weatherIcons/thermometer-warmer.svg"}
          />
          <Indicator
            head={"Wind speed"}
            parameter={Math.round(current.wind_mph) + " mph"}
            img={showWind(Math.round(current.wind_mph))}
          />
          <Indicator head={"Visibility"} parameter={current.vis_km} />
          <Indicator
            head={"Ultraviolet index"}
            parameter={current.uv}
            img={showUv(current.uv)}
          />
        </div>
        <div className={css.secondary__forecastDay}>
          <TodayForecast
            weatherItemsArrayByHour={weatherItemsArrayByHour}
            showForWholeDayWeatherIcon={showForWholeDayWeatherIcon}
          />
        </div>
        <div className={css.secondary__forecastThreeDays}></div>
      </div>
    </div>
  );
};
