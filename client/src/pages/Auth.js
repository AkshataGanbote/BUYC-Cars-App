import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useCookies } from "react-cookie";

const Auth = () => {
    return (
        <div className="auth">
          <Login />
          <Register />
        </div>
    )
}

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // Handle Cookies
    const [_, setCookies] = useCookies(["access_token"])

    const navigate = useNavigate();

    const onSubmit = async (event) => {
        event.preventDefault();
        try{
            const response = await axios.post('http://localhost:3002/auth/register', {username, password});

            setCookies("access_token", response.data.token);
            window.localStorage.setItem("userID", response.data.userID);
            navigate("/");
        }
        catch(err){
            console.error(err);
        }
    }

    return (
        <Form 
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
            label = 'Login' //For Changing text of h2 & button
            onSubmit={onSubmit}
        />
    )
}

const Register  = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const onSubmit = async (event) => {
        event.preventDefault();
        try{
            await axios.post('http://localhost:3002/auth/register', {username, password});

            alert('Registered Successfully!')
        }
        catch(err){
            console.error(err);
        }
    }

    return (
        <Form
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
            label = 'Register'
            onSubmit={onSubmit}
        />
    )
}

const Form = ({
    username, 
    setUsername, 
    password, 
    setPassword, 
    label, 
    onSubmit
}) =>{

    return (
        <div className='authContainer'>
            <form onSubmit={onSubmit}>
                <h2>{label}</h2>
                <div className="formGroup">
                    <lable htmlFor='username'>
                        <strong >Name</strong>
                    </lable>
                    <input 
                        type='text'
                        id='username'
                        onChange={(event)=> setUsername(event.target.value)}
                        value={username}
                        placeholder='Enter Username'
                        required
                    />
                </div>
                <div className="formGroup">
                    <lable htmlFor='password'>
                        <strong >Password</strong>
                    </lable>
                    <input 
                        type='password'
                        id='password'
                        value={password}
                        onChange={(event)=> setPassword(event.target.value)}
                        placeholder="Enter Password"
                        required
                    />
                </div>
                <button type="submit">{label}</button>
            </form>
        </div>
    )

}

export default Auth