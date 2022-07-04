import { useState } from "react";
import css from "./Search.module.css";

export const Search = ({ setCity }) => {
  const [value, setValue] = useState("");

  const changeCity = (e) => {
    e.preventDefault();
    setCity(value);
    setValue("");
  };

  // const autocompleteCity = () => {

  // };

  const [cities, setCities] = useState();

  async function getCitiesArray(e) {
    try {
      const responseData = await fetch(
        `http://api.geonames.org/postalCodeSearchJSON?placename=${e}&username=gama_ray`
      );
      setCities(await responseData.json());
      // cities.postalCodes[0] >
    } catch (error) {
      console.log(error);
    }
  }
  console.log(cities.postalCodes.map((item) => item.placeName));

  return (
    <>
      <select name="" id=""></select>
      <form className={css.search} onSubmit={changeCity} method="get">
        <input
          value={value}
          className={css.input}
          onChange={(e) => {
            getCitiesArray(e.target.value);
            setValue(e.target.value);
          }}
          placeholder="Введите город"
          type="text"
        />
        <button className={css.button} onClick={changeCity}></button>
      </form>
    </>
  );
};
