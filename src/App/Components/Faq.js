
import React, { useContext, useState } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope, faKey, faLock, faLockOpen, faUserEdit} from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';
import logo from '../Images/logo.png';

import GlobalContext from './Context/Api';
import axios from 'axios';


function Faq() {
    const [email, setemail]= useState('');
    const {setloading, setDisplay, setmsg, setstatus,  setuser}=useContext(GlobalContext);
    let navigate=useNavigate();


const faq=()=>{
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
        <h1>Frequently Asked Questions</h1>
        
      </div>
      <section className="section">
        <div className="row">
          <div className="col-lg-7">
  
            <div className="card">
              <div className="card-body">
                
    

              

      
              
               
              </div>
            </div>
  
          </div>
  
        
        </div>
      </section>
  
    </main>


    </div>
  )
}

export default Faq
