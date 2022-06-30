import React, { useRef } from "react";
import css from "./styles.module.css";


export const Search = ({ setCity }) => {
  const inputRef = useRef(null);
  const handlerEvent = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
    setCity(inputRef.current.value);
  };

  return (
    <form className={css.search} onSubmit={handlerEvent} action="" method="get">
      <input
        className={css.input}
        ref={inputRef}
        placeholder="Введите город"
        type="text"
      />
      <button className={css.button} onClick={handlerEvent}>
        <img className={css.searchIcon} src="./images/search.png" alt="" width={16} height={16}/>
      </button>
    </form>
  );
};
