import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getRockets } from '../redux/rocketsSlice';
// import '../styles/Rockets.css';

// GET ROCKETS DATA FROM REDUX STORE
const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets.rockets);
  // console.log('Rockets:', rockets);

  // FETCH ROCKETS DATA ON PAGE LOAD
  useEffect(() => {
    dispatch(getRockets());
  }, [dispatch]);

  // SHOW LOADING, ERROR, OR ROCKETS DATA
  const renderRockets = () => {
    if (rockets.length === 0) {
      return <p>Loading rockets...</p>;
    }

    return rockets.map((rocket) => (
      <div className="container-rocket" key={rocket.id}>
        <h2>{rocket.name}</h2>
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
      {renderRockets()}
    </section>
  );
};

export default Rockets;
