import React, { useContext, useEffect, useState } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars,  faBook, faBookOpen,  faDashboard, faGear,    faSearch, faUser, faCircle, faCertificate, faMoneyBill, faPhone, faPowerOff, faCheck, faTimes} from '@fortawesome/free-solid-svg-icons';

import GlobalContext from "../../Components/Context/Api";
import axios from 'axios';
import Navigation from '../../Components/Navigation';

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
    
 <Navigation active={"Exercise"}/>

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
