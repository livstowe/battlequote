/**
 * Copyright 2017-present, Chris Stowe.
 * All rights reserved.
 * 
 * Description: The main entry point of the website.
 *              Imports the main style and adds the routes.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes/Routes';
import './index.css';

ReactDOM.render(<Routes />, document.getElementById('root'));
