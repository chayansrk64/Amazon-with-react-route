import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';
import Orders from './components/Orders/Orders';
import Inventory from './components/inventory/inventory';
import Login from './components/Login/Login';
import cartProductsLoader from './loaders/cartProductsLoader';
import CheckOut from './components/CheckOut/CheckOut';
import SignUp from './components/SignUp/SignUp';
import AuthProvider from './components/Providers/AuthProvider';
import PrivateRoute from './routes/PrivateRoute';
 
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <Shop></Shop>
      },
      // {
      //   path: 'orders',
      //   element: <Orders></Orders>,
      //   loader: () => fetch('products.json')
      // }, 
      {
        path: '/orders',
        element: <Orders></Orders>,
        loader: cartProductsLoader
      }, 
      {
        path: '/inventory',
        element: <Inventory></Inventory>
      },
      {
        path:'/checkout',
        element: <PrivateRoute> <CheckOut></CheckOut> </PrivateRoute>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
    <AuthProvider>
        <RouterProvider router={router} />
    </AuthProvider>
   
  </React.StrictMode>,
)
