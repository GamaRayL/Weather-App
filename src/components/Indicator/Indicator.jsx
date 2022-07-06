import css from "./Indicator.module.css";

export const Indicator = ({ head, parameter, img }) => {
  return (
    <div className={css.indicator}>
      <p>{head}</p>
      <div className={css.box}>
        <span className={css.parameter}>{parameter}</span>
        {img ? <img className={css.icon} src={img} alt="weather icon" /> : null}
      </div>
    </div>
  );
};
