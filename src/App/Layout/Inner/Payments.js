import React, { useContext, useEffect, useState } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars,  faBook, faBookOpen,  faDashboard, faGear,    faSearch, faUser, faPercent, faCertificate, faMoneyBill, faPhone, faPowerOff} from '@fortawesome/free-solid-svg-icons';

import GlobalContext from "../../Components/Context/Api";
import axios from 'axios';
import Navigation from '../../Components/Navigation';

function Payments() {
  const {user, host}=useContext(GlobalContext);
const [payments, setpayments] = useState([]);
useEffect(()=>{
axios.get(host+'payments/'+user.email).then((response)=>{
   setpayments(response.data.data)
})
}, [])
  return (
    <div>

<Navigation active={"Payments"}/>

  <main id="main" className="main" style={{backgroundColor:'#f6f9ff'}}>

    <div className="pagetitle">
      <h1>Payments</h1>
      <nav>
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="index.html">Home</a></li>
          <li className="breadcrumb-item active">Payments</li>
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
                  <h5 className="card-title">Your Payments <span>| History</span></h5>

                  <table className="table table-borderless datatable">
                    <thead>
                      <tr>
                        <th scope="col">Transaction ID</th>
                        
                        <th scope="col">Description</th>
                        <th scope="col">Amount(NGN)</th>
                        <th scope="col">Date</th>
                        <th scope="col">Status</th>
                 
                      </tr>
                    </thead>
                    <tbody>
                        {
                            payments.map((pay, key)=>{
                                return <tr key={key}>
                                <th scope="row">{pay.transaction_id}</th>
                                <td>{pay.description}</td>
                                <td>{pay.amount}</td>
                                <td>{new Date(pay.date_initiated).toLocaleDateString('en-US')}</td>
                                <td><span className="badge bg-success">{pay.status}</span></td>
                              </tr>
                            })
                        }
                      
                     
                    </tbody>
                  </table>

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

export default Payments
