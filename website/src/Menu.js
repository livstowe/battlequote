/**
 * Copyright 2017-present, Chris Stowe.
 * All rights reserved.
 */
import React, { Component } from 'react';

function getMenuOptions() {
    const menuOptions = ['Info', 'Buy', 'Contact'];
    return menuOptions.map(item => <li>{item}</li>);
}

class Menu extends Component {
  render() {
    return (
      <div>
        <l1>{getMenuOptions()}</l1>
      </div>
    );
  }
}

export default Menu;
