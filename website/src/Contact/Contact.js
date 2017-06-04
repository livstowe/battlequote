/**
 * Copyright 2017-present, Chris Stowe.
 * All rights reserved.
 */
import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar'
import './Contact.css';

class Contact extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const title = "Contact";

    return (
      <div>
        <NavBar />
        <div className="Contact">
          <h1>Contact</h1>
          <h2>Chris Stowe</h2>
          <strong> GitHub </strong> www.github.com
        </div>
      </div>
    );
  }
}

export default Contact;