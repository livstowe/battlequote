/**
 * Copyright 2017-present, Chris Stowe.
 * All rights reserved.
 * 
 * Description: The definition of the IssueRow component.
 */

import React from 'react';
import IssueLabel from './IssueLabel';
import './Issues.css';

const IssueRow = (props) => {
  // Create an item for each label.
  const labels = props.issue.labels.map((label) =>
    <IssueLabel key={label.id} label={label} />
  );

  return (
    <tr className="IssueRow">
      {
      /* Provides a clickable issue link. */
      }
      <td><a href={props.issue.html_url} target="_blank">{props.issue.number}</a></td>
      <td>{props.issue.title}</td>
      <td>{labels}</td>
    </tr>
  );
}

export default IssueRow;
