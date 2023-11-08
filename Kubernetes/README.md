# Kubernete Set Up Guide

1. Ensure that each service has a Docker image ready for deployment.

2. Set up a Kubernetes cluster:

    Install Minikube:
    You can download and install Minikube from the [official website](https://minikube.sigs.k8s.io/docs/start/).

    After Minikube/Kubectl installed:

    ```bash
    minikube start --driver=docker
    ```

    To ensure your Minikube cluster is running correctly:
    
    ```bash
    minikube status
    kubectl cluster-info
    ```

