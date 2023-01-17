import React, { useContext, useEffect, useState } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars, faCoins, faDashboard, faGear,faPhone, faPowerOff,  faUser } from '@fortawesome/free-solid-svg-icons';
import logo from '../Images/logo.png';
import pro from '../Images/user.png';
import lap from '../Images/images.jpeg';
import GlobalContext from './Context/Api';

import axios from 'axios';
import ProDetails from './ProDetails';

function Programmes() {
    const {user,  setpop, setloading,  host}=useContext(GlobalContext);



const [programmes, setprogrammes] = useState([]);

useEffect(()=>{
axios.get(host+'programmes').then((response)=>{

    setprogrammes(response.data.data)

  
})
}, [])





   
  return (
    <div>
    
  <header id="header" className="header fixed-top d-flex align-items-center">

    <div className="d-flex align-items-center justify-content-between">
      <a href="/#/" style={{textDecoration:'none'}} className="logo d-flex align-items-center">
      <img src={logo} alt=""/>
          <span className="d-none d-lg-block">Roi Study</span>
      </a>
      <FontAwesomeIcon icon={faBars} className="bi bi-list toggle-sidebar-btn"></FontAwesomeIcon>
    </div>
  
    <nav className="header-nav ms-auto">
      <ul className="d-flex align-items-center">





        <li className="nav-item dropdown pe-3">

          <a className="nav-link nav-profile d-flex align-items-center pe-0" href="/#/programmes" data-bs-toggle="dropdown" onClick={()=>{
            document.getElementById('profile').style.display='block'
          }}>
            <img src={pro} className="rounded-circle" alt=''/>
            <span className="d-none d-md-block dropdown-toggle ps-2"> {user.first_name} {user.surname}</span>
          </a>
          <ul  id='profile'  className="dropdown-menu ">
            <li className="dropdown-header">
              <h6>{user.first_name} {user.surname}</h6>
              <span>{user.email}</span>
            </li>
            <li>
             <hr className="dropdown-divider"/>
            </li>

            <li>
              <a className="dropdown-item d-flex align-items-center" href="/#/programmes">
                <FontAwesomeIcon icon={faUser} className="bi bi-person"></FontAwesomeIcon>
                <span>My Profile</span>
              </a>
            </li>
            <li>
             <hr className="dropdown-divider"/>
            </li>

            <li>
              <a className="dropdown-item d-flex align-items-center" href="/#/programmes">
                <FontAwesomeIcon icon={faGear} className="bi bi-gear"></FontAwesomeIcon>
                <span>Account Settings</span>
              </a>
            </li>
            <li>
             <hr className="dropdown-divider"/>
            </li>

            <li>
              <a className="dropdown-item d-flex align-items-center" href="/#/programmes">
                <FontAwesomeIcon icon={faPhone} className="bi bi-question-circle"></FontAwesomeIcon>
                <span>Need Help?</span>
              </a>
            </li>
            <li>
             <hr className="dropdown-divider"/>
            </li>

            <li>
              <a className="dropdown-item d-flex align-items-center" href="/#/login">
                <FontAwesomeIcon icon={faPowerOff} className="bi bi-box-arrow-right"></FontAwesomeIcon>
                <span>Sign Out</span>
              </a>
            </li>

          </ul>
        </li>

      </ul>
    </nav>
  </header>
  <aside id="sidebar" className="sidebar"  >

    <ul className="sidebar-nav" id="sidebar-nav">

      <li className="nav-item">
        <a className="nav-link " href="index.html">
          <span> <FontAwesomeIcon icon={faDashboard} className="bi bi-grid"></FontAwesomeIcon> Select Programme</span>
        </a>
      </li>
      
     

    </ul>

  </aside>

  <main id="main" className="main" style={{backgroundColor:'#f6f9ff'}} onClick={()=>{
            document.getElementById('profile').style.display='none'
          }}>

    <div className="pagetitle">
      <h1>Select A Programme</h1>
      <nav>
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="index.html">Home</a></li>
          <li className="breadcrumb-item active">Programmes</li>
        </ol>
      </nav>
    </div>

    <section className="section dashboard">
      <div className="row">

        
        <div className="col-lg-10">
          <div className="row">
{
  programmes.map((program)=>{
    return<>
       <div className="col-xxl-4 col-md-6">
              <div className="card info-card sales-card">

                <div className="filter">
                  <a className="icon" href="/#/login" data-bs-toggle="dropdown"><FontAwesomeIcon icon={faGear} className="bi bi-three-dots"></FontAwesomeIcon></a>
                  <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                    <li className="dropdown-header text-start">
                      <h6>Filter</h6>
                    </li>

                    <li><a className="dropdown-item" href="/#/login">Today</a></li>
                    <li><a className="dropdown-item" href="/#/login">This Month</a></li>
                    <li><a className="dropdown-item" href="/#/login">This Year</a></li>
                  </ul>
                </div>

                <div className="card-body">
                  <h5 className="card-title">{program.title} <span>| {program.qualification}</span></h5>
                 <div className='row'>
                  <div className='col-sm-5'>

                  </div>
                      <div className='col-sm-4'>

                  </div>
                      <div className='col-sm-3'>

                  </div>
                  </div>
                  <img alt='ProgrammeImage' src={lap} style={{width:'90%'}}/>
                  <div className="d-flex align-items-center">
                   
                    <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                      <FontAwesomeIcon icon={faCoins} ></FontAwesomeIcon>
                    </div>
                    <div className="ps-3">
                      <h6>NGN {program.fee}</h6>
                      <span className="text-success small pt-1 fw-bold">12%</span> <span className="text-muted small pt-2 ps-1">Discount</span>

                    </div>
                  </div>
                  <div style={{width:'100%', padding:'10px'}}>
                  <button style={{width:'95%'}} className='btn btn-primary' onClick={()=>{
                    setloading(true)

                    setpop({display:true, title:`${user.first_name} ${user.surname}  || ${program.title} | ${program.qualification}`, content:<ProDetails program={program}/>})

setTimeout(() => {
  setloading(false)
}, 300);
                  }}>
                    Choose Programme
                  </button>

                  </div>
                  <ul className='list-group'>
                    <li className='list-group-item'>
Web Basics
                    </li>


                    <li className='list-group-item'>
JavaScript Basics
                    </li>


                    <li className='list-group-item'>
Advance JavaScript
                    </li>


                    <li className='list-group-item'>
React JS
                    </li>



                    <li className='list-group-item'>
Redux & Redux Toolkit
                    </li>
                  </ul>
           
                  
                </div>

              </div>
            </div>

    </>
  })
}
          

            
            <div className="col-xxl-4 col-xl-12">

             

            </div>

            
           
    
          </div>
        </div>
         

      </div>
    </section>

  </main>
 
    </div>
  )
}

export default Programmes
