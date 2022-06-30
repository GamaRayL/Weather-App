import css from "./App.module.css";
// import { Search } from "components/Search";
import { Main } from "components/Main";
import React, { useState, useEffect } from "react";
import { Toggle } from "components/common/Toggle";

// TODO * Сделать новый функционал (например, прогноз на неделю). Использовать там новые пропсы

// * FeelsLike Humidity Precipitation TodayForecast

// * - Вывести дату из * в Main
// * - Вывести на экран ошибку после неверного ввода города

function App() {
  const [unit, setUnit] = useState(true);
  const [city, setCity] = useState("Каспийск");
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
      {/* <div className={css.navigation}>
        <Search setCity={setCity} />
        <TemperatureUnitChanger unit={unit} setUnit={setUnit} />
      </div> */}
      <div className={css.container}>
        {/* <div className={css.secondery}> */}
        {/* <Precipitation forecastResponse={forecastResponse} /> */}
        {/* <Wind currentResponse={currentResponse} /> */}
        {/* <SunriseSunset forecastResponse={forecastResponse} /> */}
        {/* <MinMaxForecast unit={unit} forecastResponse={forecastResponse} /> */}
        {/* <Humidity currentResponse={currentResponse} /> */}
        {/* <FeelsLike unit={unit} currentResponse={currentResponse} /> */}
        {/* </div> */}
        <div className={css.main}>
          <Main unit={unit} city={city} currentResponse={currentResponse} />
          <Toggle
            onClick={unitChanger}
            onChange={unitChanger}
            left={"°C"}
            right={"°F"}
          ></Toggle>
        </div>
      </div>
      <div className={css.cardForecast}>
        {/* <TodayForecast forecastResponse={forecastResponse} unit={unit} /> */}
      </div>
    </div>
  );
}

export default App;
