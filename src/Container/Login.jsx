import React from 'react'
import './Login.css'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [isSignedUp, setIsSignedUp] = useState(false);
    const [name,setName] = useState()
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        if (isSignedUp) {
            document.body.classList.add('signup');
        } else {
            document.body.classList.remove('signup');
        }
        return () => {
            document.body.classList.remove('signup');
        };
    }, [isSignedUp]);

    const handleSignupClick = (event) => {
        event.preventDefault();
        setIsSignedUp(true); 
    };

    const handleLoginClick = (event) => {
        event.preventDefault();
        setIsSignedUp(false); 
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/login', { email, password })
        .then(result => {
            console.log(result);
            if(result.data === "Success"){
                navigate('/dashboard');
            } else {
                // Handle login failure (e.g., alert the user)
                alert("Login failed: " + result.data);
            }
        })
        .catch(err => {
            console.log(err);
            alert("An error occurred during login.");
        });
    }
    
      
  return (
    <div className='body'>
    <div className='container'>
        <span></span>
        <span></span>
        <span></span>
        <form id='signinForm' onSubmit={handleSubmit}>
            <h2>Login</h2>
            <div className='inputBox'>
                <input type="text" placeholder='Username'/>

            </div>
            <div className='inputBox'>
                <input type="password" placeholder='Password' />
            </div>
            <div className="inputBox">
                <a href="">Forgot Password ?</a>
                <a href="" id='signup' onClick={handleSignupClick}>SignUp</a>
            </div>
            

            <div className='inputBox' style={{justifyContent:'center'}}>
            <div id='blue-btn'>
                <input type="submit" value="Sign In" l/>
            
            </div>
            </div>
        </form>
        <form id='signupForm'>
            <h2>Registration</h2>
            <div className='inputBox' >
                <input type="text" placeholder='Username'/>
            </div>
            <div className='inputBox'>
                <input type="password" placeholder='Email Address' />
            </div>
            <div className='inputBox'>
                <input type="password" placeholder='Create Password' />
            </div>
            <div className='inputBox'>
                <input type="password" placeholder='Confirm Password' />
            </div>
            <div className='inputBox'>
                <input type="submit" value="Register Account" />
            </div>
            <div className="inputBox group">
                <a href="#" onClick={handleLoginClick}>Already Have an Account ? <b id='singin'>Login</b></a>
            </div>
        </form>

    </div>
    </div>
  )
}

export default Login