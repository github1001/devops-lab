# DevOps Lab – End-to-End CI/CD, Kubernetes & Multi-Environment Deployment

## Overview

This repository documents my hands-on DevOps learning journey and serves as the foundation for my future **Hermes AI Software Engineering Team**.

The goal of this project is to build a production-like software delivery platform from scratch using modern DevOps practices.

Instead of learning each technology in isolation, this lab integrates them into a complete software delivery lifecycle including:

* Source Control
* Branching Strategy
* CI/CD
* Containerization
* Cloud Deployment
* Kubernetes
* Multi-environment promotion
* Future AI-driven automation

---

# Objectives

The project demonstrates how a software application moves from:

```
Developer
    ↓
Git
    ↓
GitHub
    ↓
CI/CD
    ↓
Docker
    ↓
Kubernetes
    ↓
Cloud Deployment
```

while maintaining separate Development, Staging and Production environments.

---

# Technologies Used

## Source Control

* Git
* GitHub

## CI/CD

* GitHub Actions
* Jenkins Pipelines

## Containerization

* Docker
* Docker Compose

## Cloud Infrastructure

* Bluehost VPS (Ubuntu 24.04)

## Kubernetes

* K3s (Lightweight Kubernetes)

## Deployment Platform

* Render

## Application

* Node.js
* Express

---

# Architecture

```
                    Developer

                        │
                        ▼

                  GitHub Repository

          dev        stg        main
           │          │          │
           ├──────────┼──────────┤
           ▼          ▼          ▼

          GitHub Actions

                  │
                  ▼

            Bluehost VPS

        ┌────────────────────┐
        │ Docker Compose     │
        │                    │
        │ Dev (3001)         │
        │ Stg (3002)         │
        │ Prod (3003)        │
        └────────────────────┘

                  │

         Jenkins Pipeline

                  │

            Kubernetes

          Deployment
               │
              Pod
               │
            Service

                  │

             Render Cloud

       Dev / Stg / Prod URLs
```

---

# Branch Strategy

```
dev
```

Active development branch.

```
stg
```

Staging environment.

Used for integration testing before production.

```
main
```

Production environment.

---

# Environments

## Docker Compose

| Environment | Port |
| ----------- | ---- |
| Development | 3001 |
| Staging     | 3002 |
| Production  | 3003 |

---

## Kubernetes

NodePort

```
31011
```

---

## Render

Development

```
https://sample-app-dev-3big.onrender.com/
```

Staging

```
https://devops-lab-fohl.onrender.com/
```

Production

```
https://sample-app-prod-rt6q.onrender.com/
```

---

# Features Implemented

## Git

* Branch strategy
* Commit history
* Repository management

---

## SSH

Two SSH key pairs were configured.

### SSH Key 1

Purpose

```
VPS
↓

GitHub
```

Used for:

* git clone
* git pull
* git push

---

### SSH Key 2

Purpose

```
GitHub Actions

↓

Bluehost VPS
```

Used for automatic deployment.

Private key stored as GitHub Secret.

Public key added to:

```
~/.ssh/authorized_keys
```

---

# Docker

Application containerized using Docker.

Supports:

* Local development
* VPS deployment
* Kubernetes deployment

---

# Docker Compose

Three environments:

```
docker-compose.dev.yml

docker-compose.stg.yml

docker-compose.prod.yml
```

Each runs independently.

---

# GitHub Actions

Automatic deployment when pushing to:

```
dev
```

↓

Development deployment

```
stg
```

↓

Staging deployment

```
main
```

↓

Production deployment

Workflow performs:

```
SSH

↓

git pull

↓

Docker Build

↓

Docker Compose Up

↓

Deployment
```

---

# Jenkins

A Jenkins server was installed inside Docker.

Pipeline performs:

* Pull source code
* Read Jenkinsfile
* Build Docker image
* Deploy application

Purpose:

To demonstrate enterprise CI/CD in addition to GitHub Actions.

---

# Kubernetes

Installed:

```
K3s
```

Implemented:

* Deployment
* Service
* Self-Healing
* Rolling Restart
* Rolling Updates

Current status:

```
Level 1 Complete
```

---

# Kubernetes Level 2 (Current Work)

Currently implementing:

* Namespaces
* ConfigMaps
* Secrets
* Ingress
* Helm
* Registry Deployments

Future:

* ArgoCD
* GitOps

---

# Render Deployment

Each Git branch has its own public deployment.

Environment variables are used instead of hardcoded values.

```
APP_ENV
```

Examples:

```
APP_ENV=dev

APP_ENV=stg

APP_ENV=prod
```

---

# Learning Outcomes

This project demonstrates practical experience with:

* Linux Administration
* SSH
* Git
* GitHub
* GitHub Actions
* Jenkins
* Docker
* Docker Compose
* Kubernetes
* Render
* CI/CD
* Multi-environment deployments
* Rolling updates
* Infrastructure automation

---

# Hermes AI Software Engineering Team (Future Roadmap)

The long-term vision of this repository is to become the execution platform for an autonomous AI software engineering team.

```
                 User

                  │

         Product Owner Agent

                  │

      Business Analyst Agent

                  │

        Developer Agent

                  │

         DevOps Agent

                  │

             GitHub

                  │

             CI/CD

                  │

           Kubernetes

                  │

           Production
```

Each agent will be responsible for a specific role while collaborating through an orchestration framework such as:

* OpenWebUI
* Ollama
* CrewAI
* LangGraph
* OpenHands

---

# Current Progress

Completed

* Git
* GitHub
* Branch Strategy
* SSH
* Docker
* Docker Compose
* GitHub Actions
* Jenkins
* Render
* Kubernetes Level 1
* Rolling Updates
* Multi-Environment Deployment

Currently Working On

* Kubernetes Namespaces
* ConfigMaps
* Secrets
* Ingress
* Helm

Future

* ArgoCD
* GitOps
* Monitoring (Prometheus & Grafana)
* AI DevOps Agent
* Full Hermes Multi-Agent Software Engineering Platform

---

# Repository Purpose

This repository is intended to serve as:

* A DevOps learning lab
* A portfolio demonstrating practical infrastructure engineering
* A reference implementation for CI/CD and Kubernetes
* The future foundation of the Hermes AI autonomous software engineering team

