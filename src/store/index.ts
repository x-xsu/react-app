import { combineReducers, configureStore } from '@reduxjs/toolkit';
import productReducer from './slices/ProductSlice';

const rootReducer = combineReducers({
  product: productReducer,
});

export function setupStore() {
  return configureStore({
    reducer: rootReducer,
  });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
