// IMPORTS
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMissions } from '../redux/missionsSlice';

// GET MISSIONS DATA FROM REDUX STORE
const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions.missions);
  console.log('Missions:', missions);

  // FETCH MISSIONS DATA ON PAGE LOAD
  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);
  