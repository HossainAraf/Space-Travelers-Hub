import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getRockets, reserveRocket, cancelRocket } from '../redux/rocketsSlice';
import { ReserveRocketButton, CancelRocketButton } from './Button';
import '../styles/rockets.css';
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
return (
  <section>
    <h1>Rockets</h1>
    {renderRockets(HandleReserveRocket)}
  </section>
);
};
export default Rockets;