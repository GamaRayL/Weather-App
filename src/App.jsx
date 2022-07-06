import css from "./App.module.css";
import { Window } from "components/Window";
import React, { useState, useEffect } from "react";
import { Toggle } from "components/common/Toggle";
import { Search } from "components/Search";

// TODO * Сделать новый функционал (например, прогноз на неделю). Использовать там новые пропсы
// TODO * Сделать переключение по нажатию на roller

function App() {
  const [unit, setUnit] = useState(true);
  const [city, setCity] = useState("Kiev");
  const [geonames, setGeonames] = useState();
  const [weatherDataFromApi, setWeatherDataFromApi] = useState();
  const [valueOfCity, setValueOfCity] = useState("");

  const changeCity = (coordinates) => {
    setCity(coordinates);
    setValueOfCity("");
  };

  const unitChanger = () => {
    setUnit(!unit);
  };

  useEffect(() => {
    async function getSetData() {
      const api = `http://api.weatherapi.com/v1/forecast.json?key=a0961b2c48bd4a78a2280512221204&q=${city}`;
      try {
        const response = await fetch(api);
        const data = await response.json();
        setWeatherDataFromApi(data);
      } catch (error) {
        console.log(error);
      }
    }
    getSetData();
  }, [city]);

  async function getGeonamesArray(e) {
    try {
      const responseData = await fetch(
        `http://api.geonames.org/searchJSON?name_startsWith=${e}&maxRows=4&username=gama_ray`
      );
      setGeonames(await responseData.json());
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={css.app}>
      <br />
      <br />
      <div className={css.container}>
        <Window unit={unit} city={city} weatherDataFromApi={weatherDataFromApi} />
      </div>
      <br />
      <br />
      <div className={css.container}>
        <Toggle
          onClick={unitChanger}
          onChange={unitChanger}
          left={"°C"}
          right={"°F"}
        ></Toggle>
        <Search
          setCity={setCity}
          setValueOfCity={setValueOfCity}
          valueOfCity={valueOfCity}
          getGeonamesArray={getGeonamesArray}
          geonames={geonames}
          changeCity={changeCity}
        />
      </div>
    </div>
  );
}

export default App;
