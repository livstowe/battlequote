/**
 * Copyright 2017-present, Chris Stowe.
 * All rights reserved.
 * 
 * Description: The definition of the NotFound component.
 */

import React from 'react';
import NavBar from '../NavBar/NavBar'
import './NotFound.css';

const NotFound = () => (
  <div>
    <NavBar />
    <h1 className="Title">404 - This is not the web page you are looking for.</h1>
    <img 
      className="Center"
      src="https://storage.googleapis.com/battlequote/images/kenobi.png"
      alt="Not Found"
    />
  </div>
);

export default NotFound;
