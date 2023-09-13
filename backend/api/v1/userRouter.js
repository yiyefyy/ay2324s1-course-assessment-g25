/**
 * User Router
 * 
 * This file contains the routes for the User API endpoints.
 * 
 * @module backend/api/v1/questionRouter
 * 
 * @requires express
 * @requires backend/controllers/QuestionController
 */

import express from 'express';
// import { user } from 'pg/lib/defaults.js';
import {createUser, getUserById, updateUser, deleteUser} from '../../controllers/UserController.js'; 

const userRouter = express.Router();

// Handle POST requests to /api/v1/users
userRouter.post('/',  createUser);

// Handle GET requests to /api/v1/questions/:userId
userRouter.get('/:userId', getUserById);

// Handle PUT requests to /api/v1/questions/:userId
userRouter.put('/:userId', updateUser);

// Handle DELETE requests to /api/v1/questions/:userId
userRouter.delete('/:userId', deleteUser);

// IRRELEVANT code that renders to the ejs views 
/* 
userRouter.get('/login', (req, res) => {
    res.render("login.ejs");
});

userRouter.get('/dashboard', (req, res) => {
    res.render("dashboard.ejs", { user: 'to leyi: u can write a getuser to get user name' }); 
}) 

userRouter.get('/register', (req, res) => {
    res.render("register.ejs");
})

userRouter.post('/register', registerUser); */ 

export default userRouter;


