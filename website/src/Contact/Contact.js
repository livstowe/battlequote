/**
 * Copyright 2017-present, Chris Stowe.
 * All rights reserved.
 * 
 * Description: The definition of the Contact component.
 */

import React, { Component } from 'react';
import ContactItem from "./ContactItem";
import NavBar from '../NavBar/NavBar';
import './Contact.css';

class Contact extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <h1 className="BlueGlow CenterText">Chris Stowe</h1>
        <ContactItem
          name="email"
          link="mailto:chstowe@gmail.com"
          image="https://storage.googleapis.com/battlequote/images/social-media-icons/mail.svg"
        />
        <ContactItem
          name="twitter"
          link="https://twitter.com/realchrisstowe"
          image="https://storage.googleapis.com/battlequote/images/social-media-icons/twitter.svg"
        />
        <ContactItem
          name="facebook"
          link="https://www.facebook.com/christopher.stowe.1"
          image="https://storage.googleapis.com/battlequote/images/social-media-icons/facebook.svg"
        />
        <ContactItem
          name="github"
          link="https://github.com/chrisstowe"
          image="https://storage.googleapis.com/battlequote/images/social-media-icons/github.svg"
        />
      </div>
    );
  }
}

export default Contact;
