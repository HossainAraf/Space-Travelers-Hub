// IMPORTS
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMissions } from '../redux/missionsSlice';

// GET MISSIONS DATA FROM REDUX STORE
const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions.missions);

  //  console.log('Missions:', missions);

  // FETCH MISSIONS DATA ON PAGE LOAD
  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);

  // SHOW LOADING, ERROR, OR MISSIONS DATA
  const renderMissions = () => {
    if (missions.length === 0) {
      return <p>Loading missions...</p>;
    }

    return missions.map((mission) => (
      <div key={mission.id}>
        <h2>{mission.name}</h2>
        <p>{mission.description}</p>
      </div>
    ));
  };

  return (
    <section>
      <h1>Missions</h1>
      {renderMissions()}
    </section>
  );
};

// EXPORT
export default Missions;
