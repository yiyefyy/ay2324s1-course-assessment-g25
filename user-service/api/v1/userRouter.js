import {
    createUser,
    deleteUser,
    getUserByEmail,
    getUserById,
    getUsers,
    updateUser
} from '../../controllers/UserController.js';

import express from 'express';

const userRouter = express.Router();

// Handle GET requests to /api/v1/users
userRouter.get('/', getUsers);

// Handle POST requests to /api/v1/users
userRouter.post('/', createUser);

// Handle GET requests to /api/v1/users/:userId
userRouter.get('/:userId', getUserById);

// Handle PUT requests to /api/v1/users/:userId
userRouter.put('/:userId', updateUser);

// Handle DELETE requests to /api/v1/users/:userId
userRouter.delete('/:userId', deleteUser);

// Handle GET requests to /api/v1/users/byEmail/:email
userRouter.get('/byEmail/:email', getUserByEmail);

export default userRouter;
