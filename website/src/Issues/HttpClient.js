/**
 * Copyright 2017-present, Chris Stowe.
 * All rights reserved.
 * 
 * Description: A client for making HTTP requests.
 */

class HttpClient {

  /**
   * Performs a HTTP GET request.
   * @param {*} url The URL for the request.
   * @param {*} callback The callback for a response.
   */
  get(url, callback) {
    const req = new XMLHttpRequest();
    req.onreadystatechange = () => {
      if (req.readyState == 4 && req.status == 200) {
        callback(req.responseText);
      }
    }

    // Send the request.
    req.open("GET", url, true);            
    req.send(null);
  }
}

export default HttpClient;
