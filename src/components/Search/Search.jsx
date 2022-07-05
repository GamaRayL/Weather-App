import css from "./Search.module.css";

export const Search = ({
  geonames,
  getGeonamesArray,
  setValueOfCity,
  valueOfCity,
  changeCity,
}) => {
  return (
    <div className={css.container}>
      <form className={css.search} onSubmit={changeCity} method="get">
        <input
          value={valueOfCity}
          className={css.input}
          onChange={(e) => {
            getGeonamesArray(e.target.value);
            setValueOfCity(e.target.value);
          }}
          placeholder="Введите город"
          type="text"
        />
        <button className={css.button} onClick={changeCity}></button>
      </form>
      <div className={css.boxLocation}>
        {geonames === undefined || null ? (
          <p>Enter the city</p>
        ) : (
          geonames.geonames.map((i) => (
            <div className={css.cardLoaction} key={i.geonameId}>
              <div className={css.box}>
                <span className={css.city}>{i.name}</span>
                <span className={css.countryCode}>({i.countryCode})</span>
                <span className={css.countryName}>{i.countryName}</span>
              </div>
              <div className={css.box}>
                <span className={css.latitude}>latitude: {i.lat}</span>
                <span className={css.longitude}>longitude: {i.lng}</span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
