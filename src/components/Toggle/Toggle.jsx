import css from "./Toggle.module.css";

export const Toggle = ({ left, right, onChange, weatherDataFromApi }) => {
  if (!weatherDataFromApi) {
    return null;
  }
  return (
    <div className={css.frame}>
      <label htmlFor="check" className={css.switchToggle}></label>
      <input
        className={css.checkbox}
        onChange={onChange}
        type="checkbox"
        id="check"
      />
      <label htmlFor="check" className={css.roller}></label>
      <span className={css.leftText}>{left}</span>
      <span className={css.rightText}>{right}</span>
    </div>
  );
};
