import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';

import styles from './app.module.css';
import WeatherPage from './pages';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <div className={styles.app}>
      <Routes>
        <Route path="/" element={<WeatherPage />} />
      </Routes>
    </div>
  </QueryClientProvider>
);

export default App;
