import React from 'react';

/* import icon from '../../../../assets/01d.png'; */
import styles from './card.module.css';

type CardProps = {
  data: {
    city: string;
    description: string;
    temperature: number;
    feelsLike: number;
    wind: number;
    humidity: number;
    pressure: number;
    icon: string;
  };
};

const Card: React.FC<CardProps> = ({
  data: {
    city,
    description,
    temperature,
    feelsLike,
    wind,
    humidity,
    pressure,
    icon,
  },
}) => (
  <div className={styles.container}>
    <div className={styles.top}>
      <div>
        <h2 className={styles.city}>{city}</h2>
        <h3 className={styles.description}>{description}</h3>
      </div>
      <img
        alt="weather icon"
        className={styles.icon}
        src={`src/assets/${icon}.png`}
      />
    </div>
    <div className={styles.bottom}>
      <p className={styles.temperature}>{Math.round(temperature)}°C</p>
      <div className={styles.details}>
        <div className={styles.row}>
          <span className={styles.label}>Details</span>
        </div>
        <div className={styles.row}>
          <span className={styles.label}>Feels like</span>
          <span className={styles.value}>{feelsLike}C</span>
        </div>
        <div className={styles.row}>
          <span className={styles.label}>Wind</span>
          <span className={styles.value}>{wind}m/s</span>
        </div>
        <div className={styles.row}>
          <span className={styles.label}>Humidity</span>
          <span className={styles.value}>{humidity}%</span>
        </div>
        <div className={styles.row}>
          <span className={styles.label}>Pressure</span>
          <span className={styles.value}>{pressure}hPa</span>
        </div>
      </div>
    </div>
  </div>
);

export default Card;
