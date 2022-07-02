import { useState } from "react";
import css from "./Search.module.css";

export const Search = ({ setCity }) => {
  const [value, setValue] = useState("");
  const changeCity = (e) => {
    e.preventDefault();
    setCity(value);
    setValue("");
  };

  return (
    <form className={css.search} onSubmit={changeCity} method="get">
      <input
        value={value}
        className={css.input}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Введите город"
        type="text"
      />
      <button className={css.button} onClick={changeCity}></button>
    </form>
  );
};
