import css from "./App.module.css";
import { Window } from "components/Window";
import React, { useState, useEffect } from "react";
import { Toggle } from "components/common/Toggle";
import { Search } from "components/Search";

// TODO * Сделать новый функционал (например, прогноз на неделю). Использовать там новые пропсы
// TODO * Сделать поиск с подсказами по городам
// TODO * Сделать переключение по нажатию на roller

function App() {
  const [unit, setUnit] = useState(true);
  const [city, setCity] = useState("Санкт-Петербург");
  const [currentResponse, setCurrentResponse] = useState();
  const [forecastResponse, setForecastResponse] = useState();

  const unitChanger = () => {
    setUnit(!unit);
  };

  useEffect(() => {
    async function getSetData() {
      const api = (value) => {
        return `http://api.weatherapi.com/v1/${value}.json?key=a0961b2c48bd4a78a2280512221204&q=${city}&aqi=no&lang=ru`;
      };
      try {
        const respCurrent = await fetch(api("current"));
        const dataCurrent = await respCurrent.json();
        setCurrentResponse(dataCurrent);

        const respForecast = await fetch(api("current"));
        const dataForecast = await respForecast.json();
        setForecastResponse(dataForecast);
      } catch (error) {
        console.log(error);
      }
    }
    getSetData();
  }, [city]);

  return (
    <div className={css.app}>
      <div className={css.container}>
        <Window unit={unit} city={city} currentResponse={currentResponse} />
      </div>
      <br />
      <Toggle
        onClick={unitChanger}
        onChange={unitChanger}
        left={"°C"}
        right={"°F"}
      ></Toggle>
      <Search setCity={setCity} />
    </div>
  );
}

export default App;
