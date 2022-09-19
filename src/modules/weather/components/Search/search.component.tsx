import React from 'react';

import styles from './search.module.css';

type SearchProps = {
  value: string;
  onChange: (event: React.FormEvent<HTMLInputElement>) => void;
};

const Search: React.FC<SearchProps> = ({ value, onChange }) => (
  <input
    className={styles.input}
    placeholder="Enter the city"
    name="city"
    value={value}
    onChange={onChange}
  />
);

export default Search;
