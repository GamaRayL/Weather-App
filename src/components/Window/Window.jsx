import { Indicator } from "components/Indicator";
import css from "./Window.module.css";

export const Window = ({ unit, currentResponse }) => {
  if (!currentResponse) {
    return null;
  }
  const tempC = Math.ceil(currentResponse.current.temp_c);
  const tempF = Math.ceil(currentResponse.current.temp_f);
  const location = currentResponse.location.name;
  const pathOfIcon = currentResponse.current.condition.icon.substr(35, 7);
  const date = new Date(currentResponse.location.localtime).toLocaleString(
    "ru",
    {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  return (
    <div className={css.window}>
      <div className={css.primary}>
        <div className={css.primary__icon}>
          <img
            alt="current weather icon"
            src={`images/weatherIcons/${pathOfIcon}.svg`}
          />
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
