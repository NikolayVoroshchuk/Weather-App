import { configureStore, combineReducers } from '@reduxjs/toolkit';
import weatherReducer from './weatherSlice/weatherSlice';

const rootReducer = combineReducers({});

export const store = configureStore({
  reducer: weatherReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
