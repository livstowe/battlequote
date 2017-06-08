/**
 * Copyright 2017-present, Chris Stowe.
 * All rights reserved.
 * 
 * Description: The definition of the Loader component.
 */

import React from 'react';
import './Loader.css';

const Loader = () => (
    <img
      className="Center"
      src="https://storage.googleapis.com/battlequote/images/spinning-rock.gif"
      alt="Loading"
    />
);

export default Loader;
