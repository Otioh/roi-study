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
    
  
  ]
  
  )

  return (
    <div>
<RouterProvider router={router}/>
    </div>
  )
}

export default Index
