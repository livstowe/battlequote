/**
 * Copyright 2017-present, Chris Stowe.
 * All rights reserved.
 */
import React, { Component } from 'react';
import './Logo.css';

class Logo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const title = "Battle Quote";

    return (
      <div className="Logo">
        <a href="/">
          <img className="Logo-img" src="https://storage.googleapis.com/battlequote/images/asteroid.png" alt={title}/>
        </a>
        <span className="Logo-text">{title}</span>
      </div>
    );
  }
}

export default Logo;
