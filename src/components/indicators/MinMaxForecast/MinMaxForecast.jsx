import React from "react";
import css from "./styles.module.css";

export const MinMaxForecast = ({ forecastResponse, unit }) => {
  if (!forecastResponse) {
    return null;
  }

  const maxTempC = Math.ceil(
    forecastResponse.forecast.forecastday[0].day.maxtemp_c
  );
  const minTempC = Math.ceil(
    forecastResponse.forecast.forecastday[0].day.mintemp_c
  );
  const maxTempF = Math.ceil(
    forecastResponse.forecast.forecastday[0].day.maxtemp_f
  );
  const minTempF = Math.ceil(
    forecastResponse.forecast.forecastday[0].day.mintemp_f
  );

  return (
    <div className={css.frame}>
      <div>
        <span className={css.number}>{unit ? maxTempC : maxTempF}&deg;</span>
        <span className={css.description}>макс</span>
      </div>
      <div className={css.line}></div>
      <div>
        <span className={css.number}>{unit ? minTempC : minTempF}&deg;</span>
        <span className={css.description}>мин</span>
      </div>
    </div>
  );
};
