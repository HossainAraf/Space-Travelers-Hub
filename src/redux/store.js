import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
// import { useDispatch } from 'react-redux';
// import userReducer from './user/userSlice';
import rocketsReducer from './rocketsSlice';
// import missionsReducer from './missions/missionsSlice';

const reducer = combineReducers({
  // user: userReducer,
  rockets: rocketsReducer,
  // missions: missionsReducer,
});

const store = configureStore({
  reducer,
});

export default store;
