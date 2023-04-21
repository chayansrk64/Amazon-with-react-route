import React, { useContext } from 'react';
import logo from '../../images/Logo.svg';
import './Header.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
 


const Header = () => {

    const {user} = useContext(AuthContext)
    console.log(user);
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
                    user && <span>{user.name}</span>
                }
            </div>
        </nav>
    );
};

export default Header;