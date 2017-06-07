/**
 * Copyright 2017-present, Chris Stowe.
 * All rights reserved.
 * 
 * Description: The definition of the IssueLabel component.
 */

import React from 'react';
import './Issues.css';

const IssueLabel = (props) => (
  <span
    className="IssueLabel"
    style={{backgroundColor:`#${props.label.color}`}}
  >
  {props.label.name}
  </span>
);

export default IssueLabel;
