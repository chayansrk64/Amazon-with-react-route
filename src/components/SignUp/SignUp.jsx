import React, { useState } from 'react';
import {Link} from 'react-router-dom';

const SignUp = () => {
    const [error, setError] = useState('');


    const handleSignUp = event => {

        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email, password, confirm);

        if(password !== confirm){
            setError('Password did not match!!!')
            return
        }
        else if(password.length < 6){
            setError('Password must be 6 charecter')
            return
        }

    }
    return (
        <div className='form-container'>
            <div className="form-title">
                <h3>Sign Up</h3>
            </div>
            <form onSubmit={handleSignUp}>
               <div  className='form-control'>
                    <label htmlFor="">Email</label>
                    <input type="email" name="email"  placeholder='Your Email' required />
               </div>
               <div  className='form-control'>
                    <label htmlFor="">Password</label>
                    <input type="password" name="password"  placeholder='Your password' required />
               </div>
               <div  className='form-control'>
                    <label htmlFor="">Confirm Password</label>
                    <input type="password" name="confirm" placeholder='Confirm password' required />
               </div>
               <input className='btn-submit' type="submit" value="Sign Up" />
            </form>
            <p  className='text-center'><small>Already have an account? <Link to="/login">Log In</Link> </small></p>
            <p className='error-text'><small>{error}</small></p>
        </div>
    );
};

export default SignUp;