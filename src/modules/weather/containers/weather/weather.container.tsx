import React, { useState } from 'react';

import styles from './weather.module.css';
import { Search, Button, Card, Message, Loader } from '../../components';
import { useFetchCity } from '../../hooks/useFetchCity';

const WeatherContainer = () => {
  const [city, setCity] = useState('');
  const disable = city.length === 0;

  const { isLoading, data, refetch, error, isFetching } = useFetchCity(city);
  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setCity(event.currentTarget.value);
  };

  return (
    <>
      <div className={styles.search_container}>
        <Search value={city} onChange={handleChange} />
        <Button onClick={refetch} disable={disable} />
      </div>
      {error && (
        <div className={styles.error_container}>
          <Message type="error" message={error.response.data.message} />
        </div>
      )}
      <div className={styles.display_container}>
        {isLoading && isFetching ? (
          <Loader />
        ) : (
          data &&
          !error && (
            <Card
              data={{
                city: data.name,
                description: data.weather[0].description,
                temperature: data.main.temp,
                feelsLike: data.main.feels_like,
                wind: data.wind.speed,
                humidity: data.main.humidity,
                pressure: data.main.pressure,
                icon: data.weather[0].icon,
              }}
            />
          )
        )}
      </div>
    </>
  );
};

export default WeatherContainer;
