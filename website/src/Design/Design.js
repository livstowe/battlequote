/**
 * Copyright 2017-present, Chris Stowe.
 * All rights reserved.
 * 
 * Description: The definition of the Design component.
 */

import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import Design_md from '../../docs/Design.md';
import './Design.css';

class Design extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="Markdown" dangerouslySetInnerHTML={{ __html: Design_md }} />
      </div>
    );
  }
}

export default Design;
