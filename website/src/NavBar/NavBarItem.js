/**
 * Copyright 2017-present, Chris Stowe.
 * All rights reserved.
 * 
 * Description: The definition of the NavBarItem component.
 */

import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBarItem = (props) => {
  // The currently active NavBarItem should be highlighted.
  // This is done using the current URL and the NavBarActive class name.
  const currentPath = window.location.pathname;
  let className = 'NavBarItem';
  if (props.path === currentPath) {
    className += ' Active';
  }

  return (
    <Link className={className} to={props.path}>{props.name}</Link>
  );
};

export default NavBarItem;
