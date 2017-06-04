/**
 * Copyright 2017-present, Chris Stowe.
 * All rights reserved.
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './NavBar.css';

class NavBar extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/404">404</Link></li>
        </ul>
      </div>
    );
  }
}

export default NavBar;
