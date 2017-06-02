![BattleQuote logo](https://storage.googleapis.com/battlequote/images/asteroid.png)

# BattleQuote [![Build Status](https://travis-ci.org/chrisstowe/battlequote.svg?branch=master)](https://travis-ci.org/chrisstowe/battlequote)

A mock sales application based on purchasing supplies for a battle.

This application is composed of various microservices running on the Google Cloud Platform.

Please visit [battlequote.com](http://battlequote.com/) to view this project live.

## Stack

- Node.js
  - Express.js
- React
- Docker
- ES6
- Flow
- Jest
- Google Cloud Platform
  - Compute Engine
  - Cloud DNS
  - Storage
- Ubuntu

## Design

Everything in this application is a service.

### Agent Service (/agent)

Manages services located on the same VM.

A single Agent Service will be located on each VM.

#### Functionality

- Registers local services with the Proxy Service.
- Forwards messages between local services and the Proxy Service.
- Restarts local services when they crash.
- Executes commands issued from the Proxy Service.
  - This includes starting, stopping, and deploying services.

### Proxy Service (/proxy)

Manages all communication in the system.

A single Proxy Service will exist.

#### Functionality

- Forwards requests between Agent Services.
- Forwards requests between external sources and Agent Services.
- Forwards commands issued from an external source.
  - This includes starting, stopping, and deploying services.

### Website Service (/website)

Provides an interface for the user to interact with various services.

#### Functionality

- Serves static and dynamic content.
- Responds to requests from the user.

### Notify Service (/notify)

Used to send notification messages to social media platforms.

#### Functionality
- Posts to Twitter.
- Posts to Slack.
