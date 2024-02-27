import React, { useState, useEffect } from 'react';
import './SignUp.css';
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const [isSignedUp, setIsSignedUp] = useState(true);
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
        e.preventDefault()
        axios.post('http://localhost:3001/register',{name, email, password})
        .then(result => {console.log(result)
        navigate('/signin')
        })
        .catch(err=> console.log(err))
    }


    return (
        <div className='body'>
            <div className='container'>
                <span></span>
                <span></span>
                <span></span>
                <form id='signinForm' style={{left: isSignedUp ? '-100%' : '0'}}>
                    <h2>Login</h2>
                    <div className='inputBox'>
                        <input type="text" placeholder='Username' />
                    </div>
                    <div className='inputBox'>
                        <input type="password" placeholder='Password' />
                    </div>
                    <div className="inputBox">
                        <a href="#">Forgot Password ?</a>
                        <a href="#" onClick={handleSignupClick}>SignUp</a>
                    </div>
                    <div className='inputBox'>
                        <input type="submit" value="Sign In" />
                    </div>
                </form>
                <form id='signupForm' style={{left: isSignedUp ? '0' : '100%'}} onSubmit={handleSubmit}>
                    <h2>Registration</h2>
                    <div className='inputBox'>
                        <input type="text" placeholder='Username' onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div className='inputBox'>
                        <input type="email" placeholder='Email Address' onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className='inputBox'>
                        <input type="password" placeholder='Create Password' />
                    </div>
                    <div className='inputBox'>
                        <input type="password" placeholder='Confirm Password' onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <div className='inputBox'>
                        <input type="submit" value="Register Account" />
                    </div>
                    <div className="inputBox group">
                        <a href="#" onClick={handleLoginClick}>Already Have an Account ? <b>Login</b></a>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignUp;
