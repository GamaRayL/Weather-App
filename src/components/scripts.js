export const showWind = (wind) => {
  const wind0 = "./images/weatherIcons/wind/wind0.svg";
  const wind1 = "./images/weatherIcons/wind/wind1.svg";
  const wind2 = "./images/weatherIcons/wind/wind2.svg";
  const wind3 = "./images/weatherIcons/wind/wind3.svg";
  const wind4 = "./images/weatherIcons/wind/wind4.svg";
  const wind5 = "./images/weatherIcons/wind/wind5.svg";
  const wind6 = "./images/weatherIcons/wind/wind6.svg";
  const wind7 = "./images/weatherIcons/wind/wind7.svg";
  const wind8 = "./images/weatherIcons/wind/wind8.svg";
  const wind9 = "./images/weatherIcons/wind/wind9.svg";
  const wind10 = "./images/weatherIcons/wind/wind10.svg";
  const wind11 = "./images/weatherIcons/wind/wind11.svg";
  const wind12 = "./images/weatherIcons/wind/wind12.svg";

  if (wind === 0) {
    return wind0;
  } else if (wind > 1 && wind <= 3) {
    return wind1;
  } else if (wind >= 4 && wind <= 7) {
    return wind2;
  } else if (wind >= 8 && wind <= 12) {
    return wind3;
  } else if (wind >= 13 && wind <= 18) {
    return wind4;
  } else if (wind >= 19 && wind <= 24) {
    return wind5;
  } else if (wind >= 25 && wind <= 31) {
    return wind6;
  } else if (wind >= 32 && wind <= 38) {
    return wind7;
  } else if (wind >= 39 && wind <= 46) {
    return wind8;
  } else if (wind >= 47 && wind <= 54) {
    return wind9;
  } else if (wind >= 55 && wind <= 63) {
    return wind10;
  } else if (wind >= 64 && wind <= 75) {
    return wind11;
  } else if (wind >= 75) {
    return wind12;
  } else {
    return null;
  }
};

export const showUv = (uvIndex) => {
  const uv = "./images/weatherIcons/uvIndex/uv.svg";
  const uv1 = "./images/weatherIcons/uvIndex/uv1.svg";
  const uv2 = "./images/weatherIcons/uvIndex/uv2.svg";
  const uv3 = "./images/weatherIcons/uvIndex/uv3.svg";
  const uv4 = "./images/weatherIcons/uvIndex/uv4.svg";
  const uv5 = "./images/weatherIcons/uvIndex/uv5.svg";
  const uv6 = "./images/weatherIcons/uvIndex/uv6.svg";
  const uv7 = "./images/weatherIcons/uvIndex/uv7.svg";
  const uv8 = "./images/weatherIcons/uvIndex/uv8.svg";
  const uv9 = "./images/weatherIcons/uvIndex/uv9.svg";
  const uv10 = "./images/weatherIcons/uvIndex/uv10.svg";
  const uv11 = "./images/weatherIcons/uvIndex/uv11.svg";

  if (uvIndex === 0) {
    return uv;
  } else if (uvIndex === 1) {
    return uv1;
  } else if (uvIndex === 2) {
    return uv2;
  } else if (uvIndex === 3) {
    return uv3;
  } else if (uvIndex === 4) {
    return uv4;
  } else if (uvIndex === 5) {
    return uv5;
  } else if (uvIndex === 6) {
    return uv6;
  } else if (uvIndex === 7) {
    return uv7;
  } else if (uvIndex === 8) {
    return uv8;
  } else if (uvIndex === 9) {
    return uv9;
  } else if (uvIndex === 10) {
    return uv10;
  } else if (uvIndex === 11) {
    return uv11;
  } else {
    return null;
  }
};
