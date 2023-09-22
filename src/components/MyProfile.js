import React from 'react';
import { useSelector } from 'react-redux';

// RENDER MISSIONS DATA
function Missions() {
  const missions = useSelector((state) => state.missions.missions);
  console.log('MyProfile:', missions);
  console.log('Missions:', missions);

  return (
    <div>
      <ul>
        {missions.filter((mission) => mission.joined === true).map((mission) => (
          <li key={mission.id}>
            <h3>{mission.name}</h3>
            <p>{mission.description}</p>
          </li>
        ))}
        <li>HI</li>
      </ul>
    </div>
  );
}

// RENDER ROCKET DATA
function Rockets() {
  const rockets = useSelector((state) => state.rockets.rockets);
  console.log('Rockets:', rockets);

  return (
    <div>
      <ul>
        {
        rockets.filter((rocket) => rocket.reserved === true).map((rocket) => (
          <li key={rocket.id}>
            <h3>{rocket.name}</h3>
            <p>{rocket.description}</p>
          </li>
        ))
        }
      </ul>
    </div>
  );
}

// // Prop validation for MyProfile component
// MyProfile.propTypes = {
//   missions: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     name: PropTypes.string.isRequired,
//     description: PropTypes.string.isRequired,
//     joined: PropTypes.bool.isRequired,
//   })).isRequired,
// };

const MyProfile = () => (
  <div>
    <h1>My Profile</h1>
    <h2>My Joined Missions</h2>
    <Missions />
    <Rockets />
  </div>
);
export default MyProfile;
