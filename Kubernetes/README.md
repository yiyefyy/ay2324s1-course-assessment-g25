# Kubernete Set Up Guide

## Prerequisites

- Docker installed. You can download Docker [here](https://www.docker.com/products/docker-desktop).
- Kubernetes installed. If you're running on a local machine, you can use Minikube. Download it [here](https://minikube.sigs.k8s.io/docs/start/).
- Lens GUI for managing Kubernetes. Download it [here](https://k8slens.dev/desktop.html#:~:text=Kubernetes%20operations,on%20open%20source%20and%20free.).

## Getting Started

### Building Docker Images

In our main project directory, build all the images.

```bash
docker compose build
```

Remember to enable Kubernetes in Docker Desktop Setting.

### Setting Up Kubernetes

1. Start your kubernetes cluster by launching Lens.

```bash
minikube start --driver=docker
```

2. Create a Namespace called "development".

3. Go to foler name `kubernetes`.

```bash
cd kubernetes.
```
4. Deploy to kubernetes!

```bash
 kubectl apply -k .
```

5. MUST DO: config port forwarding for all services!

6. You can now access PeerPrep [here](http://localhost:3000/).

