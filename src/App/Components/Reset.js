
import React, { useContext, useState } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope, faKey, faLock, faLockOpen, faUserEdit} from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';
import logo from '../Images/logo.png';

import GlobalContext from './Context/Api';
import axios from 'axios';


function Reset() {
    const [email, setemail]= useState('');
    const {setloading, setDisplay, setmsg, setstatus,  setuser}=useContext(GlobalContext);
    let navigate=useNavigate();
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
        <h1>Reset Password</h1>
        
      </div>
      <section className="section">
        <div className="row">
          <div className="col-lg-7">
  
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Enter Details to Recover Password</h5>
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
                 
                  <div className="col-sm-10">
                    <button type="submit" className="btn btn-primary" onClick={()=>{
            
                    }}> <FontAwesomeIcon icon={faKey}></FontAwesomeIcon> Reset</button>
            
                
                  </div>
                </div>


      
                <button style={{float:'right'}} type="submit" className="btn btn-outline-primary" onClick={()=>{
   navigate('/login')
                }}> <FontAwesomeIcon icon={faLock}></FontAwesomeIcon> Login</button>
               
              </div>
            </div>
  
          </div>
  
        
        </div>
      </section>
  
    </main>


    </div>
  )
}

export default Reset
