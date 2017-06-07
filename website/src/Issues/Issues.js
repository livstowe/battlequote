/**
 * Copyright 2017-present, Chris Stowe.
 * All rights reserved.
 * 
 * Description: The definition of the Issues component.
 */

import React, { Component } from 'react';
import IssueRequest from './IssueRequest';
import IssueTable from './IssueTable';
import NavBar from '../NavBar/NavBar';
import './Issues.css';

class Issues extends Component {
  constructor(props) {
    super(props);
    this.state = {openIssues:[], closedIssues:[]};
    this.issueRequest = new IssueRequest();
    this.updateIssues = this.updateIssues.bind(this);
  }

  /**
   * Requests the latest issues from GitHub.
   */
  updateIssues() {
    console.log('Updating Issues...');

    this.issueRequest.getIssues('open', (issues) => {
      this.setState( { openIssues: issues } );
    });

    this.issueRequest.getIssues('closed', (issues) => {
      this.setState( { closedIssues: issues } );
    });
  }

  componentDidMount() {
    // Immediately update the table.
    this.updateIssues();

    // Set an update rate of 60 seconds.
    // This would be faster, but the GitHub API limits the amount of GET requests.
    this.updateInterval = setInterval(() => this.updateIssues(), 60000);
  }

  componentWillUnmount() {
    // Stop the update.
    clearInterval(this.updateInterval);
  }

  render() {
    return (
      <div>
        <NavBar />
        <h1 className="Title">Open</h1>
        <IssueTable issues={this.state.openIssues} />
        <h1 className="Title">Closed</h1>
        <IssueTable issues={this.state.closedIssues} />
      </div>
    );
  }
}

export default Issues;
