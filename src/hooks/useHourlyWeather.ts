import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { AppDispatch } from '../store/store';
import { fetchWeatherHourly } from '../store/weatherSlice/weatherSlice';
import { IHourlyWeather } from '../interfaces/IWeather';

export const useHourlyWeather = () => {
  const dispatch: AppDispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const weather = useSelector(({ weather }: IHourlyWeather) => weather);
  const selectedCity = searchParams.get('city');

  useEffect(() => {
    if (selectedCity) {
      dispatch(fetchWeatherHourly(selectedCity));
    }
    // eslint-disable-next-line
  }, []);

  return { weather };
};
