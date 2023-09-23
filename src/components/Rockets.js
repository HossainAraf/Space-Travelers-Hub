import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getRockets, reserveRocket, cancelRocket } from '../redux/rocketsSlice';
import '../styles/rockets.css';
import { Button, Container, Row, Col } from 'react-bootstrap';

// GET ROCKETS DATA FROM REDUX STORE
const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets.rockets); 

  // FETCH ROCKETS DATA ON PAGE LOAD
  useEffect(() => {
    dispatch(getRockets());
  }, [dispatch]);

  // HANDLE RESERVE/CANCEL ROCKET
  const handleReserveRocket = (id, reserved) => {
    if (reserved) {
      dispatch(cancelRocket(id));
    } else {
      dispatch(reserveRocket(id));
    }
  };

  // SHOW LOADING, ERROR, OR ROCKETS DATA
  const renderRockets = () => {
    if (rockets.length === 0) {
      return <p>Loading rockets...</p>;
    }

    return rockets.map((rocket) => (
      <Container className="container-rocket" key={rocket.id}>
        <Row>
        <div className="img-rocket">
          <img src={rocket.image} alt={rocket.image} />
        </div>
        <Col>
        <h2>{rocket.name}</h2>
        <p>{rocket.description}</p>
        {rocket.reserved ? (
          <p>Reserved</p>
        ) : null}       
        <button type="button" onClick={() => handleReserveRocket(rocket.id, rocket.reserved)}>
          {rocket.reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
        </button>
        </Col>
        </Row>
      </Container>
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
