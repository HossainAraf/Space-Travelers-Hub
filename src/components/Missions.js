import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Table } from 'react-bootstrap';
import { getMissions, joinMission, leaveMission } from '../redux/missionsSlice';
import '../styles/missions.css';
import { Button, Container, Row, Col } from 'react-bootstrap';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions.missions);

  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);

  const handleJoinMission = (id, joined) => {
    if (joined) {
      dispatch(leaveMission(id));
    } else {
      dispatch(joinMission(id));
    }
  };

  const renderMissions = () => {
    if (missions.length === 0) {
      return <p>Loading missions...</p>;
    }

    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Mission</th>
            <th className="mission-description">Description</th>
            <th>Status</th>
            <th className="blank">&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <tr key={mission.id}>
              <td>{mission.name}</td>
              <td className="mission-description">{mission.description}</td>
              <td className="align-middle">{mission.joined ? 'Joined' : 'Not a member'}</td>
              <td className="align-middle">
                <Button variant="light" type="button" onClick={() => handleJoinMission(mission.id, mission.joined)}>
                  {mission.joined ? 'Leave Mission' : 'Join Mission'}
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  };

  return (
    <section>
      {renderMissions()}
    </section>
  );
};

export default Missions;
