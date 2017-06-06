/**
 * Copyright 2017-present, Chris Stowe.
 * All rights reserved.
 * 
 * Description: The definition of the Logo component.
 */

import React from 'react';
import { Link } from 'react-router-dom';
import './Logo.css';

const Logo = () => (
  <Link to="/">
    <img
      className="Logo"
      src="https://storage.googleapis.com/battlequote/images/logo.png"
      alt="Battle Quote"
    />
  </Link>
);

export default Logo;
