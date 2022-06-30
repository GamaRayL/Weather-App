import css from "./styles.module.css";
import React from "react";

export const Precipitation = ({ forecastResponse }) => {
  if (!forecastResponse) {
    return null;
  }
  const precip = Math.ceil(forecastResponse.forecast.forecastday[0].day.totalprecip_mm);

  return (
    <div className={css.frame}>
      <p className={css.description}>вероятность осадков</p>
      <p className={css.middleNumber}>{precip} %</p>
    </div>
  );
};
