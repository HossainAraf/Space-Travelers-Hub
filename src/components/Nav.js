import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import '../styles/nav.css';
import icon from '../Assets/planet.png';

const Nav = () => (
  <nav id="navbar">
    <Container>
      <Row className="nav">
        <img src={icon} alt="icon" id="icon" />
        <h1> Space Travelers&apos; Hub</h1>
        <ul className="menu">
          <li>
            <NavLink to="/" exact activeClassName="active">
              Rockets
            </NavLink>
          </li>
          <li>
            <NavLink to="/missions" activeClassName="active">
              Missions
            </NavLink>
          </li>
          <li>
            <NavLink to="/myprofile" activeClassName="active">
              My Profile
            </NavLink>
          </li>
        </ul>
      </Row>
      <hr />
    </Container>
  </nav>
);

export default Nav;
