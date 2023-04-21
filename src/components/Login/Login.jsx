import { useContext, useState } from 'react';
import './Login.css'
import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import {useLocation} from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
const Login = () => {

    const [showPassword, setShowPassWord] = useState(false);
    const {logInUser} = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location);

    const from = location.state?.from?.pathname || "/" ;

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        logInUser(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            form.reset();
            navigate(from, {replace:true})
        })
        .catch(error => {
            console.log(error);
        })
    }
    return (
        <div className='form-container'>
            <div className="form-title">
                <h3>Log In</h3>
            </div>
            <form onSubmit={handleSubmit}>
               <div  className='form-control'>
                    <label htmlFor="">Email</label>
                    <input type="email" name="email" id="email" placeholder='Your Email' required />
               </div>
               <div  className='form-control'>
                    <label htmlFor="">Password</label>
                    <input type={showPassword ? 'text' : 'password'} name="password" id="password" placeholder='Your password' required />
                    <p onClick={()=> setShowPassWord(!showPassword)}> <small>
                        {
                            showPassword ? <span>Hide Password</span> : <span>Show Password</span>
                        }
                        
                        </small> </p>
               </div>
               <input className='btn-submit' type="submit" value="Log In" />
            </form>
            <p className='text-center'><small>New to Ema-John? <Link to="/signup"> Create New Account</Link> </small></p>
            {/* <p className='error-text'><small>{error}</small></p> */}
        </div>
    );
};

export default Login;