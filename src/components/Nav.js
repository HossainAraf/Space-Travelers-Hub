import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/nav.css';

const Nav = () => (
  <nav id="navbar">
    <ul>
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
  </nav>
);

export default Nav;
