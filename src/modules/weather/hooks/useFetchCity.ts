import { useQuery } from 'react-query';

import { getWeather } from '../api';

export const useFetchCity = (city: string) => {
  const handleFetch = async () => {
    const data = await getWeather(city);

    return data;
  };

  const { isLoading, data, refetch, error, isFetching } = useQuery<any, any>(
    city,
    handleFetch,
    {
      enabled: false,
      retry: false,
    }
  );

  return { isLoading, data, refetch, error, isFetching };
};
