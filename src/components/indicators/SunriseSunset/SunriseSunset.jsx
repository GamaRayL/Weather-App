import css from "./styles.module.css";
import React from "react";

export const SunriseSunset = ({ forecastResponse }) => {
  if (!forecastResponse) {
    return null;
  }
  const sunrise = forecastResponse.forecast.forecastday[0].astro.sunrise;
  const sunset = forecastResponse.forecast.forecastday[0].astro.sunset;

  return (
    <div className={css.frame}>
      <div className={css.sun}>
        <svg
          width="29"
          height="11"
          viewBox="0 0 29 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line y1="10.5" x2="29" y2="10.5" stroke="black" />
          <path
            d="M25 11C25 5.47715 20.5228 1 15 1C9.47715 1 5 5.47715 5 11"
            stroke="black"
          />
        </svg>
        <span className={css.description}>восход</span>
        <span className={css.number}>{sunrise}</span>
      </div>
      <div className={css.line}></div>
      <div className={css.sun}>
        <svg
          width="29"
          height="11"
          viewBox="0 0 29 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line y1="0.5" x2="29" y2="0.5" stroke="black" />
          <path
            d="M25 0C25 5.52285 20.5228 10 15 10C9.47715 10 5 5.52285 5 0"
            stroke="black"
          />
        </svg>
        <span className={css.description}>закат</span>
        <span className={css.number}>{sunset}</span>
      </div>
    </div>
  );
};
