import { useDispatch, useSelector } from 'react-redux';
import { getRockets } from '../redux/rocketsSlice';

// GET ROCKETS DATA FROM REDUX STORE
const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets.rockets); // Use the correct slice name
  // console.log('Rockets:', rockets);
