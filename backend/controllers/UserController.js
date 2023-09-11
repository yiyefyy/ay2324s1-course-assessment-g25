/**
 * User Controller
 * 
 * This file contains the controller for the User API endpoints.
 * 
 * @module backend/controllers/UserController
 * 
 * @requires backend/data-sources/cloudSQL/Model/UserModel
 */

import sqlConnection from '../data-sources/cloudSQL/connection.js';

const pool = sqlConnection;

pool.connect();

export const registerUser = async (req, res) => {
    let { name, email, password, password2 } = req.body;
    console.log({
        name, email, password, password2
    });
    let errors = [];
    pool.query(
        'SELECT * from public."User" WHERE email = $1', [email], (err, results) => {
            if (!err) {
                console.log(results.rows);
            }
            if (results.rows != 0) {
                errors.push({message: "email already registered"});
                res.render('register.ejs', {errors});
                res.end();
            } else {
                pool.query('INSERT INTO public."User"(name, email, password) VALUES ($1, $2, $3) RETURNING id, password', [name, email, password], (err, results) => {
                    if (!err) {
                        console.log(results.rows);
                        errors.push({message: "Registered successfully, please login"});
                        res.render('login.ejs', {errors});
                        res.end();
                    }
                })
            }
        }
    );
    pool.end;
}