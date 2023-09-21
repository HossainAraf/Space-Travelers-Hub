to  Everyone
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

MD ARAFAT HOSSAIN  to  Everyone 12:49 PM
// SHOW LOADING, ERROR, OR ROCKETS DATA
  const renderRockets = () => {
    if (rockets.length === 0) {
      return <p>Loading rockets...</p>;
    }

    return rockets.map((rocket) => (
      <div className="container-rocket" key={rocket.id}>
        <h2>{rocket.name}</h2>
        <h3>{rocket.reserved ? 'Reserved' : ''}</h3>
        <div className="btn-rocket">
          {rocket.reserved ? (
            <CancelRocketButton
              onClick={() => HandleReserveRocket(rocket.id, rocket.reserved)}
            >
              Cancel
            </CancelRocketButton>
          ) : (
            <ReserveRocketButton
              onClick={() => HandleReserveRocket(rocket.id, rocket.reserved)}
            >
              Reserve
            </ReserveRocketButton>
          )}
        </div>
        <p>{rocket.description}</p>
        <div className="img-rocket">
          <img src={rocket.image} alt={rocket.image} />
        </div>
      </div>
    ));
  };

MD ARAFAT HOSSAIN  to  Everyone 12:50 PM
return (
    <section>
      <h1>Rockets</h1>
      {renderRockets(HandleReserveRocket)}
    </section>
  );
};

export default Rockets;
// IMPORTS
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// API
const APIurl = 'https://api.spacexdata.com/v4/rockets';

// ASYNC ACTIONS
const getRockets = createAsyncThunk('rockets/getRockets', async () => {
  const response = await fetch(APIurl);
  if (!response.ok) {
    throw new Error('The server is not responding.');
  }
  const data = await response.json();
  return data;
});


const RESERVE_ROCKET = 'rockets/reserveRocket';

// ACTION CREATORS
const reserveRocket = (id) => ({
  type: RESERVE_ROCKET,
  payload: id,
});

// ACTION TYPES
const CANCEL_ROCKET = 'rockets/cancelRocket';

// ACTION CREATORS
const cancelRocket = (id) => ({
  type: CANCEL_ROCKET,
  payload: id,
});