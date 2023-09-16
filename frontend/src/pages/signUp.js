import React, { useState } from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';
import axios from 'axios';
import './login';

import Layout from './layout'


function SignUp() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [errors, setErrors] = useState({})

    const navigate = useRouter();

    const handleSubmit = (event) => {
        event.preventDefault();
        if (password !== password2) {
            setErrors('password does not match')
        }
        /*
        if (email !== null && name !== null && password !== null && password2 !== null){
            axios.post('http://localhost:3001/api/v1/users/', JSON.stringify({name, email, password, password2})).then(
                navigate.replace('/login')
            ).catch (
            error => console.log(error)
        )} else {
            console.log("fill in all fields")
        }*/
        navigate.replace('/login')
    }


    return (
        <Layout>
            <div className='loginPage'>
                <h1 className='signupHeader'>Welcome To Peerprep</h1>
                <div className='loginSection'>
                    <h1 className='loginText'> SIGNUP</h1>
                    <form action="" onSubmit={handleSubmit}>
                        <div className='inputBox'>
                            <input type='name' name='name' placeholder='Username' onChange={(event) => setName(event.target.value)} />
                        </div>
                        <div className='inputBox'>
                            <input type='email' name='email' placeholder='Email' onChange={(event) => setEmail(event.target.value)} />

                        </div>
                        <div className='inputBox'>
                            <input type='password' name='password' placeholder='Password' onChange={(event) => setPassword(event.target.value)} />

                        </div>
                        <div className='inputBox'>
                            <input type='password' name='password2' placeholder='Confirm Password' onChange={(event) => setPassword2(event.target.value)} />
                        </div>
                        <button type='submit' className='loginButton'>Signup</button>
                        <p></p>
                        <Link href="/login" className='registerDirect'>Existing user? Login here!</Link>
                    </form>
                </div>
            </div>
        </Layout>
    )
}

export default SignUp