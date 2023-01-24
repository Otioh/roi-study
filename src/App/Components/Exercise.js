import React, { useContext, useEffect, useState } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars,  faBook, faBookOpen,  faDashboard, faGear,    faSearch, faUser, faCircle, faCertificate, faMoneyBill, faPhone, faPowerOff, faCheck, faTimes} from '@fortawesome/free-solid-svg-icons';
import logo from '../Images/logo.png';
import pro from '../Images/user.png';
import GlobalContext from './Context/Api';
import axios from 'axios';

function Exercise() {
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
        <a className="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="/#/activities">
          <span><FontAwesomeIcon icon={faBook} className="bi bi-menu-button-wide"></FontAwesomeIcon> My Programme</span>
        </a>
       </li>
      <li className="nav-item">
        <a className="nav-link " data-bs-target="#forms-nav" data-bs-toggle="collapse" href="/#/exercise">
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
      <h1>Exercise</h1>
      <nav>
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="index.html">Home</a></li>
       
          <li className="breadcrumb-item active">Exercises</li>
        </ol>
      </nav>
    </div>

    <section className="section">
      <div className="row">
        <div className="col-lg-7">

          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Default</h5>

              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Class</th>
                    <th scope="col">Heading</th>
                    <th scope="col">Heading</th>
                    <th scope="col">Remark</th>
                  </tr>
                </thead>
                <tbody>
          

                  <tr >
                    <th scope="row">Primary</th>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td className='text-success'>
                      <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                    </td>
                  </tr>
                  <tr >
                    <th scope="row">Secondary</th>
                    <td>Cell</td>
                    <td>Cell</td>
                       <td className='text-success'>
                      <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                    </td>
                  </tr>
                  <tr >
                    <th scope="row">Success</th>
                    <td>Cell</td>
                    <td>Cell</td>
                       <td className='text-success'>
                      <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                    </td>
                  </tr>
                  <tr >
                    <th scope="row">Danger</th>
                    <td>Cell</td>
                    <td>Cell</td>
                       <td className='text-info'>
                      <FontAwesomeIcon icon={faCircle}></FontAwesomeIcon>
                    </td>
                  </tr>
                  <tr >
                    <th scope="row">Warning</th>
                    <td>Cell</td>
                    <td>Cell</td>
                       <td className='text-secondary'>
                      <FontAwesomeIcon icon={faCircle}></FontAwesomeIcon>
                    </td>
                  </tr>
                  <tr >
                    <th scope="row">Info</th>
                    <td>Cell</td>
                    <td>Cell</td>
                       <td className='text-secondary'>
                      <FontAwesomeIcon icon={faCircle}></FontAwesomeIcon>
                    </td>
                  </tr>
                  <tr >
                    <th scope="row">Light</th>
                    <td>Cell</td>
                    <td>Cell</td>
                       <td className='text-secondary'>
                      <FontAwesomeIcon icon={faCircle}></FontAwesomeIcon>
                    </td>
                  </tr>
                  <tr >
                    <th scope="row">Dark</th>
                    <td>Cell</td>
                    <td>Cell</td>
                       <td className='text-secondary'>
                      <FontAwesomeIcon icon={faCircle}></FontAwesomeIcon>
                    </td>
                  </tr>
                </tbody>
              </table>
             

            </div>
          </div>



        </div>

        <div className="col-lg-5">

          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Exercise Instructions</h5>
              <p>We only set a height value on the .progress, so if you change that value the inner .progress-bar will automatically resize accordingl</p>

              
              <div className="progress" style={{height:' 10px'}}>
                <div className="progress-bar" role="progressbar" style={{width: '50%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <div className="progress mt-3" style={{height:' 15px'}}>
                <div className="progress-bar" role="progressbar" style={{width: '50%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <div className="progress mt-3" style={{height:' 20px'}}>
                <div className="progress-bar" role="progressbar" style={{width: '50%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <div className="progress mt-3" style={{height:' 25px'}}>
                <div className="progress-bar" role="progressbar" style={{width: '50%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
              </div>


<div className='card-footer'>
  <input placeholder='Github Link' className='form-control' />
<button className='btn btn-primary'>
  Submit
</button>
<br/>
<br/>
<span className='badge bg-info'> Feedback</span>
</div>

            </div>
          </div>

 


        </div>
      </div>
    </section>


  </main>
 
    </div>
  )
}

export default Exercise
