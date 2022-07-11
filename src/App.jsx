import { useState, useEffect } from "react";
import { Window, Toggle, Search } from "components/";
import array from "store/weather.json";
import key from "config";
import css from "./App.module.scss";

function App() {
  const [unit, setUnit] = useState(true);
  const [city, setCity] = useState("Kiev");
  const [geonames, setGeonames] = useState();
  const [weatherDataFromApi, setWeatherDataFromApi] = useState(false);
  const [valueOfCity, setValueOfCity] = useState("");
  const [correctCity, setCorrectCity] = useState("");
  const [error, setError] = useState("");

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

  const changeCity = (coordinates) => {
    setCity(coordinates.lat + "," + coordinates.lng);
    setCorrectCity(coordinates.name);
    setValueOfCity("");
  };

  const unitChanger = () => {
    setUnit(!unit);
  };

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

  if (!weatherDataFromApi) {
    return <div className={css.error}>{error}</div>;
  }
  const date = new Date(weatherDataFromApi.location.localtime).toLocaleString(
    "en",
    {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );
  const currentHours = new Date(
    weatherDataFromApi.location.localtime
  ).getHours();
  const codeCurrentReceived = weatherDataFromApi.current.condition.code;
  const forecastDayReceivedArray =
    weatherDataFromApi.forecast.forecastday[0].hour.map((item) => item);
  const weatherItemsArrayByHour = forecastDayReceivedArray.filter(
    (item) => new Date(item.time).getHours() > currentHours
  );

  const weatherItem = array.filter((item) => item.code === codeCurrentReceived);

  const showCurrentWeatherIcon = () => {
    if (currentHours >= 21 && currentHours <= 6) {
      return weatherItem[0].night;
    } else {
      return weatherItem[0].day;
    }
  };

  const showForWholeDayWeatherIcon = (item) => {
    const weatherItem = array.filter((el) => el.code === item.condition.code);
    const hour = new Date(item.time).getHours();
    if (hour >= 21 || hour <= 6) return weatherItem[0].night;
    else return weatherItem[0].day;
  };

  return (
    <div className={css.app}>
      <div className={css.container}>
        <Window
          unit={unit}
          correctCity={correctCity}
          current={weatherDataFromApi.current}
          forecastDay={weatherDataFromApi.forecast.forecastday[0]}
          location={weatherDataFromApi.location}
          date={date}
          showCurrentWeatherIcon={showCurrentWeatherIcon}
          showForWholeDayWeatherIcon={showForWholeDayWeatherIcon}
          weatherItemsArrayByHour={weatherItemsArrayByHour}
        />
      </div>
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
