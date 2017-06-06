/**
 * Copyright 2017-present, Chris Stowe.
 * All rights reserved.
 * 
 * Description: The definition of the Logo component.
 */

import React from 'react';
import './Logo.css';

const Logo = () => (
  <a href="/">
    <img
      className="Logo"
      src="https://storage.googleapis.com/battlequote/images/logo.png"
      alt="Battle Quote"
    />
  </a>
);

export default Logo;
