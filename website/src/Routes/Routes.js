/**
 * Copyright 2017-present, Chris Stowe.
 * All rights reserved.
 * 
 * Description: Defines all the routes for the website.
 */
'use strict';

import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  browserHistory,
  Switch
} from 'react-router-dom'

import Home from '../Home/Home';
import Contact from '../Contact/Contact';
import NotFound from '../NotFound/NotFound';

const Routes = () => (
  <Router history={browserHistory}>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/contact" component={Contact}/>

      {/* If all other routes fail. */}
      <Route path="*" component={NotFound}/>
    </Switch>
  </Router>
)

export default Routes;
