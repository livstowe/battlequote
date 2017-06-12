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
        <h1 className="BlueGlow CenterText">Chris Stowe</h1>
        <table className="ContactTable">
          <tbody>
            <tr className="ContactRow">
              <td className="ContactType">Email:</td>
              <td className="ContactValue">
                <a href="mailto:chstowe@gmail.com">
                  chstowe@gmail.com
                </a>
              </td>
            </tr>
            <tr className="ContactRow">
              <td className="ContactType">Twitter:</td>
              <td className="ContactValue">
                <a href="https://twitter.com/realchrisstowe">
                  @realchrisstowe
                </a>
              </td>
            </tr>
            <tr className="ContactRow">
              <td className="ContactType">GitHub:</td>
              <td className="ContactValue">
                <a href="https://github.com/chrisstowe">
                  https://github.com/chrisstowe
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Contact;
