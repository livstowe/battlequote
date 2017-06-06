/**
 * Copyright 2017-present, Chris Stowe.
 * All rights reserved.
 * 
 * Description: The definition of the About component.
 */

import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import './About.css';

class About extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <h1 className="Title">Simulated Sales Application</h1>
        <p>This is a simulated sales application.</p>
      </div>
    );
  }
}

export default About;
