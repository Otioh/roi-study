
import React, { useContext, useState } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowAltCircleRight, faCheck, faEnvelope, faKey, faLock, faLockOpen, faUserEdit} from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';
import logo from '../Images/logo.png';

import GlobalContext from './Context/Api';
import axios from 'axios';


function Verify() {
    const [email, setemail]= useState('');
    const {user, setmsg, setstatus, setDisplay}=useContext(GlobalContext);
    let navigate=useNavigate();


    const verify=()=>{
        setmsg('Please try again later');
        setstatus(false);
        setDisplay(true)
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
        <h1>Verify Account</h1>
        
      </div>
      <section className="section">
        <div className="row">
          <div className="col-lg-7">
  
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Enter Verification code sent to <strong>{user.email}</strong></h5>
      <div className="row mb-3">
                    <label for="inputEmail" className="col-sm-2 col-form-label">
                      <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                      </label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control" placeholder='Code' value={email} onChange={(e)=>{
                          setemail(e.target.value);
                    
                      }} />
                    </div>
                  </div>
    

                  
                <div className="row mb-3">
                 
                  <div className="col-sm-10">
                    <button type="submit" className="btn btn-primary" onClick={()=>{
            verify()
                    }}> <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon> Verify</button>
            
                
                  </div>
                </div>


      
                <button style={{float:'right'}} type="submit" className="btn btn-outline-primary" onClick={()=>{
   navigate('/programmes')
                }}> <FontAwesomeIcon icon={faArrowAltCircleRight}></FontAwesomeIcon> Skip</button>
               
              </div>
            </div>
  
          </div>
  
        
        </div>
      </section>
  
    </main>


    </div>
  )
}

export default Verify
