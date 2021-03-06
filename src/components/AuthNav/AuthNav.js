import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './AuthNav.module.css';

const AuthNav = () => (
  <div>
    <NavLink
      to="/register"
      className={styles.link}
      activeClassName={styles.activeLink}
      exact
    >
      Sign Up
    </NavLink>
    <NavLink
      to="/login"
      exact
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      Sign In
    </NavLink>
  </div>
);

export default AuthNav;
