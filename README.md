# PeerPrep - Technical Interview Preparation and Peer Matching Platform

PeerPrep is a technical interview preparation platform and peer matching system designed to help students practice whiteboard-style interview questions with their peers. With PeerPrep, you can easily find a study partner who shares your passion for technical interview success. This README provides an overview of the platform and its features, as well as essential information for developers and users.

## Table of Contents
1. [Introduction](#introduction)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Installation](#installation)
5. [Usage](#usage)
6. [Deployment](#deployment)

## Features <a name="features"></a>
PeerPrep is designed to simplify the technical interview preparation process. Some key features of the application include:

- User Registration and Authentication: Students can create an account and log in to access the platform's features securely.

- Question Selection: Users can choose the difficulty level (easy, medium, or hard) and a specific topic they want to work on for the day.

- Peer Matching: PeerPrep uses a matching service with RabbitMQ to pair users with others who have selected the same difficulty level and topic. If a match is not found within a specific duration, the user times out.

- Real-Time Collaboration: Once matched, users are provided with a collaborative space to develop their solutions in real-time. This space allows both the user and their matched peer to work together on the selected question.

- Graceful Termination: Users can gracefully terminate their collaborative sessions when they are done.


## Tech Stack <a name="tech-stack"></a>
PeerPrep is built using a modern tech stack to ensure robustness and scalability:

- Frontend:
    - Next.js with TypeScript
    - React.js with JavaScript

- Backend:
    - Node.js

- Database:
    - MongoDB
    - PostgreSQL

- Authentication:
    - nextAuth

- CI/CD and Cloud:
    - GitHub for version control
    - Google Cloud Platform (GCP) for continuous integration and continuous deployment

- Containerization:
    - Docker
    - Docker Compose
    
- Message Broker:
    - RabbitMQ

- Collaborative Service:
    - Liveblocks with WebSocket support


## Installation <a name="installation"></a>
To run PeerPrep locally for development purposes, follow these steps:

1. Clone the GitHub repository to your local machine.
```bash
    git clone https://github.com/CS3219-AY2324S1/ay2324s1-course-assessment-g25.git
    cd ay2324s1-course-assessment-g25
```

2. Install the required dependencies for both the frontend and backend.
```bash
    # Install frontend dependencies
    cd frontend
    npm install

    # Install backend dependencies
    cd ../backend
    npm install
```

3. Set up your local environment variables as needed, including database configuration, authentication secrets, and other required parameters.

4. Start the development servers for the frontend and backend.
```bash
    # Start the frontend server
    cd ../frontend
    npm run dev

    # Start the backend server
    cd ../backend
    npm run start
```

5. Your PeerPrep application should now be accessible at `http://localhost:3000`.

## Usage <a name="usage"></a>
Using PeerPrep is straightforward:

1. Create an account and log in.

2. Select the desired difficulty level and topic you want to practice.

3. Wait for the system to match you with a peer. If a match is found, start your collaborative session. If not, you will time out.

4. During the collaborative session, work on the provided question with your peer.

5. When you are done, terminate the session gracefully.

## Deployment <a name="deployment"></a>

[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/6BOvYMwN)

[![Deploy Next.js site to Pages](https://github.com/CS3219-AY2324S1/ay2324s1-course-assessment-g25/actions/workflows/nextjs.yml/badge.svg)](https://github.com/CS3219-AY2324S1/ay2324s1-course-assessment-g25/actions/workflows/nextjs.yml)

[![Frontend CI and Tests](https://github.com/CS3219-AY2324S1/ay2324s1-course-assessment-g25/actions/workflows/frontend.yaml/badge.svg)](https://github.com/CS3219-AY2324S1/ay2324s1-course-assessment-g25/actions/workflows/frontend.yaml)

[![Backend CI and Tests](https://github.com/CS3219-AY2324S1/ay2324s1-course-assessment-g25/actions/workflows/backend.yaml/badge.svg)](https://github.com/CS3219-AY2324S1/ay2324s1-course-assessment-g25/actions/workflows/backend.yaml)



PeerPrep is designed to make technical interview preparation more accessible and collaborative. We welcome contributions, bug reports, and feature requests to help improve the platform. Feel free to reach out to us with any questions or feedback. Happy coding!