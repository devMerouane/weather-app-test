import React from 'react';
import { QueryObserverResult } from 'react-query';
import { AxiosResponse } from 'axios';

import styles from './button.module.css';

type ButtonProps = {
  onClick: () => Promise<QueryObserverResult<AxiosResponse<any, any>, unknown>>;
  disable: boolean;
};

const Button: React.FC<ButtonProps> = ({ onClick, disable }) => (
  <button
    className={styles.button}
    type="button"
    onClick={onClick}
    disabled={disable}
  >
    Get weather
  </button>
);

export default Button;
