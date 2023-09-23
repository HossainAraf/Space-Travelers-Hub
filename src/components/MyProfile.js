// IMPORTS
import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Col, Row } from 'react-bootstrap';
import '../styles/myprofile.css';

// RENDER MISSIONS DATA
function Missions() {
  const missions = useSelector((state) => state.missions.missions);

  return (
    <Container className="container-list">
      <Col>
        <h2>My Missions</h2>
        <ul className="list">
          {missions.filter((mission) => mission.joined === true).map((mission) => (
            <li key={mission.id}>
              <h3>{mission.name}</h3>
            </li>
          ))}
        </ul>
      </Col>
    </Container>
  );
}

// RENDER ROCKET DATA
function Rockets() {
  const rockets = useSelector((state) => state.rockets.rockets);

  return (
    <Container className="container-list">
      <Col>
        <h2>My Rockets</h2>
        <ul className="list">
          {
          rockets.filter((rocket) => rocket.reserved === true).map((rocket) => (
            <li key={rocket.id}>
              <h3>{rocket.name}</h3>
            </li>
          ))
          }
        </ul>
      </Col>
    </Container>
  );
}

const MyProfile = () => (
  <Container>
    <Col className="container-profile">
      <hr />
      <h1>My Profile</h1>
      <Row className="wrapper">
        <Missions />
        <Rockets />
      </Row>
    </Col>
  </Container>
);
export default MyProfile;
