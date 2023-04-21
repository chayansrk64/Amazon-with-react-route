import React from 'react';
import './Login.css'
import {Link} from 'react-router-dom';
const Login = () => {
    return (
        <div className='form-container'>
            <div className="form-title">
                <h3>Log In</h3>
            </div>
            <form>
               <div  className='form-control'>
                    <label htmlFor="">Email</label>
                    <input type="email" name="email" id="email" placeholder='Your Email' required />
               </div>
               <div  className='form-control'>
                    <label htmlFor="">Password</label>
                    <input type="password" name="password" id="password" placeholder='Your password' required />
               </div>
               <input className='btn-submit' type="submit" value="Log In" />
            </form>
            <p className='text-center'><small>New to Ema-John? <Link to="/signup"> Create New Account</Link> </small></p>
            {/* <p className='error-text'><small>{error}</small></p> */}
        </div>
    );
};

export default Login;