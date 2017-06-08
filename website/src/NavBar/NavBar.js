/**
 * Copyright 2017-present, Chris Stowe.
 * All rights reserved.
 * 
 * Description: The definition of the NavBar component.
 */

import React from 'react';
import Logo from '../Logo/Logo';
import NavBarItem from './NavBarItem';
import './NavBar.css';

const NavBar = () => (
  <div>
    <div className="NavBar">
      <Logo />

      <ul className="NavBarList">
        <NavBarItem path="/" name="Home" />
        <NavBarItem path="/about" name="About" />
        <NavBarItem path="/design" name="Design" />
        <NavBarItem path="/issues" name="Issues" />
        <NavBarItem path="/contact" name="Contact" />
        <NavBarItem path="/404" name="404" />
      </ul>
    </div>

    <br />
    <br />
  </div>
);

export default NavBar;
