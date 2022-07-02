import { Indicator } from "components/Indicator";
import css from "./Window.module.css";
import array from "store/weather.json";

export const Window = ({ unit, currentResponse }) => {
  if (!currentResponse) {
    return null;
  }
  const tempC = Math.round(currentResponse.current.temp_c);
  const tempF = Math.round(currentResponse.current.temp_f);
  const location = currentResponse.location.name;
  const date = new Date(currentResponse.location.localtime).toLocaleString(
    "ru",
    {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );
  const time = new Date(currentResponse.location.localtime).getHours();
  const codeReceived = currentResponse.current.condition.code;
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
            {unit ? tempC : tempF}
            <span className={css.deg}>&deg;</span>
          </div>
          <div className={css.primary__location}>{location}</div>
          <div className={css.primary__date}>{date}</div>
        </div>
      </div>
      <div className={css.secondary}>
        <Indicator />
      </div>
    </div>
  );
};
