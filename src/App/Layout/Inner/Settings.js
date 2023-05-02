import React, { useContext, useEffect, useState } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars,  faBook, faBookOpen,  faDashboard, faGear,    faSearch, faUser, faPercent, faCertificate, faMoneyBill, faPhone, faPowerOff} from '@fortawesome/free-solid-svg-icons';

import GlobalContext from "../../Components/Context/Api";
import axios from 'axios';
import Navigation from '../../Components/Navigation';

function Settings() {
  const {user, host}=useContext(GlobalContext);
const [payments, setpayments] = useState([]);
useEffect(()=>{
axios.get(host+'payments/'+user.email).then((response)=>{
   setpayments(response.data.data)
})
}, [])
  return (
    <div>
    <Navigation/>

  <main id="main" className="main" style={{backgroundColor:'#f6f9ff'}}>

    <div className="pagetitle">
      <h1>Settings</h1>
      <nav>
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="index.html">Home</a></li>
          <li className="breadcrumb-item active">Settings</li>
        </ol>
      </nav>
    </div>

    <section className="section dashboard">
      <div className="row">

        
        <div className="col-lg-8">
          <div className="row">

         
                <div className="col-12">
              <div className="card recent-sales overflow-auto">

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
                <form>

<div class="row mb-3">
  <label for="fullName" class="col-md-4 col-lg-3 col-form-label">Email Notifications</label>
  <div class="col-md-8 col-lg-9">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="changesMade" checked/>
      <label class="form-check-label" for="changesMade">
        Changes made to your account
      </label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="newProducts" checked/>
      <label class="form-check-label" for="newProducts">
        Information on new products and services
      </label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="proOffers"/>
      <label class="form-check-label" for="proOffers">
        Marketing and promo offers
      </label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="securityNotify" checked disabled/>
      <label class="form-check-label" for="securityNotify">
        Security alerts
      </label>
    </div>
  </div>
</div>

<div class="text-center">
  <button type="submit" class="btn btn-primary">Save Changes</button>
</div>
</form>

                </div>

              </div>
            </div>
         
          </div>
        </div>
              <div className="col-lg-4">

          {/* <!-- Recent Activity --> */}
          <div className="card">
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
              <h5 className="card-title">Recent Activity <span>| Today</span></h5>

              <div className="activity">

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

export default Settings
