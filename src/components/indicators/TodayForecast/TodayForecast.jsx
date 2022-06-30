import css from "./styles.module.css";
import React from "react";

export const TodayForecast = ({ forecastResponse, unit }) => {
  if (!forecastResponse) {
    return null;
  }

  const hoursForecast = forecastResponse.forecast.forecastday[0].hour;
  return (
    <>
      {hoursForecast.map(({ temp_c, temp_f, time }) => (
        <div className={css.frame}>
          <div className={css.time}>{time}</div>
          <div className={css.icon}>
            <img src="" alt="" width="30px" />
          </div>
          <div className={css.condition}></div>
          <div className={css.number}>
            {unit ? Math.ceil(temp_c) : Math.ceil(temp_f)}&deg;
          </div>
        </div>
      ))}
    </>
  );
};
