import React from "react";
import css from "./styles.module.css";

export const Humidity = ({ currentResponse }) => {
  if (!currentResponse) {
    return null;
  }
  const humidity = currentResponse.current.humidity;

  return (
    <div className={css.frame}>
      <p className={css.description}>влажность воздуха в процентах</p>
      <p className={css.numberMiddle}>{humidity} %</p>
    </div>
  );
};
