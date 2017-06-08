/**
 * Copyright 2017-present, Chris Stowe.
 * All rights reserved.
 * 
 * Description: The definition of the About component.
 */

import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import README_md from '../../../README.md'
import './About.css';

class About extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="Markdown" dangerouslySetInnerHTML={{ __html: README_md }} />
      </div>
    );
  }
}

export default About;
