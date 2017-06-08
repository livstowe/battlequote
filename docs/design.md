# Design

- [Description](#description)
- [Agent Service](#agent-service)
- [Proxy Service](#proxy-service)
- [Website Service](#website-service)
- [Notify Service](#notify-service)
- [Considered Technology](#considered-technology)
  - [Kubernetes](#kubernetes)
  - [Docker Swarm](#docker-swarm)

## Description

**Note**: This design is still in progress.

Everything in this application is a service.

## Agent Service

Manages services located on the same VM.

A single Agent Service will be located on each VM.

### Functionality

- Registers local services with the Proxy Service.
- Forwards messages between local services and the Proxy Service.
- Restarts local services when they crash.
- Executes commands issued from the Proxy Service.
  - This includes starting, stopping, and deploying services.

## Proxy Service

Manages all communication in the system.

A single Proxy Service will exist.

### Functionality

- Forwards requests between Agent Services.
- Forwards requests between external sources and Agent Services.
- Forwards commands issued from an external source.
  - This includes starting, stopping, and deploying services.

## Website Service

Provides an interface for the user to interact with various services.

### Functionality

- Serves static and dynamic content.
- Responds to requests from the user.

## Notify Service

Used to send notification messages to social media platforms.

### Functionality

- Posts to Twitter.
- Posts to Slack.

## Considered Technology

The following was considered, but did not get used.

### Kubernetes

[Repository](https://github.com/kubernetes/kubernetes)

#### Description

Kubernetes is an open source system for managing containerized applications across multiple hosts, providing basic mechanisms for deployment, maintenance, and scaling of applications.

#### Decision

This was initially used with the Google Container Engine, but was more configuration than was necessary.

### Docker Swarm

[Repository](https://github.com/docker/swarm)

#### Description

Docker Swarm is native clustering for Docker. It turns a pool of Docker hosts into a single, virtual host.

#### Decision

There was no default support for this in the Google Cloud Platform.
A dedicated VM would have needed to be created and managed.
