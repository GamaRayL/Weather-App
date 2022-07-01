import React from "react";
import css from "./Toggle.module.css";

export const Toggle = ({ left, right, onChange }) => {
  return (
    <div className={css.switchToggle}>
      <input
        className={css.leftCheck}
        onChange={onChange}
        type="radio"
        name="radio"
        id="left"
        defaultChecked
      />
      <label className={css.leftText} htmlFor="left">
        {left}
      </label>
      <input
        className={css.rightCheck}
        onChange={onChange}
        type="radio"
        name="radio"
        id="right"
      />
      <label className={css.rightText} htmlFor="right">
        {right}
      </label>
      <div className={css.roller}></div>
    </div>
  );
};
