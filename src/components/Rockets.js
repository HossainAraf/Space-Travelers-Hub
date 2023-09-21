import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getRockets, reserveRocket, cancelRocket } from '../redux/rocketsSlice';
import { ReserveRocketButton, CancelRocketButton } from './Button';
import '../styles/rockets.css';

// GET ROCKETS DATA FROM REDUX STORE
const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets.rockets);
  console.log('Rockets:', rockets);

  // FETCH ROCKETS DATA ON PAGE LOAD
  useEffect(() => {
    dispatch(getRockets());
  }, [dispatch]);

  // RESERVE/CANCEL RESERVATION OF ROCKETS
  const HandleReserveRocket = (id, reserved) => {
    if (reserved) {
      dispatch(cancelRocket(id));
    } else {
      dispatch(reserveRocket(id));
    }
    console.log('HandleReserveRocket:', id, reserved);
  };