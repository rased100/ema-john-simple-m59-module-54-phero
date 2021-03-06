import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const { signInUsingGoogle } = useAuth();

    return (
        <div className="login-form">
            <div>
                <h2>Login</h2>
                <form>
                    <input type="email" name="" id="" placeholder="Your Email" /><br />
                    <input type="password" name="" id="" placeholder="enter password" />
                    <input type="submit" value="Submit" />
                    <p>New to ema-john?<Link to="/register">Create Account</Link></p>
                    <div>---------or----------</div><br />
                    <button
                        className="btn-regular"
                        onClick={signInUsingGoogle}
                    >Google Sign In</button>
                </form>
            </div>
        </div>
    );
};

export default Login;