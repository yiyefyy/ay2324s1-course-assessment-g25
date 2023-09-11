import express from 'express';
import {registerUser} from '../../controllers/UserController.js';


const userModel = express.Router();

userModel.get('/login', (req, res) => {
    res.render("login.ejs");
});

userModel.get('/dashboard', (req, res) => {
    res.render("dashboard.ejs", { user: '/*to leyi: u can write a getuser to get user name*/' });
})

userModel.get('/register', (req, res) => {
    res.render("register.ejs");
})

userModel.post('/register', registerUser);

export default userModel;


