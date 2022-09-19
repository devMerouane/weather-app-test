import React from 'react';

import styles from './message.module.css';

type MessageProps = {
  message: string;
  type: 'error' | 'success';
};

const Message: React.FC<MessageProps> = ({ message, type }) => (
  <p className={`${type === 'error' && styles.error}`}>{message}</p>
);

export default Message;
