




# ASSIGNMENT 4 SET UP

In order to set up the Docker image and container, first need to install Docker Desktop on your local computer

Check out [Docker Desktop Installation](https://www.docker.com/products/docker-desktop/), and [Docker Docs](https://docs.docker.com/desktop/) for more information.

With Docker Desktop and Our Assignment folder, enter:

```bash
    git clone https://github.com/CS3219-AY2324S1/ay2324s1-course-assessment-g25.git
    cd ay2324s1-course-assessment-g25
    docker-compose up
```
Your PeerPrep images and containers are set up!

Once the containers are up and running, you can access your PeerPrep environment by opening a web browser and navigating to [local host](http://localhost:3000/). 

If you want to shut down the container and delete them, enter:

```bash
    docker-compose down --rmi all -v
```
