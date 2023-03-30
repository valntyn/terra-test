/* eslint-disable max-len */
import classNames from 'classnames';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import styles from './Navbar.module.scss';
import { GITHUB } from '../../variables';

export const Navbar = React.memo(
  () => {
    return (
      <header className={styles.navbar}>
        <div className="flex items-center h-full;">
          <NavLink
            to="/"
            className={({ isActive }) => classNames(
              styles.boxItem,
              { 'text-[#3e3d42] after:content-[""] after:absolute after:bottom-[-3px] after:w-full after:h-1 after:bg-[#3e3d42] after:rounded after:inset-x-0': isActive },
            )}
          >
            <p>HOME PAGE</p>
          </NavLink>
          <NavLink
            to="/test-page-not-found"
            className={({ isActive }) => classNames(
              styles.boxItem,
              { 'text-[#3e3d42] after:content-[""] after:absolute after:bottom-[-3px] after:w-full after:h-1 after:bg-[#3e3d42] after:rounded after:inset-x-0': isActive },
            )}
          >
            <p>TEST PAGE</p>
          </NavLink>
        </div>
        <div className={styles.leftBox}>
          <p className={styles.boxItem}>
            test-task for terrasoft
          </p>
          <Link
            to={GITHUB}
            className={styles.boxItem}
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
