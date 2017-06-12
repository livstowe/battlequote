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
        <h1 className="BlueGlow CenterText">Welcome</h1>
        <p style={{ textAlign: "center" }}>
          Status:&nbsp;
          <span className="BlueGlow">in progress</span>.
          <br />
          <br />
          Click the links or the &nbsp; 
          <span className="BlueGlow">&#9776;</span>.
        </p>
        <Loader />
      </div>
    );
  }
}

export default Home;
