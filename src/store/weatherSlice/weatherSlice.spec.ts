import { store } from '../store';
import { fetchWeather, initialState } from './weatherSlice';

describe('Weather slice tests', () => {
  it('Should set state to the initial version', () => {
    const state = store.getState();
    expect(state).toEqual(initialState);
  });

  it('Should fetch data without errors', () => {
    return store.dispatch(fetchWeather('Kyiv')).then(() => {
      const newState = store.getState();
      expect(newState.error).toBeFalsy();
    });
  });

  it('Should fetch proper city', () => {
    return store.dispatch(fetchWeather('Kyiv')).then(() => {
      const newState = store.getState();
      expect(newState.weather[0].name).toBe('Kyiv');
    });
  });

  it('Should contain temperature data', () => {
    return store.dispatch(fetchWeather('Kyiv')).then(() => {
      const newState = store.getState();
      expect(newState.weather[0].main.temp).toBeTruthy();
    });
  });
});
