import classNames from 'classnames';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import { GITHUB } from '../../variables';
import './Navbar.scss';

export const Navbar = React.memo(
  () => {
    return (
      <header className="header header__dimensions">
        <div className="header__right-box">
          <NavLink
            to="/"
            className={({ isActive }) => classNames(
              'header__box-item',
              { 'header__box-item--active': isActive },
            )}
          >
            <p>HOME PAGE</p>
          </NavLink>
          <NavLink
            to="/test-page-not-found"
            className={({ isActive }) => classNames(
              'header__box-item',
              { 'header__box-item--active': isActive },
            )}
          >
            <p>TEST PAGE</p>
          </NavLink>
        </div>
        <div className="header__left-box">
          <p className="header__box-item">
            test-task for terrasoft
          </p>
          <Link
            to={GITHUB}
            className="header__box-item"
            rel="noreferrer"
            target="_blank"
          >
            Link to my GITHUB
          </Link>
        </div>
      </header>
    );
  },
);
