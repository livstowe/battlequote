/**
 * Copyright 2017-present, Chris Stowe.
 * All rights reserved.
 * 
 * Description: The definition of the NavBar component.
 */

import React, { Component } from 'react';
import Logo from '../Logo/Logo';
import NavBarItem from './NavBarItem';
import './NavBar.css';

// Used to offset the NavBar location when jumping to an anchor.
window.addEventListener('hashchange', () => { window.scrollBy(0, -50); } );

/**
 * The main navigation menu for the website.
 */
class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { isExpanded: false };
    
    this.handleExpandIconClicked = this.handleExpandIconClicked.bind(this);
  }

  /**
   * Toggles the expanded state of the NavBar menu.
   */
  handleExpandIconClicked() {
    this.setState(prevState => ({
      isExpanded: !prevState.isExpanded
    }));
  }

  render() {
    let navBarClassName = 'NavBar';
    if (this.state.isExpanded) {
      navBarClassName += ' Expanded';
    }

    return (
      <div className={navBarClassName}>
        <Logo />
        <div className="NavBarExpandIcon" onClick={this.handleExpandIconClicked}>&#9776;</div>
        <NavBarItem path="/" name="Home" />
        <NavBarItem path="/about" name="About" />
        <NavBarItem path="/design" name="Design" />
        <NavBarItem path="/issues" name="Issues" />
        <NavBarItem path="/contact" name="Contact" />
        <NavBarItem path="/404" name="404" />
      </div>
    );
  }
}

export default NavBar;
