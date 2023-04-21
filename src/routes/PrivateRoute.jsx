/**
 * 1. privateRoute needs a children;
 * 2. pass the children with conditions
 * 3. wrap a component into PrivateRoute component
 * 
*/

import React, { useContext } from 'react';
import {Navigate, useLocation} from 'react-router-dom';
import { AuthContext } from '../components/Providers/AuthProvider';

const PrivateRoute = ({children}) => {

    const location = useLocation();
    console.log(location);

    const {user, loading} = useContext(AuthContext);

    if(loading){
        return <div>Loading...</div>
    }
    if(user){
        return children;  // If user is exist then go to the route.
    }
    return <Navigate to="/login" state={{from: location}} replace ></Navigate>;
};

export default PrivateRoute;