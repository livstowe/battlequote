#!/bin/bash
# Builds and runs the docker image.

# Build the docker image.
docker build -t website:1.0.0 .

# Run the docker image.
docker run -p 80:7000 website:1.0.0
