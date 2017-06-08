![Battle Quote](https://storage.googleapis.com/battlequote/images/logo.png)

# Battle Quote [![Build Status](https://travis-ci.org/chrisstowe/battlequote.svg?branch=master)](https://travis-ci.org/chrisstowe/battlequote)

- [Description](#description)
- [Links](#links)
- [Roadmap](#roadmap)
- [Stack](#stack)
  - [.Net Core](#-net-core)
  - [Docker](#docker)
  - [Elasticsearch](#elasticsearch)
  - [ES6](#es6)
  - [Express.js](#express-js)
  - [Flow](#flow)
  - [Git](#git)
  - [Google Analytics](#google-analytics)
  - [Google Cloud Compute Engine](#google-cloud-compute-engine)
  - [Google Cloud DNS](#google-cloud-dns)
  - [Google Cloud Storage](#google-cloud-storage)
  - [Jest](#jest)
  - [macOS Sierra](#macos-sierra)
  - [Node.js](#node-js)
  - [React](#react)
  - [Redux](#redux)
  - [SQL](#sql)
  - [Travis CI](#travis-ci)
  - [Ubuntu](#ubuntu)
  - [Visual Studio Code](#visual-studio-code)
  - [Webpack](#webpack)

## Description

This is a mock sales application based on purchasing supplies for a battle.

The goal is to create a mircoservice oriented web application using the latest technologies.

Immutability, type safety, and unit testing are paramount to the success of this project.

## Links

- [Source Code](https://github.com/chrisstowe/battlequote)
- [Report an Issue](https://github.com/chrisstowe/battlequote/issues) (the Issues page on this site will automatically update).

## Roadmap

- **initial-release**
  - Contains the creation of the main design and infrastructure. Also contains the initial website design.
- **service-release**
  - Contains the implementation of the service infrastructure, service management, and continuous deployment.
- **named-service-releases**
  - These releases will add service specific functionality that target technology like .Net Core, Node.js, and Elasticsearch.

## Stack

### .Net Core

When it comes down to it, nothing beats a nice object oriented and type safe language. This will be used to create services in this project.

### Docker

This is used to allow the deployment of multiple microservices on the same VM. It does not hurt that it also allows more predictable deployments.

### Elasticsearch

The search engine that will eventually be utilized for querying products on the website.

### ES6

This is the latest version of JavaScript and is usable thanks to Babel.

### Express.js

This is the server for the development and production builds of the website. It provides quick response times with little setup. Minimal routing is done by Express (as routing is also done by the client).

### Flow

Used for type checking JavaScript. TypeScript was seriously considered, but I wanted to stay with fundamental JavaScript for learning purposes.

### Git

Used to version the software that is remotely stored on GitHub.

### Google Analytics

Used to track visitors and hold metric data for the site.

### Google Cloud Compute Engine

Used to host the VMs that run the microservices. AWS was considered, but I was already using a lot of other Google services.

### Google Cloud DNS

Used to route requests from the domain to the VM instance hosting the Proxy Service.

### Google Cloud Storage

Used to hold static content that needs to be delivered reliably and fast. Content that goes here will not be versioned in Git.

### Jest

The JavaScript testing tool for the website.

### macOS Sierra

This was the primary development environment. This was chosen as it provided easy access to Unix features.

### Node.js

Used as the primary development language (mostly for ease of use and Isomorphic possibilities). Knowing code on the client and server execute in the same way is highly desirable. NPM is currently being used, but I also considered Yarn for its versioning capabilities.

### React

Used to provide complex and dynamic web pages in a scalable way. This was chosen instead of Angular (as it made more sense to create static content dynamically).

### Redux

This will help with adding consistency and predictability to the website when communication occurs between services.

### SQL

The relational database that will be used to store information accessible to services.

### Travis CI

Provides continuous integration for the project. I considered Jenkins, but it was too cost prohibitive to host it on a separate VM.

### Ubuntu

Ubuntu 16.04 LTS is the operating system that all VMs use. CoreOS and a container optimized OS were considered, but they took up too many resources. A custom image was created using Ubuntu and Docker.

### Visual Studio Code

Chose this editor as it was one of the lightest available and had direct support for Node.js. This editor also allows for C# development with a plugin.

### Webpack

Used to process and bundle the website. Webpack creates a complete bundle, rather than using a task runner and expecting everything to link together properly. Combining Webpack with Babel allows the React and ES6 syntax to be used freely in this project.
