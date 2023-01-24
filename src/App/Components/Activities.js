import React, { useContext, useEffect, useState } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars,  faBook, faBookOpen,  faDashboard, faGear,    faSearch, faUser, faPercent, faCertificate, faMoneyBill, faPhone, faPowerOff, faArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons';
import logo from '../Images/logo.png';
import pro from '../Images/user.png';
import GlobalContext from './Context/Api';
import axios from 'axios';

function Activities() {
  const {user, host}=useContext(GlobalContext);
const [payments, setpayments] = useState([]);
useEffect(()=>{
axios.get(host+'payments/'+user.email).then((response)=>{
   setpayments(response.data.data)
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
    <div className="search-bar">
      <form className="search-form d-flex align-items-center" method="POST" action="/#/login">
        <input type="text" name="query" placeholder="Search" title="Enter search keyword"/>
        <button type="submit" title="Search"><FontAwesomeIcon icon={faSearch} className="bi bi-search"></FontAwesomeIcon></button>
      </form>
    </div>
    <nav className="header-nav ms-auto">
      <ul className="d-flex align-items-center">





        <li className="nav-item dropdown pe-3">

          <a className="nav-link nav-profile d-flex align-items-center pe-0" href="/#/payments" data-bs-toggle="dropdown" onClick={()=>{
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
  <aside id="sidebar" className="sidebar">

    <ul className="sidebar-nav" id="sidebar-nav">

      <li className="nav-item ">
        <a className="nav-link collapsed" href="/#/dashboard">
          <span> <FontAwesomeIcon icon={faDashboard} className="bi bi-grid"></FontAwesomeIcon> Dashboard</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link " data-bs-target="#components-nav" data-bs-toggle="collapse" href="/#/activities">
          <span><FontAwesomeIcon icon={faBook} className="bi bi-menu-button-wide"></FontAwesomeIcon> My Programme</span>
        </a>
       </li>
      <li className="nav-item">
        <a className="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" href="/#/exercise">
           <span><FontAwesomeIcon icon={faBookOpen} className="bi bi-journal-text"></FontAwesomeIcon> Exercise</span>
        </a>
         </li>

         <li className="nav-item">
        <a className="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" href="/#/certificates">
           <span><FontAwesomeIcon icon={faCertificate} className="bi bi-journal-text"></FontAwesomeIcon> Certificates</span>
        </a>
         </li>
      

         <li className="nav-item">
        <a className="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" href="/#/payments">
           <span><FontAwesomeIcon icon={faMoneyBill} className="bi bi-journal-text"></FontAwesomeIcon> Payments</span>
        </a>
         </li>


      <li className="nav-item">
        <a className="nav-link collapsed" href="/#/profile">
          <FontAwesomeIcon icon={faUser} className="bi bi-person"></FontAwesomeIcon> Profile
        </a>
      </li>

      <li className="nav-item">
        <a className="nav-link collapsed" href="/#/settings">
          <FontAwesomeIcon icon={faGear} className="bi bi-question-circle"></FontAwesomeIcon> <span> Settings</span>
        </a>
      </li>

     

    </ul>

  </aside>

  <main id="main" className="main" style={{backgroundColor:'#f6f9ff'}}>

  <div className="pagetitle">
      <h1>Programme Activities</h1>
      <nav>
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="index.html">Home</a></li>
       
          <li className="breadcrumb-item active">Programme</li>
        </ol>
      </nav>
    </div>

    <section className="section">
      <div className="row">
        

      <div class="card">
            <div class="card-body">
              <h5 class="card-title">Carousel with fade transition</h5>
              <p>Add <code>.carousel-fade</code> to your carousel to animate slides with a fade transition instead of a slide.</p>

              <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                  <video controls width={'100%'}>
    <source src=''>
    </source>

</video>
                  </div>
                 
                </div>

                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>

              </div>
            </div>
            <div style={{width:'100%', marginBottom:'20px'}}>
            <button className='btn '><FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon> Previous</button>
<button className='btn'>  Next <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button>
          </div>
            </div>
        


        <div className="col-lg-12">


          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Description</h5>

              

            </div>
          </div>

        </div>
      </div>
    </section>


  </main>
 
    </div>
  )
}

export default Activities
