import React, { useState } from "react";
import { Link } from "react-router-dom";
import bg1 from '../images/bg1.webp'; 
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        axios.post('http://localhost:8081/login', { email, password })
            .then((response) => {
                console.log(response.data); // Handle success response
            })
            .catch((error) => {
                console.error('There was an error logging in!', error);
            });
    }

    return (
        <div className='relative h-screen flex items-center justify-center'>
            <div className='absolute inset-0'>
                <img src={bg1} alt='Background' className='w-full h-full object-cover' />
            </div>
            <div className='relative z-10 w-full max-w-md p-8 bg-slate-50 bg-opacity-70 rounded-2xl shadow-lg'>
                <form onSubmit={handleSubmit}>
                    <h1 className="mb-6 text-center font-semibold text-3xl text-purple-900">Login</h1>
                    <label className="block mb-2 text-purple-900" htmlFor="email">Email</label>
                    <input
                        id="email"
                        className="mb-4 p-2 w-full border border-gray-300 rounded-md"
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    
                    <label className="block mb-2 text-purple-900" htmlFor="password">Password</label>
                    <input
                        id="password"
                        className="mb-6 p-2 w-full border border-gray-300 rounded-md"
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    
                    <button type="submit" className='w-full py-2 bg-purple-900 text-white font-semibold rounded-md hover:bg-purple-700'>
                        Login
                    </button>
                </form>
            </div>
        </div>   
    );
}

export default Login;
