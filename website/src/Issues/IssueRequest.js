/**
 * Copyright 2017-present, Chris Stowe.
 * All rights reserved.
 * 
 * Description: A client for making GitHub API issue requests.
 */

import HttpClient from './HttpClient';

class IssueRequest {
  constructor() {
    this.httpClient = new HttpClient();
  }

  /**
   * Gets the GitHub issues associated with the state.
   * @param {*} state The 'open'/'closed' state of issues to get.
   * @param {*} callback The callback to make once a response is received.
   */
  getIssues(state, callback) {
    // The request used to get the issues.
    const req = `https://api.github.com/search/issues?q=
                 repo:chrisstowe/battlequote
                 +state:${state}
                 &sort=created
                 &order=asc`;

    // Make the request and callback with the issues as a response.
    this.httpClient.get(req, (res) => {
      const parsedResp = JSON.parse(res);
      callback(parsedResp.items);
    });
  }
}

export default IssueRequest;
