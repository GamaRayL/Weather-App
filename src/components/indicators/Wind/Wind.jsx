import css from "./styles.module.css";
import React from "react";

export const Wind = ({ currentResponse }) => {
  if (!currentResponse) {
    return null;
  }
  const wind = Math.ceil(currentResponse.current.wind_kph);

  return (
    <div className={css.frame}>
      <div className={css.description}>ветер</div>
      <span className={css.number}>{wind}</span>
      <span> м/с</span>
    </div>
  );
};
