import { Indicator } from "components/Indicator";
import css from "./Window.module.css";
import array from "store/weather.json";

export const Window = ({ unit, currentResponse }) => {
  if (!currentResponse) {
    return null;
  }

  const current = currentResponse.current;
  const location = currentResponse.location;
  const date = new Date(location.localtime).toLocaleString(
    "en",
    {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );
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
            <span className={css.deg}>&deg;</span>
          </div>
          <div className={css.primary__city}>{location.name}</div>
          <div className={css.primary__country}>{location.country}</div>
          <div className={css.primary__date}>{date}</div>
        </div>
      </div>
      <div className={css.secondary}>
        <Indicator />
      </div>
    </div>
  );
};
