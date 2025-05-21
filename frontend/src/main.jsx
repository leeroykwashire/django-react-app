import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import HomePage from './components/HomePage';
import NotFoundPage from './components/NotFound';
import Customers from './components/Customers';
import CustomerProfile from './components/CustomerProfile';
import CreateCustomer from './components/CreateCustomer';
import SideNav from './components/SideNav';

const router = createBrowserRouter([
  {
    path: '/',
    element: <SideNav/>,
    errorElement: <NotFoundPage/>,
    children:[
      {
        index: true,
        element: <HomePage />
      },
      {
        path: '/customers',
        element: <Customers/>
      },
      {
        path: '/customers/:customerId',
        element: <CustomerProfile/>
      },
      {
        path: '/customers/create',
        element: <CreateCustomer/>
      }
    ]
  },

  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
