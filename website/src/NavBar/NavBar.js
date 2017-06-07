/**
 * Copyright 2017-present, Chris Stowe.
 * All rights reserved.
 * 
 * Description: The definition of the NavBar component.
 */

import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import './NavBar.css';

const NavBar = () => {
  // The NavBar highlights the currently active component.
  // This is done using the current URL.
  const path = window.location.pathname;

  return (
    <div>
      <div className="NavBar">
        <Logo />

        <ul className="NavBar-ul">
          <li className={'NavBar-li' + (path === '/' && ' active')}>
            <Link className="NavBar-Link" to="/">Home</Link>
          </li>
          <li className={'NavBar-li' + (path === '/about' && ' active')}>
            <Link className="NavBar-Link" to="/about">About</Link>
          </li>
          <li className={'NavBar-li' + (path === '/design' && ' active')}>
            <Link className="NavBar-Link" to="/design">Design</Link>
          </li>
          <li className={'NavBar-li' + (path === '/issues' && ' active')}>
            <Link className="NavBar-Link" to="/issues">Issues</Link>
          </li>
          <li className={'NavBar-li' + (path === '/contact' && ' active')}>
             <Link className="NavBar-Link" to="/contact">Contact</Link>
          </li>
          <li className={'NavBar-li' + (path === '/404' && ' active')}>
            <Link className="NavBar-Link" to="/404">404</Link>
          </li>
        </ul>

        {/*<a className="BuildStatus" href="https://travis-ci.org/chrisstowe/battlequote">
          <img src="https://travis-ci.org/chrisstowe/battlequote.svg?branch=master" />
        </a>*/}
      </div>

      {
        /* Since the NavBar sits on top, we need to ensure everything is properly offset. */  
      }
      <br />
      <br />
    </div>
  );
}

export default NavBar;
