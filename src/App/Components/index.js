import React from 'react';
import Login from './Login';
import {

  RouterProvider,
  createHashRouter
} from "react-router-dom";
import Welcome from './Welcome';
import Register from './Register';
import Dashboard from './Dashboard/Index';
import Programmes from './Programmes';
import Reset from './Reset';
import Verify from './Verify';
import Faq from './Faq';
import Receipt from './Receipt';
import Payments from './Payments';
import Exercise from './Exercise';
import Certificates from './Certificates';
import Profile from './Profile';
import Settings from './Settings';
import Activities from './Activities';

function Index({setDisplay}) {

const router=createHashRouter(
  [
    {path:'/', element:<Welcome/>},
    {path:'/refresh', element:<Welcome/>},
    {path:'/login', element:<Login setDisplay={setDisplay} />},
    {path:'/register', element:<Register/>},
    {path:'/dashboard', element:<Dashboard/>},
    {path:'/programmes', element:<Programmes/>},
    {path:'/reset', element:<Reset/>},
    {path:'/verify', element:<Verify/>},
    {path:'/faq', element:<Faq/>},
    {path:'/receipt', element:<Receipt/>},
    {path:'/payments', element:<Payments/>},
    {path:'/exercise', element:<Exercise/>},
    {path:'/certificates', element:<Certificates/>},
    {path:'/profile', element:<Profile/>},
    {path:'/settings', element:<Settings/>},
    {path:'/activities', element:<Activities/>},
    
  
  ]
  
  )

  return (
    <div>
<RouterProvider router={router}/>
    </div>
  )
}

export default Index
