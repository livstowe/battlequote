/**
 * Copyright 2017-present, Chris Stowe.
 * All rights reserved.
 * 
 * Description: The definition of the Design component.
 */

import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import './Design.css';

class Design extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <h1 className="Title">Design</h1>
      </div>
    );
  }
}

export default Design;
