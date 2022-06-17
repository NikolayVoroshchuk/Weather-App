import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../store/store';
import {
  fetchWeather,
  getLocalStorageWeather,
  removeWeather,
} from '../store/weatherSlice/weatherSlice';

export const useWeather = () => {
  const dispatch: AppDispatch = useDispatch();
  const state: any = useSelector((state) => state);
  useEffect(() => {
    const weather = localStorage.getItem('weather');
    const parsedWeather = weather && JSON.parse(weather);

    if (!parsedWeather) {
      dispatch(fetchWeather('Kyiv'));
    } else {
      dispatch(getLocalStorageWeather(parsedWeather));
    }
    // eslint-disable-next-line
  }, []);

  const { weather } = state;
  const updateOrAddWeather = (city: string) => dispatch(fetchWeather(city));
  const deleteWeather = (city: string) => dispatch(removeWeather(city));

  return {
    state,
    weather,
    updateOrAddWeather,
    deleteWeather
  };
};
