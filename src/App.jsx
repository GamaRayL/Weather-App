import { useState, useEffect } from "react";
import { Window, Toggle, Search } from "components/";
import key from "config";
import css from "./App.module.scss";

function App() {
  const [unit, setUnit] = useState(true);
  const [city, setCity] = useState("Kiev");
  const [geonames, setGeonames] = useState();
  const [weatherDataFromApi, setWeatherDataFromApi] = useState("");
  const [valueOfCity, setValueOfCity] = useState("");
  const [correctCity, setCorrectCity] = useState("");
  const [error, setError] = useState("");

  const changeCity = (coordinates) => {
    setCity(coordinates.lat + "," + coordinates.lng);
    setCorrectCity(coordinates.name);
    setValueOfCity("");
  };

  const unitChanger = () => {
    setUnit(!unit);
  };

  useEffect(() => {
    async function getSetData() {
      const api = `http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${city}`;
      try {
        const response = await fetch(api);
        if (response.status >= 400 && response.status <= 599) {
          setError(response.status);
        } else {
          const data = await response.json();
          setWeatherDataFromApi(data);
        }
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
        <Window
          unit={unit}
          city={city}
          weatherDataFromApi={weatherDataFromApi}
          correctCity={correctCity}
          error={error}
        />
      </div>
      <div className={css.container}>
        <Toggle
          weatherDataFromApi={weatherDataFromApi}
          onClick={unitChanger}
          onChange={unitChanger}
          left={"°C"}
          right={"°F"}
        ></Toggle>
        <Search
          weatherDataFromApi={weatherDataFromApi}
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
