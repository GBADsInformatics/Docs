---
id: Dockerizing-Dashboards
title: Guide to Dockerizing Dashboards
author: "William Fitzjohn"
sidebar_position: 12
---

Author: [@WilliamFitzjohn](https://github.com/WilliamFitzjohn) - Contact me for assistance.<br/>
This is a guide outlining the steps taken to create a Docker image from a plotly dashboard running through Flask.

## Table of Contents
1. [Prerequisites](#prerequisites)
1. [Code Preparation](#code-preparation)
1. [The Dockerfile](#the-dockerfile)
1. [Confidential Files](#confidential-files)
1. [Building the Image](#building-the-image)
1. [Running the Dashboard](#running-the-dashboard)
1. [Publishing the Dashboard](#publishing-the-dashboard)

## Prerequisites
This guides assumes you already have a plotly dashboard established.<br/>
You should have docker installed on your system too.

## Code Preparation
1. Make sure your `requirements.txt` contains all the required python modules needed to run your dashboard.
2. In development you might have used something like `python wsgi.py` or `python dashboard.py` to run your dashboard. This is okay for temporarily running it, but in production we want to use a production Flask server to run the app. We will use Waitress for our server. This requires you to add a function to file that starts your dashboard (wsgi.py or example_dashboard.py) that returns your Dash app:
    - If you create a normal **Dash** app then this should work:
        ```python
        def returnApp():
            return app
        ```
    - If you create a **DashProxy** app then this should work:
        ```python
        def returnApp():
            return app.server
        ```

## The Dockerfile
add a new file to your project directory named `Dockerfile`. This file will be used by docker to create your docker image. This file has to have a few key features:
1. The base image: To make this easier, we will use an image with python pre-installed.
2. The python prerequisites: We install all the python modules your dashboard needs.
3. The dashboard files: We then copy the files over to the docker image.
4. The app call: We tell docker how to start the dashboard inside the container.

Here is an example of what the Dockerfile should look like:
```Dockerfile
# Base image - tried a few others, this one was the easiest and most resilient
# you can change the python version here if you are having issues. You can find
# more base images online.
FROM python:3.10.0-slim-buster

# Create a base directory in the image to work from 
WORKDIR /app/dash

## For some python modules (psycopg2 & others), you need to preinstall programs
## through apt. Do that here with a command like: 
# RUN apt update && \
#  apt install -y INSERT PACKAGES HERE && \
#  rm -rf /var/lib/apt/lists/*

# Copy the requirements file into the image, then install python requirements
COPY requirements.txt .
RUN pip install -r requirements.txt

# Copy the rest of the dashboard files into the image
COPY . /app/dash

# Specifying the dashboard command through waitress
# Keep 80 the same: this is just exposed inside the docker container. Later
# you can map this to any port outside of the container. Change "wsgi" to the
# name of the file you edited earlier in #code-preparation.2
CMD ["waitress-serve","--host=0.0.0.0","--port=80","--call","wsgi:returnApp"]
```

## Confidential Files
Some files such as `.env` files should not be published to GitHub so you add a .gitignore to your repo. The same concept goes for publishing Docker images using a .dockerignore.

Add a `.dockerignore` file to your repo that includes the name of sensitive files you don't want included in your Docker image.

We still need our confidential files (like `.env`) in the container to run the server, but we let the user add those sensitive files later when they start the container.

## Building the Image
Now that we have our `Dockerfile` with instruction on building an image we can run a command to create our image.<br/>
`docker build -t gbadsinformatics/dashboardname-dash .`<br/>
Run this command in the same directory as your `Dockerfile`. This tells docker to build our image and give it a username/tag: `gbadsinformatics/dashboardname-dash`. This step can be tedious if you get build errors. You might need to play around with your `requirements.txt` to get compatible python modules, or add apt package dependencies to your `Dockerfile`. Troubleshoot the issues as you go, this is usually the hardest step.

## Running the Dashboard
Now that you finally have an image with no build errors, you can test it. You need to build a command to run your image that will look something like:<br/>
`docker run -d -p 9090:80 gbadsinformatics/dashboardname-dash`
- `-d` tells docker to run the container detached
- `-p 9090:80` tells docker to forward port 80 inside the container to 9090 on the host machine.<br/>
    Here you can change 9090 to any port you desire to run the dashboard on, do not change 80.
- `gbadsinformatics/dashboardname-dash` should be whatever you called your docker image.

You might want to allow the user to add [Confidential Files](#confidential-files) like `.env`. You can do this in docker with the `-v` tag:<br/>
`docker run -d -p 9090:80 -v /local/path/to/.env:/app/.env gbadsinformatics/dashboardname-dash`
- The user will change `/local/path/to/.env` to the full path of the confidential file on their machine. 
- You will change `/app/.env` to where the confidential file needs to be placed in the container.

Once your container is up and running you should be able to go to your specified port on your web browser and see the dashboard. If you run into issues here are some helpful commands:
- `docker ps --all`<br/>
This shows stopped docker containers.
- `docker logs XXXX`<br/>
This shows the logs of a container with ID XXXX. You'll use the output from docker ps to get a container ID.
- `docker exec -it XXXX /bin/bash`<br/>
This opens a shell inside the container so you can troubleshoot within the container.<br/>
**However**, changes made within a running container are temporary and will not be reflected in the image.  

## Publishing the Dashboard
Once you have a working image, you can publish it to DockerHub through the command line.
1. Create a DockerHub repo named `dashboardname-dash` with your dashboard name on the GBADsInformatics DockerHub account.
2. Head back to the command line and Login to DockerHub:<br/>
`docker login`
3. Push the image to DockerHub:<br/>
`docker puch gbadsinformatics/dashboardname-dash`

You should now try to run a container using the public image just to check that it's working correctly. You can also try using GitHub Actions to build the image automatically when you push to your GitHub repo. That way you never need to go through these steps again!
