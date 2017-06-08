/**
 * Copyright 2017-present, Chris Stowe.
 * All rights reserved.
 * 
 * Description: The definition of the Home component.
 */

import React, { Component } from 'react';
import Loader from '../Loader/Loader';
import NavBar from '../NavBar/NavBar';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <h1 className="Title">Welcome</h1>
        <p>This project is currently underway.</p>
        <p>Please try the navigation bar above.</p>
        <Loader />
      </div>
    );
  }
}

export default Home;
