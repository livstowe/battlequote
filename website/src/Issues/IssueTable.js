/**
 * Copyright 2017-present, Chris Stowe.
 * All rights reserved.
 * 
 * Description: The definition of the IssueTable component.
 */

import React from 'react';
import IssueRow from './IssueRow';
import './Issues.css';

const IssueTable = (props) => {
  // Create a row for each issue.
  const rows = props.issues.map((issue) => 
    <IssueRow key={issue.id} issue={issue} />
  );

  return (
    <table className="IssueTable">
      <tbody>
        <tr >
          <th className="IssueHeader">#</th>
          <th className="IssueHeader">Title</th>
          <th className="IssueHeader">Labels</th>
        </tr>
        {rows}
      </tbody>
    </table>
  );
};

export default IssueTable;
