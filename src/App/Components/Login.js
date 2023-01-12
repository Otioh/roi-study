import React, { useContext, useState } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope, faKey, faLockOpen, faUserEdit} from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';
import logo from '../Images/logo.png';

import GlobalContext from './Context/Api';
import axios from 'axios';



function Login() {
  let navigate=useNavigate();
 const [email, setemail]= useState('');
 const [password, setpassword]=useState('');
const {setloading, setDisplay, setmsg, setstatus,  setuser}=useContext(GlobalContext);

  const login=()=>{
    setloading(true)
    axios.post('http://localhost:8000/auth', {email,  password}).then((response)=>{
      setDisplay(true)
      setmsg(response.data.message)
      setloading(false)
if(response.data.status){

  setstatus(true)
setuser(response.data.data)
  navigate('/programmes');
}else{
  setstatus(false)
}
    })
  }


  return (
<div style={{backgroundColor:'#f6f9ff', height:'90vh'}}>
    <header id="header" className="header fixed-top d-flex align-items-center">
  
      <div className="d-flex align-items-center justify-content-between">
        <a href="/#/" style={{textDecoration:'none'}} className="logo d-flex align-items-center">
          <img src={logo} alt=""/>
          <span className="d-none d-lg-block">Roi Study</span>
        </a>
        <i className="bi bi-list toggle-sidebar-btn"></i>
      </div>
  
     
  
    </header>

    <main id="main" className="main" >

      <div className="pagetitle">
        <h1>Login to Dashboard</h1>
        
      </div>
      <section className="section">
        <div className="row">
          <div className="col-lg-7">
  
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Enter Details to Login</h5>
      <div className="row mb-3">
                    <label for="inputEmail" className="col-sm-2 col-form-label">
                      <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                      </label>
                    <div className="col-sm-10">
                      <input type="email" className="form-control" placeholder='E-Mail' value={email} onChange={(e)=>{
                          setemail(e.target.value);
                    
                      }} />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label for="inputPassword" className="col-sm-2 col-form-label">
                      <FontAwesomeIcon icon={faKey}></FontAwesomeIcon>
                    </label>
                    <div className="col-sm-10">
                      <input type="password" className="form-control" placeholder='Password' value={password} onChange={(e)=>{
                          setpassword(e.target.value);
                    
                      }} />
                    </div>
                  </div>

                  
                <div className="row mb-3">
                 
                  <div className="col-sm-10">
                    <button type="submit" className="btn btn-primary" onClick={()=>{
                  login()
                    }}> <FontAwesomeIcon icon={faLockOpen}></FontAwesomeIcon> Login</button>
                    <br/>
                    <a href='/#/reset'  className=" btn-outline-primary">Forgotten Password?</a>
                
                  </div>
                </div>


      
                <button style={{float:'right'}} type="submit" className="btn btn-outline-primary" onClick={()=>{
   navigate('/register')
                }}> <FontAwesomeIcon icon={faUserEdit}></FontAwesomeIcon> Register</button>
               
              </div>
            </div>
  
          </div>
  
        
        </div>
      </section>
  
    </main>

    </div>
  )
}

export default Login
