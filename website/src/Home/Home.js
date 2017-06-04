/**
 * Copyright 2017-present, Chris Stowe.
 * All rights reserved.
 */
import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar'
import './Home.css';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const title = "Home";

    return (
      <div>
        <NavBar />
        <div className="Home">
          <h1 className="Home-text">{title}</h1>
        </div>
      </div>
    );
  }
}

export default Home;
