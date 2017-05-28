#!/bin/bash

# Build the docker image.
docker build -t website:1.0.0 .

# Run the docker image.
docker run -p 80:6789 website:1.0.0
