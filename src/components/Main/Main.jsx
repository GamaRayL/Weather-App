import css from "./styles.module.css";
import React from "react";

export const Main = ({ unit, currentResponse }) => {
  if (!currentResponse) {
    return null;
  }
  const tempC = Math.ceil(currentResponse.current.temp_c);
  const tempF = Math.ceil(currentResponse.current.temp_f);
  const city = currentResponse.location.name;
  const conditionText = currentResponse.current.condition.text;
  const conditionIcon = currentResponse.current.condition.icon;
  const time = currentResponse.location.localtime;
  const country = currentResponse.location.country;

  return (
    <div>
      <div className={css.frame}>
        <div className={css.icon}>
          {/* <img src={conditionIcon} alt="" width="100px" /> */}
        </div>
        {/* <Condition condition={conditionText} /> */}
        <div className={css.numberBig}>
          {unit ? tempC : tempF}
          <span className={css.deg}>&deg;</span>
        </div>
        {/* <div className={css.city}>{city}</div> */}
        {/* <div className={css.counrty}>{country}</div> */}
        <br />
        {/* <div className={css.dayNumber}>{time}</div> */}
      </div>
    </div>
  );
};
