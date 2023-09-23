// IMPORTS
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import rocketsReducer from './rocketsSlice';
import missionsReducer from './missionsSlice';

const persistConfig = {
  key: 'root', // a unique identifier for the store
  storage, // the storage to use
  whitelist: ['missions', 'rockets'], // specify which reducers to persist
};

const rootReducer = combineReducers({
  rockets: persistReducer(persistConfig, rocketsReducer),
  missions: persistReducer(persistConfig, missionsReducer),
});

const store = configureStore({
  reducer: rootReducer,
});

// EXPORT
export const persistor = persistStore(store);

export default store;
