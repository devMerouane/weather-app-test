import axios from 'axios';

export const getWeather = async (city: string) => {
  const response = await axios.get(
    `${
      import.meta.env.VITE_OPEN_WEATHER_URL
    }/data/2.5/weather?q=${city}&appid=${
      import.meta.env.VITE_APP_ID
    }&units=metric`
  );

  return response.data;
};
