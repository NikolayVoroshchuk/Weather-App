import {
  createSlice,
  createAsyncThunk,
  createAction,
  AnyAction,
} from '@reduxjs/toolkit';
import { useHttp } from '../../services/http.hook';
import { DELETE_WEATHER, LOCALSTORAGE_GET_WEATHER } from '../constants/weather';
import { IWeather } from '../../interfaces/IWeather';

export interface IState {
  weather: Array<IWeather>;
  isLoading: boolean;
  isLoadingCard: string;
  error: boolean;
}

export const initialState: IState = {
  weather: [],
  isLoading: false,
  isLoadingCard: '',
  error: false,
};

export const fetchWeather = createAsyncThunk(
  '@@weather/fetchWeather',
  (city: string) => {
    const { request } = useHttp();
    const url = `${process.env.REACT_APP_API_LINK}q=${city}&appid=${process.env.REACT_APP_API_KEY}`;
    return request(url);
  },
);
export const fetchWeatherHourly = createAsyncThunk(
  '@@weather/fetchWeatherHourly',
  (city: string) => {
    const { request } = useHttp();
    const url = `${process.env.REACT_APP_API_LINK_HOURLY}q=${city}&appid=${process.env.REACT_APP_API_KEY}`;
    return request(url);
  },
);

export const getLocalStorageWeather = createAction<string>(
  LOCALSTORAGE_GET_WEATHER,
);
export const removeWeather = createAction<string>(DELETE_WEATHER);

const weatherSlice = createSlice({
  name: '@@weather',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchWeather.pending, (state, action) => {
      state.isLoading = true;
      state.isLoadingCard = action.meta.arg;
    });
    builder.addCase(fetchWeather.fulfilled, (state, { payload }) => {
      const weatherNameArr = state.weather.map((item) => item.name);
      if (!weatherNameArr.includes(payload.name)) {
        state.weather = [...state.weather, payload];
      } else {
        const idx = weatherNameArr.findIndex((item) => item === payload.name);
        state.weather.splice(idx, 1, payload);
      }
      localStorage.setItem('weather', JSON.stringify(state.weather));
      state.isLoading = false;
      state.isLoadingCard = '';
      state.error = false;
    });
    builder.addCase(fetchWeather.rejected, (state, action) => {
      state.isLoading = false;
      state.weather = [];
      state.error = true || action?.payload;
    });
    builder.addCase(fetchWeatherHourly.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchWeatherHourly.fulfilled, (state, action) => {
      state.weather = action?.payload;
      state.isLoading = false;
      state.error = false;
    });
    builder.addCase(fetchWeatherHourly.rejected, (state, action) => {
      state.isLoading = false;
      state.weather = [];
      state.error = true || action?.payload;
    });
    builder.addCase(LOCALSTORAGE_GET_WEATHER, (state, action: AnyAction) => {
      state.weather = action.payload;
    });
    builder.addCase(DELETE_WEATHER, (state, action: AnyAction) => {
      state.weather = state.weather.filter(
        (item) => item.name !== action.payload,
      );
      localStorage.setItem('weather', JSON.stringify(state.weather));
    });
  },
});

export default weatherSlice.reducer;
