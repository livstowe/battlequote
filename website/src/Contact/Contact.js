/**
 * Copyright 2017-present, Chris Stowe.
 * All rights reserved.
 * 
 * Description: The definition of the Contact component.
 */

import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import './Contact.css';

class Contact extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <h1 className="Title">Ready to chat?</h1>
        <h2>Chris Stowe</h2>
        <table>
          <tr className="Contact-Row">
            <td className="Contact-Type">Email:</td>
            <td className="Contact-Value">chstowe@gmail.com</td>
          </tr>
          <tr className="Contact-Row">
            <td className="Contact-Type">Twitter:</td>
            <td className="Contact-Value">@realchrisstowe</td>
          </tr>
          <tr className="Contact-Row">
            <td className="Contact-Type">GitHub:</td>
            <td className="Contact-Value">https://github.com/chrisstowe</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default Contact;
