import React, { useContext } from 'react';
import logo from '../../images/Logo.svg';
import './Header.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
 


const Header = () => {

    const {user, logOut} = useContext(AuthContext)
    // console.log(user);
    const handleSignOut = () => {
        logOut()
        .then(result => {})
        .catch(error => console.error(error))
    }
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">SignUP</Link>
                {
                    user && <span className='text-white'>{user.email} <button onClick={handleSignOut}>SignOut</button></span>
                }
            </div>
        </nav>
    );
};

export default Header;