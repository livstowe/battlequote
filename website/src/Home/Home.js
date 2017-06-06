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
        <h1 className="Title">Coming Soon</h1>
        <p>Please click the other Links.</p>
        <Loader />
        <p>Prepare yourself...</p>
      </div>
    );
  }
}

export default Home;
