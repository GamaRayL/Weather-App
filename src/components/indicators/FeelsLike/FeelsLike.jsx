import React from "react";
import css from "./styles.module.css";

export const FeelsLike = ({ currentResponse, unit }) => {
  if (!currentResponse) {
    return null;
  }
  const feelsLikeC = Math.ceil(currentResponse.current.feelslike_c);
  const feelsLikeF = Math.ceil(currentResponse.current.feelslike_f);

  return (
    <div className={css.frame}>
      <p className={css.description}>ощущается как</p>
      <p className={css.numberMiddle}>{unit ? feelsLikeC : feelsLikeF}&deg;</p>
    </div>
  );
};
