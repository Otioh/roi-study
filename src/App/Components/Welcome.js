import { faDashboard, faLockOpen, faUserLock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../Images/logo.png';
function Welcome() {
let navigate =useNavigate();

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
        <h1>Welcome to Roi Study  Dashboard</h1>
        
      </div>
      <section className="section">
        <div className="row">
          <div className="col-lg-7">
  
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Pick an action</h5>
                <ul className='list-group'>
                    <li className='list-group-item '>
                    <a href='/#/login'> <FontAwesomeIcon icon={faLockOpen}></FontAwesomeIcon> Login</a>

                    </li>
                    <li className='list-group-item '>
                    <a href='/#/register'> <FontAwesomeIcon icon={faUserLock}></FontAwesomeIcon> Register</a>

</li>
                                  

                        <li className='list-group-item '>
                        <a href='/#/faq'> <FontAwesomeIcon icon={faLockOpen}></FontAwesomeIcon> FAQ</a>

                            </li>
                </ul>
              </div>
            </div>
  
          </div>
  
        
        </div>
      </section>
  
    </main>

    </div>

  )
}

export default Welcome
