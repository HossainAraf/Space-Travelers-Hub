// IMPORTS
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMissions, joinMission, leaveMission } from '../redux/missionsSlice';
// import '../styles/missions.css';

// GET MISSIONS DATA FROM REDUX STORE
const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions.missions);
  //  console.log('Missions:', missions);

  // FETCH MISSIONS DATA ON PAGE LOAD
  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);

  // HANDLE JOIN/LEAVE MISSION
  const handleJoinMission = (id, joined) => {
    if (joined) {
      dispatch(leaveMission(id));
    } else {
      dispatch(joinMission(id));
    }
  };

  // SHOW LOADING, ERROR, OR MISSIONS DATA
  const renderMissions = () => {
    if (missions.length === 0) {
      return <p>Loading missions...</p>;
    }

    return missions.map((mission) => (
      <div className="container-missions" key={mission.id}>
        <h2>{mission.name}</h2>
        <p>{mission.description}</p>
        {mission.joined ? (
          <p>Joined</p>
        ) : <p>Not a member</p>}
        <button type="button" onClick={() => handleJoinMission(mission.id, mission.joined)}>
          {mission.joined ? 'Leave Mission' : 'Join Mission'}
        </button>
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
