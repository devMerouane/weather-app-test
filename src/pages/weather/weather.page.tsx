import React from 'react';

import styles from './weather.module.css';
import { WeatherContainer } from '../../modules/weather';

const WeatherPage = () => (
  <div className={styles.container}>
    <WeatherContainer />
  </div>
);

export default WeatherPage;
