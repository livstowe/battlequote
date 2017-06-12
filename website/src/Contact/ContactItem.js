/**
 * Copyright 2017-present, Chris Stowe.
 * All rights reserved.
 * 
 * Description: The definition of the ContactItem component.
 */

import React from 'react';
import './Contact.css';

const ContactItem = (props) => (
  <div className="ContactItem" title={props.name}>
    <a href={props.link} target="_blank">
      <img src={props.image} alt={props.name} />
    </a>
  </div>
);

export default ContactItem;
