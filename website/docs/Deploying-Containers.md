---
id: Deploying-Containers
title: "Deploying Containers in AWS ECS"
author: "William Fitzjohn"
date: "24/06/2023"
---
# Deploying Docker Containers on AWS ECS Fargate

This documentation provides a step-by-step guide on how to create a task definition, service, attach it to an Application Load Balancer (ALB) in order publish it to the internet.

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Create a Task Definition](#create-a-task-definition)
3. [Create an ECS Service](#create-an-ecs-service)
4. [Fix Your Health Checks](#health-checks)
4. [Check Your Application](#check-deployment)


## Overview
Here is a diagram explaining the architecture we will be following:
<div style={{ width: '100%' }}>
  <iframe src="https://drive.google.com/file/d/18n2dxTfz5svM3HqqrfcEQ2qbEsvkI2oM/preview" width="100%" height="500px"></iframe>
</div>

You can see our docker containers are pulled into AWS through the task definition and turned into a service. For the users to reach our services, we need to simply add a new target group to our existing load balancer.

## Prerequisites<a name="prerequisites"></a>
Before proceeding with these steps, make sure you have the following:

- An AWS account with necessary permissions to create ECS resources, add target groups, and modify load balancers.
- Have created a docker container from our previous guide, and have it published on DockerHub.

## Create a Task Definition<a name="create-a-task-definition"></a>
1. In AWS, Navigate to Amazon Elastic Container Service > Task definition > Create new task definition
2. Task name: choose something descriptive like: `metadata-api-task` or `population-dash-task`
3. Container: Create a container definition
    1. Container name: ex. `metadata-api-container`
    2. Image URI: your DockerHub image URI ex. `gbadsinformatics/meta-api:latest`
    3. Port mapping: add your exposed ports here, ex. TCP on port 80 (http)\
    Make sure you use http; our load balancer will add https later for you.
    4. Environment Variables: these are the variables referenced in docker containers. For dashboards, we use `DASH_BASE_URL` to set the URL path for the dashboard like `/dashboards/population`. These variables need to be referenced in your code. It will not automatically work. Other applications we have use environment variables to pass in secret credentials.
4. Configure environment: resources
    1. Change the resources: Usually each container we set to 1 vCPU and 2 GiB of memory
    2. Task role: set to `ecsTaskExecutionRole`
    3. Keep storage and logging as default
5. Finally review & create your task definition.

## Create an ECS Service<a name="create-an-ecs-service"></a>
1. Go back to the cluster and click create a new service.
2. Deployment Configuration:
    1. Make sure you have a service selected.
    2. Select Family and choose your new task definition.
    3. Service name: ex `metadata-api-service`
3. Networking:
    1. Make sure the default VPC is selected, and all 3 subnets are selected.
    2. Choose security group
        - remove `default`
        - add `GBADs-Dashboard-LB-SecurityGroup` (Despite the name, this is used for all containers, not just dashboards)
4. Load Balancing:
    1. Select `Use an existing load balancer`
    2. Choose `Dashboards-ALB` (This is used for all containers, not just dashboards)
    3. Select `Use an existing listener`
    4. Choose `443: HTTPS` - This is where https is added for you
    5. Select `Create a new target group`
    6. Target group name: something like `metadata-api-target-group`
    7. Path pattern: Change this to your applications base URL **but add a '\*'**. \
    Ex `/dashboards/population*`, this forwards all traffic with this pattern to our new container.
    8. Evaluation order: scroll through the existing rules and select the next number in order.\ 
    Sometimes we have applications with overlapping patterns like `/dashboards/population` and `/dashboards/population-v2`. It is important here that the longest URL gets prioritized in the evaluation order (longer URL needs a lower number). You may need to shift around some rules to make space.
    9. Health Check Path: this path is used to check the status of your application. This usually is the base URL of your application, or the docs site of an API. Like `/dashboards/population` or `/api/docs`
    10. Click create.

## Fix Your Health Checks<a name="health-checks"></a>
Before checking your service, we need to make a change to our new target group to accept more HTTP return codes.
1. Go to EC2 > Target Groups > your-new-target-group > Health Checks > Edit
2. Open Advanced health check settings
3. Change success codes to `200-399`
4. Save changes

## Check Your Application<a name="check-deployment"></a>
You can now go to `www.gbadske.org/[your base URL here]` like, `www.gbadske.org/dashboards/population` to check your application status.
