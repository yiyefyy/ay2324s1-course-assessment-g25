import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import './home';

import Layout from './layout'


export default function Login() {
    const [values, setValues] = useState({
        email: '',
        password: ''
    })
    const navigate = useRouter();

    const handleSubmit = (event) => {
        event.preventDefault();
        setValues();
        navigate.replace('/home')
    }

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
    }
    return (
        <Layout>
            <div className='loginPage'>
                <h1 className='logo'>Peerprep</h1>
                <div className='loginSection'>
                    <h1 className='loginText'> LOGIN</h1>
                    <form action="" onSubmit={handleSubmit}>
                        <div className='inputBox'>
                            <input type='email' name='email' placeholder='Email' onChange={handleInput} />
                        </div>
                        <div className='inputBox'>
                            <input type='password' name='password' placeholder='Password' onChange={handleInput} />
                        </div>
                        <button type='submit' className='loginButton'><Link href="/home">Login</Link></button>
                        <p></p>
                        <Link href="/signup" className='registerDirect'>New user? Create Account</Link>
                    </form>
                </div>
            </div>
        </Layout>
    )
}